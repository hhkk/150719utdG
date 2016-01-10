'use strict';
'use strict';

/**
 * UtilUrl -
 * 1) get titles from url
 */
/**
 * Created with IntelliJ IDEA.
 * User: hkon
 * Date: 3/3/13
 * Time: 3:55 PM
 * To change this template use File | Settings | File Templates.
 */
//var UtilUrl = require('C:/utd/141213UtdV6/public/util/UtilUrl.js');
var O = require('C:/utd/150719utdG/public/util/O.js');
var UtilUrl5Krawler = require('C:/utd/150719utdG/public/util/UtilUrl5Krawler.js');
var UtilHrefThisText = require('C:/utd/150719utdG/public/util/UtilHrefThisText.js');

var http = require('follow-redirects').http;
//var http = require('http');
//var https = require('follow-redirects').https;
var async = require("async");
var UtilHrefThisText = require('C:/utd/150719utdG/public/util/UtilHrefThisText.js');
var request = require('request');
var unirest = require('unirest');
var UtilErrorEmitter = require('C:/utd/150719utdG/public/util/UtilErrorEmitter.js');
//var UtilUrl4bUsesKrawlerToSupportServerController =
	// require('C:/utd/150719utdG/public/util/UtilUrl4bUsesKrawlerToSupportServerController.js');

var findTitle_htmlParse = function(html) {

	//O.o ('search for title in [' + html + ']')
	var titletag = "<title"
	var iTitle = html.toLowerCase().indexOf(titletag)
	var iTitleEnd = html.toLowerCase().indexOf("</title>")

	var rem1 = html.slice(iTitle+titletag.length,iTitleEnd).trim();
	var iEndTitleTag = rem1.indexOf('>');
	if (iEndTitleTag !== -1) {
		return html.slice(iTitle+titletag.length+iEndTitleTag+1,iTitleEnd).trim();
		// parse error or bad html title tag
	}

	//var title = result.match("<title>(.*?)</title>")[1];
	if (iTitle === -1 || iTitleEnd === -1 || iEndTitleTag === -1)
	{
		return null;
	}
}


/**
 *
 * @param ustodoHtml
 * @param ustodoText
 // hbkk
 *  @param res - res2.json will send back an expnded ustodo
 *  // todo - send back a real data structure not a bag/ustodo
 *  // return data struct would be an array of URLs
 */
//tokenize raw text, get array of http-urls to get titles.  expand to include title
var callCount_expandUrlsToHrefsReturnPatchedStr = 0
var UtilHrefThisText = require('C:/utd/150719utdG/public/util/UtilHrefThisText.js'); // for urlUtd
// hbkk - from line 98 ustodos.server.controller.js
/**
 * convert an ustodo to embed urls in the text
 * this is called on the way INTO the DB
 * @param ustodoHtml
 * @param ustodoText
 * @param res
 */
