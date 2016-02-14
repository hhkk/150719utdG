'use strict';
/**
 * Created with IntelliJ IDEA.
 * User: hkon
 * Date: 3/3/13
 * Time: 3:55 PM
 * To change this template use File | Settings | File Templates.
 */
// from entry.js U_error = require('C:/utd/150719utdG/public/util/U_error.js');

function emitError (desc, err)
{
    try {
		if (err)
		{
			console.error ('ERROR [' + desc + '] in err.message:' + err.message);
			console.error ('ERROR [' + desc + '] in err.stack:' + err.stack);
			alert ('error [' + desc + '], see log for stacktrace [' + err.message + ']');
		}
		else {
			console.error ('HKERROR [' + desc + ']');
			console.error ('HKERROR [' + desc + ']');
		}

    } catch (e) {
        console.error ('ERROR [' + desc + '] in getClass:e:' + e.message);
        console.error ('ERROR [' + desc + '] in getClass:estack:' + e.stack);

    }
}  //


// Uutil.U_error.emitError

//console.log ('!@!#!#!#!####### # __filename:'+ __filename)

u_setup('u_error4', 'emitError', emitError);  // hbkhbk8 u_.U_error.emitError

var u_error4;

if (typeof exports !== 'undefined') {
    //exports.emitError = emitError;
    //exports.testWithinEmitError = testWithinEmitError;
    //exports.dt_testEmitter = dt_testEmitter;
	exports.u_error4 = u_error4;
    exports.emitError = emitError;
}




