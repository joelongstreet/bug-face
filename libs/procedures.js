var pins = {};
exports.setPins = function(pinSet){
  pins = pinSet;
};


exports.pyramid = function(speed, times, done){
  var iterations = 0;
  var timesDone = setInterval(function(){
    pins.orangeHead.turnOn();
    pins.yellowHead.turnOn();

    setTimeout(function(){
      pins.greenHead.turnOn();
      pins.blueHead.turnOn();
    }, speed*(1/6));

    setTimeout(function(){
      pins.redHead.turnOn();
    }, speed*(2/6));

    setTimeout(function(){
      pins.redHead.turnOff();
    }, speed*(3/6));

    setTimeout(function(){
      pins.greenHead.turnOff();
      pins.blueHead.turnOff();
    }, speed*(4/6));

    setTimeout(function(){
      pins.orangeHead.turnOff();
      pins.yellowHead.turnOff();

      if(iterations >= times){
        clearInterval(timesDone);
        if(done) done();
      }
    }, speed*(5/6));

    iterations++;
  }, speed);
};


exports.blinkEyes = function(speed, times, done){
  var iterations = 0;
  var timesDone = setInterval(function(){
    pins.leftEye.turnOn();
    pins.rightEye.turnOn();

    setTimeout(function(){
      pins.leftEye.turnOff();
      pins.rightEye.turnOff();

      if(iterations >= times){
        clearInterval(timesDone);
        if(done) done();
      }
    }, speed);

    iterations++;
  }, speed*2);
};