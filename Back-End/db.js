const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const app = express();



app.use(cors())
const mongoURI =
  "mongodb+srv://hanshulkumawat22:babaji@asapproject.edzdy13.mongodb.net/";

const connectToMongo = () => {
  mongoose
    .connect(mongoURI, { dbName: "AnimeVerse" })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => console.error(`Error connecting to MongoDB: ${err}`));
};
connectToMongo();
module.exports = connectToMongo