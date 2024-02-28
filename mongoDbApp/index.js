/** @format */

const express = require("express");
const app = express();
const http = require("http");

const mongoose = require("mongoose");

const uri =
  "mongodb+srv://meryemsohret:<password>@fullstack.emnetky.mongodb.net/?retryWrites=true&w=majority&appName=fullstack";

mongoose.connect(uri);
const User = require("./models/UserModel");

const init = () => {
  User.create({
    name: "Meryem sohret",
    name: "Turaman",
  });
};
init();

app.get("/", (req, res) => {
  res.send("home page ");
});
const Server = http.createServer(app); //Create HTTP server using Express app
Server.listen(8000, (res) => {
  console.log("listening on *:8000");
});
