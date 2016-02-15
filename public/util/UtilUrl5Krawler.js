// https://www.npmjs.com/package/krawler

// http://12devs.co.uk/articles/promises-an-alternative-way-to-approach-asynchronous-javascript/
//var UtilUrl4 = require('C:/utd/150719utdG/public/util/UtilUrl4.js');
var O = require('C:/utd/150719utdG/public/util/U_o.js');
var U_error = require('C:/utd/150719utdG/public/util/U_error.js');
var Krawler = require('krawler');
// var UtilUrl5Krawler = require('C:/utd/150719utdG/public/util/UtilUrl5Krawler.js');


/**
 * enrich ustodo with     title
 * @param arrUrlUtds enriched - side effected
 * @param callbackFromKrawl
 */
var krawlhk = function(arrUrlUtds, callbackFromKrawl)
{
	//2. ologx:really done hk
	//3. ologx:really done hk xxx: [http://localhost:6768/] -> [hbk6768]
	//4. ologx:really done hk xxx: [http://time.com/] -> [TIME - Current & Breaking News | National & World Updates]
	//5. ologx:really done hk xxx: [http://rock.com/] -> [ROCK.COM : MUSIC]
	//6. ologx:really done hk xxx: [http://apple.com/] -> [Apple]
	//7. ologx:really done hk xxx: [http://tester.com/] -> []
	//8. ologx:really done hk xxx: [http://yahoo.com/] -> [Yahoo! - 999 Unable to process request at this time -- error 999]
	//9. ologx:really done hk xxx: [http://tweeter.com/] -> [tweeter.com - This website is for sale! - Stereo Resources and Information.]
	//10. ologx:really done hk xxx: [http://ibm.com/] -> [IBM - United States]
	//11. ologx:really done hk xxx: [http://hp.com/] -> [HP® Official Site | Laptop Computers, Desktops, Printers and more]
	//12. ologx:really done hk xxx: [http://twitter.com/] -> [Twitter]
	//13. ologx:really done hk xxx: [http://localhost:6762/] -> [Error: connect ECONNREFUSED 127.0.0.1:6762]

	try {
		var krawler = new Krawler;

		// set up URLs to fetch title on
		var sArrUrlStringsWhttp = [];
		for (var iUrlUtd in arrUrlUtds) {
			sArrUrlStringsWhttp.push (arrUrlUtds[iUrlUtd].addressWithHttp);
		}

		var mapUrlStringWhttp_Title = {};

		krawler
			.queue(sArrUrlStringsWhttp)
			.on('data', function($, urlStringWhttp, response) {
				try {
					// $ - cheerio instance
					// url of the current webpage
					// response object from mikeal/request
					//O.o ('response.body:' + response.body.toString());
					var titleCheerio = $("title").text();
					//var title = UtilUrl4.findTitle_htmlParse(response.body.toString());
					mapUrlStringWhttp_Title[urlStringWhttp] = titleCheerio;
					//O.o ('title [' + titleCheerio + ']');

				} catch (err) {
					U_error.emitError('err in ondata', err);
				}
			})
			.on('error', function(err, url) {
				O.oerr ('err:' + err);
				mapUrlStringWhttp_Title[urlString] = err.toString();
				// there has been an 'error' on 'url'
			})
			.on('end', function() {
				O.o ('really done hk');
				// since Krawl returns a map from url to title, and we have arr of utdUrls...
				// grab titles from krawl results and put into utdUrls
				for (var urlStringWhttpMapsToTitle_nameIndex in mapUrlStringWhttp_Title)
				{
					var foundMatch = false;
					for (var iUrlUtd in arrUrlUtds)
					{
						if (urlStringWhttpMapsToTitle_nameIndex === arrUrlUtds[iUrlUtd].addressWithHttp)
						{
							arrUrlUtds[iUrlUtd].title = mapUrlStringWhttp_Title[urlStringWhttpMapsToTitle_nameIndex];
							foundMatch = true;
							O.o ('title get success : [' + urlStringWhttpMapsToTitle_nameIndex + '] -> [' + mapUrlStringWhttp_Title[urlStringWhttpMapsToTitle_nameIndex] + ']');
						}
					}
					if (!foundMatch) {
						throw  'failed to find a matching UrlUtd for urlMapsToTitle [' + urlStringWhttpMapsToTitle_nameIndex + ']';
					}

				}

				// now verify that every urlUtd has a title
				for (var iUrlUtd in arrUrlUtds)
				{
					if (!arrUrlUtds[iUrlUtd].title)   {
						throw  'failed to populate title in arrUrlUtds[iUrlUtd].addressWithHttp [' + arrUrlUtds[iUrlUtd].addressWithHttp + ']';
					}
				}


				O.o ('really done hk results:' + mapUrlStringWhttp_Title);
				callbackFromKrawl(arrUrlUtds);
				// all URLs has been fetched
			});
	} catch (err) {
		U_error.emitError('error i krawler', err);
	}
}



if (true)
{
	var urlUtds = [
	];

	urlUtds.push
		'http://ondraplsek.cz',
		'http://localhost:6762/',
		'http://localhost:6768/',
		'http://time.com/',
		'http://apple.com/',
		'http://twitter.com/',
		'http://tweeter.com/',
		'http://rock.com/',
		'http://tester.com/',
		'http://hp.com/',
		'http://ibm.com/',
		'http://yahoo.com/';



		krawlhk(urlUtds, function(s){
		O.o ('I did it Mom!');
	});
}


var UtilUrl5Krawler;

u_setup('UtilUrl5Krawler', 'krawlhk', krawlhk);

if (typeof exports !== 'undefined') {
	exports.krawlhk = krawlhk;
}


