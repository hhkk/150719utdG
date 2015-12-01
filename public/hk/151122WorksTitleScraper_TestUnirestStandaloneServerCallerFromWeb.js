// from https://github.com/request/request/issues/1509
// from https://www.google.com/search?num=100&q=unirest+options.uri+is+a+required+argument&oq=unirest+options.uri+is+a+required+argument&gs_l=serp.3...347402.348770.0.350275.2.2.0.0.0.0.111.201.1j1.2.0....0...1c.1.64.serp..2.0.0.2hA-UvwoKNs


'use strict'

var UtilUrl4 = require('C:/utd/150719utdG/public/util/UtilUrl4.js');

var http = require('http')
  , request = require('request')
  , url = require('url')


var delay = 0;
var s = http.createServer(function(req, res) {
  res.statusCode = 200
  res.writeHead(200, { 'Content-Type': 'application/json' })

	setTimeout(function(){
		//alert("Hello2");
		res.end(JSON.stringify(req.headers) + '<title>hbk6767</title>')
	}, delay);

})

var s2 = http.createServer(function(req, res) {
  res.statusCode = 200
  res.writeHead(200, { 'Content-Type': 'application/json' })

	setTimeout(function(){
		//alert("Hello2");
		console.log ('emitting');
		res.end(JSON.stringify(req.headers) + '<title>hbk6768</title>')
	}, delay);

})

console.log ('listening on port 6767')
s.listen(6767)
console.log ('listening on port 6768')
s2.listen(6768)



if (false)
{
	var r = request.defaults({
//  uri: 'http://localhost:6767/test'
		//uri: 'http://time.com'       // Current &amp; Breaking News | National &amp; World Updates
		//uri: 'http://apple.com', // Apple
		uri: 'http://ibm.com'            // IBM - United States
		//uri: 'http://yahoo.com'       //Yahoo
		//uri: 'http://tester.com'   // 463 Restricted Client - DOSarrest Internet Security
		//uri: 'http://tweeter.com'    // tweeter.com&nbsp;-&nbsp;This website is for sale!&nbsp;-&nbsp;Stereo Resources and Information.
		//uri: 'http://twitter.com'    //  Twitter
	})


	var count = 0

	r({
		json: true,
		headers: {
			'X-TEST': 'test 1'
		}
	}, function(err, res, body) {
		if (err ) {
			console.log('FAIL')
		} else {
			var title = UtilUrl4.findTitle_htmlParse(body);
//    console.log('OK body:' + body);
			console.log('OK title:' + title);
		}


		if (++count === 2) {
			s.close()
		}
	})

	r({
		json: true,
		headers: {
			'X-TEST': 'test 2'
		}
	}, function(err, res, body) {
		if (err ) {
			console.log('FAIL')
		} else {
			var title = UtilUrl4.findTitle_htmlParse(body);
//    console.log('OK body:' + body);
			console.log('OK title:' + title);
		}

		if (++count === 2) {
			console.log('--------------- closing ---------------------');
			s.close()
		}
	})

}
