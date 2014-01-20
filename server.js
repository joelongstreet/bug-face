var http = require('http');
var hooks = require('./libs/hooks');
hooks.initialize();


var payloadActionRouter = function(payload){
  console.log(payload);

  switch(payload.action){
    case 'reopened':
      // mannequin.talk('negative');
      break;
    case 'closed':
      // mannequin.talk('positive');
      break;
    case 'created':
      // mannequin.goBezerk(function(){
      //   mannequin.say('L O L, new bug. ' + payload.issue.title);
      // });
      break;
  }
};


var server = http.createServer(function(req, res){
  if(req.method == 'POST'){
    var data = '';
    req.on('data', function(chunk){
      data += chunk;
    });

    req.on('end', function(){
      payloadActionRouter(JSON.parse(data));
      res.writeHead(200, { 'Content-type': 'text/html'});
      res.end();
    });
  } else{
    res.writeHead(200, { 'Content-type': 'text/html'});
    res.end();
  }
}).listen(3000);