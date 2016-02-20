'use strict';
/**
 * Created with IntelliJ IDEA.
 * User: hkon
 * Date: 3/3/13
 * Time: 3:55 PM
 * To change this template use File | Settings | File Templates.
 */
// from entry.js U_error = require('C:/utd/150719utdG/public/util/UtilError.js');

function emitError (desc, err)
{
    try {
		if (err)
		{
			console.error ('ERROR 1/3 [' + desc + '] in err:' + err);
			console.error ('ERROR 2/3 [' + desc + '] in err.message:' + err.message);
			console.error ('ERROR 3/3 [' + desc + '] in err.stack:' + err.stack);
			alert ('error desc [' + desc + '] err[' + err + ']');
		}
		else {
			console.error ('HKERROR [' + desc + ']');
		}
		console.error ('HKERROR stack [' + (new Error()).stack + ']');

    } catch (e) {
        console.error ('ERROR [' + desc + '] in getClass:e:' + e.message);
        console.error ('ERROR [' + desc + '] in getClass:estack:' + e.stack);

    }
}  //


// Uutil.UtilError.emitError

//console.log ('!@!#!#!#!####### # __filename:'+ __filename)

u_setup('UtilError', 'emitError', emitError);  // u_.UtilError.emitError

var U_error;

if (typeof exports !== 'undefined') {
	//exports.emitError = emitError;
	//exports.testWithinEmitError = testWithinEmitError;
	//exports.dt_testEmitter = dt_testEmitter;
	exports.U_error = U_error;
	exports.emitError = emitError;
}
