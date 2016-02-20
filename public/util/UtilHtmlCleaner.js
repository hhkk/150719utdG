'use strict';

//var O = require('C:/utd/150719utdG/public/util/U_o.js');
//var UtilString = require('C:/utd/150719utdG/public/util/UtilString.js');
//var UtilHtmlCleaner = require('C:/utd/150719utdG/public/util/UtilHtmlCleaner.js');
//var UtilHtmlCleaner = UtilHtmlCleaner;
// UtilHtmlCleaner.utilHtmlCleanerFunctions.testConvertHtmltoText


/**
 * Created by henryms on 10/4/2015.
 */
	// Strips HTML and PHP tags from a string
	// returns 1: 'Kevin <b>van</b> <i>Zonneveld</i>'
	// example 2: strip_tags('<p>Kevin <img src="someimage.png" onmouseover="someFunction()">van <i>Zonneveld</i></p>', '<p>');
	// returns 2: '<p>Kevin van Zonneveld</p>'
	// example 3: strip_tags("<a href='http://kevin.vanzonneveld.net'>Kevin van Zonneveld</a>", "<a>");
	// returns 3: '<a href='http://kevin.vanzonneveld.net'>Kevin van Zonneveld</a>'
	// example 4: strip_tags('1 < 5 5 > 1');
	// returns 4: '1 < 5 5 > 1'

	// method 1 for objectifying something
	// http://www.frontendjournal.com/most-common-technical-interview-question-for-frontend-developers/
	// public\lib\ustodo-browser-util\tinymce-paste-clean-filter.js
	// tinymceHtmlCleaner.cleanHtml(str, allowed_tags)

	//alert ('defining tinymceHtmlCleaner');

var privateSpace = new function() {
	this.cleanHtmlPrePrivate = function(str, allowed_tags) {
		alert(' in private function')
	}
}


/**
 * strip html tags out of a string
 */
