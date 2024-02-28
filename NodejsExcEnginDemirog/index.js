/** @format */

const express = require("express");
const log = require("./log.js");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello from express server");
});

app.get("/admin", (req, res) => {
  res.send("hello from admin page get func");
});
app.get("/about", (req, res) => {
  res.send("got get request in about page");
});

app.put("/admin", (req, res) => {
  res.send("got put request in admin page");
});
app.delete("/about", (req, res) => {
  res.send("got delete request in about page");
});

app.post("/admin", (req, res) => {
  res.send("got post request in root page");
});

const server = app.listen(5000, (req, res) => {
  console.log("server in port 5000");
});
