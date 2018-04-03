var http = require("http");
var express = require("express");
var logger = require("morgan");

var app = express();



app.use(logger("dev"));

app.use(function(request, response, next) {
    console.log("In comes a " + request.ip + " to " + request.url);
    next();
});

app.get("/", function(request, response){
    response.send("Link expired!");               
});


app.use(function(request, response){
    response.status(404).send("404");
});


http.createServer(app).listen(3000, function(){
    console.log("Started on port 8080.");
});

