const express = require("express");
const app = express();
const port = 7000

const rout = [
    {
        Count: 1,
      Name: "Fullmetal Alchemist",
      ReleaseDate: "April 5, 2009",
      Type: "Shounen, Adventure, Fantasy",
      ImageUrl:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS1dx2Fp1m7fM6rXw09v9Li9_HkyDEMQrMJr466HdQCRovf3IPsv6GQg_2amx9b",
      Description:
        "Based on the manga by Hiromu Arakawa, this series follows the journey of two brothers, Edward and Alphonse Elric, as they seek the Philosopher's Stone to restore their bodies.",
    }
]

app.use(express.json())

app.get("/",(req,res) => {
    res.send(rout)
})

app.post('/',(req, res) => {
    const data = req.body;
    rout.push(data)
    res.send(rout)
})

app.put('/:index', (req, res) => {
    const index = parseInt(req.params.index)
    const data = req.body
    rout[index] = data
    res.json(rout)
})

app.delete('/:index', (req, res) => {
    const index = parseInt(req.params.index)
    rout.splice(index, 1)
    res.json(rout)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

module.exports = app