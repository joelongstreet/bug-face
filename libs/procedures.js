var pins = {};
exports.setPins = function(pinSet){
  pins = pinSet;
};


exports.leftCircle = function(speed, times, done){
  var iterations = 0;
  var timesDone = setInterval(function(){
    pins.orangeHead.turnOn();
    setTimeout(function(){
      pins.greenHead.turnOn();
    }, speed*(1/10));
    setTimeout(function(){
      pins.redHead.turnOn();
    }, speed*(2/10));
    setTimeout(function(){
      pins.blueHead.turnOn();
    }, speed*(3/10));
    setTimeout(function(){
      pins.yellowHead.turnOn();
    }, speed*(4/10));

    setTimeout(function(){
      pins.yellowHead.turnOff();
    }, speed*(5/10));
    setTimeout(function(){
      pins.blueHead.turnOff();
    }, speed*(6/10));
    setTimeout(function(){
      pins.redHead.turnOff();
    }, speed*(7/10));
    setTimeout(function(){
      pins.greenHead.turnOff();
    }, speed*(8/10));
    setTimeout(function(){
      pins.orangeHead.turnOff();

      if(iterations >= times){
        clearInterval(timesDone);
        if(done) done();
      }
    }, speed*(9/10));

    iterations++;
  }, speed);
};


exports.rightCircle = function(speed, times, done){
  var iterations = 0;
  var timesDone = setInterval(function(){
    pins.yellowHead.turnOn();
    setTimeout(function(){
      pins.blueHead.turnOn();
    }, speed*(1/10));
    setTimeout(function(){
      pins.redHead.turnOn();
    }, speed*(2/10));
    setTimeout(function(){
      pins.greenHead.turnOn();
    }, speed*(3/10));
    setTimeout(function(){
      pins.orangeHead.turnOn();
    }, speed*(4/10));

    setTimeout(function(){
      pins.orangeHead.turnOff();
    }, speed*(5/10));
    setTimeout(function(){
      pins.greenHead.turnOff();
    }, speed*(6/10));
    setTimeout(function(){
      pins.redHead.turnOff();
    }, speed*(7/10));
    setTimeout(function(){
      pins.blueHead.turnOff();
    }, speed*(8/10));
    setTimeout(function(){
      pins.yellowHead.turnOff();

      if(iterations >= times){
        clearInterval(timesDone);
        if(done) done();
      }
    }, speed*(9/10));

    iterations++;
  }, speed);
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


exports.eyeJitter = function(speed, times, done){
  var iterations = 0;
  var timesDone = setInterval(function(){
    pins.leftEye.turnOn();
    pins.rightEye.turnOff();

    setTimeout(function(){
      pins.leftEye.turnOff();
      pins.rightEye.turnOn();

      if(iterations >= times){
        clearInterval(timesDone);
        setTimeout(function(){
          pins.rightEye.turnOff();
          if(done) done();
        }, speed/2);
      }
    }, speed/2);

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
    }, speed/2);

    iterations++;
  }, speed);
};


exports.blinkAll = function(speed, times, done){
  var iterations = 0;
  var timesDone = setInterval(function(){
    for(var key in pins){
      pins[key].turnOn();
    }

    setTimeout(function(){
      for(var key in pins){
        pins[key].turnOff();
      }

      if(iterations >= times){
        clearInterval(timesDone);
        if(done) done();
      }
    }, speed/2);

    iterations++;
  }, speed);
};


exports.xHead = function(speed, times, done){
  var iterations = 0;
  var timesDone = setInterval(function(){
    pins.orangeHead.turnOn();
    pins.blueHead.turnOn();

    setTimeout(function(){
      pins.orangeHead.turnOff();
      pins.blueHead.turnOff();
      pins.greenHead.turnOn();
      pins.yellowHead.turnOn();
    }, speed*(1/4));

    setTimeout(function(){
      pins.greenHead.turnOff();
      pins.yellowHead.turnOff();
      pins.redHead.turnOn();
    }, speed*(2/4));

    setTimeout(function(){
      pins.redHead.turnOff();

      if(iterations >= times){
        clearInterval(timesDone);
        if(done) done();
      }
    }, speed*(3/4));

    iterations++;
  }, speed);
};