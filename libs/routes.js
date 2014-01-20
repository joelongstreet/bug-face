var say = require('say');
var phrases = require('./phrases');
var mannequin = require('./mannequin');
var voice = 'Alex';


exports.reopened = function(payload){
  var reopenPhrase = ['Issue number ', payload.issue.number,
    'is reopened, ', payload.issue.title].join('');

  mannequin.eyeJitter(300, 10);
  mannequin.pyramid(1500, 3);
  say.speak(voice, reopenPhrase, function(){
    say.speak(voice, phrases.randomNegative());
  });
};


exports.closed = function(payload){
  var closedPhrase = ['Issue number ', payload.issue.number,
    'is now closed, ', payload.issue.title].join('');

  mannequin.xHead(800, 5);
  say.speak(voice, closedPhrase, function(){
    say.speak(voice, phrases.randomPositive());
  });
};


exports.opened = function(payload){
  say.speak('L O L, L O L, L O L, L O L, L O L, L O L');

  mannequin.goBezerk(function(){
    say.speak(voice, 'New bug. ' + payload.issue.title, function(){
      say.speak(voice, phrases.randomNegative());
    });
  });
};