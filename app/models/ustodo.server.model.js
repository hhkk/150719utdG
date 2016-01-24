'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Ustodo Schema
 */
var UstodoSchema = new Schema({

	// presence of a name here forces its being saved
	//utdUserCommand: {
	//	type: String
	//	//default: '',
	//	//trim: true
	//},
	zzz2: {
		type: String,
		default: 'defaultzzz',
		required: 'Please enter Ustodoori html',
		trim: true
	},
	ttt5: {
		type: String,
		default: 'defaultttt',
		required: 'Please enter ttthtml',
		trim: true
	},
	text: {
		type: String,
		default: '',
		trim: true
	},
	//jsonx
	jsonx: {
		type: String,
		default: '',
		trim: true
	},
	html: {
		type: String,
		default: '',
		required: 'Please enter Ustodoori html',
		trim: true
	},
	datelastmod: {
		type: Date,
		required: 'Please enter datelastmod',
		default: Date.now
	},
	datecreated: {
		type: Date,
		required: 'Please enter datecreated',
		default: Date.now
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		// ref like a join setup http://mongoosejs.com/docs/2.7.x/docs/populate.html
		type: Schema.ObjectId,
		ref: 'User'
	}


	//name: {
	//	type: String,
	//	default: '',
	//	required: 'Please fill Ustodo name',
	//	trim: true
	//},
	//created: {
	//	type: Date,
	//	default: Date.now
	//},
	//modified: {
	//	type: Date,
	//	default: Date.now
	//},
	//user: {
	//	type: Schema.ObjectId,
	//	ref: 'User'
	//}

});

mongoose.model('Ustodo', UstodoSchema);
