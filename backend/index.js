const express = require("express");
const cors = require("cors");
const authRouter = require("./routes/AuthRoutes.js");
const userRouter = require("./routes/UserRoutes.js");
const deviceRouter = require("./routes/DeviceRoutes.js");
const coordinateRouter = require("./routes/CoordinateRoutes.js");

const app = express();
app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(authRouter);
app.use(deviceRouter);
app.use(coordinateRouter);

app.listen(8080, () => {console.log("Running on port 8080")})