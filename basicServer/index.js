/** @format */

const express = require("express");
const app = express();
var data = require("./data.js");
app.use(express.json()); // to parse data  from request.body  json
const Log = require("./Log.js");

app.get("/", (req, res) => {
  res.send("welcome to express server on my first trial"); // the message to show ,response.send ,http://localhost:8000/actors
});

app.get("/actors", (req, res) => {
  res.status(200).json(data);
});

app.get("/actors/:id", (req, res) => {
  const id = req.params.id;
  console.log("req.body, req.query", req.body, req.query); //catch body request
  const actor = data.find((actor) => actor.id === parseInt(id));
  if (actor) {
    res.status(200).json(actor); // to display json data , otherwise you ll get error
  } else {
    res.status(404).send("actor not found");
  }
});

app.post("/actors", (req, res) => {
  var maxId =
    data.length > 0 ? Math.max(...data.map((actor) => Number(actor.id))) : 0; //!!! take data as ...data.map otherwise it is not gonna work
  const newActor = req.body;

  newActor.id = maxId + 1;
  console.log("new actor objects", newActor);
  data.push(newActor);
  res.status(201).json(newActor);
});

app.delete("/actors/:id", (req, res) => {
  var reqId = Number(req.params.id); //get the id from the url

  const itemToDel = data.find((actor) => actor.id === reqId);
  if (itemToDel) {
    data = data.filter((actor) => actor.id !== reqId); // need to assign filtered data to data!
    res.status(204).end();
    //res.status(204).send("actor deleted successfully");
    //  res.status(204); it is wrong, beacuse it is not completed
  } else {
    res.status(400).json({
      errMessage: "actor is not found in the data",
      data: data,
    });
  }
});

app.put("/actors/:id", (req, res) => {
  var reqId = Number(req.params.id); //get the id from the url
  var newData = req.body;
  const EditableActor = data.find((actor) => actor.id === reqId);
  if (EditableActor) {
    EditableActor.name = newData.name;
    EditableActor.movies = newData.movies;
    res.status(200).json(EditableActor);
  } else {
    res.status(404).send("actor is not available to edit");
  }
});

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