var expandUrlsToHrefsReturnPatchedStr = function (ustodoHtml, ustodoText, res)
{
	try {
		//O.o ('################# in expandUrlsToHrefsReturnPatchedStr get titles [' + ustodoHtml + ']');
		//var Item = function(url) {
		//	this.url = url;
		//	this.urlori = url;
		//	this.title = null;
		//};

		// ARE THERE ANY URLS
		// get urls with urls as "http..." in their own array element
		// section_expand_ eg com to include http
		var urlUtdsFromText = UtilHrefThisText.getUrlsFromText(ustodoText);

		//urlUtdsFromText.forEach(function(urlUtd)
		//{
		//	console.log ('SEARCH FOR UrlUtd:' + urlUtd.addressOriMightHaveHttpNeededForSearchReplace);
		//	console.log ('SEARCH FOR UrlUtd:' + urlUtd.addressWithHttp);
		//    //if (token.indexOf('http://') == 0) {
		//    //    //hashUrlsToTitle[token] = token;
		//    //    items.push (new Item(token));
		//    //}
		//});

		if (urlUtdsFromText.length > 0)
		{
			//var res2 = {};
			/**
			 * once I have a title back from web call, knit the title back into both html and text
			 */
			// get title into each element of urlUtds
			var callbackFromKrawl = function(urlUtdsEnrichedByKrawl)
			{
				// create index of urlUtdsEnrichedByKrawl by originals for performance so not O n**2 searching thru urlUtd array
				var urlUtdsEnrichedByKrawl_byOriginal = {};
				urlUtdsEnrichedByKrawl.forEach(function(urlUtdEnrichedByKrawl) {
					urlUtdsEnrichedByKrawl_byOriginal[urlUtdEnrichedByKrawl.addressOriMightHaveHttpNeededForSearchReplace] = urlUtdEnrichedByKrawl;
				});

				//O.o ("in callback from ");
				//O.o ("ustodoText:" + ustodoText);
				//O.o ("items have all been converted ustodoHtml:" + ustodoHtml);

				//O.o ("items have all been converted");
				// section_knit_replace_text into text here
				// now replace tokens with combo [title] + hrefed url
				//textWithUrls = '=-=-=-=-=-=-=-=-' + textWithUrls;
				var arrStr_tokensOriginal = ustodoText.split(/\s+/);
				var arrStr_tokensToJoinNowTitled = [];
				//console.log ('y.length:' + y.length);
				try {
					for (var itokens = 0; itokens < arrStr_tokensOriginal.length; itokens++)
					{
						var token = arrStr_tokensOriginal[itokens];
						arrStr_tokensToJoinNowTitled[itokens] = token; // optimistic
						if (
							UtilHrefThisText.isUrl(token)) {
							try {
								// embed title into the text

								var httpIfNeeded = "";
								if (!token.startsWith('http://'))
									httpIfNeeded = 'http://';

								arrStr_tokensToJoinNowTitled[itokens]  = '[' +
									urlUtdsEnrichedByKrawl_byOriginal[token].title + '] ' +
									//'<a href=' + httpIfNeeded + token + '>' + token + '</a>';
									httpIfNeeded + token;


							}   catch (err) {
								throw 'internal error, no urlUtd match found in krawl results for url token [' + token + ']';
							}
						}
					}
				} catch (err) {
					UtilErrorEmitter.emitError ('xxfrom outside: error in expandUrlsToHrefsReturnPatchedStr', err);
					throw err;
				}

				var joinedTokens = arrStr_tokensToJoinNowTitled.join(' ');
				O.o ('reached res.json with urls!!! ================================ [' + joinedTokens + ']');
				res.json(joinedTokens);
			} // callbackFromKrawl



			//
			//
			//
			//
			//
			//
			//// now replace urls with combo [title] + http'd url
			//urlUtdsFromTextNowWithTitle_SideEffectedByKrawl.forEach(function(urlUtd)
			//{
			//	//urlUtd.urlOriginal = "rr"
			//	//urlUtd.urlWithHttpPrefix = "http://rr"
			//
			//	var foundMatch = false;
			//	var sbufStringsChecked = '';
			//
			//	for (var iUrls = 0; iUrls < urlUtdsFromTextNowWithTitle_SideEffectedByKrawl.length; iUrls++)
			//	{
			//		//O.o ('yes match found for  urlUtd.url:' + urlUtd.url);
			//		//sbufStringsChecked += '\r\nand testing [' + urlUtd.urlori + '] against [' + urlUtds[iUrls] + '] ';
			//
			//		if (urlUtd.addressOriMightHaveHttpNeededForSearchReplace === urls[iUrls] )
			//		{
			//			//O.o ('yes match found for  urlUtd.urlUtd:' + urlUtd.urlUtd);
			//			foundMatch = true;
			//			//urls[iUrls] = '[' + urlUtd.title + '] ' + UtilHrefThisText.hrefThisText(urlUtd.urlUtd);
			//			// original ustodo saves non href'ed links to the db
			//			urls[iUrls] = '[' + urlUtd.title + '] ' + urlUtd.title;
			//		}
			//	}
			//
			//	if (!foundMatch) {
			//	    O.o ('no match found for  urlUtd.urlUtd:' + urlUtd.urlUtd + ' against these:' + sbufStringsChecked);
			//	    throw  ('no match found for  urlUtd.urlUtd:' + urlUtd.urlUtd + ' against these:' + sbufStringsChecked);
			//	}
			//});

			UtilUrl5Krawler.krawlhk(urlUtdsFromText, callbackFromKrawl);

		}
		else {
			O.o ('reached res.json withOUT urls!!! ================================ [' + ustodoText + ']');
			res.json(ustodoText);
		};

		// hbkk
		// var UtilUrl5Krawler = require('C:/utd/150719utdG/public/util/UtilUrl5Krawler.js');

			//replace urls in string
		//if (hashUrlsToTitle.size() > 0) {
		//    }
	} catch (err) {
		UtilErrorEmitter.emitError ('from outside: error in expandUrlsToHrefsReturnPatchedStr', err);
		throw err;
	}






//} else {
//	var x = urls.join(' ')
//	O.o ( 'x:' + x);
//	res.json(x);
//}






}


