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
	this.convertElementToIframeById = function (elementIdToReplace, newIframeId, contentEditableTF) {
		O.o("in cleanHtmlPre ");
		try {
			var savDivInnerHtml = document.getElementById(elementIdToReplace).innerHTML;
			$('#' + elementIdToReplace).html('<iframe id=\'' + newIframeId +
				'\'><html><head></head><body></body></html></iframe>');
			if (contentEditableTF) {
				savDivInnerHtml = '<div contenteditable=\'true\'>' + savDivInnerHtml + '</div>';
			}
			document.getElementById(newIframeId).contentDocument.write(savDivInnerHtml);

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




