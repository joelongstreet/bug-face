var http = require('http');
var phrases = require('./libs/phrases');
var webhooks = require('./libs/githubHooks');
var say = require('say');
var mannequin = require('./libs/mannequin');
var voice = 'Alex';

webhooks.initialize();


// Remind me every 15 minutes that I suck
setInterval(function(){
  mannuequin.openEyes();
  say.speak(voice, phrases.randomNegative, function(){
    closeEyes();
  });
}, 900000);


var payloadActionRouter = function(payload){
  console.log(payload);
  if(payload.action == 'reopened'){
    var reopenPhrase = ['Issue number ', payload.issue.number,
      'is reopened, ', payload.issue.title].join('');

    mannequin.eyeJitter(300, 10);
    mannequin.pyramid(1500, 3);
    say.speak(voice, reopenPhrase, function(){
      say.speak(voice, phrases.randomNegative());
    });
  } else if(payload.action == 'closed'){
    var closedPhrase = ['Issue number ', payload.issue.number,
      'is now closed, ', payload.issue.title].join('');

    mannequin.xHead(800, 5);
    say.speak(voice, closedPhrase, function(){
      say.speak(voice, phrases.randomPositive());
    });
  } else if(payload.action == 'opened'){
    say.speak('L O L, L O L, L O L, L O L, L O L, L O L');
    mannequin.goBezerk(function(){
      say.speak(voice, 'New bug. ' + payload.issue.title, function(){
        say.speak(voice, phrases.randomNegative());
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