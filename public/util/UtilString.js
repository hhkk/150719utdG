'use strict';
// var UtilString = require('C:/utd/150719utdG/public/util/UtilString.js');

var endsWith = function (str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
};


String.prototype.endsWith = function (s) {
    return this.length >= s.length && this.substr(this.length - s.length) == s;
}

String.prototype.beginsWith = function (s) {
    return this.indexOf(s) === 0;
}

String.prototype.reverse = function () {
    return this.split('').reverse().join('');
};

String.prototype.replaceLast = function (what, replacement) {
	return this.reverse().replace(new RegExp(what.reverse()), replacement.reverse()).reverse();
};

String.prototype.allAfterLast = function (allAfterLastOfThis) {
	return i = this.substring(this.lastIndexOf(allAfterLastOfThis)+1);
};

	/**
	 * remove one or all of a string at head
	 * @param substr
	 * @param moreThanOne
	 * @returns {*}
     */
	String.prototype.allBeforeLast = function (substr, moreThanOne) {
		var rtn = this;
		do {
			rtn = rtn.trim();
			var nextIdx = rtn.lastIndexOf(substr);
			var changed = false;
			if (nextIdx > 0 && rtn.endsWith(substr)) {
				changed = true;
				rtn = rtn.slice(0, nextIdx);
			}
		} while (moreThanOne && changed);
		return rtn;
	};

	String.prototype.allAfterFirst = function (substr, moreThanOne) {
		var rtn = this;
		do
		{
			rtn = rtn.trim();
			var firstIdx = rtn.indexOf(substr);
			var changed = false;
			if (firstIdx >= 0)  {
				changed = true;
				rtn = rtn.slice(firstIdx+1);
			}
		} while (moreThanOne && changed);
		return rtn;
	};

	/**
     *
     * @param s
     * @returns {*}
     */
var convertNonBreakingSpace = function (s) {
    var i = 0;
    //alert ('in asciiTable this.length' + this.length)
    var rtn = s;
    while (i < rtn.length) {
        if (rtn.charCodeAt(i) === 160)
        {
            rtn = rtn.substring(0, i) + ' ' + rtn.substring(i+1);
        }
        i++;
    }
    return rtn;
};

var convertRemoveTrailing10 = function (s) {
    var i = s.length;
    //alert ('in asciiTable this.length' + this.length)
    var rtn = s;
    while (i >= 0) {
        if (rtn.charCodeAt(i) === 10)
        {
            rtn = rtn.substring(0, i) + ' ' + rtn.substring(i+1);
        }
        i--;
    }
    return rtn;
};


String.prototype.asciiTable = function (desc) {
    //alert ('asciiTable this [' + this + ']')
    var i = 0;
    var rtn = '\r\nASCII TABLE [' + desc + ' <';
    //alert ('in asciiTable this.length' + this.length)
    while (i < this.length) {
        rtn = rtn + '\r\n   ' + ( i + '.. char [' + this.charAt(i) + '] ascii dec [' + this.charCodeAt(i) + ']' );
        i++;
    }
    return rtn + "\r\n> END ASCII TABLE";
}


// http://stackoverflow.com/questions/1144783/replacing-all-occurrences-of-a-string-in-javascript
String.prototype.replaceAll = function (find, replace) {
    var str = this;
    return str.replace(new RegExp(find.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'), replace);
};

// http://stackoverflow.com/questions/1144783/replacing-all-occurrences-of-a-string-in-javascript
// console.log ('111111111111111111111 defining function');
String.prototype.hasUpperCase = function () {
    var str = this;
    var arr = str.split('');
    //console.log ('@@@@@@@@@@@@@@@@@@@@@@@@@@ in fn str [' + str + ']');
    for (var c in arr) {
        //console.log ('testing case of [' + c + ']');
        var cc = arr[c];
        if (cc >= 'A' && cc <= 'Z') {
            //console.log ('mixed case return true');
            return true;
        }
    }
    return false;
};













var test = false;
if (test)
{
}


var UtilString;

u_setup('UtilString', 'endsWith', endsWith);  // hbkhbk8 u_.U_error.emitError
u_setup('UtilString', 'convertNonBreakingSpace', convertNonBreakingSpace);  // hbkhbk8 u_.U_error.emitError
u_setup('UtilString', 'convertRemoveTrailing10', convertRemoveTrailing10);  // hbkhbk8 u_.U_error.emitError

if (typeof exports !== 'undefined') {
	exports.endsWith = endsWith;
	exports.convertNonBreakingSpace = convertNonBreakingSpace;
	exports.convertRemoveTrailing10 = convertRemoveTrailing10;
}
