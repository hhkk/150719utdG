'use strict';

//if (global !== 'undefined')
//	require ('C:/utd/150719utdG/public/util/U_setup.js');

//var O = require('C:/utd/150719utdG/public/util/U_o.js');

//var UtilClass = require('C:/utd/150719utdG/public/util/UtilClass.js');
//var UtilString = require('C:/utd/150719utdG/public/util/UtilString.js');
//var O2 = require('C:/utd/150719utdG/public/util/U_o.js');
//var Ut_o = require('C:/utd/150719utdG/public/util/Ut_o.js');
//var uut_O3 = require('C:/utd/150719utdG/public/util/U_o.js');
////var UtilUrl4 = require('C:/utd/150719utdG/public/util/UtilUrl4.js');
//var UtilUrl4bUsesKrawlerToSupportServerController =
//	require('C:/utd/150719utdG/public/util/UtilUrl4bUsesKrawlerToSupportServerController.js');
var Db = require('mongodb').Db;
var Server = require('mongodb').Server;
var ObjectID = require('mongodb').ObjectID;
var require_Development = require('C:/utd/150719utdG/config/env/development.js');

//var UtilClass = require('C:/utd/150719utdG/public/util/UtilClass.js');
//var UtilString = require('C:/utd/150719utdG/public/util/UtilString.js');
//var O2 = require('C:/utd/150719utdG/public/util/U_o.js');
//var Ut_o = require('C:/utd/150719utdG/public/util/Ut_o.js');
//var uut_O3 = require('C:/utd/150719utdG/public/util/U_o.js');
////var UtilUrl4 = require('C:/utd/150719utdG/public/util/UtilUrl4.js');
//var UtilUrl4bUsesKrawlerToSupportServerController =
//	require('C:/utd/150719utdG/public/util/UtilUrl4bUsesKrawlerToSupportServerController.js');
//var UtilHtmlCleaner = require('C:/utd/150719utdG/public/util/UtilHtmlCleaner.js');




//var uu_ = uu_ || {};

//var U_error = require('C:/utd/150719utdG/public/util/U_error.js');
//require('C:/utd/150719utdG/public/util/U_setup.js');
//require('C:/utd/150719utdG/public/util/U_error2.js');
// hbkhbk8
//var U_error2 = require('C:/utd/150719utdG/public/util/U_error2.js');
//var U_error3 = require('C:/utd/150719utdG/public/util/U_error3.js');
//uu_.U_error2 = U_error2; // hbkhbk7
//uu_.U_error3 = U_error3; // hbkhbk7


//var UcHtmlDocManipulate = require('C:/utd/150719utdG/public/util/UcHtmlDocManipulate.js');


//var _ = require('lodash'),
//var xyhbk2 = 'C:/utd/150719utdG/app/models/user.server.model.js';
var	mongoose = require('mongoose'),
	User = mongoose.model('User');



//var UtilClass = require('.././UtilClass');
// u_.U_o.o ('__dirname:' + __dirname);  // __dirname:c:\utd\141213UtdV6\app\controllers
// C:\utd\141213UtdV6\app\controllers\ustodos.server.controller.js
//var UtilClass = require('../../public/modules/ustodo/UtilClass');
//var UtilNodeVsBrowser = require('../../public/modules/ustodo/UtilNodeVsBrowser');
//C:\utd\141213UtdV6\public\modules\ustodo\UtilClass.js
//C:\utd\141213UtdV6\public\lib\ustodo\UtilClass.js
//C:\utd\141213UtdV6\app\controllers\ustodos.server.controller.js


//var UtilHrefThisText = require('C:/utd/150719utdG/public/util/UtilHrefThisText.js');

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	Ustodo = mongoose.model('Ustodo'),
	_ = require('lodash');

/**
	 * Create a Ustodo
 */
u_.U_o.o ('&&&&&&&&&&000 init var callcountSaved = 0');

