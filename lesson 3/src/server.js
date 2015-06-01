"use strict";

var http = require("http");
var server;

exports.start = function(portNumber, callback){
    server = http.createServer();
    server.on("request", function(req, res){
        res.end("Hello World");
    });
    server.listen(portNumber, callback);
};

exports.stop = function(callback){
    server.close(callback);
};