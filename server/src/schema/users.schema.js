const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  product_name: { type: String},
  client: { type: String },
  time: { type: Number },
  Billable_rate: { type: Number },
  team: { type: String},
},{versionKey:false});

const User = mongoose.model("users", userSchema);
module.exports = User;
