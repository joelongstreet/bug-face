var initialize = require('./libs/initializePins');

var test = function(pin, i){
  setTimeout(function(){
    pin.turnOn();
  }, 1000 * i + 1000);

  setTimeout(function(){
    pin.turnOff();
  }, 1000 * i + 2000);
};

initialize.ready(function(pins){
  var i = 0;
  for(var key in pins){
    test(pins[key], i);
    i++;
  }
});