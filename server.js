const express = require("express");
const app = express();
const mongoose = require('mongoose');

const uri = "mongodb+srv://hanshul:babaji@cluster0.e06nfsc.mongodb.net/?retryWrites=true&w=majority";

app.get('/', (req, res) => {
  mongoose.connect(uri)
    .then(() => {
      res.json({ connection: 'Connected' });
    })
    .catch((error) => {
      console.error(error);
      res.json({ connection: 'Not Connected' });
    });
});

app.get("/ping",(req,res) => {
  res.send("hello")
})

app.listen(3000, ()=> {
});
var express = require('express');
var app = express();
app.get('/ping', (req, res) =>{
    res.send('hello ')
})

var server = app.listen(3000);
