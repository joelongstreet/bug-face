var http = require('http');
var webhooks = require('./libs/githubHooks');
var routes = require('./libs/routes');

// Setup webhook
webhooks.initialize();

// Remind me every 15 minutes that I suck
setInterval(function(){
  mannuequin.openEyes();
  say.speak(voice, phrases.randomNegative, function(){
    mannuequin.closeEyes();
  });
}, 900000);


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