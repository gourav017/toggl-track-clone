const mongoose = require("mongoose");
const clientSchema = new mongoose.Schema({
  client: { type: String },
},{versionKey:false});

const client = mongoose.model("clients", clientSchema);
module.exports = client;

