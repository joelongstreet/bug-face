var gpioPins = require('./gpioPins');
var pins = gpioPins.pins;


var leftCircle = function(speed, times, done){
  var iterations = 0;
  var todo = function(){
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
        clearInterval(interval);
        if(done) done();
      }
    }, speed*(9/10));

    iterations++;
  };

  var interval = setInterval(todo, speed);
  todo();
};


var rightCircle = function(speed, times, done){
  var iterations = 0;
  var todo = function(){
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
        clearInterval(interval);
        if(done) done();
      }
    }, speed*(9/10));

    iterations++;
  };

  var interval = setInterval(todo, speed);
  todo();
};


var pyramid = function(speed, times, done){
  var iterations = 0;
  var todo = function(){
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
        clearInterval(interval);
        if(done) done();
      }
    }, speed*(5/6));

    iterations++;
  };

  var interval = setInterval(todo, speed);
  todo();
};


var eyeJitter = function(speed, times, done){
  var iterations = 0;
  var todo = function(){
    pins.leftEye.turnOn();
    pins.rightEye.turnOff();

    setTimeout(function(){
      pins.leftEye.turnOff();
      pins.rightEye.turnOn();

      if(iterations >= times){
        clearInterval(interval);
        setTimeout(function(){
          pins.rightEye.turnOff();
          if(done) done();
        }, speed/2);
      }
    }, speed/2);

    iterations++;
  };

  var interval = setInterval(todo, speed);
  todo();
};


var blinkEyes = function(speed, times, done){
  var iterations = 0;
  var todo = function(){
    pins.leftEye.turnOn();
    pins.rightEye.turnOn();

    setTimeout(function(){
      pins.leftEye.turnOff();
      pins.rightEye.turnOff();

      if(iterations >= times){
        clearInterval(interval);
        if(done) done();
      }
    }, speed/2);

    iterations++;
  };

  var interval = setInterval(todo, speed);
  todo();
};


var blinkAll = function(speed, times, done){
  var iterations = 0;
  var todo = function(){
    for(var key in pins){
      pins[key].turnOn();
    }

    setTimeout(function(){
      for(var key in pins){
        pins[key].turnOff();
      }

      if(iterations >= times){
        clearInterval(interval);
        if(done) done();
      }
    }, speed/2);

    iterations++;
  };

  var interval = setInterval(todo, speed);
  todo();
};


var xHead = function(speed, times, done){
  var iterations = 0;

  var todo = function(){
    pins.greenHead.turnOff();
    pins.yellowHead.turnOff();
    pins.orangeHead.turnOn();
    pins.blueHead.turnOn();

    setTimeout(function(){
      pins.orangeHead.turnOff();
      pins.blueHead.turnOff();
      pins.greenHead.turnOn();
      pins.yellowHead.turnOn();

      if(iterations >= times){
        clearInterval(interval);
        setTimeout(function(){
          pins.greenHead.turnOff();
          pins.yellowHead.turnOff();
          if(done) done();
        }, speed/2);
      }
    }, speed/2);

    iterations++;
  };

  var interval = setInterval(todo, speed);
  todo();
};


var openEyes = function(){
  pins.leftEye.turnOn();
  pins.rightEye.turnOn();
};


var closeEyes = function(){
  pins.leftEye.turnOff();
  pins.rightEye.turnOff();
};


var goBezerk = function(done){
  eyeJitter(300, 18);
  pyramid(1000, 3, function(){
    xHead(800, 2, function(){
      leftCircle(1200, 1, function(){
        rightCircle(1200, 1, function(){
          blinkAll(250, 5, function(){
            if(done) done();
          });
        });
      });
    });
  });
};



// Make available
exports.pins        = pins;

// Procedures which accept speed, times, and done
exports.leftCircle  = leftCircle;
exports.rightCircle = rightCircle;
exports.pyramid     = pyramid;
exports.eyeJitter   = eyeJitter;
exports.blinkEyes   = blinkEyes;
exports.blinkAll    = blinkAll;
exports.xHead       = xHead;

// Convenience methods to light pins
exports.openEyes    = openEyes;
exports.closeEyes   = closeEyes;

// Combinations of procedures which take a callback
exports.goBezerk    = goBezerk;