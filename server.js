var http = require('http');
var fs = require('fs');

var hostname = '127.0.0.1';
var port = 3000;

// var routes = [
//   { method: 'GET', path: '/', content: 'Hello'},
//   { method: 'GET', path: '/kittens', content: 'Meow'}
//   { method: 'GET', path: '/random', content: }
// ]

var server = http.createServer(function(request, response) {
  var method = request.method;
  var url = request.url;
  //  GET /random => a number between 1 and 10;
  if (method === 'GET' && url === '/random'){
    console.log('Incoming ' + method + ' request' + ' to ' + url);
    var randomNumber = Math.floor(Math.random()*10);
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.write('You get '+ randomNumber);
    response.end();
  } else if(method ==='GET' && url === '/eightball'){
    console.log('Incoming ' + method + ' request' + ' to ' + url);
    response.statusCode = 200;
    response.setHeader('Content-type', 'text/plain');
    response.write('Magic Eightball says, "' + shake() + '"');
    response.end();
  } else if (method === 'GET' && url === '/kittens'){
    console.log('Incoming ' + method + ' request' + ' to ' + url);
    response.statusCode = 200;
    response.setHeader('content-type', 'text/plain');
    response.write('meow');
    response.end();
  } else if (url === '/'){
    console.log('Incoming ' + method + ' request' + ' to root');
    response.statusCode = 200;
    response.setHeader('content-type', 'text/html');
    response.write('<h1>Hello!</h1>');
    response.end();
  }
  else {
    response.statusCode = 404;
    response.write('uh-oh');
    response.end();
  }
});

function shake(){
  var responses = ['Yes', 'No', 'Maybe'];
  var responseIdx = Math.floor(Math.random() * 3);
  return responses[responseIdx]
}


server.listen(port, hostname, function(){
  console.log('Server running at http://' + hostname + ':' + port);
});
