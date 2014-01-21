var http = require('http');
var webhooks = require('./libs/githubHooks');
var routes = require('./libs/routes');

webhooks.initialize();

var server = http.createServer(function(req, res){
  if(req.method == 'POST'){
    var data = '';
    req.on('data', function(chunk){
      data += chunk;
    });

    req.on('end', function(){
      payload = JSON.parse(data);
      if(routes[payload.action]) routes[payload.action](payload);

      res.writeHead(200, { 'Content-type': 'text/html'});
      res.end();
    });
  } else{
    // don't crash if someone accidentally hits the url
    res.writeHead(200, { 'Content-type': 'text/html'});
    res.end();
  }
}).listen(3000);
