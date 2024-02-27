/** @format */

const express = require("express");
const app = express();
const logger = require("./logger");
const ErrorHandling = require("./ErrorHandling");

app.use(express.json()); // to parse data  from request.body  json

app.use(logger); //it should be above everything

const actorsRouter = require("./actorsRouter");
app.use("/actors", actorsRouter);

app.get("/", (req, res) => {
  res.send("welcome to express server on my first trial"); // the message to show ,response.send ,http://localhost:8000/actors
});

app.use(ErrorHandling);

const port = 8000;
app.listen(port, () => {
  console.log(`server running on port 8000 ${port}`);
});

/*
HTTP SERVER INSTANCE
const http = require("http");
const host = "127.0.0.1"; //localhost
const app = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/plain");
  response.end("welcome to express server on my first trial");
});

const PORT = 3001;
app.listen(PORT, host, () => {
  console.log(`Server running on port,listen on  ..${PORT}`);
});

//htttp://localhost:3001  */
