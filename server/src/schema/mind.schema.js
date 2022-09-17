const mongoose = require("mongoose");
const mindSchema = new mongoose.Schema({
    project: { type: String},
    stopat: { type: String },
},{versionKey:false});

const mind = mongoose.model("mind", mindSchema);
module.exports = mind;


