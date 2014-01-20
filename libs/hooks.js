var request = require('request');

var webhookURL = ['https://',
  process.env.GITHUB_USERNAME,
  ':',
  process.env.GITHUB_PASSWORD,
  '@api.github.com/repos/joelongstreet/bug-face/hooks'
].join('');


exports.getAll = function(next){
  request({
    url     : webhookURL,
    headers : { 'User-Agent' : 'raspberry-pi' },
  }, function(req, res, body){
      next(JSON.parse(body));
    }
  );
};


exports.deleteSome = function(hooks, next){
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


exports.create = function(opts, next){
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