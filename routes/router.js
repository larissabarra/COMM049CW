
/*
 * GET home page.
 */

exports.index = function(request, response){
  response.sendfile('./views/index.html');
};

exports.view = function(request, response){
    response.sendfile('./views/main.html');
};

exports.logout = function(request, response){
    response.sendfile('./views/logout.html');
};

exports.searches = function(request, response){
    response.sendfile('./views/searches.html');
};