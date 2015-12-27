module.exports = function(app) {
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

};
