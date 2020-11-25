const { json } = require('body-parser');
const express = require('express');
const { dirname } = require('path');

var app = express();

var port = 8000

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Okay!')
})

app.post('/audio', (req, res) => {
    var spawn = require('child_process').spawn
    
    const url = req.body;


    var process = spawn('python', ['../processing/audio.py', url['phrase']]);

    process.stdout.on('data', function (data) {
       
       const file = `..${__dirname}/output/`
       
        //res.download(data);

        res.download(data)
    })


});

// app.post('/phrase', (req, res) =>{
    
//     var spawn = require('child_process').spawn
//     const phrase = req.body;

//     var process = spawn('python', ['./my_script.py', phrase['phrase']]);

//     process.stdout.on('data', function (data) {
//         res.send(data.toString());
//     })

// });

app.listen(process.env.PORT || port)
