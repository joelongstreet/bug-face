var hooks = require('./libs/hooks');

hooks.getAll(function(currentHooks){
  hooks.deleteSome(currentHooks);
  hooks.create({
    url : 'https://pnrbvjqsea.localtunnel.me/bugs'
  }, function(err, res){
    if(err) console.log(err);
    else console.log('Succesfully created hook #' + res.id);
  });
});