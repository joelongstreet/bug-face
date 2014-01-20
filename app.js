var initialize = require('./libs/initializePins');
var procedures = require('./libs/procedures');


initialize.ready(function(pins){
  var i = 0;
  setTimeout(function(){
    for(var key in pins){
      pins[key].turnOff();
    }

    procedures.setPins(pins);
    procedures.blinkEyes(350, 3, function(){
      procedures.pyramid(1000, 3, function(){
        procedures.xHead(500, 2, function(){
          procedures.leftCircle(1000, 1, function(){
            procedures.rightCircle(1000, 1, function(){
              procedures.eyeJitter(300, 5, function(){
                procedures.blinkAll(250, 3, function(){
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
