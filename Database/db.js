const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  id: String,
  password: String,
});

module.exports = mongoose.model("fbusers", userSchema);
