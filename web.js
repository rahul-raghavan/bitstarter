
var express = require('express');
var logger = require('morgan');
var fs = require('fs');

var app = express();
var txt;

fs.readFile('./index.html','utf-8', function(err,data) {
        if (err){
            return console.log(err);
        }
    console.log("Read file");
    txt = data.toString('utf-8');
    });

app.get('/', function(request, response){
  
  response.send(txt); 
});

var port = process.env.PORT || 5000;
app.listen(port, function(){
    console.log("I am Listening on " + port);
});



