const express = require("express");
const cors = require("cors");
const session = require("express-session");

const authRouter = require("./routes/AuthRoutes.js");
const userRouter = require("./routes/UserRoutes.js");
const deviceRouter = require("./routes/DeviceRoutes.js");
const coordinateRouter = require("./routes/CoordinateRoutes.js");
const notificationRouter = require("./routes/NotificationRoutes.js");
const reviewRouter = require("./routes/ReviewRoutes.js");

const app = express();

app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000'
}));

app.use(
  session({
    secret: 'ditag-solusi-kehilangan-barang', // Replace with a strong secret key
    resave: false,
    saveUninitialized: true
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

app.listen(8080, () => {console.log("Running on port 8080")})