// 1
var asyncWrapperForTitle_levelOne_callCount = 0;
var asyncWrapperForTitle_levelOne = function(urlUtds, res2) {
    // 1st parameter in async.each() is the array of urls
    //O.o (asyncWrapperForTitle_levelOne_callCount++ +  '.in asyncWrapperForTitle_levelOne');
    //http://justinklemm.com/node-js-async-tutorial/
    try {
        async.each(urlUtds,
			//urlUtd.urlOriginal = "rr"
			//urlUtd.urlWithHttpPrefix = "http://rr"
			// 2nd parameter is the function that each item is passed into
		function (urlUtd, callback) {
                // Call an asynchronous function (often a save() to MongoDB)
                //O.o ('called 2nd param function')
                try {

                    getUrlContent_levelOne(function () {
                        // Async call is done, alert via callback
                        callback();
                    }, urlUtd);
                } catch (e) {
                    O.o('errerreea:' + e);
                }
                //O.o('done getUrlContent_levelOne call');
            },
            // 3rd parameter is the function call when everything is done
            function (err) {
                // All tasks are done now


                whenDoneAsync_LevelOne(urlUtds, res2);
            }
        );
    } catch (e) {
        O.e ('era in asyncWrapperForTitle_levelOne async');
    }
}; // asyncWrapperForTitle_levelOne


// 2
var getUrlContent_levelOne = function(callback, url)
{
    try
    {
        var calledBack = false;

        //// http://stackoverflow.com/questions/12800357/including-timeout-in-nodejs-http-get-while-getting-large-number-of-image-downloa
        //var timeout_wrapper = function( req ) {
        //    return function () {
        //        // do some logging, cleaning, etc. depending on req
        //        if (!calledBack) {
        //            O.e('timeout for url.url [' + url.url + ']');
        //
        //            try {
        //                req.abort();
        //            } catch (e) {
        //                O.o('req.abort fail [' + e + ']');
        //            }
        //            if (!calledBack) {
        //                O.o('in timeout calling back for url [' + url.url + ']');
        //                url.title = 'timed out';
        //                calledBack = true;
        //                callback('dummy', url);
        //            }
        //            else
        //                O.o('in timeout not calling back for url [' + url.url + ']');
        //        }
        //
        //    };
        //};
        //
        //// generate timeout handler
        //var fn = timeout_wrapper( xxx );
        //
        //// set initial timeout
        //var timeout = setTimeout( fn, 4000000 );
        ////clearTimeout(timeout);

        //O.o ('-------- in getUrlContent_levelOne trying url:' + url.url);


        var fn = function (response)
        {
//request('http://ibm.com', function (error, response, html) {
			if (response.error)
			{
				O.o ('000000000000000 ERROR in getUrlContent_levelOne url:' + url.urlWithHttpPrefix + ':' +
					+ response.error);
				if (response.error && response.error.code === 'ETIMEDOUT') {
					if (!calledBack) {
						calledBack = true;
						url.title = "<timed out>"
						callback('dummy', url);
					}
				}
				else {
					url.asyncWrapperForTitle_levelOneResult = "<error in title retrieval:>" + response.error;;
				}
				// don't want to put error so caller will fall back to method 2, since title presence is the indicator
				//else {
				//	url.title = "<error in title retrieval:>" + response.error;
				//}

			}
            else if (response.statusCode == 200)
			{
				O.o ('000000000000000 SUCCESS in getUrlContent_levelOne url:' + url.urlWithHttpPrefix + ':' +
					+ response.error);
                //console.log('pass 1 html:' + html);
                var title = null;
                if (response.body != null) {
					title = findTitle_htmlParse(response.body);
					O.o ('Level 1 SUCCESS response.body got title from level one:' + url.urlWithHttpPrefix + '->' + title);
				}
                else {
					O.o ('body is null');
				}

                if (!calledBack) {
                    //O.o('calling back from getUrlContent_levelOne x1:' + url.url + '->' + title);
                    if (title != null) {
                        url.title = '1:' + title;
						//O.o ('000000000000000 SUCCESS1.2 in getUrlContent_levelOne url:' + url.urlWithHttpPrefix + ' -> [' +
							//+ url.title + ']');
                        //url.title = title;
                        calledBack = true;
                        callback('dummy', url);
                    }
                }

                //O.o ('========================= title:' + title);
            }

            if(!url.title)
            {
                getUrlContent_levelTwo(function (item) {
                    // Async call is done, alert via callback
                    //O.o ('for url:' + url + ', got title:' + title);
                    //titles.push ('for url:' + url + ', got title:' + title);
                    //url.title = title;
                    if (!calledBack) {
                        calledBack = true;
                        callback('dummy', item);
                    }
                }, url);
            } else {
                if (!calledBack) {
                    O.o('calling back from getUrlContent_levelOne x2:' + url.url + '->' + title);
                    //O.o('x2:' + url.url + '->' + title);
                    calledBack = true;
                    callback('dummy', url);
                }
            }
        };


        //var xxx = request(url.url, fn);
        //O.o ('requesting url.url [' + url.url + ']');
        var unirequest = unirest.get(url.urlWithHttpPrefix);

		// http://unirest.io/nodejs.html
		//unirest.post('http://mockbin.com/request')
		//	.header('Accept', 'application/json')
		//	.send({ "parameter": 23, "foo": "bar" })
		//	.end(function (response) {
		//		console.log(response.body);
		//	});


        unirequest.timeout(5000);
        unirequest.end(fn);

        //O.o ('xxx:' + xxx);

        // 3 this callback is for a second pass at URLs failed in the first pass

    } catch (e) {
        O.e('x12 errrta:' + e);
        O.e('x12:' + url.urlWithHttpPrefix+ '->' + url.title);
        throw e;
        //callback('fail', url);
    }
}; // getUrlContent_levelOne



