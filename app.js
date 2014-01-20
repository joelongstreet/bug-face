var say         = require('say');
var http        = require('http');
var request     = require('request');
var initialize  = require('./libs/initializePins');
var procedures  = require('./libs/procedures');
var phrases     = require('./libs/phrases').phrases;
var pins        = {};


var warn = function(){
  pins.leftEye.turnOn();
  pins.rightEye.turnOn();

  var phrase = phrases[Math.floor(Math.random()*phrases.length)];
  say.speak('default', phrase);

  setTimeout(function(){
    pins.leftEye.turnOff();
    pins.rightEye.turnOff();
  }, 8000);
};


var goCrazzzy = function(){
  procedures.setPins(pins);
  procedures.eyeJitter(300, 18);
  procedures.pyramid(1000, 3, function(){
    procedures.xHead(500, 1, function(){
      procedures.leftCircle(1000, 1, function(){
        procedures.rightCircle(1000, 1, function(){
          procedures.blinkAll(250, 3, function(){
            console.log('all done');
          });
        });
      });
    });
  });
};



// var server = http.createServer(function(req, res){
//   console.log('request made -----')
//   console.log(req.url);
//   if(req.url == '/bug'){
//     console.log(req);
//   }
//   console.log('------------')

//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end();
// }).listen(3000);


// Keep alive, warn
setInterval(warn, 3600000);

var gith = require('gith').create(3000);
gith({
  repo: 'joelongstreet/bug-face'
}).on('all', function(payload){
  console.log(payload)
});

// initialize.ready(function(pinMappings){
//   var i = 0;
//   pins = pinMappings;

//   setTimeout(function(){
//     for(var key in pins){
//       pins[key].turnOff();
//     }
//     /*
//     setTimeout(function(){
//       warn();
//     }, 1000);
//     */
//     goCrazzzy();
//   }, 2000);
// });
