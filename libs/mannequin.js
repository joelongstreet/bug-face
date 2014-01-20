var say         = require('say');
var gpioPins    = require('./gpioPins');
var procedures  = require('./procedures');
var phrases     = require('./phrases');
var pins        = gpioPins.pins;

procedures.setPins(pins);

var warn = function(){
  openEyes();
  mannequinSay(phrases.randomNegative, function(){
    closeEyes();
  });
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


var openEyes = function(){
  pins.leftEye.turnOn();
  pins.rightEye.turnOn();
};


var closeEyes = function(){
  pins.leftEye.turnOff();
  pins.rightEye.turnOff();
};


var mannequinSay = function(phrase, done){
  say.speak('Alex', phrase, function(){
    if(done) done();
  });
};


exports.openEyes = openEyes;
exports.closeEyes = closeEyes;
exports.say = mannequinSay;
exports.goBezerk = goBezerk;
exports.warn = warn;