var utilHtmlCleanerFunctions = new function() {
	// call this as utilHtmlCleanerFunctions.cleanHtmlPre()("<p>ibm.com</p>", '<b><strong><u><i><p>');
	this.cleanHtmlPre = function(str, allowed_tags) {
		//alert ('in tinymcePasteCleanFilter.cleanHtml [' + str+ ']');
		u_.U_o.o ("in cleanHtmlPre ");
		try {

			// no need to remove trailing or whatever htmlwhitespace
			//var xHtmlPre;
			//do {
			//	xHtmlPre = str;
			//	var xHtml = xHtmlPre;
			//	str = str.trim();
			//	if (xHtml.endsWith('<p>&nbsp;</p>')) {
			//		str = str.replaceLast('<p>&nbsp;</p>','').trim();
			//		u_.U_o.o ('replaced <p>&nbsp;</p> to get str [' + str + ']');
			//	}
			//}  while (xHtmlPre !== str);

			var key = '', allowed = false;
			var matches = [];    var allowed_array = [];
			var allowed_tag = '';
			var i = 0;
			var k = '';
			var html = '';
			var replacer = function (search, replace, str) {
				return str.split(search).join(replace);
			};
			// Build allowes tags associative array
			if (allowed_tags) {
				allowed_array = allowed_tags.match(/([a-zA-Z0-9]+)/gi);
			}
			str += '';

			// Match tags
			matches = str.match(/(<\/?[\S][^>]*>)/gi);
			// Go through all HTML tags
			for (key in matches) {
				if (isNaN(key)) {
					// IE7 Hack
					continue;
				}

				// Save HTML tag
				html = matches[key].toString();
				// Is tag not in allowed list? Remove from str!
				allowed = false;

				// Go through all allowed tags
				for (k in allowed_array) {            // Init
					allowed_tag = allowed_array[k];
					i = -1;

					if (i != 0) { i = html.toLowerCase().indexOf('<'+allowed_tag+'>');}
					if (i != 0) { i = html.toLowerCase().indexOf('<'+allowed_tag+' ');}
					if (i != 0) { i = html.toLowerCase().indexOf('</'+allowed_tag)   ;}

					// Determine
					if (i == 0) {                allowed = true;
						break;
					}
				}
				if (!allowed) {
					str = replacer(html, "", str); // Custom replace. No regexing
				}
			}
		} catch (err) {
			//console.log(UtilClass.UtilClass('err', err));
			u_.U_o.o ('ERROR: in utilHtmlCleanerFunctions.cleanHtmlPre() UtilHtmlCleaner:' + err);
		}

		//return "bracketed << by cleanHtmlPre <<" + str + ">>";
		return str;
	}

	this.testConvertHtmltoText = function(html)
	{
		//var prestrip = '<p>&nbsp;</p><p>&nbsp;</p>ibm.com<p>&nbsp;</p>';
		var poststrip = html.replace(/&nbsp;/gm, ' ');
		poststrip = poststrip.replace(/<(?:.|\n)*?>/gm, '');
		poststrip = poststrip.trim();
		//console.log ('prestrip [' + prestrip + ']');
		//console.log ('poststrip [' + poststrip + ']');
		return poststrip;

		//var pre = html;
		//var post = pre;
		//if (confirm('Do you want the HTML cleaned?'))
		//{
		//	var post = this.cleanHtmlPre(html,
		//		// allowed tags list
		//		//''
		//		'<a>' +
		//		'<b>' +
		//		'<br>' +
		//		'<code>' +
		//		'<div>' +
		//		'<h1>' +
		//		'<h2>' +
		//		'<h3>' +
		//		'<h4>' +
		//		'<h5>' +
		//		'<i>' +
		//		'<li>' +
		//		'<p>' +
		//		'<pre>' +
		//		'<span>' +
		//		'<strong>' +
		//		'<table>' +
		//		'<tbody>' +
		//		'<td>' +
		//		'<tr>' +
		//		'<u>' +
		//		'<ul>'
		//	);
		//}
		//if (pre !== post)
		//	alert('changed [' + pre + '] to ['+ post + ']');
		//else
		//	alert('no change from pre to post [' + pre + ']');
        //
		//return post;
	}


	/**
	 * eg remove what mce seems to add - these trailing   <p>&nbsp;</p>
	 * <p><span style="text-decoration: underline;"><strong>jo</strong></span>e5 [IBM - United States] http://ibm.com</p>
	   <p>&nbsp;</p>
	   <p>&nbsp;</p>

	 * @param html
     */

	// ToDo: bear in mind this is an ordered list currently, and the trim is not complete
	// called CRUDE in that sense
	this.arrTrimTokens = ['<p>&nbsp;</p>', '<p>', '</p>']
	this.htmlTrimCrude = function(htmlToTrim)
	{

		//u_.U_o.o ('in htmlTrimCrude');
		do {
			var savhtmlToTrim = htmlToTrim;
			this.arrTrimTokens.forEach(function (htmlToMatchAndRemove) {
				htmlToTrim = htmlToTrim.allAfterFirst(htmlToMatchAndRemove, true);
			});

			u_.U_o.o('done htmlTrimCrude [' + htmlToTrim + ']');
			// tail cleaner
			this.arrTrimTokens.forEach(function (htmlToMatchAndRemove) {
				var savepre = htmlToTrim;
				htmlToTrim = htmlToTrim.allBeforeLast(htmlToMatchAndRemove, true);
				u_.U_o.o('removing tail:' + htmlToMatchAndRemove + ' from [' + savepre + '] to [' + htmlToTrim + ']')
			});
		}  while (savhtmlToTrim !== htmlToTrim);

		if (savhtmlToTrim !== htmlToTrim && savhtmlToTrim.trim() === '') {
			u_.U_o.o('error? changed from   savhtmlToTrim[' + savhtmlToTrim + ']  to     htmlToTrim[' + htmlToTrim + ']');
		}
		return htmlToTrim;
	}





}



