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
// from entry.js UtilErrorEmitter = require('C:/utd/150719utdG/public/util/UtilErrorEmitter.js');


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
			console.error ('ERROR [' + desc + ']');
			console.error ('ERROR [' + desc + ']');
		}

    } catch (e) {
        console.error ('ERROR [' + desc + '] in getClass:e:' + e.message);
        console.error ('ERROR [' + desc + '] in getClass:estack:' + e.stack);

    }
}  //

try {
	global.Uutil = global.Uutil || {};
} catch (err) {
	// do nothing - no global on client
}

console.log ('hbkhbk5 =================== loaded UcHtmlDocManipulate.js');
Uutil.UtilErrorEmitter = {};
Uutil.UtilErrorEmitter.emitError = emitError;



// Uutil.UtilErrorEmitter.emitError

if (typeof exports !== 'undefined') {
    exports.emitError = emitError;
}



