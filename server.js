console.log('server is starting') 

var express = require('express');

var app = express();

app.get('/ping', function (req, res) {
    res.send('hello logo')
})

var server = app.listen(3000, listening);  
function listening() {

    console.log("listening. . .");
}

// app.use(express.static('website'));
