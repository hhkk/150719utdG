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
// UtilHtmlCleaner.utilHtmlCleanerFunctions.testConvertHtmltoText


//hhkk3
//var O = O;
//	if (!O) {
//		try {
//			O = require('C:/utd/150719utdG/public/util/U_o.js');
//		} catch(err ) {
//			console.log (err);
//		}
//	}

//var U_error = U_error;
//var O = O;




/**
 * strip html tags out of a string
 */

//alert('hi mom 3');

//UtilClient.UcHtmlDocManipulate = {}; // once at top should be OK

// define functions inside this try block
//try {
	// call this as utilHtmlCleanerFunctions.cleanHtmlPre()("<p>ibm.com</p>", '<b><strong><u><i><p>');


//
function testScopeAccess() {
	try {
		//alert('in testScopeAccess');
		console.log (' oo  =================================== cc in UtilClient.UcHtmlDocManipulate.testScopeAccess');
		try {
			O.o ('this is from o.o hk');
		}   catch (err ) {
			console.log(err);
		}
		return 'hi mommy';

	} catch (err) {
		UtilError.emitError('error in UcHtmlDocManipulate.testScopeAccess', err);
	}
};

function convertElementToIframeById (elementIdToReplace, newIframeId, contentEditableTF, innerHtml_optional, height, width) {
	try {
		//alert("in cleanHtmlPre innerHtml_optional:" + innerHtml_optional);
		//O.o ('hi mom2');
		//alert("in cleanHtmlPre elementIdToReplace:" + elementIdToReplace);
		var elementHtml = document.getElementById(elementIdToReplace).outerHTML;
		//encodeURIComponent
		//alert("elementHtml:" + elementHtml);
		//alert("in cleanHtmlPre innerHtml_optional:" + innerHtml_optional);

		if (!innerHtml_optional)
			innerHtml_optional = document.getElementById(elementIdToReplace).outerHTML;

		// hhkk1
		var styleString = "style=\"" +
			"width:" + width + "px; " +
			"height :" + height + "px; " +
			"resize: both \"";
		//alert('styleString:' + styleString);


		// hhkk1
		// Paste plain text into contenteditable. - JSFiddle
		// http://jsfiddle.net/erikwoods/Ee3yC/
		// document.execCommand
		// https://www.google.com/search?num=100&biw=2133&bih=1032&q=html+paste+into+contenteditable+iframe&oq=html+paste+into+contenteditable+iframe&gs_l=serp.3...2827.7738.0.8090.5.5.0.0.0.0.82.376.5.5.0....0...1c.1.64.serp..0.0.0.TmtlRgzXKTs


		// hhkk1
		// javascript document.execCommand examples
		// https://www.google.com/search?num=100&q=javascript+document.execCommand+examples&oq=javascript+document.execCommand+examples&gs_l=serp.3..0i22i30.1661.2851.0.2962.9.3.0.6.6.0.103.253.2j1.3.0....0...1c.1.64.serp..0.9.256.KhPhDkMMGnw
		// document.execCommand before pasteHTML not working
		// http://stackoverflow.com/questions/16944429/document-execcommand-before-pastehtml-not-working


		$('#' + elementIdToReplace).html('<iframe id=\'' + newIframeId +
			'\'' + styleString +
			'>  <html><head></head><body></body></html>' +
			'</iframe>');

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
//	UtilError.emitError('error defining functions in UcHtmlDocManipulate.js', err);
//}




//var UcHtmlDocManipulate;

u_setup('UcHtmlDocManipulate', 'testScopeAccess', testScopeAccess);  //  u_.UtilError.emitError
u_setup('UcHtmlDocManipulate', 'convertElementToIframeById', convertElementToIframeById);  //  u_.UtilError.emitError

if (typeof exports !== 'undefined') {
	exports.testScopeAccess = testScopeAccess;
	exports.convertElementToIframeById  = convertElementToIframeById ;
}


//alert('hi mom 4');

// TESTS

if (false)
{
}




