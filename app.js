
/**
 * Module dependencies.
 */

var express = require('express'),
    routes = require('./routes/router'),
    http = require('http'),
    path = require('path');

var app = express();
var __dirname = '.';

//server options
app.set('port', 8888);
app.use(express.logger('dev'));
//views
app.set('views', __dirname + '/views/');
app.set('view engine', 'html');
app.use(express.bodyParser());
//required for sessions
app.use(express.cookieParser('your secret here'));
app.use(express.session());
//routes
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.index);
app.get('/view', routes.view);
app.post('/view', routes.view);
app.get('/logout', routes.logout);
app.get('/searches', routes.searches);

//dealing with cache - offline.appcache gets these paths
app.get('/:file', function(request, response){
    response.sendfile(__dirname + '/views/' + request.params.file);
});
app.post('/:file', function(request, response){
    response.sendfile(__dirname + '/views/' + request.params.file);
});
app.get('/public/:resource/:file', function(request, response){
    response.sendfile(__dirname + '/public/' + request.params.resource + "/" + request.params.file);
});
app.get('/:resource/:file', function(request, response){
    response.sendfile(__dirname + '/public/' + request.params.resource + "/" + request.params.file);
});


http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});