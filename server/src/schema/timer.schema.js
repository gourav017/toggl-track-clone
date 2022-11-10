const mongoose = require("mongoose");
const timerSchema = new mongoose.Schema({
    project: { type: String},
    stopat: { type: String },
},{versionKey:false});

const timer = mongoose.model("timer", timerSchema);
module.exports = timer;


