'use strict';

/**
 * initialize u_ for global (server) and window (client) utility usage
 */

var u_setup = function(clasz, method) {
	if (typeof global !== 'undefined') {
		global.u_ = global.u_ || {};

		try {
			if (typeof global.u_[clasz] !== 'undefined') {
				global.u_[clasz] = {};
			}
			global.u_
				//u_.U_error2.emitError2 = emitError2;
				global.u_.U_error2.o = o;
				global.u_.hbk1 = 'hbk2';
				global.u_.hbk2 = 'hbk3';
			}
		} catch (err) {
			// do nothing - no global on client
			console.log('xxxxxxxxxxxxxxx0:' + err); // hbkhbk7
		}
	}

	if (typeof window !== 'undefined')
	{
		window.u_ = window.u_ || {};

		try {
			window.u_.U_error2 = {};
			//u_.U_error2.emitError2 = emitError2;
			window.u_.U_error2.o = o;
			window.u_.hbk1 = 'hbk2';
			window.u_.hbk2 = 'hbk3';
		} catch (err) {
			// do nothing - no global on client
			console.log ('xxxxxxxxxxxxxxx0:' + err); // hbkhbk7
		}

	}

}



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


