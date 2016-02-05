'use strict';

var O = require('C:/utd/150719utdG/public/util/O.js');
//var UtilString = require('C:/utd/150719utdG/public/util/UtilString.js');
//var UtilHtmlCleaner = require('C:/utd/150719utdG/public/util/UtilHtmlCleaner.js');
//var UtilHtmlCleaner = UtilHtmlCleaner;
// UtilHtmlCleaner.utilHtmlCleanerFunctions.convertHtmltoText



/**
 * strip html tags out of a string
 */
var fns = new function() {
	// call this as utilHtmlCleanerFunctions.cleanHtmlPre()("<p>ibm.com</p>", '<b><strong><u><i><p>');
	this.convertElementToIframeById = function (elementIdToReplace, newIframeId, contentEditableTF, innerHtml_optional) {
		alert("in cleanHtmlPre innerHtml_optional:" + innerHtml_optional);
		alert("in cleanHtmlPre elementIdToReplace:" + elementIdToReplace);
		var elementHtml = document.getElementById(elementIdToReplace).outerHTML;
		//encodeURIComponent
		alert("elementHtml:" + elementHtml);
		alert("in cleanHtmlPre innerHtml_optional:" + innerHtml_optional);

		try {
			if (!innerHtml_optional)
				innerHtml_optional = document.getElementById(elementIdToReplace).outerHTML;

			$('#' + elementIdToReplace).html('<iframe id=\'' + newIframeId +
				'\'><html><head></head><body></body></html></iframe>');
			if (contentEditableTF) {
				innerHtml_optional = '<div contenteditable=\'true\'>' + innerHtml_optional + '</div>';
			}
			document.getElementById(newIframeId).contentDocument.write(innerHtml_optional);

		} catch (err) {
			//console.log(UtilClass.UtilClass('err', err));
			O.o('ERROR: in UtilHtmlDocumentManipulate:' + err);
		}
	}

}

if (typeof exports !== 'undefined')
{
    exports.fns = fns;
}

// TESTS

if (false)
{
}




