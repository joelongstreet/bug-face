var say         = require('say');
var initialize  = require('./libs/initializePins');
var procedures  = require('./libs/procedures');
var voices      = require('./libs/voices').voices;
var phrases     = require('./libs/phrases').phrases;
var pins        = {};


initialize.ready(function(pinMappings){
  var i = 0;
  var pins = pinMappings;

  setTimeout(function(){
    for(var key in pins){
      pins[key].turnOff();
    }

    goCrazzzy();
  }, 2000);
});


var warn = function(){
  pins.leftEye.turnOn();
  pins.rightEye.turnOn();

  var voice  = voices[Math.floor(Math.random()*voices.length)];
  var phrase = phrases[Math.floor(Math.random()*phrases.length)];
  say.speak(voice, phrase);

  setTimeout(function(){
    pins.leftEye.turnOff();
    pins.rightEye.turnOff();
  }, 5000);
};


var goCrazzzy = function(){
  procedures.setPins(pins);
  procedures.blinkEyes(300, 5);
  procedures.pyramid(1000, 3, function(){
    procedures.xHead(500, 1, function(){
      procedures.leftCircle(1000, 1, function(){
        procedures.rightCircle(1000, 1, function(){
          procedures.eyeJitter(300, 5, function(){
            procedures.blinkAll(250, 3, function(){
              console.log('all done');
            });
          });
        });
      });
    });
  });
};
