/** @format */

const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello from express intial page");
});

app.listen(5000, (req, res) => {
  console.log("server is running on port 5000");
});
