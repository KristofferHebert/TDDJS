"use strict";

var server = require("./server.js");
var http = require("http");

exports.setUp = function(done) {
    server.start(7000, function(){
        done();
    });
};

exports.tearDown = function(done) {
    server.stop(function(){
        done();
    });
};

exports.tests_respondsToRequests = function(test){
    httpGet("http://localhost:7000", function(response, responseText){
        test.equals(response.statusCode, 200, "status code");
        test.equals("Hello World", responseText, "response text");
        test.done();
    });
};

function httpGet(url, callback) {
    http.get(url, function(response){
        var responseText = "";
        response.setEncoding("utf8");
        response.on("data", function(chunk){
            responseText += chunk;
        });
        response.on("end", function(){
            callback(response, responseText);
        });
    });
}