var callcountSaved = 0;

// section_create_new not section_write
// called by: // section_routes_from_
/**
 * hbkk
 * @param req
 * @param res - into the response we push a json data structure of an ustodo which is a model
 */
// called from >>>singlepage-ustodos.client.controller.js>>> line 3490 (was 2203)
//   1 search for "$scope.processCommand($scope.enumCommands.COMMAND_WRITE"
//   2 more detailed: search for: var ustodo = new Ustodos


function createOrSave(ustodo, user, res) {
	// with or without _doc seems to work, at least for schema elements
	ustodo._doc.html = ustodo._doc.html.trim();
	ustodo._doc.timely = 'yes';              // even w/o mongoose schema element, on server side, new attr here goes to db.
	//ustodo.dog = 'cat';                    // right: but same not true w/o _doc


	// hbkhbk ustodo._doc.html = UtilHtmlCleaner.utilHtmlCleanerFunctions.htmlTrimCrude(ustodo._doc.html); // xxd
	// works ustodo._doc.testArray2 = ['a','b'];
	//ustodo._doc.hkhkhk = 'hi hkhkhk'; _// doc gets to the DB and to the UI therefore
	ustodo._doc.user = user; // is this a test of an object sav?
	try {
		// do we want to clean?   we want to preserve the whole html - unless it's for rendering, but right now only
		if (false)
		 ustodo._doc.html = u_.UtilHtmlCleaner.utilHtmlCleanerFunctions.cleanHtmlPre(ustodo._doc.html);
	} catch (err) {
		//console.log(UtilClass.UtilClass('err', err));
		O.e('err in expandUrlsToHrefsReturnPatchedStr:' + err);
	}

	var res2WithJsonFn_receiveEscapedHtmlAndArrUrlUtds = {};
	// section_exports.create
	u_.U_o.o ('xxxxxxxxxxxxxxxxxxxxxxxxxin server.controller exports.create');
	res2WithJsonFn_receiveEscapedHtmlAndArrUrlUtds.json = function(rejoinedHtmlPostEscapeWithPairedArrUrlUtd, arrUrlUtdsFromHtml)
	{
		try {
			ustodo._doc.html = rejoinedHtmlPostEscapeWithPairedArrUrlUtd;
			ustodo._doc.text = u_.UtilHtmlCleaner.utilHtmlCleanerFunctions.cleanHtmlPre(ustodo._doc.html);
			ustodo._doc.arrUrlUtdsFromHtml = arrUrlUtdsFromHtml;

			//ustodo._doc.html = UtilHrefThisText.hrefThisText(ustodo._doc.html);
			//ustodo._doc.html = UtilHrefThisText.addNoContentEditableToHrefs(ustodo._doc.html);

			u_.U_o.o ('--------> xxxxxxxxxxxxxxxx saving content as both text and html [' + rejoinedHtmlPostEscapeWithPairedArrUrlUtd + ']');
			ustodo._doc.datelastmod = new Date();
			ustodo._doc.datecreated = new Date();





			u_.U_o.o ('^^^^^^^^^^^^^^^^^^^^^^^^ save new ustodo._doc.text:' + ustodo._doc.text);
			u_.U_o.o ('^^^^^^^^^^^^^^^^^^^^^^^^ save new ustodo._doc.html:' + ustodo._doc.html);
			u_.U_o.o ('^^^^^^^^^^^^^^^^^^^^^^^^ save new ustodo._doc.jsonx:' + ustodo._doc.jsonx);
			//u_.U_o.o ('^^^^^^^^^^^^^^^^^^^^^^^^ save new ustodo.jsony:' + ustodo.jsony);
			ustodo.save(function(err) {
				if (err) {
					console.log ('xxxxxxxxxxxxxxxxxxxxxxx error on save # [' + callcountSaved++ + '] of a created USTODO [' + ustodo._doc.html + ']');
					u_.U_o.o('!!!!!!!!!!!!!!!!ERROR *** write fail err [' +err + ']');
					return res.status(400).send({ // pairs with singlepage-ustodos.client.controller.js line 3512 function(errorResponse) {
						message: errorHandler.getErrorMessage(err)
					});
				} else {
					console.log ('xxxxxxxxxxxxxxxxxxxxxxx completed save # [' + callcountSaved++ + '] of a created USTODO [' + ustodo._doc.html + ']');
					res.jsonp(ustodo);
				}
			});

		} catch (err) {
			//console.log(UtilClass.UtilClass('err', err));
			u_.U_error.emitError('err in res2WithJsonFn_receiveEscapedHtmlAndArrUrlUtds.json:' + err);
		}

	};

	// get titles for text
	try {
		u_.U_o.o ('ustodo._doc.html pre spans cleaned:' + ustodo._doc.html);

		var htmlToCleanSpansOutOf = ustodo._doc.html;
		// working example from UtilHrefThisText.js
		// 	html = html.replace(/(.*)<a href=(.*)>(.*)<\/a>(.*)/, function(ori, a, b, c, d) {
		//<span class="makeThisNotContentEditable" contenteditable="false"><a href="http://tweeter.com" target="_blank">http://tweeter.com</a></span>
		var htmlToCleanSpansOutOf2 = htmlToCleanSpansOutOf.replace(/<span class="makeThisNotContentEditable" contenteditable="false"><a href=".*" target="_blank">(.*)\/\/(.*)<\/a><\/span>&nbsp;/,
			function(ori, a, b) {
				console.log ('a:' + a); //http or https
				console.log ('b:' + b); //pure url no http or https
				//var rtn = a+'<spanhk xxxcontenteditable=\'false\'><a href=xxx1' + b + '>xxx2' + c + '</a></spanhk>' + d;
				//html = a+'<spanhk xxxcontenteditable=\'false\'><a href=xxx1' + b + '>xxx2' + c + '</a></spanhk>' + d;
				//html = a+'<a><a href=xxx1' + b + '>xxx2' + c + '</a></a>' + d;
				//var htmlx = a+'<span class=\'makeThisNotContentEditable\'><a href=' + b + ' target=\'_blank\'>' + c + '</a></span>&nbsp;' + d;
				return a + '//' + b;
			});

		//ustodo._doc.text = 't2.' + ustodo._doc.text;
		ustodo._doc.html = htmlToCleanSpansOutOf2;

		ustodo._doc.html = ustodo._doc.html.replace(/&nbsp;/, ' ');


		u_.U_o.o ('ustodo._doc.html post spans cleaned:' + ustodo._doc.html);
		var htmlPretitledTrimmed = u_.UtilHtmlCleaner.utilHtmlCleanerFunctions.htmlTrimCrude(ustodo._doc.html);
		u_.UtilUrl4bUsesKrawlerToSupportServerController.expandUrlsToHrefsReturnPatchedStr(htmlPretitledTrimmed, res2WithJsonFn_receiveEscapedHtmlAndArrUrlUtds);
	} catch (err) {
		//console.log(UtilClass.UtilClass('err', err));
		u_.U_error.emitError('err in expandUrlsToHrefsReturnPatchedStr during create:' + err);
	}




}


