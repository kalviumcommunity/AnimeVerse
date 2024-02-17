const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
const Modal = require("./Scheme");
const connectToMongo = require("./db");
connectToMongo()
const { validateInput } = require('./validator');

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
  const { error, value } = validateInput(req.body)
  if (error) {
    console.log(error);
    return res.status(400).json(error.details);
  }
  Modal.create(value)
  .then(users => res.json(users))
  .catch(err => console.log(err));
})

app.get('/getItem/:id', (req, res) => {
  const id = req.params.id
  Modal.findById({ _id: id })
    .then(data => res.json(data))
    .catch(err => res.json(err))
})

app.put('/update/:id', (req, res) => {
  const id = req.params.id
  Modal.findByIdAndUpdate({ _id: id }, {
    Name: req.body.Name,
    ReleaseDate: req.body.ReleaseDate,
    Type: req.body.Type,
    ImageUrl: req.body.ImageUrl,
    Description: req.body.Description
  }, { new: true })
    .then(data => res.json(data))
    .catch((err) => res.status(404).json(err))
})

app.delete('/delete/:id', (req, res) => {
  const id = req.params.id
  Modal.findByIdAndDelete({ _id: id })
    .then(users => res.json(users))
    .catch(err => res.json(err))
})
app.get('/ping', (req, res) => {
  res.send('Hello World')
})


app.listen(7000);