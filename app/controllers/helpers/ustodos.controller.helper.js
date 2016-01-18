'use strict';


// var ustodos.controller.helper = require('C:/utd/150719utdG/app/controllers/helpers/ustodos.controller.helper.js');
//processCommandReadPortion

var UtilHrefThisText = require('C:/utd/150719utdG/public/util/UtilHrefThisText.js');
var O = require('C:/utd/150719utdG/public/util/O.js');
var UtilClass = require('C:/utd/150719utdG/public/util/UtilClass.js');
var UtilErrorEmitter = require('C:/utd/150719utdG/public/util/UtilErrorEmitter.js');
//var UserController = require('C:/utd/150719utdG/app/controllers/users/users.authorization.server.controller.js');
var async = require('async');
//var	mongoose = require('mongoose');
//var User = require ('C:/utd/150719utdG/app/models/user.server.model.js');
//var User = mongoose.model('User');

//var xyhbk = 'C:/utd/150719utdG/app/models/user.server.model.js';
//var	mongoose = require('mongo	ose'),

/**
 * Module dependencies.
 */
//var Db = require('mongodb').Db;
//var Server = require('mongodb').Server;
//var ObjectID = require('mongodb').ObjectID;
//
//var mongoose = require('mongoose'),
//	errorHandler = require('./../errors.server.controller'),
//	User = mongoose.model('User'),
//	_ = require('lodash');



var parseUserInputStringCreateMongoQuery = function(querystringTrimmed, req)
{
    var queryTokens = (querystringTrimmed.toLowerCase()).split(/\s+/); //input.split(/(\s*,?\s*)+/)

    O.o ('################################### HBKK 1509  queryTokens.length:' + queryTokens.length);

    var querymongo = null;

    var arrRegExpsToOr = [];
    for (var i = 0; i < queryTokens.length; i++)
    {

        try {
            var re = new RegExp(queryTokens[0], 'i');
			O.o ('################################### HBKK 1509  re [' + i + '] ' + re);
            arrRegExpsToOr.push ({text:re});
            //[{text:rea}, {text:reb}]
        } catch (e) {
			O.e ('error!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ', e)
        }
        if (arrRegExpsToOr.length > 4) // keep only n for the mongo query, the rest we will constrain for
            break;
    }

    //querymongo = {$or: arrRegExpsToOr};
    querymongo = {$and:[{$or: arrRegExpsToOr},{$or: arrRegExpsToOr}, {deleted:{$ne:true}}]}; // hbkk this is the default loader at page init time

    //var rex = new RegExp(queryTokens[0], "i");
    //querymongo = {text:rex};
    //var sClassrex = UtilClass.getClass(rex);
    //O.o ('sClassHK rex :' + sClassrex);

    // 1
    //var  yhk = new RegExp(queryTokens[0], 'i');
    //querymongo = {text:yhk};    // works but not case ins

    //var y = new RegExp(queryTokens[0], 'i');

    //var t = 'thorx';
    //var v = 'thorx';
    //if (t === v) {
    //    console.log ('11&&&&&&&&&&&&&&&&&& same hk u:' + u);
    //}  else {
    //    console.log ('11&&&&&&&&&&&&&&&&&& not same hku:' + u);
    //}
    //var u = queryTokens[0];
    //if (t === u) {
    //    console.log ('22&&&&&&&&&&&&&&&&&& same hk u:' + u);
    //}  else {
    //    console.log ('22&&&&&&&&&&&&&&&&&& not same hku:' + u);
    //}
    //
    //var y = new RegExp(t, 'i');


    // 2 etc
    //querymongo = {text:y};    // works but not case ins



    //var w = 'thorx'
    //var w = queryTokens[0];
    //var wp = new RegExp(w, 'i');
    //var queryw = {text:wp}; // works


    // 3 etc
    //querymongo = {text:queryTokens[0]}; // no work as case or substring
    //querymongo = {text:/queryTokens[0]/}; // no work at all
    //querymongo = {text:/queryTokens[0]/}; // no work
    //querymongo = {text:/queryTokens[0]/i}; // no work

    // {$regex: new RegExp('^' + username.toLowerCase(), 'i')}

    //console.log ('UtilClass.getClass(regexp):'+ UtilClass.getClass(regexp));

    //var querymongo = {text:'/'+query.querystring+'/'};
    //{ "$regex": '/europe/', "$options": 'i'}

    //O.o ('@@@@@@@@@@@@@ JSON.stringify(querymongo) querystringTrimmed [' + querystringTrimmed + '] [' + JSON.stringify(querymongo) + ']');
    //return querymongo;
    return querymongo ;

};