exports.create = function(req, res)
{
	u_.U_o.o(' *************** Top of [exports.create] in [ustodos.server.controller.js]');
	u_.U_o.o('2222222222233333333333333333333 in ustodos.server.controller.js: create');
	// ustodo is a model object with getters and setters derived from the
	var ustodo = new Ustodo(req.body);
	createOrSave(ustodo, req.user, res);

};

/**
 * Show the current Ustodo
 */
exports.read = function(req, res) {
	u_.U_o.o(' *************** Top of [exports.read] in [ustodos.server.controller.js]');
	//u_.U_o.o ('in ustodos.server.controller.js: read');
	res.jsonp(req.ustodo);
};

/**
 * Update a Ustodo
 */
// section_update_existing section_save_Existing
exports.update = function(req, res)
{
	u_.U_o.o(' *************** Top of [exports.create] in [ustodos.server.controller.js]');
	var ustodo = req.ustodo ;
	ustodo = _.extend(ustodo , req.body); // needed?
	createOrSave(ustodo, req.user, res);





	// ORI [tweeter com - This website is for sale! - Stereo Resources and Information.] <span class="makeThisNotContentEditable" contenteditable="false"><a href="http://tweeter.com" target="_blank">http://tweeter.com</a></span>&nbsp;
	// minus title <span class="makeThisNotContentEditable" contenteditable="false"><a href="http://tweeter.com" target="_blank">http://tweeter.com</a></span>

	//var htmlToCleanSpansOutOf = ustodo._doc.html;
    //
	//// working example from UtilHrefThisText.js
	//// 	html = html.replace(/(.*)<a href=(.*)>(.*)<\/a>(.*)/, function(ori, a, b, c, d) {
	////<span class="makeThisNotContentEditable" contenteditable="false"><a href="http://tweeter.com" target="_blank">http://tweeter.com</a></span>
	//var htmlToCleanSpansOutOf2 = htmlToCleanSpansOutOf.replace(/<span class="makeThisNotContentEditable" contenteditable="false"><a href=".*" target="_blank">(.*)\/\/(.*)<\/a><\/span>&nbsp;/,
	//	function(ori, a, b) {
	//		console.log ('a:' + a); //http or https
	//		console.log ('b:' + b); //pure url no http or https
	//		//var rtn = a+'<spanhk xxxcontenteditable=\'false\'><a href=xxx1' + b + '>xxx2' + c + '</a></spanhk>' + d;
	//		//html = a+'<spanhk xxxcontenteditable=\'false\'><a href=xxx1' + b + '>xxx2' + c + '</a></spanhk>' + d;
	//		//html = a+'<a><a href=xxx1' + b + '>xxx2' + c + '</a></a>' + d;
	//		//var htmlx = a+'<span class=\'makeThisNotContentEditable\'><a href=' + b + ' target=\'_blank\'>' + c + '</a></span>&nbsp;' + d;
	//		return a + '//' + b;
	//	});
    //
	////ustodo._doc.text = 't2.' + ustodo._doc.text;
	//ustodo._doc.html = htmlToCleanSpansOutOf2;
	////ustodo._doc.jsonx = 'j2.' + ustodo._doc.jsonx;
	////u_.U_o.o('in ustodos.server.controller.js: update ' );
	//ustodo._doc.datelastmod = new Date();
	//var ustodoForFulltext = _.extend(ustodo);
	//delete ustodoForFulltext._doc.jsonx;
	////u_.U_o.o('in ustodos.server.controller.js: update ' );
    //
	////ustodo._doc.jsonx = JSON.stringify(ustodoForFulltext); // string
	//u_.U_o.o('in ustodos.server.controller.js: update [' + ustodo._doc.jsonx + ']');
    //
    //
    //
	//u_.U_o.o ('xx################# saving 1 ustodo._doc.text:' + ustodo._doc.text);
	//u_.U_o.o ('xx################# saving 2 ustodo._doc.html:' + ustodo._doc.html);
	//u_.U_o.o ('xx################# saving 3 ustodo._doc.jsonx:' + ustodo._doc.jsonx);
    //
	//ustodo.save(function (err, ustodosaved, numberAffected) {
	//	if (err) {
	//		u_.U_o.o('!!!!!!!!!!!!!!!!ERROR in ustodos.server.controller.js exports.update .save*** save fail err [' +err + ']');
	//		return res.status(400).send({
	//			message: errorHandler.getErrorMessage(err)
	//		});
	//	} else {
	//		u_.U_o.o('ustodo saved, html [' + ustodosaved.html +
	//			'] numberAffected [' + numberAffected +
	//			'] req.body._id [' + req.body._id + ']'
	//		);
    //
	//		u_.U_o.o ('^^^^^^^ method 1  req.user._doc.username [' + req.user._doc.username + ']');
    //
     //       //
	//		res.jsonp(ustodo);
	//	}
	//});
    //

	//ustodo.save(function(err) {
	//	if (err) {
	//       u_.U_o.o ('err in save:' + err);
	//		return res.status(400).send({
	//			message: errorHandler.getErrorMessage(err)
	//
	//		});
	//	} else {
	//		res.jsonp(ustodo);
	//	}
	//});
};

