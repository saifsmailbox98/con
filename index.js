var http = require("http");
var path = require("path");
var express = require("express");
var logger = require("morgan");


var app = express();



app.set("views", path.resolve(__dirname, "views"));



app.set("view engine", "ejs");


app.use(logger("dev"));

app.use(function(request, response, next) {
    console.log("In comes a " + request.ip + " to " + request.url);
    next();
});

app.get("/", function(request, response){
        response.render("home");             
});


app.use(function(request, response){
    response.status(404).send("404");
});


http.createServer(app).listen(80, function(){
    console.log("Started on port 8080.");
});

