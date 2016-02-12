// https://www.npmjs.com/package/krawler

// http://12devs.co.uk/articles/promises-an-alternative-way-to-approach-asynchronous-javascript/
//var UtilUrl4 = require('C:/utd/150719utdG/public/util/UtilUrl4.js');
var O = require('C:/utd/150719utdG/public/util/O.js');
var U_error = require('C:/utd/150719utdG/public/util/U_error.js');

if (true)
{


	var Krawler = require('krawler')

	var urls = [
//		'http://ondraplsek.cz'
//		'http://localhost:6762/',
//		'http://localhost:6768/',
//		'http://time.com/',
//		'http://apple.com/',
//		'http://twitter.com/',
//		'http://tweeter.com/',
//		'http://rock.com/',
		'http://tester.com/',
//		'http://hp.com/',
//		'http://ibm.com/',
//		'http://yahoo.com/',

	];

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


	var krawler = new Krawler;

	var resultshk = {};

	krawler
		.queue(urls)
		.on('data', function($, url, response) {
			try {
				// $ - cheerio instance
				// url of the current webpage
				// response object from mikeal/request
				O.o ('response.body:' + response.body.toString());
				var titleCheerio = $("title").text();
				//var title = UtilUrl4.findTitle_htmlParse(response.body.toString());
				resultshk[url] = titleCheerio;
				//O.o ('title [' + titleCheerio + ']');

			} catch (err) {
				U_error.emitError('err in ondata', err);
			}
		})
		.on('error', function(err, url) {
			O.o ('err:' + err);
			resultshk[url] = err.toString();
			// there has been an 'error' on 'url'
		})
		.on('end', function() {
			O.o ('really done hk');
			for (var i in resultshk)
			{
				O.o ('really done hk xxx: [' + i + '] -> [' + resultshk[i] + ']');
			}
			O.o ('really done hk results:' + resultshk);
			// all URLs has been fetched
		});

	O.o ('end hk');
}
