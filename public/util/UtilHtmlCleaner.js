'use strict';

var O = require('C:/utd/150719utdG/public/util/O.js');

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


var utilHtmlCleaner = new function() {
	this.cleanHtmlPre = function(str, allowed_tags) {
		//alert ('in tinymcePasteCleanFilter.cleanHtml [' + str+ ']');

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
		//return "bracketed << by cleanHtmlPre <<" + str + ">>";
		return str;
	}

	this.cleanHtmlStandard = function(html) {
		var pre = html;
		var post = pre;
		if (confirm('Do you want the HTML cleaned?'))
		{
			var post = this.cleanHtmlPre(html,
				// allowed tags list
				//''
				'<a>' +
				'<b>' +
				'<br>' +
				'<code>' +
				'<div>' +
				'<h1>' +
				'<h2>' +
				'<h3>' +
				'<h4>' +
				'<h5>' +
				'<i>' +
				'<li>' +
				'<p>' +
				'<pre>' +
				'<span>' +
				'<strong>' +
				'<table>' +
				'<tbody>' +
				'<td>' +
				'<tr>' +
				'<u>' +
				'<ul>'
			);
		}
		if (pre !== post)
			alert('changed [' + pre + '] to ['+ post + ']');
		else
			alert('no change from pre to post [' + pre + ']');

		return post;
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










if (typeof exports !== 'undefined') {
    exports.utilHtmlCleaner = utilHtmlCleaner;
    exports.handlepaste = handlepaste;
	// UtilHtmlCleaner.utilHtmlCleaner.cleanHtmlPre(strm ...)
}




