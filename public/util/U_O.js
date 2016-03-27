
'use strict';

/**
 * Created by henryms on 3/2/2015.
 */
// var O = require('C:/utd/150719utdG/public/util/U_o.js');
//var UtilDate = require('C:/utd/150719utdG/public/util/UtilDate.js');
//u_.req ('C:/utd/150719utdG/public/util/UtilDate.js');

//var U_error = require('C:/utd/150719utdG/public/util/UtilError.js');



//var filters = ['htmlxxy', 'titlexx'];
//var filters = ['htmlxx', 'title'];
//var filters = ['completed'];
var filters = [];


//alert ('redefine alerthistory');
var alertHistory = [];

/**
 * output only
 * @param s
 */
// one and only console logger
// private
var callcount_o = 0;

var passesFilters = function(s) {

	//  var filters = ['Two'];
	var passes = false;
	if (filters.length > 0) {
		filters.forEach(function (f) {
			if (s.indexOf(f) >= 0) {
				passes = true;
			}
		});
	}
	else
		passes = true;
	return passes;
};


var o = function (s)
{

	//U_error.testWithinEmitError('called U_error.testWithinEmitError from within O.o');
	//console.log ('within ');

	//console.log ('in o.o');
	if (passesFilters(s))
	{
		var t = addLineFeedsIfnSeconds() + callcount_o++ + '. ologx:' + s
		console.log(t);
		//if (appendFileSync)
		//appendFileSync('c:/tmp/t.txt', t);
		console.log(callcount_o++ + '. olog:' + s + ' alertHistory:' + alertHistory);
	}
};

var oerr = function (s)
{
	//console.log ('in o.o');
	var t = addLineFeedsIfnSeconds() + callcount_o++ + '. ologerr:' + s
	console.error(t);
	if (appendFileSync)
		appendFileSync('c:/tmp/t.txt', 'ERROR: t:' + t);
	if (typeof(window) !== undefined)
		alert ('hkoerr:' + s);
	//console.log(callcount_o++ + '. olog:' + s + ' alertHistory:' + alertHistory);
};

var liveLog = function (s)
{
	var liveUtdLogFilter = document.getElementById('idInputtextUtdLogFilter').value.trim();
	if (liveUtdLogFilter.length === 0 || s.contains(liveUtdLogFilter))
	{
		liveLog.counter = liveLog.counter || 0;
		liveLog.counter++;
		document.getElementById('idTextareaUtdLog').value = liveLog.counter + '. ' + s + '\n' + document.getElementById('idTextareaUtdLog').value;
	}
};


// http://stackoverflow.com/questions/15313418/javascript-assert
var assert = function (condition, message) {
	if (!condition) {
		alert('no go in assert');
		if (typeof Error === "undefined") {
			Error = function(message) {
				this.message = message;
			};
			Error.prototype.message = "";
		}

		message = message || "Assertion failed";
		if (typeof Error !== "undefined") {
			throw new Error(message);
		}
		throw message; // Fallback
	}
};

// error
var lastOutputTimeStamp = -1;
var callCountaddLineFeedsIfnSeconds = -1;
var addLineFeedsIfnSeconds = function() {
	var returnStr = '';
	var newTimeInMillis = u_.UtilDate.getTimeInMillis();
	if (lastOutputTimeStamp < 0){
		lastOutputTimeStamp = newTimeInMillis;
	} else {
		if (newTimeInMillis - lastOutputTimeStamp > 3000) {
			returnStr = '\r\n\r\n\r\nNEWSTR #' + callCountaddLineFeedsIfnSeconds++ +': ' + u_.UtilDate.getDateStringForLogsWithMillis() +'\r\n';
		}
	}
	lastOutputTimeStamp = newTimeInMillis;
	return returnStr;
}



var e = function (s)
{

	if (passesFilters(s))
	{
		var t = addLineFeedsIfnSeconds() + callcount_o++ + '. ology:' + s
		console.error(t);
		console.log("!!!!!!!!!!ERRA ERRA ERRA ERRA ERRA ERRA ERRA ERRA ");
		appendFileSync('c:/tmp/t.txt', t);
		//console.log(callcount_o++ + '. olog:' + s + ' alertHistory:' + alertHistory);
	}
};
/**
 * alert - implies output with alert history log
 * @param s
 */
var a = function (s)
{
	if (passesFilters(s)) {
		//alert ('old len:' + alertHistory.length);
		var s = '[' + alertHistory.length + '.' + s + ';' + ']';
		alertHistory.push(s);
		//alert ('new len:' + alertHistory.length);
		o('a:' + s);
		alert(s + ' hist:' + alertHistory);
	}
};


if (u_.isServer())
{
	var fs = require('fs');
// erases existing content
	var writeFileSync = function (filefqname, s) {
		fs.writeFileSync(filefqname, s + '\r\n');
	};

// does not erase existing content
	var appendFileSync = null;
	try {
		appendFileSync = function (filefqname, s) {
			if (fs.appendFileSync)
				fs.appendFileSync(filefqname, s + '\r\n');
		}
	} catch (e) {
		console.log ('error:' + e);
	}

}

var test = false;
if (test) {
	writeFileSync('c:/tmp/t.txt', 'time in a bottle\r\n');
	appendFileSync('c:/tmp/t.txt', 'time in a bottle2\r\n');
	appendFileSync('c:/tmp/t.txt', 'time in a bottle3\r\n');
	appendFileSync('c:/tmp/t.txt', 'time in a bottle4\r\n');
	appendFileSync('c:/tmp/t.txt', 'time in a bottle5\r\n');
}



u_setup('U_o', 'o', o);
u_setup('U_o', 'oerr', oerr);
u_setup('U_o', 'assert', assert);
u_setup('U_o', 'a', a);
u_setup('U_o', 'e', e);
u_setup('U_o', 'liveLog', liveLog);


var U_o;

if (typeof exports !== 'undefined') {
	exports.o = o;
	exports.oerr = oerr;
	exports.assert = assert;
	exports.a = a;
	exports.e = e;
	exports.liveLog = liveLog;
}


