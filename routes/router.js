
/*
 * GET home page.
 */
var __dirname = 'workspace/COMM049CW/views';

exports.index = function(request, response){
    response.sendfile(__dirname + '/index.html');
};

exports.view = function(request, response){
    response.sendfile(__dirname + '/main.html');
};

exports.logout = function(request, response){
    response.sendfile(__dirname + '/logout.html');
};

exports.searches = function(request, response){
    response.sendfile(__dirname + '/searches.html');
};