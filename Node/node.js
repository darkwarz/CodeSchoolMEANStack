fs.readFile('index.html', function(err, contents){
  console.log(contents);
});


// var contents = originally fs.readFile('inex.html',)
// console.log(contents)


app.js

var redis = require('redis');
var client = redis.createClient();
client.set('name', 'nick');

var result = client.get('quesition', function(err, data))


app.js 
var redis = require('redis');
var client = redis.createClient();

var question1 = "Where is the dog?";
var question2 = "Where is the cat?";

  client.lpush("questions", question1, function(err, reply){
    console.log(reply);
  });
  
 app.js
 
  var redis = require('redis');
var client = redis.createClient();
client.lrange('questions', 0, -1, function(error, value) {
  console.log(value);
});      

app.js 

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var socket = require('socket.io');
var io = socket.listen(server);

var redis = require('redis');
var redisClient = redis.createClient();

io.sockets.on('connection', function(client) {
  client.on('answer', function(question, answer) {
    client.broadcast.emit('answer', question, answer);
  });

  client.on('question', function(question) {
    if(!client.question_asked) {
      client.question_asked = true;
      client.broadcast.emit('question', question);
      // add the question to the list here
      redisClient.lpush('questions', question);
    }
  });
});


//app.js 
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

var redis = require('redis');
var redisClient = redis.createClient();

io.sockets.on('connection', function(client) {
  redisClient.lrange("questions", 0, -1, function(err, questions) {
    questions.forEach(function(question) {
      client.emit("question", question);
    });
  });

  client.on('answer', function(question, answer) {
    client.broadcast.emit('answer', question, answer);
  });

  client.on('question', function(question) {
    if(!client.question_asked) {
      client.question_asked = true;
      client.broadcast.emit('question', question);
      redisClient.lpush("questions", question, function() {
        redisClient.ltrim("questions", 0, 19);
      });
    }
  }); 

});