function whenDoneAsync_LevelOne(urls, res2){
    //O.o('Everything is done level one for [' + urls.length + '] urls.');
    //var iUrl = 0;
    //var itemsWithoutTitlesAfter_levelOne = [];
    for (var iUrl = urls.length-1 ; iUrl >= 0 ; iUrl--) {
        //O.o (iUrl + '. xxx ' + item.url + '->' + item.title);
        if (urls[iUrl].title === null){
            O.o ('================================ title null after level one');
            //itemsWithoutTitlesAfter_levelOne.push (urls[iUrl]);
            urls.splice(iUrl, 1);
        }
    }

    res2.result(urls); // temp to return just level one results

} // whenDoneAsync_LevelOne

// 4
// 5
var getUrlContent_levelTwo = function(callback, url) {
    O.o ('000000000000000 in getUrlContent_levelTwo url:' + url.url);
    try {
        // XMLHttpRequest populate responseXML
        //xhr.open("POST", "http://www.service.org/myService.svc/Method", true);
        //xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
        //xhr.timeout = 4000;
        //xhr.ontimeout = function () { alert("Timed out!!!"); }
        //xhr.send(json);
        //var XMLHttpRequest = require("xhr2").XMLHttpRequest;
        var XMLHttpRequest = require("XMLHttpRequest").XMLHttpRequest;
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.withCredentials=true;
        xmlhttp.timeout = 2000;
        //O.o ('111111111111111');
        xmlhttp.ontimeout = function () {
            console.error("The request for " + url + " timed out.");
        };
        xmlhttp.onreadystatechange = function ()
        {
            //O.o ('xmlhttp.readyState:' + xmlhttp.readyState
//                + ', ' + 'xmlhttp.status:' + xmlhttp.status
//                + ', ' + 'xmlhttp.headers:' + xmlhttp.headers
//            settings.url = response.headers['location']
            //+ ', ' + 'xmlhttp.responseText:' + xmlhttp.responseText
            //);
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
            {
                //O.o ('2222222222222a');
                //o('xmlhttp.responseText:' + xmlhttp.responseText);

                //O.o('xmlhttp.responseXML:' + xmlhttp.responseXML);
                //o('xmlDoc:' + xmlDoc);
                var html = xmlhttp.responseText;
                var title = findTitle_htmlParse(html);

                url.title = '2a:' + title;
				O.o ('url.title from level2:' + url.title);
                //url.title = title;

                if (typeof callback === "function")
                    callback('DUMMY', url);

                //var parser = new DOMParser();
                //var xmlDoc = parser.parseFromString(xmlhttp.responseText, "application/xml");
            } else if (xmlhttp.readyState == 4 && xmlhttp.status == 503) {
                if (typeof callback === "function") {
                    url.title = '<503 unavailable>';
                    callback('dummy', url);
                }
            } else if (xmlhttp.readyState == 4 && xmlhttp.status == 404) {
                if (typeof callback === "function") {
                    url.title = '<404 not found>';
                    callback('dummy', url);
                }

            } else {
                //O.o ('!!!!!!!!!!!!!!!!!!!!!failed on level 2');
                //callback("other error");
                //url.title = 'not 404 of 503 error - something else';
                //callback('dummy', url);
            }
        }
        //O.o ('url:' + url);
        xmlhttp.open("get", url.addressWithHttp, true); // true = async

		//xmlhttp.overrideMimeType("text/plain; charset=x-user-defined");

        //xmlhttp.open("POST", url, false);
        //xmlhttp.timeout = timeout;
        xmlhttp.send();
        //O.o ('444444444444');
        //O.o ('xmlhttp.responseText [' + xmlhttp.responseText + ']');
        return xmlhttp.responseText;
        //return ('xmlHttp.responseText:'+xmlhttp.responseText);
    } catch (e) {
		UtilErrorEmitter.emitError('x13 errrta:', e);
        O.e('x14:' + url.url + '->' + url.title);
        throw e;
    }
} // getUrlContent_levelTwo



