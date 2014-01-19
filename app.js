var initialize = require('./libs/initializePins');

var test = function(pin, i){
  setTimeout(function(){
    console.log('on')
    pin.turnOn();
  }, 250 * i + 250);

  setTimeout(function(){
    pin.turnOff();
  }, 250 * i + 500);
};

initialize.ready(function(pins){
  var i = 0;
  setTimeout(function(){
    for(var key in pins){
      pins[key].turnOff();
      test(pins[key], i);
      i++;
    }
  }, 2000);
});
