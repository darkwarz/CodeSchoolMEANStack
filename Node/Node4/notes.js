//app.js 4.3
var http = require('http');

var myRequest = function(message) {
  var request = http.request('http://codeschool.com', function(response) {
    response.pipe(process.stdout, { end: false });
  });

  request.write(message);
  request.end();
};
module.exports = my_Request;
myRequest('Hello, this is dog.');






//my_request.js 4.3
   var http = require('http');

  var myRequest = function(message) {
    var request = http.request('http://codeschool.com', function(response) {
      response.pipe(process.stdout, { end: false });
    });

    request.write(message);
    request.end();
  };                    
  module.exports = myRequest;
  
  //logger.js 4.4
  var warn = function(message) {
  console.log("Warning: " + message);
};

var info = function(message) {
  console.log("Info: " + message);
};

var error = function(message) {
  console.log("Error: " + message);
};
module.exports.warn = warn;
module.exports.info = info;
module.exports.error = error;
  
//app.js 4.4
var logger = require('./logger');

logger.info('This is some information');
logger.warn('something bad is happening');



//npm install underscore  // for underscore module

//npm install coffee-script -g // installs cofeescript  globally

//package.json
// {
//   "name": "My Awesome Node App",
//   "version": "1",
//   "dependencies": {
//            "connect": "2.1.1",
//            "underscore": "1.3.3"
//   }
// }