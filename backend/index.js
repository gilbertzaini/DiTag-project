const express = require("express");
const cors = require("cors");
const authRouter = require("./routes/AuthRoutes.js");
const userRouter = require("./routes/UserRoutes.js");

const app = express();
app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(authRouter);

app.listen(8080, () => {console.log("Running on port 8080")})