exports.processCommandReadPortion = function(Ustodo, querystringTrimmed, req, errorHandler, res, User) {

    O.o (' in processCommandReadPortion ');

    //var regexp = new RegExp(query.querystring);
    //var regexp = new RegExp(querystringTrimmed.toLowerCase(), 'i');
    //var querymongo = {text:regexp};

    //var queryTokens = (querystringTrimmed.toLowerCase()).split(' '); //

    var queryTokens = (querystringTrimmed.toLowerCase()).split(/\s+/); //input.split(/(\s*,?\s*)+/)
    var querymongo = parseUserInputStringCreateMongoQuery(querystringTrimmed, req);

    var hklimit = 50; // 50 100 200 500 1000
    var countResult = 0;
    var arrUstodoPassedAllFilters = [];

    //O.o('step: querymongo:' + querymongo) ;
    //Ustodo.find().exec(function(err, ustodos) {
    //var sClass = UtilClass.getClass('Ustodo', Ustodo);
    //O.o ('sClassHK ustodo:' + sClass);
	O.o ('xpre query querymongo [' + querymongo + ']');
    Ustodo.find(querymongo).sort('-datelastmod').limit(hklimit).populate('user', 'username displayName _id').exec (
		// call back from find query:
		function(err, ustodos)
		{
			//Ustodo.find(querymongo).populate('user', 'displayName').exec(function(err, ustodos) {
			if (err)
			{
				console.log ('!!!!!!!! err.toString():' + err.toString());
				return res.status(400).send({
					  message: errorHandler.getErrorMessage(err)

				});
			}
			else // no error on query
			{
				//if (query.querystring === '')
				//var arrUstodoPassedAllFilters = ustodos.slice[0,20]
				// console.log ('&&&&&&&&&&&&&&&&&&& pre result loop');


				var mapUserIdToUserNameStr = {};
				// for each record from the DB based only on the search portion retained
				for (var k = 0; k < (ustodos.length) && arrUstodoPassedAllFilters.length < hklimit; k++)
				{
					mapUserIdToUserNameStr[ustodos[k].user._id] = null;
					//console.log ('&&&&&&&&&&&&&&&&&&& in result loop');
					countResult = countResult + 1;
					//ustodos[k].text = 'svr2,' + ustodos[k].text;
					var tt = UtilHrefThisText.hrefThisText(ustodos[k].text);
					var keeper = true; //assume keep until proven otherwise

					// if the user enters say 5 search keys, not all are applied to mongo, this is the remainder filter
					// apply second (in mem not just mongo) filter - first was the pull by mongo - now check that list against user inputs not in the query
					for (var i = 0; i < queryTokens.length; i++) {
						//console.log ('&&&&&&&&&&&&&&&&&&& in result loop tt [' + tt + '] queryTokens[i] [' + queryTokens[i] + ']');
						if (tt.toLowerCase().indexOf(queryTokens[i]) < 0)
						{
							keeper = false; // failed one of the search keys, fail overall
							break;
						}
					}

					if (keeper)
					{
						//O.o ('&&&&&&&&&&&&&&&&&&& in result loop a keeper' );

						// convert text to HREFs
						//var hrefdText = UtilHrefThisText.hrefThisText(ustodos[k].text);
						//O.o ('-------------- kept text hrefd:' + hrefdText);
						//ustodos[k]._doc.text = hrefdText;
						// convert html to HREFs
						//var hrefdHtml = UtilHrefThisText.hrefThisText(ustodos[k].html);
						//O.o ('-------------- kept html hrefd:' + hrefdHtml);
						//ustodos[k]._doc.html = hrefdHtml;

						// ADD TO RETURN - PASSES MONGO AND LOCAL FURTHER FILTER LIST


						ustodos[k].html = UtilHrefThisText.hrefThisText(ustodos[k].html);   // hbkhbk

						console.log ('pre contentEditableFalse:' + ustodos[k].html);

						ustodos[k].html = UtilHrefThisText.addNoContentEditableToHrefs(ustodos[k].html);   // hbkhbk

						console.log ('post contentEditableFalse:' + ustodos[k].html);

						arrUstodoPassedAllFilters.push(ustodos[k]);
						//O.o (ustodos[k]._id);




						//try {
						//	User.findById(ustodos[k]._id, function (err, user) {
						//		//done(err, user);
						//		if (!err) {
						//			O.o ('hbksdfsdfs:' + user);
						//			O.o ('hbksdfsdfs user.username:' + user.username);
						//		} else {
						//			UtilErrorEmitter.emitError("fail getting user name", err);
						//		}
						//	});
						//
						//} catch (err ) {
						//	UtilErrorEmitter.emitError('error in user access', err);
						//}

						//try {
						//
						//	var req = {};
						//	var res = {};
						//	UserController.userByID(
						//		req,
						//		res,
						//		function (err, user) {
						//			//done(err, user);
						//			if (!err) {
						//				O.o ('hbksdfsdfs1:' + user);
						//				O.o ('hbksdfsdfs1 user.username:' + user.username);
						//			} else {
						//				UtilErrorEmitter.emitError("fail getting user name", err);
						//			}
						//		},
						//		ustodos[k]._id
						//	);
						//} catch (err ) {
						//	UtilErrorEmitter.emitError('error in user access2', err);
						//}
					}
					//else {
						//O.o ('&&&&&&&&&&&&&&&&&&& in result loop NOT a keeper' );
					//}
				} // for loop done- now have array of ustodos to pass back to browser client



				//// get the map as an array of its keys just for the asynch each purpose
				//var arr = [];
				//for (var u in map) {
				//	if (map.hasOwnProperty(userId)) {
				//		arrUserIds.push (userId);
				//	}
				//}

				//// just need to fill in names (not user ids)
				//var getUserNameFromId = function(userId, callback) {
				//	O.o ('made it to callbackFromGetUserNames');
				//	// Call an asynchronous function (often a save() to MongoDB)
				//	try
				//	{
                //
				//		//O.o ('called 2nd param function:' + ustodo._doc._id)
				//		User.findById(userId, function (err, user) {
				//			//done(err, user);
				//			if (!err) {
                //
				//				//O.o ('hbksdfsdfs:' + user);
				//				//O.o ('user._id:' + user._id);
				//				O.o ('user._doc._id:' + user._doc._id);
				//				//ustodo.username = user.username;
				//				callback(user._doc.username);
				//				//if (user !== null)
				//				//O.o ('hbksdfsdfs user.username:' + user.username);
				//			} else {
				//				O.o('erraffffffffff');
				//				UtilErrorEmitter.emitError("fail getting user name", err);
				//				callback();
				//			}
				//		});
                //
				//	} catch (err ) {
				//		O.o('erraffffffffff');
				//		UtilErrorEmitter.emitError('error in user access', err);
				//		callback();
				//	}
				//};

				//var arrUstodoPassedAllFilters2 = [];
				//arrUstodoPassedAllFilters2.push (arrUstodoPassedAllFilters[0]);

				//if (false)
				//{
                //
				//	try
				//	{
				//		var mapUserIdToUserNameStr2 = {};
				//		async.each(arrUserIds,
				//			// 2nd parameter is the function that each item is passed into
				//			function(userId, callback){
				//				// Call a
				//				// n asynchronous function (often a save() to MongoDB)
				//				//console.log ('called 2nd param function')
				//				getUserNameFromId(
				//					userId,
				//					function(userName) {
				//						mapUserIdToUserNameStr2[userId] = 'xx' + userName;
				//						callback();
				//					}
				//				);
				//			},
				//			// 3rd parameter is the function call when everything is done
				//			function(err){
				//				// All tasks are done now
				//				// all is done
				//				if (!err)     {
				//					for (var iUsToDo in arrUstodoPassedAllFilters) {
				//						//arrUstodoPassedAllFilters[iUsToDo].username = mapUserIdToUserNameStr2[userId];
				//						arrUstodoPassedAllFilters[iUsToDo].user.username = 'un:' + mapUserIdToUserNameStr2[userId];
				//					}
				//					res.jsonp(arrUstodoPassedAllFilters);
				//					console.log("Everything is done.");
				//				}
				//				else{
				//					res.send("ERRORHK!!!!!!!!!!!");
				//					//res.jsonp(arrUstodoPassedAllFilters);
				//				}
				//			}
				//		);
				//	} catch (e) {
				//		O.e ('era in asyncWrapperForTitle_levelOne async', e);
				//	}
				//} else
			    {
					res.jsonp(arrUstodoPassedAllFilters); // with no enrichment of user/id/name
				}
				//console.log('pushed:'+ustodos[k]._doc.datelastmod + "." + +ustodos[k]._doc.datelastmod);


				//res.jsonp(ustodos);
				//else
				//res.jsonp(ustodos.slice[0,20]);
			}
    });

};

var test = false;
if (test) {
    parseUserInputStringCreateMongoQuery  ('hi mom');
}
