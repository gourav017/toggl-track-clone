
const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");

const clientSchema = require("./routes/client");
const timerRoute = require("./routes/timer.routes");
const userRoute = require("./routes/users.route");
const connection = require("./connection/db");
const authRouter = require("./routes/auth.routes");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/auth",authRouter);
app.use("/products", userRoute);
app.use("/timer", timerRoute);
app.use("/client", clientSchema);

const port = process.env.PORT || 8080;

app.listen(port, async () => {
 await connection
  console.log("Listening to port 8080");
});