// http://stackoverflow.com/questions/2176861/javascript-get-clipboard-data-on-paste-event-cross-browser
var handlepaste = function (elem, e)
{
	//alert('in scope.pasteHtmlContentEditableCleaner():' + window.clipboardData.getData('Text'));
	var savedcontent = elem.innerHTML;
	if (e && e.clipboardData && e.clipboardData.getData)
	{// Webkit - get data from clipboard, put into editdiv, cleanup, then cancel event
		if (/text\/html/.test(e.clipboardData.types))
		{
			elem.innerHTML = e.clipboardData.getData('text/html');
			alert ('in handlepaste 1 elem.innerHTML [' + elem.innerHTML + ']');
		}
		else if (/text\/plain/.test(e.clipboardData.types))
		{
			elem.innerHTML = e.clipboardData.getData('text/plain');
			alert ('in handlepaste 2 elem.innerHTML [' + elem.innerHTML + ']');
		}
		else
		{
			elem.innerHTML = "";
		}
		waitforpastedata(elem, savedcontent);
		if (e.preventDefault)
		{
			e.stopPropagation();
			e.preventDefault();
		}
		return false;
	}
	else
	{// Everything else - empty editdiv and allow browser to paste content into it, then cleanup
		elem.innerHTML = "";
		waitforpastedata(elem, savedcontent);
		return true;
	}
}

function waitforpastedata (elem, savedcontent) {
	//alert ('in waitforpastedata ');
	if (elem.childNodes && elem.childNodes.length > 0) {
		processpaste(elem, savedcontent);
	}
	else {
		var that = {
			e: elem,
			s: savedcontent
		}
		that.callself = function () {
			waitforpastedata(that.e, that.s)
		}
		setTimeout(that.callself,20);
	}
}


function processpaste (elem, savedcontent) {
	//alert ('in processpaste ');
	var pasteddata = elem.innerHTML;
	//^^Alternatively loop through dom (elem.childNodes or elem.getElementsByTagName) here

	//elem.innerHTML = 'dd:' + savedcontent;
	elem.innerHTML = 'dd:' + pasteddata;

	// Do whatever with gathered data;
	//alert('xx:' + pasteddata);
}




// to decide is user entered html so this should be a hands off record past first text
// trim first

// may only work on browser

function isHTML(str) {
	var a = convertHtmlStringToDocForParse(str);
	for (var c = a.childNodes, i = c.length; i--; ) {
		if (c[i].nodeType == 1) return true;
	}
	return false;
}

// return a parsable doc element given a potentially HTML string
function convertHtmlStringToDocForParse (str) {
	var a = document.createElement('div');
	a.innerHTML = str;
	return a
}


function removeHtmlWhiteSpace(str)
{
	var pt = '';
	['br','div','p'].forEach(function(x)
		{
			pt = pt + '|' + x + '|/' + x
		}
	);
	pt = '(<(' + pt.slice(1) + ')>|&nbsp;)';

	u_.U_o.o ('pt:' + pt);

	//var pattern = "(<(br|/br|div|/div|p|/p)>";
	var re = new RegExp(pt, "gi");
	str = str.replace(re, ' ');
	u_.U_o.o ('str:' + str);
	return str;
}

