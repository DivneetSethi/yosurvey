'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Answer Schema
 */
var AnswerSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Answer name',
		trim: true
	},
    answer1: {
		type: String,
		default: '',
		required: 'Please fill Answer 1',
		trim: true
	},
    surveyid: {
		type: String,
		default: '',
		required: 'Please fill id',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	//user: {
	//	type: Schema.ObjectId,
	//	ref: 'User'
	//},
    Survey: {
		type: Schema.ObjectId,
		ref: 'Survey'
	}
});

mongoose.model('Answer', AnswerSchema);
