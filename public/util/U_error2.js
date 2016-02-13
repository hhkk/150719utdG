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

console.log ('in U_error2.js');

function ox (desc) // hbkhbk8
{
	console.log('+_+_+_+_+_+_+_+_+_+_+_ from ox u_.U_error2.emitError2 hbkhbk7:' + desc);
}  //

function emitError2 (desc, err)
{
	console.log('from u_.U_error2.emitError2:' + desc);
}  //

// hbkhbk8
//var global = global || {};


//global.u_.U_error2.o = o;


//if (typeof global !== 'undefined') {
//	global.u_ = global.u_ || {};
//
//	try {
//		global.u_.U_error2 = {};
//		//u_.U_error2.emitError2 = emitError2;
//		global.u_.U_error2.o = o;
//		global.u_.hbk1 = 'hbk2';
//		global.u_.hbk2 = 'hbk3';
//	} catch (err) {
//		// do nothing - no global on client
//		console.log('xxxxxxxxxxxxxxx0:' + err); // hbkhbk7
//	}
//}
//
//if (typeof window !== 'undefined')
//{
//	window.u_ = window.u_ || {};
//
//	try {
//		window.u_.U_error2 = {};
//		//u_.U_error2.emitError2 = emitError2;
//		window.u_.U_error2.o = o;
//		window.u_.hbk1 = 'hbk2';
//		window.u_.hbk2 = 'hbk3';
//	} catch (err) {
//		// do nothing - no global on client
//		console.log ('xxxxxxxxxxxxxxx0:' + err); // hbkhbk7
//	}
//
//}

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

u_setup('U_error2', 'ox', ox);  // hbkhbk8

if (typeof exports !== 'undefined') {
    //exports.emitError = emitError;
    //exports.testWithinEmitError = testWithinEmitError;
    //exports.dt_testEmitter = dt_testEmitter;
    exports.ox = ox;
}

//console.log ('completed definition xxxxxxxxxxxxxxxxxx uu_:' + uu_);
//console.log ('completed definition xxxxxxxxxxxxxxxxxx u_.U_error2:' + u_.U_error2);
//console.log ('completed definition xxxxxxxxxxxxxxxxxx u_.U_error2.o:' + u_.U_error2.o);