if (typeof exports !== 'undefined') {
	exports.expandUrlsToHrefsReturnPatchedStr = expandUrlsToHrefsReturnPatchedStr;
	exports.findTitle_htmlParse = findTitle_htmlParse;
}





var test = function() {
    var itemsxxxx = [];
    //itemsxxxx.push(new Item('http://www.dgsdfgdfgsdgsdfgsdgsdgsfdg.com')); // // no such domain
    //itemsxxxx.push(new Item('http://www.dell.com')); // failed on method 1 - needs fallback
    ////itemsxxxx.push(new Item('http://www.tame.com')); // takes longer and fails
    //itemsxxxx.push(new Item('http://www.apple.com')); // ok w/2
    itemsxxxx.push(new Item('a http://www.linkapedia.com b'));   // ok  w/2
    //itemsxxxx.push(new Item('http://www.microsoft.com'));
    //itemsxxxx.push(new Item('http://www.google.com'));
    //itemsxxxx.push(new Item('http://www.ge.com'));
    //itemsxxxx.push(new Item('http://www.godaddy.com')); // xxx   1. olog:xmlhttp.readyState:4, xmlhttp.status:301, xmlhttp.responseText:<html><head><title>Object moved</title></head><body>
    //itemsxxxx.push(new Item('http://www.netflix.com')) // xx     1. olog:xmlhttp.readyState:4, xmlhttp.status:302, xmlhttp.responseText:
    //itemsxxxx.push(new Item('http://www.time.com')); // xx       1. olog:xmlhttp.readyState:4, xmlhttp.status:301, xmlhttp.responseText:
    //itemsxxxx.push(new Item('http://www.uber.com'));   // //       1. olog:xmlhttp.readyState:4, xmlhttp.status:301
    //itemsxxxx.push(new Item('http://www.wink.com'));
    //itemsxxxx.push(new Item('http://www.temple.com'));
    //itemsxxxx.push(new Item('http://www.digital.com'));

    var res = {};
    res.json = function (s) {
        O.o ('json res output:' + JSON.stringify(s));
    }

    asyncWrapperForTitle_levelOne(itemsxxxx, res);
}






