//app.js 
var express = require('express');
var app = express();
//added below code
app.get('/tweets', function(req, res) {
  res.sendFile(__dirname + "/tweets.html");
});

app.listen(8080);

//var url = require('url');

var options = {
  protocol: "http:",
  host: "search.twitter.com",
  pathname: '/search.json',
  query: { q: "codeschool"}
};

var searchURL = url.format(options);
//added code below
var request = require('request');
request(searchURL, function(err, response, body) {
  console.log(body);
});


//------------------------------------
var url = require('url');
var request = require('request');

var express = require('express');
var app = express();
app.get('/', function(req, res) {
  request(searchURL).pipe(res);
});
var options = {
  protocol: "http:",
  host: "search.twitter.com",
  pathname: '/search.json',
  query: {
    q: "codeschool"
  }
};

var searchURL = url.format(options);

var app; // Create server here
app.listen(8080);

quote.ejs

<h2>Quote by <%=  %></h2>

<blockquote>
  <%= quote %>
</blockquote>