//This searches for empty tags (some predefined) and / terminated XHTML empty tags and validates as HTML because of the empty tag OR will capture the tag name and attempt to find it's closing tag somewhere in the string to validate as HTML.
function isHTML2(str, ignoreHtmlWhiteSpace) {
// /<(?=.*? .*?\/ ?>|br|hr|input|!--|wbr)[a-z]+.*?>|<([a-z]+).*?<\/\1>/i.test(htmlStringHere)
// Explained demo: http://regex101.com/r/cX0eP2

	if (ignoreHtmlWhiteSpace)
		str = removeHtmlWhiteSpace(str)

	// is it still html after removing whitespace?  if not then we'll treat it like just text
	//u_.U_o.o ('str:' + str);
	return /<(br|basefont|hr|input|source|frame|param|area|meta|!--|col|link|option|base|img|wbr|!DOCTYPE).*?>|<(a|abbr|acronym|address|applet|article|aside|audio|b|bdi|bdo|big|blockquote|body|button|canvas|caption|center|cite|code|colgroup|command|datalist|dd|del|details|dfn|dialog|dir|div|dl|dt|em|embed|fieldset|figcaption|figure|font|footer|form|frameset|head|header|hgroup|h1|h2|h3|h4|h5|h6|html|i|iframe|ins|kbd|keygen|label|legend|li|map|mark|menu|meter|nav|noframes|noscript|object|ol|optgroup|output|p|pre|progress|q|rp|rt|ruby|s|samp|script|section|select|small|span|strike|strong|style|sub|summary|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|track|tt|u|ul|var|video).*?<\/\2>/i.test(str);
}


function testHBK2()
{
	console.log ('++++++++++++++++++++++++++++++++++++ testHBK2');
}


// TESTS

if (false)
{
	var prestrip = '<p>ibm.com</p>';
	var stripped  = utilHtmlCleanerFunctions.cleanHtmlPre(prestrip, '');
	u_.U_o.o ('[' + prestrip + '] -> [' + stripped + ']');  // 1. ologx:[<p>ibm.com</p>] -> [ibm.com]
}

if (false)
{
	var prestrip = '<p>&nbsp;</p><p>&nbsp;</p>ibm.com<p>&nbsp;</p>';
	var stripped  = utilHtmlCleanerFunctions.htmlTrimCrude(prestrip);
	u_.U_o.o ('[' + prestrip + '] -> [' + stripped + ']');  // 1. ologx:[<p>ibm.com</p>] -> [ibm.com]
}

if (false)
{
	var prestrip = '<p>&nbsp;</p><p>&nbsp;</p>ibm.com<p>&nbsp;</p>';
	console.log ('[' + isHTML2(prestrip, true) + ']' + prestrip);
	var prestrip = '<P>&NbSp;</P><p>&nbsp;</p>ibm.com<p>&nbsp;</p>';
	console.log ('[' + isHTML2(prestrip, true) + ']' + prestrip);
	var prestrip = 'testing';
	console.log ('[' + isHTML2(prestrip) + ']' + prestrip);
}

if (false) // test html to text converter
{
	var html = '<p>&nbsp;</p><p>&nbsp;</p>ibm.com<p>&nbsp;</p>';
	console.log ('html  [' + html + ']');
	console.log ('text [' + utilHtmlCleanerFunctions.testConvertHtmltoText(html) + ']');

	var html = '<p>&nbsp;</p>cccc <p>&nbsp;</p><a href="ibm.com">hp.com</a><p>&nbsp;</p>';
	console.log ('html  [' + html + ']');
	console.log ('text [' + utilHtmlCleanerFunctions.testConvertHtmltoText(html) + ']');
}



//from C:\utd\150719utdG\app\controllers\ustodos.server.controller.js
//ustodo._doc.html = u_.UtilHtmlCleaner.utilHtmlCleanerFunctions.cleanHtmlPre(ustodo._doc.html);

var UtilHtmlCleaner;

u_setup('UtilHtmlCleaner', 'utilHtmlCleanerFunctions', utilHtmlCleanerFunctions);
u_setup('UtilHtmlCleaner', 'handlepaste', handlepaste);
u_setup('UtilHtmlCleaner', 'isHTML2', isHTML2);

if (typeof exports !== 'undefined')
{
	exports.utilHtmlCleanerFunctions = utilHtmlCleanerFunctions;
	exports.handlepaste = handlepaste;
	exports.isHTML2 = isHTML2;

	// UtilHtmlCleaner.utilHtmlCleanerFunctions.cleanHtmlPre(strm ...)
}
