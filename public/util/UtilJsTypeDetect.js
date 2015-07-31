'use strict';

/**
 * functions to detect the type of a sec
 */

// var UtilJsTypeDetect = require('C:/utd/150719utdG/public/util/UtilJsTypeDetect.js');

//tokenize raw text, get array of http-urls to get titles.  expand to include title

var isString = function(s) {
        return (typeof s == 'string' || s instanceof String);

}


if (typeof exports !== 'undefined') {
        exports.isString = isString;
}

