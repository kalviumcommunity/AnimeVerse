const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
const Modal = require("./Scheme");
const connectToMongo = require("./db");
connectToMongo()
const { validateInput } = require('./validator');
const jwt = require('jsonwebtoken')
const users = require('./users.json')

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


const SECRET_KEY = 'ef2c0cfcd24ccf4deba07431511cf5a0ab9d4a0efd49f484aa6aeb61491672c53a60b40064434dea942cb5285f0fe605e8e46e0687c299faa9497e68fe6baa32';
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username && u.password === password);
  console.log(users);

  if (!user) {
    return res.status(401).send({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ sub: user.id }, SECRET_KEY, { expiresIn: '1h' });
  res.send({ token });
});



app.listen(7000);