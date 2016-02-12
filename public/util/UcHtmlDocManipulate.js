'use strict';

// loaded on client in C:\utd\150719utdG\app\views\layout.server.view.html
//			    <script type="text/javascript" src="/util/UcHtmlDocManipulate.js"></script>
//from client view : 				<button ng-click="UtilClient.UcHtmlDocManipulate.testScopeAccess()" title="testButton1">Test1</button>
//from within the scope UtilClient.UcHtmlDocManipulate.convertElementToIframeById
// from server? C:\utd\150719utdG\public\util\UcHtmlDocManipulate.js
// from server?  require('C:/utd/150719utdG/public/util/UcHtmlDocManipulate.js');



// var UtilClient = UtilClient || {};

//var UtilString = require('C:/utd/150719utdG/public/util/UtilString.js');
//var UtilString = require('C:/utd/150719utdG/public/util/UtilString.js');
//var UtilHtmlCleaner = require('C:/utd/150719utdG/public/util/UtilHtmlCleaner.js');
//var UtilHtmlCleaner = UtilHtmlCleaner;
// UtilHtmlCleaner.utilHtmlCleanerFunctions.convertHtmltoText
var O = O;
	if (!O) {
		try {
			O = require('C:/utd/150719utdG/public/util/O.js');
		} catch(err ) {
			console.log (err);
		}
	}

var U_error = U_error;
var O = O;




/**
 * strip html tags out of a string
 */

//alert('hi mom 3');

//UtilClient.UcHtmlDocManipulate = {}; // once at top should be OK

// define functions inside this try block
//try {
	// call this as utilHtmlCleanerFunctions.cleanHtmlPre()("<p>ibm.com</p>", '<b><strong><u><i><p>');


// hbkhbk5
function testScopeAccess() {
	try {
		//alert('in testScopeAccess');
		console.log (' oo hbkhbk5 =================================== cc in UtilClient.UcHtmlDocManipulate.testScopeAccess');
		try {
			O.o ('this is from o.o hk');
		}   catch (err ) {
			console.log(err);
		}
		return 'hi mommy';

	} catch (err) {
		U_error.emitError('error in UcHtmlDocManipulate.testScopeAccess', err);
	}
};

function convertElementToIframeById (elementIdToReplace, newIframeId, contentEditableTF, innerHtml_optional) {
	try {
		alert("in cleanHtmlPre innerHtml_optional:" + innerHtml_optional);
		//O.o ('hi mom2');
		//alert("in cleanHtmlPre elementIdToReplace:" + elementIdToReplace);
		var elementHtml = document.getElementById(elementIdToReplace).outerHTML;
		//encodeURIComponent
		//alert("elementHtml:" + elementHtml);
		//alert("in cleanHtmlPre innerHtml_optional:" + innerHtml_optional);

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
		O.o('ERROR: in UtilClient.UcHtmlDocManipulate.convertElementToIframeById:' + err);
	}
}

// main catch for function definition
//} catch (err) {
//	alert('error defining functions in UcHtmlDocManipulate.js');
//	U_error.emitError('error defining functions in UcHtmlDocManipulate.js', err);
//}




// hbkhbk5
try {
	global.Uutil = global.Uutil || {};
} catch (err) {
	// do nothing - no global on client
}

console.log ('hbkhbk5 =================== loaded UcHtmlDocManipulate.js');

Uutil.UcHtmlDocManipulate = {};
Uutil.UcHtmlDocManipulate.testScopeAccess = testScopeAccess;


console.log ('hbkhbk5 =================== defined Uutil.testScopeAccess');

if (typeof exports !== 'undefined') {
	exports.testScopeAccess = testScopeAccess;
	exports.convertElementToIframeById  = convertElementToIframeById ;
}


//alert('hi mom 4');

// TESTS

if (false)
{
}




