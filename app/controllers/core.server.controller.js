'use strict';

/**
 * Module dependencies.
 */
exports.index = function(req, res) {
	res.render('index', // app\views\index.server.view.html (express.js added “server.view.html")
	{
		user: req.user || null,
		request: req
	});
};
