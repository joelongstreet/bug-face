var gpio = require('gpio');
var pinMappings = require('./gpioMapping');

var pins = {};
var pinsReady = 0;

pinMappings.pins.forEach(function(pin){

  var gpioPin = gpio.export(pin.id, {
    direction : 'out',
    interval  : 50,
    ready     : function(){
      pinsReady++;

      // When ready, turn all pins off
      if(pinsReady == pinMappings.pins.length){
        console.log('GPIO pins ready for action');
        setTimeout(function(){
          for(var key in pins){
            pins[key].turnOff();
          }
        }, 2000);
      }
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

exports.pins = pins;