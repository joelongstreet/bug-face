var http = require('http');
var phrases = require('./libs/phrases');
var hooks = require('./libs/hooks');
var mannequin = require('./libs/mannequin');

hooks.initialize();
setInterval(mannequin.warn, 900000);


var payloadActionRouter = function(payload){
  if(payload.action == 'reopened'){
    var reopenPhrase = ['Issue number ', payload.issue.number,
      'is reopened, ', payload.issue.title].join('');

    mannequin.say(reopenPhrase, function(){
      mannequin.say(phrases.randomNegative());
    });
  } else if(payload.action == 'closed'){
    var closedPhrase = ['Issue number ', payload.issue.number,
      'is now closed, ', payload.issue.title].join('');

    mannequin.say(closedPhrase, function(){
      mannequin.say(phrases.randomPositive());
    });
  } else if(payload.action == 'opened'){
    mannequin.say('L O L, L O L, L O L, L O L, L O L, L O L');
    mannequin.goBezerk(function(){
      mannequin.say('New bug. ' + payload.issue.title, function(){
        mannequin.say(phrases.randomNegative());
      });
    });
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