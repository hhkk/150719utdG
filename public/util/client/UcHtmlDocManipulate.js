'use strict';


var UtilClient = UtilClient || {fns:{}};

var UtilErrorEmitter = UtilErrorEmitter;

//var UtilString = require('C:/utd/150719utdG/public/util/UtilString.js');
//var UtilHtmlCleaner = require('C:/utd/150719utdG/public/util/UtilHtmlCleaner.js');
//var UtilHtmlCleaner = UtilHtmlCleaner;
// UtilHtmlCleaner.utilHtmlCleanerFunctions.convertHtmltoText
var O = O;


/**
 * strip html tags out of a string
 */

//alert('hi mom 3');

UtilClient.UcHtmlDocManipulate = {}; // once at top should be OK

try {
	// call this as utilHtmlCleanerFunctions.cleanHtmlPre()("<p>ibm.com</p>", '<b><strong><u><i><p>');
	UtilClient.UcHtmlDocManipulate.testScopeAccess =
		function () {
			alert('in UtilClient.UcHtmlDocManipulate.testScopeAccess');
		};

	UtilClient.UcHtmlDocManipulate.convertElementToIframeById =
		function (elementIdToReplace, newIframeId, contentEditableTF, innerHtml_optional)
		{
			//alert("in cleanHtmlPre innerHtml_optional:" + innerHtml_optional);
			//O.o ('hi mom2');
			//alert("in cleanHtmlPre elementIdToReplace:" + elementIdToReplace);
			var elementHtml = document.getElementById(elementIdToReplace).outerHTML;
			//encodeURIComponent
			//alert("elementHtml:" + elementHtml);
			//alert("in cleanHtmlPre innerHtml_optional:" + innerHtml_optional);

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
				O.o('ERROR: in UcHtmlDocManipulate:' + err);
			}
		}

} catch (err) {
	alert('hi mom uh oh');
	UtilErrorEmitter.emitError('error in UcHtmlDocManipulate.js', err);
}

//alert('hi mom 4');

if (typeof exports !== 'undefined')
{
	//alert('hi mom 5');
    exports.fns = fns;
}    else {
	//alert('hi mom 6');
}

// TESTS

if (false)
{
}




