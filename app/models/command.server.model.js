'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Command Schema
 */
var CommandSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Command name',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Command', CommandSchema);