var test = false;
if (test) {
    var x = '1111 ibm.com 2222  apple.com 333333';
    //var x = '1111 ibm.com 2222  dell.com 333333 ddfgdfgdfgdfgdfgf.com 4444 ';
    //var x = '1111 jpro.co 2222';
    //var x = '1111 ibm.com 2222  dell.com 333333 ddfgdfgdfgdfgdfgf.com 4444 u2d.co 555 ustodo.com 666 jpro.co 777';
    //var x = '1111 ibm.com 2222  dell.com 333333 ddfgdfgdfgdfgdfgf.com 4444 u2d.co 555 ustodo.com 666 ';
    //var x = '1111 ddfgdfgdfgdfgdfgf.com 22222 ';   // ok by itself at 40 seconds
    //var x = '1111 jpro.co 22222 '; // bad one still
    //var x = '1111 jpro.co 2222  ';
    //var x = '1 jpro.co 2 ';
    //var x = '1111 http://www.dell.com 2222  '; // ok by itself at 40 seconds
    //var x = '1111 dell.com 2222  '; // ok by itself at 40 seconds
    var x = [];
	x.push ('apple.com ');
	//x.push ('ibm.com ');
	//x.push ('dell.com ');
	//x.push ('apple.com ');
	//x.push ('sdsfsdfsdfsdfsdf.com ');
	//x.push ('google.com ');
	//x.push ('yahoo.com');
	//x.push ('tester.com ');
	//x.push ('get.com ');
	//x.push ('time.com ');
	//x.push ('jpro.com ');


	var res = {};
	res.json = function(s) {
		O.o ('FINAL OUT RES JSON in res.json [' + JSON.stringify(s) + ']');
	}
	async.series([
			function(callback){
				O.o ('11111111111111111111111111111111111111111111111111111111111111111111111');
				var x = 'apple.com';
				expandUrlsToHrefsReturnPatchedStr(x, x, res);
				callback(null, 'a')
			},
			//function(callback){
			//	O.o ('2222222222222222222222222222222222222222222222222');
			//	var x = 'time.com';
			//	expandUrlsToHrefsReturnPatchedStr(x, x, res);
			//	callback(null, 'a')
			//}
		],
		// optional callback
		function(err, results){
			// results is ['a', 'b', 'c', 'd']
			// final callback code
		}
	)






	//var x = '1 ibm.com 2 dell.com 3 ddfgdfgdfgdfgdfgf.com 4 apple.com 4 google.com 5 yahoo.com 6 www.tester.com 7 get.com 8 time.com 9 www.jpro.co ';
    //var x = '1111 tester.com 2222  '; // ok by itself at 40 seconds


	var returned = false;
    res.json = function(s) {
        O.o ('FINAL OUT RES JSON in res.json [' + JSON.stringify(s) + ']');
    }


    //try {
		//for (var urlstring in x) {
		//	//O.o ('urlstring:' + x[urlstring]);
    //
		//	O.o ('');
		//	expandUrlsToHrefsReturnPatchedStr(x[urlstring], x[urlstring], res);
		//	while (!returned) {
		//		setTimeout(function(){alert('in ustodos')}, 2000);
		//	}
    //
		//}
    //} catch (e) {
    //    O.e ('errrtta:' + e);
    //} finally {
    //
    //    //O.o ('finally done');
    //}

    //var regexp = new RegExp();
    //var y = x.split(/\s+/);
    //
    //O.o ('y.length:' + y.length);
    //y.forEach(function(token) {
    //    if (isUrl(token)) {
    //       O.o ('is a url:' + token);
    //    }
    //    //else{
    //    //    O.o ('not a url:' + token);
    //    //}
    //});
}


if (false)
{


	var test_findTitle_htmlParse = function(html) {

		//O.o ('search for title in [' + html + ']')
		var titletag = "<title "
		var iTitle = html.toLowerCase().indexOf(titletag)
		var iTitleEnd = html.toLowerCase().indexOf("</title>")

		var rem1 = html.slice(iTitle+titletag.length,iTitleEnd).trim();
		var iEndTitleTag = rem1.indexOf('>');
		if (iEndTitleTag !== -1) {
			return html.slice(iTitle+titletag.length+iEndTitleTag+1,iTitleEnd).trim();
			// parse error or bad html title tag
		}

		//var title = result.match("<title>(.*?)</title>")[1];
		if (iTitle === -1 || iTitleEnd === -1 || iEndTitleTag === -1)
		{
			return null;
		}
	}

	O.o ('[' + test_findTitle_htmlParse('<title sdfsdf>applehk</title>') + ']');

}


