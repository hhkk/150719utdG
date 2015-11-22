'use strict';

/**
 * Created by henryms on 2/11/2015.
 */
// var UtilHrefThisText = require('C:/utd/150719utdG/public/util/UtilHrefThisText.js');

/**
 *
 * @param s
 * @param onWayOIntoDB
 * @returns {boolean}
 */

var O = require('C:/utd/150719utdG/public/util/O.js');
//var UtilHtmlCleaner = require('C:/utd/150719utdG/public/util/UtilHtmlCleaner.js');


var seeIfConnectedToThisClass = function (s) {
    return ('in seeIfConnectedToThisClass:' + s);
};


// section_find .com .edu etc and add href
var isUrl = function (s)
{
    //console.log ('---------- testing isUrl :' + s);
    if (s.indexOf('http')=== 0)
    {
        return true;
    }

    if (s.indexOf(' ') > 0)
        return false;

    if (s.indexOf('.') < 0)
        return false;

    if (s.indexOf('href') === 0)
        return true;
    //if (!onWayOIntoDB)
      //  return;

    if (s.indexOf('.com') > 0)
        return true;
    if (s.indexOf('.edu') > 0)
        return true;
    if (s.indexOf('.biz') > 0)
        return true;
    if (s.indexOf('.org') > 0)
        return true;
    if (s.indexOf('.info') > 0)
        return true;
    if (s.indexOf('.ly') > 0)
        return true;
    if (s.indexOf('.co') > 0)
        return true;
    if (s.indexOf('.net') > 0)
        return true;

    return false;


};

var buildHrefFromUrlString= function(urlstr)
{
    //return urlstr;
    return '<a href=\'' + urlstr + '\'>' + urlstr + '</a>';
}                  ;

/**
 * make sure all urls (e.g., n  on whitespace string tokens ending in .net) strings have http preamble
 * and href tag is inserted
 * @param textToBeHrefed original string with possible urls not yet IDd with http prefix
 * @param textToBeHrefed
 * @returns {string}
 */
var hrefThisText = function(textToBeHrefed)
{
    //textToBeHrefed = '=-=-=-=-=-=-=-=-' + textToBeHrefed;
    var tokens = textToBeHrefed.split(/\s+/);
    //console.log ('y.length:' + y.length);
    var i = 0;
    tokens.forEach(function(token) {
        if (isUrl(token)) {
            //console.log ('is a url:' + token);
            var replaceWith = null;
            if (tokens[i].toLowerCase().indexOf('http') !== 0)
                    tokens[i] = 'http://' + tokens[i];
            // replace old with new (has http expansion)
            //replaceWith = '<p color=\'red\'>' + buildHrefFromUrlString(tokens[i]) + '</p>';
            replaceWith = buildHrefFromUrlString(tokens[i]);
            //console.log ('convert url from [' + tokens[i] + '] to [' + replaceWith+']');
            tokens[i] = replaceWith;
        }
        i++;
    });
    return tokens.join(' ');

};

/**
 * 1 split string on whitespace
 * 2 if a token is a url, prefix each isurl with http://
 * 3
 * create n
 * @param textWithUrls
 * @returns urlsFromTextToGetTitleOf: array of urls {
					'urlOriginal':'http://' + tokens[i],
					'urlWithHttpPrefix':'http://' + tokens[i]
 */
var getUrlsFromText = function(textWithUrls)
{
    //textWithUrls = '=-=-=-=-=-=-=-=-' + textWithUrls;
    var tokens = textWithUrls.split(/\s+/);
    //console.log ('y.length:' + y.length);
    var i = 0;
    // section_adds http to .coms .edu etc
	var urls = [];
	tokens.forEach(function(token) {
		//UtilHtmlCleaner.utilHtmlCleaner.cleanHtmlPre('asdasd',['a']);
        if (isUrl(token)) {
            O.o ('--------> is a url from text:' + token);
			// some URLs will have the http:// prefix already, for others add it
			urls.push ({
				'urlOriginal': token,
				'urlWithHttpPrefix': (token.toLowerCase().indexOf('http') === 0 ? '' : 'http://') + token
			});
		}
    });
    return urls;
};


//
//var strHttpEnhancer = function(s, hrefGen)
//{
//    //s = '=-=-=-=-=-=-=-=-' + s;
//    var tokens = s.split(/\s+/);
//    //console.log ('y.length:' + y.length);
//    var i = 0;
//    tokens.forEach(function(token) {
//        if (isUrl(token)) {
//            //console.log ('is a url:' + token);
//            var replaceWith = null;
//            if (tokens[i].toLowerCase().indexOf('http') !== 0)
//                tokens[i] = 'http://' + tokens[i];
//            // replace old with new (has http expansion)
//            if (hrefGen) {
//                replaceWith = '<p color=\'red\'>' + buildHrefFromUrlString(tokens[i]) + '</p>';
//                console.log ('convert url from [' + tokens[i] + '] to [' + replaceWith+']');
//                tokens[i] = 'fgfgfg' + replaceWith;
//            }
//        }
//        i++;
//    });
//    return tokens.join(' ');
//
//};



// converts HTML to text using Javascript
var html2text = function (html) {
    var tag = document.createElement('div');
    tag.innerHTML = html;

    return tag.innerText;
}



if (typeof exports !== 'undefined') {
    exports.getUrlsFromText = getUrlsFromText;
    exports.hrefThisText = hrefThisText;
    exports.html2text = html2text;
}
