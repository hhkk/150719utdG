'use strict';
var O = require('C:/utd/150719utdG/public/util/O.js');

/**
 * Module dependencies.
 */
//  hbklrb2
exports.index = function(req, res) {
	//try {
	//	console.log ('req.cookies.connect.sid:'+req.cookies.connect.sid);
	//} catch (e) {
	//	console.log (err.stack);
	//}


	// hbklrb added by hbk 10/24/2015
	//console.log ('ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd');
	O.o ('ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd');
	//if (!req.isAuthenticated()) {
	//	res.redirect('/#!/signin');

	//	//O.o ('user is not logged in' );
	//	//return res.status(401).send({
	//	//	message: 'User is not logged in hk'
	//	//});
	//}
	//else{
	//	O.o ('user is logged in req.user._doc.create:' + req.user._doc.created );
	//	O.o ('user is logged in req.user._doc.email:' + req.user._doc.email );
	//	O.o ('user is logged in req.user._doc.firstName:' + req.user._doc.firstName );
	//	O.o ('user is logged in req.user._doc.lastName:' + req.user._doc.lastName );
	//	O.o ('user is logged in req.user._doc.displayName:' + req.user._doc.displayName );
	//	O.o ('user is logged in req.user._doc.username:' + req.user._doc.username );
	//	O.o ('user is logged in req.user._doc.email:' + req.user._doc.email );
	//}





	res.render('index', // app\views\index.server.view.html which extends layout
	// (express.js added 'server.view.html')
	{
		user: req.user || null,
		request: req
	});
};
