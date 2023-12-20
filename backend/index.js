const express = require("express");
const cors = require("cors");
const session = require("express-session");
const Sequelize = require("sequelize");
const { where } = require("sequelize");
const { Session } = require("./models/index.js");
const { Server } = require("socket.io");
const mqtt = require("mqtt");
const geolib = require("geolib");

const authRouter = require("./routes/AuthRoutes.js");
const userRouter = require("./routes/UserRoutes.js");
const deviceRouter = require("./routes/DeviceRoutes.js");
const coordinateRouter = require("./routes/CoordinateRoutes.js");
const notificationRouter = require("./routes/NotificationRoutes.js");
const reviewRouter = require("./routes/ReviewRoutes.js");

const { Review, User, Device, Coordinate, Notification } = require("./models");
const { verifyUser } = require("./middleware/AuthUser");

const app = express();
const server = require("http").createServer(app);

// session db
const db = new Sequelize("ditag", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

var sessionStore = require("connect-session-sequelize")(session.Store);

const store = new sessionStore({
  db: db,
});

// migrate session db
// store.sync();

// cors
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

// use session
app.use(
  session({
    secret: "ditag-solusi-kehilangan-barang",
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
      secure: "auto",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    },
  })
);

// socket
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  console.log("Connection on: " + socket.id);
});

// MQTT
const protocol = "mqtt";
const host = "broker.emqx.io";
const port = "1883";
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`;
const topic = "DiTagCommunicationProtocolMQTTBuzzer";

const connectUrl = `${protocol}://${host}:${port}`;

const mqtt_client = mqtt.connect(connectUrl, {
  clientId,
  clean: true,
  connectTimeout: 4000,
  username: "emqx",
  password: "public",
  reconnectPeriod: 1000,
});

mqtt_client.on("connect", () => {
  console.log("Connected");
  mqtt_client.subscribe([topic], () => {
    console.log(`Subscribe to topic '${topic}'`);
  });
});

mqtt_client.on("message", (topic, payload) => {
  console.log("Received Message:", topic, payload.toString());
});

app.use(function (req, res, next) {
  req.mqttPublish = function (topic, message) {
    mqtt_client.publish(topic, message);
  };

  next();
});

app.post("/testmqtt", async (req, res) => {
  try {
    await req.mqttPublish(topic, '{"msg": "Mute D0001"}');

    res.send("MQTT test initiated");
  } catch (error) {
    console.error("Error in MQTT operation:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Routes
app.use(express.json());
app.use(userRouter);
app.use(authRouter);
app.use(deviceRouter);
app.use(coordinateRouter);
app.use(notificationRouter);
app.use(reviewRouter);

// Routes using Socket
app.post("/review", async (req, res) => {
  try {
    console.log(req.body);
    const newReview = await Review.create(req.body);

    const reviews = await Review.findAll({
      include: [
        {
          model: User,
          as: "User",
        },
      ],
    });
    console.log(reviews);
    io.emit("newReview", reviews);

    res.status(201).json({ msg: "Review Added", device: newReview });
  } catch (e) {
    console.log(e.message);
  }
});

app.patch("/coordinate/:device_id", async (req, res) => {
  try {
    const { latitude, longitude } = req.body;

    const response = await Coordinate.update(req.body, {
      where: {
        device_id: req.params.device_id,
      },
    });

    const device = await Device.findOne({
      where: { device_id: req.params.device_id },
    });
    const user = await User.findOne({
      where: { user_id: device.user_id },
    });

    if (user.latitude && user.longitude) {
      const distance = geolib.getDistance(
        { latitude: user.latitude, longitude: user.longitude },
        { latitude, longitude }
      );

      if (distance > 20) {
        const message = "You left your device behind";

        const newNotif = await Notification.create({
          user_id: user.user_id,
          device_id: device.device_id,
          message: message,
        });

        const notifications = await Notification.findAll({
          where: { user_id: user.user_id },
        });

        io.emit("newNotification", notifications);
      }
    }

    const devices = await Device.findAll({
      where: {
        user_id: device.user_id
      },
      include: [{
        model: Coordinate,
        as: 'Coordinate',
      },
      {
        model: User,
        as: 'User'
      }
    ],
    });

    io.emit("coordinateUpdated", devices);
    res.status(203).json({ msg: "Coordinate Updated" });
  } catch (e) {
    console.log(e.message);
  }
});

// Routes using MQTT
app.post("/device/ring/:device_id", async (req, res) => {
  try {
    const device_id = req.params.device_id;

    await req.mqttPublish(topic, `{"msg": "Ring ${device_id}"}`);

    res.send(`Ring request for ${device_id} sent`);
  } catch (error) {
    console.error("Error in MQTT operation:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/device/mute/:device_id", async (req, res) => {
  try {
    const device_id = req.params.device_id;

    await req.mqttPublish(topic, `{"msg": "Mute ${device_id}"}`);

    res.send(`Mute request for ${device_id} sent`);
  } catch (error) {
    console.error("Error in MQTT operation:", error);
    res.status(500).send("Internal Server Error");
  }
});

// start server
// app.listen(8080, () => {
//   console.log("Running on port 8080");
// });

server.listen(8080, () => {
  console.log("Socket running on port 8080");
});
