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

app.listen(100);
