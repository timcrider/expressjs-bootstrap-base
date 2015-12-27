var fs = require('fs')
	,path = require('path')
	,_ = require('lodash')
	,express = require('express')
	,app = express()
	,engine = require('ejs-locals')
	,layouts = require('express-ejs-layouts')
	,config = require('./config');

/**
 * 
 */
app.configure(function() {
	app.set('views', __dirname+'/views');
	app.set('view engine', 'ejs');
	app.use(layouts);
	app.set('layout', 'layouts/inner');
	app.use(app.router);
	app.use(express.bodyParser());
	app.use(express.cookieParser());
	app.use(express.methodOverride());
	app.use(express.static(path.join(__dirname, 'public')));
	app.enable("jsonp callback");
	app.engine('ejs', engine);
});

// Template locals
app.locals({
	appPath : __dirname
	,_: _
	,_currentSection: ''
	,_header: config.header
	,_foo: 'bar'
	,_title: config.site.title
});

// Include routes
require('./routes/base')(app);
/*
app.get('/', function(req, res, next) {
	res.render('main',{
		foo: 'bar'
		,_currentSection: 'home'
		,layout: 'layouts/home'
	});
});


app.get('/about', function(req, res, next) {
	res.render('about',{
		_currentSection: 'about'
	});
});
*/

/**
 * Start the server on configured port
 */
var server = app.listen(config.express.port);
console.log('Listening on: '+config.express.port);
