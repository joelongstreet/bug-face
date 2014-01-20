var gpio = require('gpio');
var pinMappings = require('./pinMapping');


var pins = {};
var pinsReady = 0;

var ready = function(next){
  if(next) next(pins);
};

pinMappings.pins.forEach(function(pin){

  var gpioPin = gpio.export(pin.id, {
    direction : 'out',
    interval: 50,
    ready : function(){
      pinsReady++;
      if(pinsReady == pinMappings.pins.length) ready();
    }
  });

  pins[pin.name] = {
    id      : pin.id,
    type    : pin.type,
    gpio    : gpioPin,
    turnOn  : function(){
      gpioPin.set(0);
    },
    turnOff : function(){
      gpioPin.set(1);
    }
  };
});

exports.ready = ready;
