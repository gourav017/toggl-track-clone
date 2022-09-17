
const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");

const clientSchema = require("./routes/client");
const mindSchema = require("./routes/mind.routes");
const userRoute = require("./routes/users.route");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/products", userRoute);
app.use("/mind", mindSchema);
app.use("/client", clientSchema);

const port = 8080;

app.listen(process.env.PORT || port, async () => {
  await mongoose.connect(
    "mongodb+srv://Rohit:1234@cluster0.toxlyfj.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log("Listening to port 5000");
});
