var say         = require('say');
var initialize  = require('./libs/initializePins');
var procedures  = require('./libs/procedures');
var phrases     = require('./libs/phrases').phrases;
var pins        = {};


var warn = function(){
  pins.leftEye.turnOn();
  pins.rightEye.turnOn();

  var phrase = phrases[Math.floor(Math.random()*phrases.length)];
  say.speak('default', phrase);

  setTimeout(function(){
    pins.leftEye.turnOff();
    pins.rightEye.turnOff();
  }, 8000);
};


var goCrazzzy = function(){
  procedures.setPins(pins);
  procedures.eyeJitter(300, 18);
  procedures.pyramid(1000, 3, function(){
    procedures.xHead(500, 1, function(){
      procedures.leftCircle(1000, 1, function(){
        procedures.rightCircle(1000, 1, function(){
          procedures.blinkAll(250, 3, function(){
            console.log('all done');
          });
        });
      });
    });
  });
};


// Keep alive, warn
setInterval(warn, 3600000);


initialize.ready(function(pinMappings){
  var i = 0;
  pins = pinMappings;

  setTimeout(function(){
    for(var key in pins){
      pins[key].turnOff();
    }
  }, 2000);
});
