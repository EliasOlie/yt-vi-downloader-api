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
        
        var title = data.toString()

        console.log(title)

        res.send(`<h1>${title}<h1/>`)

        res.sendFile('D:/GitHub/yt-vi-downloader-api/server/processing/output')
    })

});

app.get('/a/:resp', (req, res) => {
    va = req.params.resp
    
    console.log(va.toString())

    res.send(`Ao ${va.toString()}`)
})

app.listen(process.env.PORT || 8000)