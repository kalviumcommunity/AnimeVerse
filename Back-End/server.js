const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
const Modal = require("./Scheme");
const connectToMongo = require("./db");
connectToMongo()

app.use(cors())
app.get('/data', (req, res) => {
  Modal.find({})
  .then(data => res.json(data))
  .catch(err => console.log(err))
})
app.get("/ping", (req, res) => {
  res.send("hello");
});

app.post("/add", (req, res) => {
  // if (error) {
  //   console.log(error);
  //   return res.status(400).json(error.details);
  // }
  Modal.create(req.body)
  .then(users => res.json(users))
  .catch(err => console.log(err));
})

app.listen(7000);
