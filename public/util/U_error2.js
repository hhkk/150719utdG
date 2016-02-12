'use strict';
/**
 * // UtilNodeVsBrowser
 */
/**
 * Created with IntelliJ IDEA.
 * User: hkon
 * Date: 3/3/13
 * Time: 3:55 PM
 * To change this template use File | Settings | File Templates.
 */
// from entry.js U_error = require('C:/utd/150719utdG/public/util/U_error.js');

function emitError2 (desc, err)
{
	console.log('from uu2_.U_error2.emitError2:' + desc);
}  //

try {
	global.uu2_ = global.uu2_ || {};
	global.uu2_.U_error2 = {};
	uu2_.U_error2.emitError2 = emitError2;
} catch (err) {
	// do nothing - no global on client
}

// Uutil.U_error.emitError

if (typeof exports !== 'undefined') {
    //exports.emitError = emitError;
    //exports.testWithinEmitError = testWithinEmitError;
    //exports.dt_testEmitter = dt_testEmitter;
}




