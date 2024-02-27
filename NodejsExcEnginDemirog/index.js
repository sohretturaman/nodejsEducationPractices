/** @format */

const express = require("express");
const log = require("./log.js");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello from express intial page");
});

app.listen(5000, (req, res) => {
  console.log("server in port 5000");
});