/**
 * Delete an Ustodo
 */
exports.delete2 = function(req, res) {
	u_.U_o.o(' *************** Top of [exports.delete2] in [ustodos.server.controller.js]');
	u_.U_o.o('_______________________ in ustodos.server.controller.js exports.delete ');

	var ustodo = req.ustodo;
	//if (!req.ustodo.isArray)
	u_.U_o.o('in ustodos.server.controller.js: delete ' + ustodo.toString());

	ustodo.remove(function (err) {
		if (err) {
			u_.U_o.o('!!!!!!!!!!!!!!!!ERROR in ustodos.server.controller.js exports.delete2  .remove*** save fail err [' +err + ']');
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.jsonp(ustodo);
		}
	});


};




exports.ustodobulkdel = function(req, res) {
	u_.U_o.o(' *************** Top of [exports.ustodobulkdel] in [ustodos.server.controller.js]');
	try
	{
		//u_.U_o.o ('in 1 exports.ustodobulkdel ');
		console.log ('in exports.ustodobulkdel');
		//u_.U_o.o('_______________________ in exports.ustodobulkdel  req.body.form:'+req.body.form);
		//u_.U_o.o('_______________________ in exports.ustodobulkdel  req.body.form.arrIdsToDelete:'+req.body.form.arrOidsToDelete);

		var arrIdsToDelete = req.body.form.arrOidsToDelete;
		//u_.U_o.o('_______________________ in exports.ustodobulkdel arrIdsToDelete:'+arrIdsToDelete);


		// http://docs.mongodb.org/manual/reference/method/db.collection.remove/

		u_.U_o.o('require_Development.db.uri:' + require_Development.db.uri.everythingAfterLast('/'));

		var dbWrite = new Db(require_Development.db.uri.everythingAfterLast('/'), new Server('localhost', 27017), {safe: false});
		dbWrite.open(function (err, dbWrite)
		{
			dbWrite.collection('ustodos', function (err, collRemove_ustodos)
			{
				try
				{
					// works collRemove_ustodos.remove({_id:new ObjectID(arrIdsToDelete[0])});
					var arrOidsToDelete = [];
					for (var j = 0; j < arrIdsToDelete.length; j++ )
					{
						arrOidsToDelete.push (new ObjectID(arrIdsToDelete[j]));
						//u_.U_o.o ('deleting id:' + arrIdsToDelete[j]);
					}

					collRemove_ustodos.update(
						{_id: {$in:arrOidsToDelete}},
						{ $set: { deleted: true}     }
					);

					//db.books.update(
					//	{ item: "EFG222" },
					//	{ $set: { reorder: false, tags: [ "literature", "translated" ] } },
					//	{ upsert: true, multi: true }
					//)

					//	collRemove_ustodos.remove({_id: {$in:arrOidsToDelete}} );

					u_.U_o.o('removed to dbWrite.collRemove_ustodos:' + dbWrite.databaseName+'.'+collRemove_ustodos.collectionName);
					u_.U_o.o('removed this many:' + arrOidsToDelete.length);
				} catch (err) {
					//console.log(UtilClass.UtilClass('err', err));
					O.e('err:' + err);
				}


				if (true)
					{
					collRemove_ustodos.ensureIndex({ lastmoddate: -1 } );
					console.log('collRemove_ustodos.ensureIndex({ lastmoddate: ok');
				}

				u_.U_o.o ('done with remote');
				var x = {result:'success'};
				res.json(x);
			});
		});

	} catch (e) {
		O.e('fail in bulk delete:' + e);
		res.status(403).send('Failure in bulk delete.  e:'+e);
	}
};

