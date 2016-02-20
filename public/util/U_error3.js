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
// from entry.js U_error = require('C:/utd/150719utdG/public/util/UtilError.js');

function o3 (desc, err)
{
	uu_.U_error2.o('calling uu2_.U_error2.o from uu2_.U_error3.o3')
	console.log('from uu2_.U_error3.emitError2 :' + desc);
}  //

function emitError2 (desc, err)
{
	console.log('from uu2_.U_error3.emitError2:' + desc);
}  //

//
var uu2_ = uu2_ || {};

try {
	uu2_.U_error3 = {};
	uu2_.U_error3.emitError2 = emitError2;
	uu2_.U_error3.o3 = o3;
} catch (err) {
	// do nothing - no global on client
	console.log ('xxxxxxxxxxxxxxx0:' + err); //
}

//try {
//	global.uu2_ = global.uu2_ || {};
//	global.uu2_.U_error3 = {};
//	global.uu2_.U_error3.emitError2 = emitError2;
//	global.uu2_.U_error3.o3 = o3;
//} catch (err) {
//	// do nothing - no global on client
//	console.log ('xxxxxxxxxxxxxxx1:' + err); //
//}
//
//try {
//	window.uu2_ = window.uu2_ || {};
//	uu2_.U_error3 = {};
//	uu2_.U_error3.emitError2 = emitError2;
//	uu2_.U_error3.o3 = o3;
//} catch (err) {
//	// do nothing - no global on client
//	console.log ('xxxxxxxxxxxxxxx2:' + err); //
//}

// Uutil.UtilError.emitError

if (typeof exports !== 'undefined') {
    //exports.emitError = emitError;
    //exports.testWithinEmitError = testWithinEmitError;
    //exports.dt_testEmitter = dt_testEmitter;
    //exports.o3 = o3;
}

console.log ('completed definition 3xxxxxxxxxxxxxxxxxx uu_:' + uu_);
console.log ('completed definition 3xxxxxxxxxxxxxxxxxx uu2_.U_error3:' + uu2_.U_error3);
	console.log ('completed definition 3xxxxxxxxxxxxxxxxxx uu2_.U_error3.o:' + uu2_.U_error3.o);


