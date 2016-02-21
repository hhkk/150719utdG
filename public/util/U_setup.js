'use strict';

/**
 * define the global namespace (one variable/object gets added "u_" which houses all util.
 * where util is state free utility code shared potentially by client browser and server
 * @type {null}
 */
var uberglobal = null;

if (typeof global !== 'undefined')
	uberglobal = global;
else if (typeof window !== 'undefined')
	uberglobal = window;
else
	throw ('')

if (typeof uberglobal === "undefined") // error
{
	throw "uberglobal cannot be undefined";
}

uberglobal.u_ = uberglobal.u_ || {};

uberglobal.u_.isServer = function() {
	return (typeof window === "undefined");
}








//if (typeof global !== 'undefined')  //
//{
//
uberglobal.u_setup = function (clasz, methodname, method)
{
	// for server only, require to avoid 'require' not defined error on client

	try {
		// if first method from this clasz
		if (typeof uberglobal.u_[clasz] === 'undefined')
			uberglobal.u_[clasz] = {};
		// define it
		uberglobal.u_[clasz][methodname] = method;
	} catch (err) {
		// do nothing - no global on client
		console.log('xxxxxxxxxxxxxxx0:' + err); //
	}
	//}
}
//}

// list server utils U_setup.js
// see also for client side layout.server.view.html
// hhkk2
if (typeof window === "undefined") // error
{
	require('C:/utd/150719utdG/public/util/U_o.js');
	require('C:/utd/150719utdG/public/util/UtilClass.js');
	require('C:/utd/150719utdG/public/util/UtilError.js');
	require('C:/utd/150719utdG/public/util/UtilDate.js');
	require('C:/utd/150719utdG/public/util/UtilString.js');
	require('C:/utd/150719utdG/public/util/NLB_bgFade.js');
	require('C:/utd/150719utdG/public/util/UtilUrl4.js');
	require('C:/utd/150719utdG/public/util/UtilUrl4bUsesKrawlerToSupportServerController.js');
	require('C:/utd/150719utdG/public/util/UtilHtmlCleaner.js');
}

//var UtilClass = require('C:/utd/150719utdG/public/util/UtilClass.js');
//var UtilString = require('C:/utd/150719utdG/public/util/UtilString.js');
//var O2 = require('C:/utd/150719utdG/public/util/U_o.js');
//var Ut_o = require('C:/utd/150719utdG/public/util/Ut_o.js');
//var uut_O3 = require('C:/utd/150719utdG/public/util/U_o.js');
////var UtilUrl4 = require('C:/utd/150719utdG/public/util/UtilUrl4.js');
//var UtilUrl4bUsesKrawlerToSupportServerController =
//	require('C:/utd/150719utdG/public/util/UtilUrl4bUsesKrawlerToSupportServerController.js');
//var UtilHtmlCleaner = require('C:/utd/150719utdG/public/util/UtilHtmlCleaner.js');



/**
 * initialize u_ for global (server) and window (client) utility usage
 */
//




//try {
//	global.u_ = global.u_ || {};
//	global.u_.U_error2 = {};
//	global.u_.U_error2.emitError2 = emitError2;
//	global.u_.U_error2.o = o;
//} catch (err) {
//	// do nothing - no global on client
//	console.log ('xxxxxxxxxxxxxxx1:' + err); //
//}
//
//try {
//	global.u_ = global.u_ || {};
//	global.u_.U_error2 = {};
//	u_.U_error2.emitError2 = emitError2;
//	u_.U_error2.o = o;
//} catch (err) {
//	// do nothing - no global on client
//	console.log ('xxxxxxxxxxxxxxx1.5:' + err); //
//}
//
//try {
//	window.u_ = window.u_ || {};
//	u_.U_error2 = {};
//	u_.U_error2.emitError2 = emitError2;
//	u_.U_error2.o = o;
//} catch (err) {
//	// do nothing - no global on client
//	console.log ('xxxxxxxxxxxxxxx2:' + err); //
//}

// Uutil.UtilError.emitError

if (typeof exports !== 'undefined') {
    //exports.emitError = emitError;
    //exports.testWithinEmitError = testWithinEmitError;
    //exports.dt_testEmitter = dt_testEmitter;
    //exports.o = o;
}

//console.log ('completed definition xxxxxxxxxxxxxxxxxx uu_:' + uu_);
//console.log ('completed definition xxxxxxxxxxxxxxxxxx u_.U_error2:' + u_.U_error2);
//console.log ('completed definition xxxxxxxxxxxxxxxxxx u_.U_error2.o:' + u_.U_error2.o);


