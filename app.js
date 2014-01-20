var initialize = require('./libs/initializePins');
var procedures = require('./libs/procedures');


initialize.ready(function(pins){
  var i = 0;
  setTimeout(function(){
    for(var key in pins){
      pins[key].turnOff();
    }

    procedures.setPins(pins);
    procedures.blinkEyes(500, 3, function(){
      procedures.pyramid(500, 5, function(){
        procedures.xHead(500, 5, function(){
          procedures.leftCircle(500, 1, function(){
            procedures.rightCircle(500, 1, function(){
              procedures.eyeJitter(200, 5, function(){
                procedures.blinkAll(500, 3, function(){
                  console.log('all done');
                });
              });
            });
          });
        });
      });
    });
  }, 2000);
});
