const { json } = require('body-parser');
const express = require('express');

var app = express();

app.use(express.json());

app.get('/', (req, res) => { //Teste para server
    res.send('Okay!')
})

app.post('/audio', (req, res) => {
    var spawn = require('child_process').spawn
    
    const url = req.body;

    var process = spawn('python', ['../processing/audio.py', url['phrase']]);


    process.stdout.on('data', function (data) {
        
        res.send('<h1>Done!<h1/>')

        var title = data.toString()

        //res.send(`<h1>${title}<h1/>`)
        

        //res.download(`processing/output/a.mp4`)

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

app.listen(process.env.PORT || 8000)
