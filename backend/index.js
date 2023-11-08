const express = require("express");
const cors = require("cors");
const session = require("express-session");
const Sequelize = require("sequelize");
const {Session} = require("./models/index.js");

const authRouter = require("./routes/AuthRoutes.js");
const userRouter = require("./routes/UserRoutes.js");
const deviceRouter = require("./routes/DeviceRoutes.js");
const coordinateRouter = require("./routes/CoordinateRoutes.js");
const notificationRouter = require("./routes/NotificationRoutes.js");
const reviewRouter = require("./routes/ReviewRoutes.js");

const app = express();

// session db
const db = new Sequelize('ditag', 'root', '', {
  host: "localhost",
  dialect: "mysql"
});

var sessionStore = require("connect-session-sequelize")(session.Store);

const store = new sessionStore({
  db: db
});

// migrate session db
// store.sync();

// cors
app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000'
}));

// use session
app.use(
  session({
    secret: 'ditag-solusi-kehilangan-barang',
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
      secure: 'auto',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    }
  })
);

// Routes
app.use(express.json());
app.use(userRouter);
app.use(authRouter);
app.use(deviceRouter);
app.use(coordinateRouter);
app.use(notificationRouter);
app.use(reviewRouter);

// start server
app.listen(8080, () => {
  console.log("Running on port 8080");
});
