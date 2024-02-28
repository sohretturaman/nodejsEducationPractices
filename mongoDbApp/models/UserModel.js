/** @format */

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  surname: String,
});

module.exports = mongoose.model("user", userSchema); //the collection name
