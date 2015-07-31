'use strict';

module.exports = function(app) {
	var users = require('../../app/controllers/users.server.controller');
	var ustodos = require('../../app/controllers/ustodos.server.controller');

	// Ustodos Routes
	app.route('/ustodos')
		.get(users.requiresLogin, ustodos.list2)
		.post(users.requiresLogin, ustodos.create);

	app.route('/ustodos/:ustodoId')
		.get(users.requiresLogin, ustodos.read)
		.put(users.requiresLogin, ustodos.hasAuthorization, ustodos.update)
		.delete(users.requiresLogin, ustodos.hasAuthorization, ustodos.delete2);

	// Finish by binding the Ustodo middleware
	app.param('ustodoId', ustodos.ustodoByID);
};
