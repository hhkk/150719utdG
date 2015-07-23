'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	Microphone = mongoose.model('Microphone'),
	_ = require('lodash');

/**
 * Create a Microphone
 */
exports.create = function(req, res) {
	var microphone = new Microphone(req.body);
	microphone.user = req.user;

	microphone.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(microphone);
		}
	});
};

/**
 * Show the current Microphone
 */
exports.read = function(req, res) {
	res.jsonp(req.microphone);
};

/**
 * Update a Microphone
 */
exports.update = function(req, res) {
	var microphone = req.microphone ;

	microphone = _.extend(microphone , req.body);

	microphone.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(microphone);
		}
	});
};

/**
 * Delete an Microphone
 */
exports.delete = function(req, res) {
	var microphone = req.microphone ;

	microphone.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(microphone);
		}
	});
};

/**
 * List of Microphones
 */
exports.list = function(req, res) { 
	Microphone.find().sort('-created').populate('user', 'displayName').exec(function(err, microphones) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(microphones);
		}
	});
};

/**
 * Microphone middleware
 */
exports.microphoneByID = function(req, res, next, id) { 
	Microphone.findById(id).populate('user', 'displayName').exec(function(err, microphone) {
		if (err) return next(err);
		if (! microphone) return next(new Error('Failed to load Microphone ' + id));
		req.microphone = microphone ;
		next();
	});
};

/**
 * Microphone authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
	if (req.microphone.user.id !== req.user.id) {
		return res.status(403).send('User is not authorized');
	}
	next();
};
