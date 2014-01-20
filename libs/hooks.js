var request = require('request');
var localtunnel = require('localtunnel');
var tunnel = localtunnel.connect({
  host : 'http://localtunnel.me',
  port : 3000
});


var webhookURL = ['https://',
  process.env.GITHUB_USERNAME,
  ':',
  process.env.GITHUB_PASSWORD,
  '@api.github.com/repos/joelongstreet/bug-face/hooks'
].join('');


var getAll = function(next){
  request({
    url     : webhookURL,
    headers : { 'User-Agent' : 'raspberry-pi' },
  }, function(req, res, body){
      next(JSON.parse(body));
    }
  );
};


var deleteSome = function(hooks, next){
  var hooksDeleted = 0;

  hooks.forEach(function(hook){
    request.del({
      url     : webhookURL + '/' + hook.id,
      headers : { 'User-Agent' : 'raspberry-pi' },
    }, function(req, res, body){
        hooksDeleted += 1;
        if(hooksDeleted == hooks.length){
          if(next) next(body);
        }
      }
    );
  });
};


var create = function(opts, next){
  var newHook = {
    'name'    : 'web',
    'active'  : true,
    'events'  : ['issues'],
    'config'  : {
      'url' : opts.url,
      'content_type' : 'json'
    }
  };

  request.post(webhookURL, {
    body    : JSON.stringify(newHook),
    headers : { 'User-Agent': 'raspberry-pi' }
  }, function(err, res, body){
    if(next) next(err, JSON.parse(body));
  });
};


// Delete all existing hooks when starting application
// and create a new one matching the tunnel URL
exports.initialize = function(){
  tunnel.on('url', function(url){
    console.log('hosting at: ', url);

    getAll(function(currentHooks){
      deleteSome(currentHooks);
      create({
        url : url + '/bugs'
      }, function(err, res){
        if(err) console.log(err);
        else{
          console.log('Succesfully created hook');
          console.log(res);
        }
      });
    });
  });

  tunnel.on('error', function(err){
    console.log('Could not create tunnel ', err);
  });
};