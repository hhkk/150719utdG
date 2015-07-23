'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Microphone Schema
 */
var MicrophoneSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Microphone name',
		trim: true
	},
	bbgg: {
		type: String,
		default: '',
		required: 'Please fill Microphone bbgg',
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

mongoose.model('Microphone', MicrophoneSchema);
