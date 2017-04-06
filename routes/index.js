



/*
 * GET home page.
 */

exports.index = function(req, res){
  // res.set('X-XSS-Protection',0);
  res.render('index', { title: 'Express' });
};