// WORKS as multi delete - commented in favor of update to set deletes boolean
//exports.ustodobulkdel = function(req, res) {
//	try
//	{
//		//u_.U_o.o ('in 1 exports.ustodobulkdel ');
//		console.log ('in exports.ustodobulkdel');
//		//u_.U_o.o('_______________________ in exports.ustodobulkdel  req.body.form:'+req.body.form);
//		//u_.U_o.o('_______________________ in exports.ustodobulkdel  req.body.form.arrIdsToDelete:'+req.body.form.arrOidsToDelete);
//
//		var arrIdsToDelete = req.body.form.arrOidsToDelete;
//		//u_.U_o.o('_______________________ in exports.ustodobulkdel arrIdsToDelete:'+arrIdsToDelete);
//
//
//		// http://docs.mongodb.org/manual/reference/method/db.collection.remove/
//		/**
//		 The db.collection.remove() method can have one of two syntaxes. The remove() method can take a query document and an optional justOne boolean:
//
//		 db.collection.remove(
//		 <query>,
//		 <justOne>
//		 )
//		 Or the method can take a query document and an optional remove options document:
//
//		 New in version 2.6.
//
//		 db.collection.remove(
//		 <query>,
//		 {
//           justOne: <boolean>,
//           writeConcern: <document>
//         }
//		 )*
//		 */
//
//		u_.U_o.o("require_Development.db.uri:" + require_Development.db.uri.everythingAfterLast("/"));
//
//		var dbWrite = new Db(require_Development.db.uri.everythingAfterLast("/"), new Server('localhost', 27017), {safe: false});
//		dbWrite.open(function (err, dbWrite)
//		{
//			dbWrite.collection('ustodos', function (err, collRemove_ustodos)
//			{
//				try
//				{
//					// works collRemove_ustodos.remove({_id:new ObjectID(arrIdsToDelete[0])});
//					var arrOidsToDelete = [];
//					for (var j = 0; j < arrIdsToDelete.length; j++ )
//					{
//						arrOidsToDelete.push (new ObjectID(arrIdsToDelete[j]));
//						//u_.U_o.o ('deleting id:' + arrIdsToDelete[j]);
//					}
//					collRemove_ustodos.remove({_id: {$in:arrOidsToDelete}} );
//
//					u_.U_o.o('removed to dbWrite.collRemove_ustodos:' + dbWrite.databaseName+'.'+collRemove_ustodos.collectionName);
//					u_.U_o.o('removed this many:' + arrOidsToDelete.length);
//				} catch (err) {
//					//console.log(UtilClass.UtilClass('err', err));
//					O.e('err:' + err);
//				}
//
//
//				if (true)
//				{
//					collRemove_ustodos.ensureIndex({ lastmoddate: -1 } );
//					console.log('collRemove_ustodos.ensureIndex({ lastmoddate: ok');
//				}
//
//				u_.U_o.o ('done with remote');
//				var x = {result:'success'};
//				res.json(x);
//			});
//		});
//
//	} catch (e) {
//		O.e('fail in bulk delete:' + e);
//		res.status(403).send('Failure in bulk delete.  e:'+e);
//	}
//};
//

