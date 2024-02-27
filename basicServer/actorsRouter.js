/** @format */

const router = require("express").Router();

var data = require("./data");

router.get("/", (req, res) => {
  res.status(200).json(data);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  console.log("req.body, req.query", req.body, req.query); //catch body request
  const actor = data.find((actor) => actor.id === parseInt(id));
  if (actor) {
    res.status(200).json(actor); // to display json data , otherwise you ll get error
  } else {
    res.status(404).send("actor not found");
  }
});

router.post("/", (req, res, next) => {
  // next paramather to use error handling middleware
  var maxId =
    data.length > 0 ? Math.max(...data.map((actor) => Number(actor.id))) : 0; //!!! take data as ...data.map otherwise it is not gonna work
  const newActor = req.body;

  if (!newActor.name || !newActor.movies) {
    next({
      statusCode: 401,
      message: "you need actor name and movies to create a new actor",
    });
  } else {
    newActor.id = maxId + 1;
    console.log("new actor objects", newActor);
    data.push(newActor);
    res.status(201).json(newActor);
  }
});

router.delete("/:id", (req, res) => {
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

router.put("/:id", (req, res) => {
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

module.exports = router;
