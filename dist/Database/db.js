"use strict";

var mongoose = require("mongoose");
var userSchema = mongoose.Schema({
  id: String,
  password: String
});
module.exports = mongoose.model("fbusers", userSchema);