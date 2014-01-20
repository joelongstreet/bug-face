var initialize = require('./libs/initializePins');
var procedures = require('./libs/procedures');


initialize.ready(function(pins){
  var i = 0;
  setTimeout(function(){
    for(var key in pins){
      pins[key].turnOff();
    }

    procedures.setPins(pins);
    procedures.blinkEyes(1000, 3, function(){
      console.log('all done');
    });
  }, 2000);
});
