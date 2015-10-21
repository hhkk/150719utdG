'use strict';

/**
 * Module dependencies.
 */
//  hbklrb2
exports.index = function(req, res) {
	//try {
    //
	//	console.log ('req.cookies.connect.sid:'+req.cookies.connect.sid);
	//} catch (e) {
	//	console.log (err.stack);
	//}
	res.render('index', // app\views\index.server.view.html (express.js added 'server.view.html')
	{
		user: req.user || null,
		request: req
	});
};
