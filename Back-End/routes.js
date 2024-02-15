const express = require("express");
const app = express();
const port = 700;
const fs = require("fs");
const path = require("path");

// Load initial data from data.json
let data = require('./data.json');

app.use(express.json());

app.get("/", (req, res) => {
    res.send(data);
});

app.post('/', (req, res) => {
    const newData = req.body;
    data.push(newData); // pushing new data into data array
    // Saving updated data back to data.json
    saveDataToJson(data, () => {
        res.send(data);
    });
});

app.put('/:index', (req, res) => {
    const index = parseInt(req.params.index);
    const newData = req.body;
    if (index >= 0 && index < data.length) {
        data[index] = newData; // updating data at specified index
        // Saving updated data back to data.json
        saveDataToJson(data, () => {
            res.json(data);
        });
    } else {
        res.status(404).json({ message: "Index not found" });
    }
});

app.delete('/:index', (req, res) => {
    const index = parseInt(req.params.index);
    if (index >= 0 && index < data.length) {
        data.splice(index, 1); // removing data at specified index
        // Saving updated data back to data.json
        saveDataToJson(data, () => {
            res.json(data);
        });
    } else {
        res.status(404).json({ message: "Index not found" });
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

module.exports = app;

// Function to save data to data.json
function saveDataToJson(data, callback) {
    const dataFilePath = path.resolve(__dirname, 'data.json');
    fs.writeFile(dataFilePath, JSON.stringify(data, null, 2), (err) => {
        if (err) {
            console.error("Error saving data to JSON file:", err);
            return;
        }
        console.log("Data saved to data.json");
        callback();
    });
}
