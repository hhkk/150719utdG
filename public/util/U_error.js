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
function o (s) { // hbkhbk7
	console.log('from test o hbkhbk7 :' + s);
}

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

try {
//	global.uu_ = global.uu_|| {}; // hbkhbk7b
//	global.uu_.U_error = {};
	//uu_.U_error.emitError = emitError;
	//uu_.U_error.o = o;  // hbkhbk7
} catch (err) {
	// do nothing - no global on client
}

// Uutil.U_error.emitError

if (typeof exports !== 'undefined') {
    //exports.emitError = emitError;
    //exports.testWithinEmitError = testWithinEmitError;
    //exports.dt_testEmitter = dt_testEmitter;
}




