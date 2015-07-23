'use strict';

module.exports = function(app) {
	var users = require('../../app/controllers/users.server.controller');
	var microphones = require('../../app/controllers/microphones.server.controller');

	// Microphones Routes
	app.route('/microphones')
		.get(microphones.list)
		.post(users.requiresLogin, microphones.create);

	app.route('/microphones/:microphoneId')
		.get(microphones.read)
		.put(users.requiresLogin, microphones.hasAuthorization, microphones.update)
		.delete(users.requiresLogin, microphones.hasAuthorization, microphones.delete);

	// Finish by binding the Microphone middleware
	app.param('microphoneId', microphones.microphoneByID);
};
