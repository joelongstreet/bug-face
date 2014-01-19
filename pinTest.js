var pinNumber = 0;
process.argv.forEach(function(arg){
  if(parseInt(arg) != NaN) pinNumber = arg;
});

var gpio = require('gpio');
var gpioPin = gpio.export(pinNumber, {
  direction : 'out',
  ready : function(){
    console.log('pin '+ pinNumber + ' ready');
    testPin();
  }
});


var testPin = function(){
  gpioPin.set(0);
  console.log('pin on');

  setTimeout(function(){
    console.log('pin off');
    gpioPin.set(1);
  }, 5000);
};

