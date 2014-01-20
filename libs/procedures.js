var pins = {};
exports.setPins = function(pinSet){
  pins = pinSet;
};

exports.blinkEyes = function(speed, times, done){
  var iterations = 0;
  var blinkInterval = setInterval(function(){
    pins.leftEye.turnOn();
    pins.rightEye.turnOn();

    setTimeout(function(){
      pins.leftEye.turnOff();
      pins.rightEye.turnOff();

      if(iterations >= times){
        clearInterval(blinkInterval);
        if(done) done();
      }
    }, speed);

    iterations++;
  }, speed*2);
};