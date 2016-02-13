'use strict';

var uberglobal = null;

if (typeof global !== 'undefined')
	uberglobal = global;
else if (typeof window !== 'undefined')
	uberglobal = window;
else
	throw ('')

uberglobal.u_ = uberglobal.u_ || {};


uberglobal.u_.req = function(disklocation) {
	var window;
	if (!window)
	// if (window === undefined) // error
	{
		return require (disklocation);
	}
}

//if (typeof global !== 'undefined')  // hbkhbk8
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
		console.log('xxxxxxxxxxxxxxx0:' + err); // hbkhbk7
	}
	//}
}
//}



/**
 * initialize u_ for global (server) and window (client) utility usage
 */
// hbkhbk8




//try {
//	global.u_ = global.u_ || {};
//	global.u_.U_error2 = {};
//	global.u_.U_error2.emitError2 = emitError2;
//	global.u_.U_error2.o = o;
//} catch (err) {
//	// do nothing - no global on client
//	console.log ('xxxxxxxxxxxxxxx1:' + err); // hbkhbk7
//}
//
//try {
//	global.u_ = global.u_ || {};
//	global.u_.U_error2 = {};
//	u_.U_error2.emitError2 = emitError2;
//	u_.U_error2.o = o;
//} catch (err) {
//	// do nothing - no global on client
//	console.log ('xxxxxxxxxxxxxxx1.5:' + err); // hbkhbk7
//}
//
//try {
//	window.u_ = window.u_ || {};
//	u_.U_error2 = {};
//	u_.U_error2.emitError2 = emitError2;
//	u_.U_error2.o = o;
//} catch (err) {
//	// do nothing - no global on client
//	console.log ('xxxxxxxxxxxxxxx2:' + err); // hbkhbk7
//}

// Uutil.U_error.emitError

if (typeof exports !== 'undefined') {
    //exports.emitError = emitError;
    //exports.testWithinEmitError = testWithinEmitError;
    //exports.dt_testEmitter = dt_testEmitter;
    //exports.o = o;
}

//console.log ('completed definition xxxxxxxxxxxxxxxxxx uu_:' + uu_);
//console.log ('completed definition xxxxxxxxxxxxxxxxxx u_.U_error2:' + u_.U_error2);
//console.log ('completed definition xxxxxxxxxxxxxxxxxx u_.U_error2.o:' + u_.U_error2.o);


