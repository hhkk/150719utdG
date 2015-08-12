'use strict';
// var UtilPrintObjects = require('C:/utd/150719utdG/public/util/UtilPrintObjects.js');
// in entry.js


function printObjJSONstringify (desc, obj) {
	return 'desc [' + desc + '] JSON.stringify [' + JSON.stringify(obj, null, 2) + '] '
}




//function printObjToDepthNotCompletedSeeAlsoGetClass (desc, obj, depth) {
//	var s = null;
//	if (!depth)
//		depth = 0;
//
//	try {
//		if (obj === null)
//			s = s + '\r\n  printObj a says desc [' + desc + '] obj passed in is null. ';
//		else if (obj === undefined)
//			s = s + '\r\n  printObj a says desc [' + desc + '] obj passed in is undefined. ';
//		else if (Array.isArray(obj))
//		{
//			s = s + '\r\n  printObj a says desc [' + desc + '] obj passed in is array. ';
//		}
//	}
//
//}



if (typeof exports !== 'undefined') {
    exports.printObjJSONstringify = printObjJSONstringify;
}
