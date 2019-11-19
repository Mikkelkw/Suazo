const express = require('express');
const app = express();
const path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true })); 

app.use(express.static(__dirname));

app.post('/submitmessage', function(req, res) {
    res.send('You sent the name "' + req.body.name + '".');
    console.log(req.body.name)
  });

app.get('/', function(req, res){
    res.sendFile('index.html', {root: path.join(__dirname)});
})

app.listen(8080, function(){
    console.log('Listening on port 8080');
})