/**
 * List of Ustodos
 *
 * used by
 * singlepage-ustodos.client.controller.js
 * $scope.ustodosQueryCommon = function (caller, jsonquery, callback) {
 * line 2983
 * return Ustodos.query(jsonquery, callback);     // maps to a get? in routes? is that a RESOURCE behavior?
 */

	//Dt_O.dt_o('dto1');

exports.list2 = function(req, res) { // 1509  from \app\routes\ustodos.server.routes.js


	//u_.U_o.o(' *************** bottom of [exports.list2] in [ustodos.server.controller.js] s:' + s);


	//u_.U_o.o ('utilclass.getclass of s:' + UtilClass.getClass(' res:', res))

	//UcHtmlDocManipulate.testScopeAccess();
	u_.U_o.o(' *************** bottom of [exports.list2] in [ustodos.server.controller.js]');

	u_.U_o.o('using back door');

	var query = req.query;
	//u_.U_o.o('in ustodos.server.controller.js: list query.querystring [' + query.q + ']');
	if (query.q !== null && query.q !== undefined)
		query.q = query.q.trim();
	else
		query.q = '';

	if (query.q === '*')   {
		//u_.U_o.o ('resetting * star to blank');
		query.q = '';
	}
	var require_ustodos_controller_helper = require('C:/utd/150719utdG/app/controllers/helpers/ustodos.controller.helper.js');
	//u_.U_o.o('in ustodos.server.controller.js: list, query.querystring: ' + query.q);
	require_ustodos_controller_helper.processCommandReadPortion(Ustodo, query.q.trim(), req, errorHandler, res, User);

	//u_.U_o.o ('query.querystring post trim [' + query.querystring+ ']');
	//54b143dde898903429ce32b1

	//try {
	//	var d = JSON.parse(query.querystring);
	//u_.U_o.o ('q is json [' + query.querystring + ']');
	//} catch (err) {
	//u_.U_o.o ('q is not json [' + query.querystring + ']');
	//}

	//u_.U_o.o ('in ustodos.server.controller.js: list, query: ' + query);


	//
	//
	//try {
	//	re = new RegExp(query.querystring);
	//	//u_.U_o.o ('************************** legal reg exp input query.querystring [' + query.querystring + ']');
	//} catch (err) {
	//	//u_.U_o.o ('************************** illegal reg exp input query.querystring [' + query.querystring + ']');
	//	re = new RegExp('');
	//}



	//var parseTitleTagFromHtml = function(html) {
	//    var titletag = '<title>';
	//    var iTitle = html.toLowerCase().indexOf(titletag);
	//    var iTitleEnd = html.toLowerCase().indexOf('</title>');
	//    var title = null;
	//    if (iTitle === -1 || iTitleEnd === -1) {
	//        title = '   no title';
	//    } else {
	//        title = html.slice(iTitle+7,iTitleEnd).trim();
	//    }
	//};


	//if (query.querystring.endsWith())
	//var commandTrimmed = ;
	//u_.U_o.o ('not endswith w');



	//// if write   in write
	//if (UtilString.endsWith(commandTrimmed, ' w'))
	//{
	//    var commandRemoved = commandTrimmed.slice(0, commandTrimmed.length-2);
	//    //u_.U_o.o(' ========================================= in ustodos.server.controller.js: w save ' +
	//        //', commandTrimmed [' + commandTrimmed + '] ' + ', commandRemoved [' + commandRemoved + '] ' );
	//    u_.U_o.o ('in endswith w commandTrimmed [' + commandTrimmed + ']');
	//    var ustodo = new Ustodo();
	//    ustodo.user = req.user;
	//
	//    try {
	//        var res2WithJsonFn = {};
	//        res2WithJsonFn.json = function(s)
	//        {
	//            u_.U_o.o ('--------> saving content as both text and html [' + s + ']');
	//
	//            ustodo._doc.text = s;
	//            ustodo._doc.html = s;
	//
	//            ustodo.save(function(err) {
	//                if (err) {
	//                    u_.U_o.o('*** write fail commandTrimmed [' +commandTrimmed + ']');
	//                    u_.U_o.o('*** write fail err [' +err + ']');
	//                    return res.status(400).send({
	//                        message: errorHandler.getErrorMessage(err)
	//                    });
	//                } else {
	//                    //now process read aspect only of query
	//                    require_ustodos_controller_helper.processCommandReadPortion(Ustodo, commandTrimmed, req, errorHandler, res);
	//                    u_.U_o.o('*** write success commandTrimmed [' +commandTrimmed + ']');
	//                }
	//            });
	//        };
	//
	//        UtilUrl4.expandUrlsToHrefsReturnPatchedStr(commandRemoved, res2WithJsonFn);
	//
	//
	//    } catch (e) {
	//        u_.U_o.o('erra:' + e);
	//        throw e;
	//    }
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//}
	//else{
	//    u_.U_o.o ('not endswith w');
	//    require_ustodos_controller_helper.processCommandReadPortion(Ustodo, commandTrimmed, req, errorHandler, res);
	//    }

};

