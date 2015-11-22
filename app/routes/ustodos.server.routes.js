'use strict';

module.exports = function(app) {
	var users = require('../../app/controllers/users.server.controller');
	var ustodos = require('../../app/controllers/ustodos.server.controller');

	// Ustodos Routes
	app.route('/ustodos')
		.get(users.requiresLogin, ustodos.list2)  // in C:\utd\150719utdG\app\controllers\ustodos.server.controller.js
		.post(users.requiresLogin, ustodos.create);

	app.route('/ustodobulkdel')
		.post(users.requiresLogin, ustodos.ustodobulkdel);

	app.route('/ustodos/:ustodoId') // from singlepage-ustodos.client.controller.js
		.get(users.requiresLogin, ustodos.read)
		.put(users.requiresLogin, ustodos.hasAuthorization, ustodos.update)
		.delete(users.requiresLogin, ustodos.hasAuthorization, ustodos.delete2);

	// Finish by binding the Ustodo middleware
	app.param('ustodoId', ustodos.ustodoByID);
};
