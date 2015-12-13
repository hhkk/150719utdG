'use strict';

var O = require('C:/utd/150719utdG/public/util/O.js');

/**
 * Module dependencies.
 */
var _ = require('lodash'),
	mongoose = require('mongoose'),
	User = mongoose.model('User');

/**
 * User middleware
 */
exports.userByID = function(req, res, next, id) {
	User.findById(id).exec(function(err, user) {
		if (err)
			return next(err);

		if (!user)
			return next(new Error('Failed to load User ' + id));

		req.profile = user;
		next();
	});
};

/**
 * Require login routing middleware
 */
exports.requiresLogin = function(req, res, next) {

	if (!req.isAuthenticated()) {
		O.o ('Error in exports.requiresLogin: user is not logged in and action apparently requires isAuthenticated' );
		return res.status(401	).send({
			message: 'User is not logged in'
		});
	}
	else{
		//O.o ('user is logged in req.user._doc.create:' + req.user._doc.created );
		//O.o ('user is logged in req.user._doc.email:' + req.user._doc.email );
		//O.o ('user is logged in req.user._doc.firstName:' + req.user._doc.firstName );
		//O.o ('user is logged in req.user._doc.lastName:' + req.user._doc.lastName );
		//O.o ('user is logged in req.user._doc.displayName:' + req.user._doc.displayName );
		O.o ('in exports.requiresLogin: user is logged in req.user._doc.username:' + req.user._doc.username );
		//O.o ('user is logged in req.user._doc.email:' + req.user._doc.email );
	}

	next();
};

/**
 * User authorizations routing middleware
 */
exports.hasAuthorization = function(roles) {
	var _this = this;

	return function(req, res, next) {
		_this.requiresLogin(req, res, function() {
			if (_.intersection(req.user.roles, roles).length) {
				return next();
			} else {
				return res.status(403).send({
					message: 'User is not authorized'
				});
			}
		});
	};
};
