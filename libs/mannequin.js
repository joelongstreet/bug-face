var say         = require('say');
var initialize  = require('./initializePins');
var procedures  = require('./procedures');
var phrases     = require('./phrases');
var pins        = {};


var warn = function(){
  pins.leftEye.turnOn();
  pins.rightEye.turnOn();

  say.speak('default', phrases.randomNegative());

  setTimeout(function(){
    pins.leftEye.turnOff();
    pins.rightEye.turnOff();
  }, 8000);
};


var goBezerk = function(done){
  procedures.eyeJitter(300, 18);
  procedures.pyramid(1000, 3, function(){
    procedures.xHead(800, 2, function(){
      procedures.leftCircle(1200, 1, function(){
        procedures.rightCircle(1200, 1, function(){
          procedures.blinkAll(250, 5, function(){
            if(done) done();
          });
        });
      });
    });
  });
};


var mannequinSay = function(phrase, done){
  say.speak('Alex', phrase, function(){
    if(done) done();
  });
};


initialize.ready(function(pinMappings){
  var i = 0;
  pins = pinMappings;
  procedures.setPins(pins);

  setTimeout(function(){
    for(var key in pins){
      pins[key].turnOff();
    }
  }, 2000);

  console.log('GPIO pins ready for action');
});


exports.say = mannequinSay;
exports.goBezerk = goBezerk;
exports.warn = warn;