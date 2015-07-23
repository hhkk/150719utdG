'use strict';

var should = require('should'),
	request = require('supertest'),
	app = require('../../server'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	Microphone = mongoose.model('Microphone'),
	agent = request.agent(app);

/**
 * Globals
 */
var credentials, user, microphone;

/**
 * Microphone routes tests
 */
describe('Microphone CRUD tests', function() {
	beforeEach(function(done) {
		// Create user credentials
		credentials = {
			username: 'username',
			password: 'password'
		};

		// Create a new user
		user = new User({
			firstName: 'Full',
			lastName: 'Name',
			displayName: 'Full Name',
			email: 'test@test.com',
			username: credentials.username,
			password: credentials.password,
			provider: 'local'
		});

		// Save a user to the test db and create new Microphone
		user.save(function() {
			microphone = {
				name: 'Microphone Name'
			};

			done();
		});
	});

	it('should be able to save Microphone instance if logged in', function(done) {
		agent.post('/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new Microphone
				agent.post('/microphones')
					.send(microphone)
					.expect(200)
					.end(function(microphoneSaveErr, microphoneSaveRes) {
						// Handle Microphone save error
						if (microphoneSaveErr) done(microphoneSaveErr);

						// Get a list of Microphones
						agent.get('/microphones')
							.end(function(microphonesGetErr, microphonesGetRes) {
								// Handle Microphone save error
								if (microphonesGetErr) done(microphonesGetErr);

								// Get Microphones list
								var microphones = microphonesGetRes.body;

								// Set assertions
								(microphones[0].user._id).should.equal(userId);
								(microphones[0].name).should.match('Microphone Name');

								// Call the assertion callback
								done();
							});
					});
			});
	});

	it('should not be able to save Microphone instance if not logged in', function(done) {
		agent.post('/microphones')
			.send(microphone)
			.expect(401)
			.end(function(microphoneSaveErr, microphoneSaveRes) {
				// Call the assertion callback
				done(microphoneSaveErr);
			});
	});

	it('should not be able to save Microphone instance if no name is provided', function(done) {
		// Invalidate name field
		microphone.name = '';

		agent.post('/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new Microphone
				agent.post('/microphones')
					.send(microphone)
					.expect(400)
					.end(function(microphoneSaveErr, microphoneSaveRes) {
						// Set message assertion
						(microphoneSaveRes.body.message).should.match('Please fill Microphone name');
						
						// Handle Microphone save error
						done(microphoneSaveErr);
					});
			});
	});

	it('should be able to update Microphone instance if signed in', function(done) {
		agent.post('/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new Microphone
				agent.post('/microphones')
					.send(microphone)
					.expect(200)
					.end(function(microphoneSaveErr, microphoneSaveRes) {
						// Handle Microphone save error
						if (microphoneSaveErr) done(microphoneSaveErr);

						// Update Microphone name
						microphone.name = 'WHY YOU GOTTA BE SO MEAN?';

						// Update existing Microphone
						agent.put('/microphones/' + microphoneSaveRes.body._id)
							.send(microphone)
							.expect(200)
							.end(function(microphoneUpdateErr, microphoneUpdateRes) {
								// Handle Microphone update error
								if (microphoneUpdateErr) done(microphoneUpdateErr);

								// Set assertions
								(microphoneUpdateRes.body._id).should.equal(microphoneSaveRes.body._id);
								(microphoneUpdateRes.body.name).should.match('WHY YOU GOTTA BE SO MEAN?');

								// Call the assertion callback
								done();
							});
					});
			});
	});

	it('should be able to get a list of Microphones if not signed in', function(done) {
		// Create new Microphone model instance
		var microphoneObj = new Microphone(microphone);

		// Save the Microphone
		microphoneObj.save(function() {
			// Request Microphones
			request(app).get('/microphones')
				.end(function(req, res) {
					// Set assertion
					res.body.should.be.an.Array.with.lengthOf(1);

					// Call the assertion callback
					done();
				});

		});
	});


	it('should be able to get a single Microphone if not signed in', function(done) {
		// Create new Microphone model instance
		var microphoneObj = new Microphone(microphone);

		// Save the Microphone
		microphoneObj.save(function() {
			request(app).get('/microphones/' + microphoneObj._id)
				.end(function(req, res) {
					// Set assertion
					res.body.should.be.an.Object.with.property('name', microphone.name);

					// Call the assertion callback
					done();
				});
		});
	});

	it('should be able to delete Microphone instance if signed in', function(done) {
		agent.post('/auth/signin')
			.send(credentials)
			.expect(200)
			.end(function(signinErr, signinRes) {
				// Handle signin error
				if (signinErr) done(signinErr);

				// Get the userId
				var userId = user.id;

				// Save a new Microphone
				agent.post('/microphones')
					.send(microphone)
					.expect(200)
					.end(function(microphoneSaveErr, microphoneSaveRes) {
						// Handle Microphone save error
						if (microphoneSaveErr) done(microphoneSaveErr);

						// Delete existing Microphone
						agent.delete('/microphones/' + microphoneSaveRes.body._id)
							.send(microphone)
							.expect(200)
							.end(function(microphoneDeleteErr, microphoneDeleteRes) {
								// Handle Microphone error error
								if (microphoneDeleteErr) done(microphoneDeleteErr);

								// Set assertions
								(microphoneDeleteRes.body._id).should.equal(microphoneSaveRes.body._id);

								// Call the assertion callback
								done();
							});
					});
			});
	});

	it('should not be able to delete Microphone instance if not signed in', function(done) {
		// Set Microphone user 
		microphone.user = user;

		// Create new Microphone model instance
		var microphoneObj = new Microphone(microphone);

		// Save the Microphone
		microphoneObj.save(function() {
			// Try deleting Microphone
			request(app).delete('/microphones/' + microphoneObj._id)
			.expect(401)
			.end(function(microphoneDeleteErr, microphoneDeleteRes) {
				// Set message assertion
				(microphoneDeleteRes.body.message).should.match('User is not logged in');

				// Handle Microphone error error
				done(microphoneDeleteErr);
			});

		});
	});

	afterEach(function(done) {
		User.remove().exec();
		Microphone.remove().exec();
		done();
	});
});