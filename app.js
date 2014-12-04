
/**
 * Module dependencies.
 */

var express = require('express'),
    routes = require('./routes/router'),
    http = require('http'),
    path = require('path');

var app = express();
var __dirname = '.';

// all environments
app.set('port', 8888);
app.set('views', __dirname + '/views/');
app.set('view engine', 'html');
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/view', routes.view);
app.post('/view', routes.view);
app.get('/logout', routes.logout);
app.get('/searches', routes.searches);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});