'use strict';

//  hbklrb1

module.exports = function(app) {
	// Root routing
	var core = require('../../app/controllers/core.server.controller');
    //app.route('q=').get(core.index);
    //app.route('/hk').get(core.index);
	app.route('/').get(core.index);           // this is index in core.server.controller
	//app.route('/').get(core.index);           // this is index in core.server.controller
};