/**   * Ustodo middleware  */
exports.ustodoByID = function(req, res, next, id)
{
	try
	{
		u_.U_o.o(' *************** Top of [exports.ustodoByID] in [ustodos.server.controller.js]');
		u_.U_o.o('in ustodoByID id:' + id);
		//var s = Ustodo.findById(id);

		// ORIGINAL A/B SPLIT
		// A
		Ustodo.findById(id).populate('user', 'username').exec(function (err, ustodo) {
			// B
			// Ustodo.findOne({name:/ia/}).populate('user', 'displayName').exec(function(err, ustodo) {
			if (err)
				return next(err);
			if (!ustodo)
				return next(new Error('Failed to load Ustodo ' + id));
			req.ustodo = ustodo;
			next();
		});
	} catch (e) {
		u_.U_error.emitError ('o from o in list2', e); // hbkhbk7
	}
};

/**  * Ustodo authorization middleware  */
exports.hasAuthorization = function(req, res, next) {
	u_.U_o.o(' *************** Top of [exports.hasAuthorization] in [ustodos.server.controller.js]');
	u_.U_o.o('@@@@@@@@@@@@@@@@@ Checking auth for req.user.username [' + req.user._doc.username + ']');
	if (!req.ustodo._doc.user)
		u_.U_o.o('@@@@@@@@@@@@@@@@@ Checking auth for req.ustodo.user.id but: !req.ustodo._doc.user');
	else
	{
		u_.U_o.o('@@@@@@@@@@@@@@@@@ Checking auth for req.ustodo.user.id [' + req.ustodo._doc.user._doc.id + ']');
		u_.U_o.o('@@@@@@@@@@@@@@@@@ Checking auth for req.ustodo.user.username [' + req.ustodo._doc.user._doc.username + ']');
	}

	// also works
	//User.findById(req.user.id, function (err, user) {
	//	//done(err, user);
	//	if (!err) {
	//		u_.U_o.o ('CHECKED AUTH OK:  ' +
	//			'user [' + user +
	//			']  user.username [' + user.username + ']' );
	//	}ReferenceError: _id is not defined else {
	//		U_error.emitError("CHECKED AUTH ", err);
	//	}
	//});

	try {
		if (req.body.id)
			u_.U_o.o ('req.user.id:'+req.body.id);
		else
			u_.U_o.o ('no req.body.id');

		if (req.user.id)
			u_.U_o.o ('req.user.id:'+req.user.id);
		else
			u_.U_o.o ('no req.user.id');

		if (req.ustodo._doc.user.id !== req.user.id) // eg, req.user.id = 5673beb86797f3643033dbf7
		{

			u_.U_o.o ('!!!!!!!!!!!!!!!!ERROR User is not authorized for action (not owns the record?).  req.ustodo.user.id  [' + req.ustodo.user.id  + ']  req.user.id [' + req.user.id + ']');
			return res.status(403).send('User is not authorized');
		}
	} catch (e) {
		u_.U_error.emitError(e);
	}
	next();
};


