//insertQuestion.js
var insertQuestion = function(question){
  var newQuestion = document.createElement('li');
  newQuestion.innerHTML = question;

  var questions = document.getElementsByTagName('ul')[0];
  return questions.appendChild(newQuestion);
}

//app.js 
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(client) {
  console.log("Client connected...");

  client.on('question', function(question) {
    client.broadcast.emit('question', question);
  });
});

server.listen(8080);



app.js

<script src="/socket.io/socket.io.js"></script>

<script>
  var server = io.connect('http://localhost:8080');

  server.on('question', function(question) {
    insertQuestion(question);
  });

  server.on('answer', function(question, answer){
    answerQuestion(question, answer);
  });

  //Don't worry about these methods, just assume
  //they insert the correct html into the DOM
  // var insertQuestion = function(question) {
  // }

  // var answerQuestion = function(question, answer) {
  // }
</script>