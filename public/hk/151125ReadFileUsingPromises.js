
// http://12devs.co.uk/articles/promises-an-alternative-way-to-approach-asynchronous-javascript/

// readFileUsingPromises.js
if (false)
{
	var test1 = function test1f () {
		console.log ('in test1');
		var FS = require('fs'),
			Q = require('q');

		Q.nfcall(FS.readFile, "file.txt", "utf-8")
			.then(function(data) {
				console.log('test1 File has been read:', data);
			})
			.fail(function(err) {
				console.error('Error received:', err);
			})
			.done();
		console.log ('done test1 though callback pending');
	}

	test1();
}


// part 2 - promise test with Q
if (false)
{
	// http://12devs.co.uk/articles/promises-an-alternative-way-to-approach-asynchronous-javascript/
	var FS = require('fs'),
		Q = require('q'),
		request = require('request');

	function getResults(pathToFile) {
		return Q.nfcall(FS.readFile, pathToFile, "utf-8")
			.then(function(repo) {
				//var options = { headers: {'User-Agent': 'MyAgent'} }; // github requires user agent string
				var options = {  }; // github requires user agent string
				//return 'hi mom';
				return [Q.nfcall(request, 'http://yahoo.com', options),
					Q.nfcall(request, 'http://ibm.com', options)];
			})
			.spread(function(collaboratorsRes, commitsRes) {
				return [collaboratorsRes[1], commitsRes[1]];  // return the response body
			})
			.fail(function(err) {
				console.log('errorhk');
				console.error(err);
				return err;
			});
	}

	// actual call
	getResults('repos.txt').then(function(responses_arrayOfHTMLs) {
		// do something with the responses
		for (html in responses_arrayOfHTMLs)
		{
			console.log ('do something with the responses' + responses_arrayOfHTMLs[html]);

		}
	});

}


// promise test 3 read web pages - condense http call function
if (true) // 3
{
	// http://12devs.co.uk/articles/promises-an-alternative-way-to-approach-asynchronous-javascript/
	var FS = require('fs'),
		Q = require('q'),
		request = require('request');

	function ggg(url)
	{
		var options = {  }; // github requires user agent string
		return Q.nfcall(request, url, options);
	}

	function getResults(pathToFile) {
		return Q.nfcall(FS.readFile, pathToFile, "utf-8")
			.then(function(repo) {
				//var options = { headers: {'User-Agent': 'MyAgent'} }; // github requires user agent string
				//return 'hi mom';
				return [ggg('http://yahoo.com'),
					ggg('http://ibm.com')];
			})
			.spread(function(collaboratorsRes, commitsRes) {
				return [collaboratorsRes[1], commitsRes[1]];  // return the response body
			})
			.fail(function(err) {
				console.log('errorhk');
				console.error(err);
				return err;
			});
	}

	// actual call
	getResults('repos.txt').then(function(responses_arrayOfHTMLs) {
		// do something with the responses
		for (html in responses_arrayOfHTMLs)
		{
			console.log ('do something with the responses' + responses_arrayOfHTMLs[html]);

		}
	});

}




