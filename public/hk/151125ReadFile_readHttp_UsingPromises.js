
// http://12devs.co.uk/articles/promises-an-alternative-way-to-approach-asynchronous-javascript/
var UtilUrl4 = require('C:/utd/150719utdG/public/util/UtilUrl4.js');
var O = require('C:/utd/150719utdG/public/util/O.js');
var UtilErrorEmitter = require('C:/utd/150719utdG/public/util/UtilErrorEmitter.js');

// readFileUsingPromises.js
if (false)
{
	var test1 = function test1f () {
		O.o ('in test1');
		var FS = require('fs'),
			Q = require('q');

		Q.nfcall(FS.readFile, "file.txt", "utf-8")
			.then(function(data) {
				O.o('test1 File has been read:', data);
			})
			.fail(function(err) {
				console.error('Error received:', err);
			})
			.done();
		O.o ('done test1 though callback pending');
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

	function getResults(pathToFile)
	{
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
				O.o('errorhk');
				console.error(err);
				return err;
			});
	}

	// actual call
	getResults('repos.txt').then(function(responses_arrayOfHTMLs)
	{
		// do something with the responses
		for (html in responses_arrayOfHTMLs)
		{
			O.o ('do something with the responses' + responses_arrayOfHTMLs[html]);

		}
	});

}


// promise test 3 read web pages - condense http call function
if (false) // 3
{
	// http://12devs.co.uk/articles/promises-an-alternative-way-to-approach-asynchronous-javascript/
	var FS = require('fs'),
		Q = require('q'),
		request = require('request');

	function ggg(url)
	{
		O.o('processing URL:'+ url);
		var options = {  }; // github requires user agent string
		return Q.nfcall(request, url, options);
	}

	var a = ['http://yahoo.com',
		'http://ibm.com'];
	//var a = ['http://yahoo.com',
	//	'http://ibm.com'];

	var x = [];
	//var x = [ggg('http://yahoo.com'),
	//	ggg('http://ibm.com')];
	for (d in a) {
		//O.o (a[d]);
		x.push(
			ggg(a[d]));
	}
	//var x = [ggg('http://yahoo.com'),
	//	ggg('http://ibm.com')];

	function getResults(pathToFile) {
		O.o ('in getResults cccccccccccccccccccc:');
		return Q.nfcall(FS.readFile, pathToFile, "utf-8")
			.then(function(repo) {
				O.o ('repo:' + repo);
				//var options = { headers: {'User-Agent': 'MyAgent'} }; // github requires user agent string
				//return 'hi mom';
				return x;
			})
			.spread(function(collaboratorsRes, commitsRes) {
				O.o ('spread1111111111111111111111111111111111111111');
				return [collaboratorsRes[1], commitsRes[1]];  // return the response body
			})
			.fail(function(err) {
				O.o('errorhk');
				console.error(err);
				return err;
			});
	}

	// actual call
	getResults('repos.txt').then(function(responses_arrayOfHTMLs) {
		// do something with the responses
		var i = 0;
		for (html in responses_arrayOfHTMLs)
		{
			O.o (i + ' do something with the responses' + responses_arrayOfHTMLs[html].slice(1,100));
			i++;

		}
	});

}













// promise test 4 read web pages - condense http call function
if (true) // 4
{
	// http://12devs.co.uk/articles/promises-an-alternative-way-to-approach-asynchronous-javascript/
	var FS = require('fs'),
		Q = require('q'),
		request = require('request');

	function ggg(url)
	{
		O.o('processing URL:'+ url);
		var options = {  }; // github requires user agent string
		var rtn = null;
		try {
			rtn = Q.nfcall(request, url, options)
		}   catch (err) {
			UtilErrorEmitter.emitError('error in rereieve', err);
		}
		return rtn;
	}

	var a = [
		//'http://yahoo.com',
		//'http://ibm.com',
		//'http://apple.com',
		//'http://24.60.162.116:3000/',
		//'http://localhost:6767/',
		'http://localhost:6767/',
		'http://localhost:6768/',
	];
	//var a = ['http://yahoo.com',
	//	'http://ibm.com'];

	var x = [];
	//var x = [ggg('http://yahoo.com'),
	//	ggg('http://ibm.com')];
	for (d in a) {
		//O.o (a[d]);
		x.push(
			ggg(a[d]));
	}
	//var x = [ggg('http://yahoo.com'),
	//	ggg('http://ibm.com')];

	function getResults(pathToFile) {
		O.o ('in getResults cccccccccccccccccccc:');
		return Q.nfcall(FS.readFile, pathToFile, "utf-8")
			.then(function(repo) {
				O.o ('5555555555555555repo:' + repo);
				//var options = { headers: {'User-Agent': 'MyAgent'} }; // github requires user agent string
				//return 'hi mom';
				return x;
			})
			.all(function(sssss) {
				O.o ('spread1111111111111111111111111111111111111111' + sssss);
				return [sssss[0][1], sssss[1][1]];  // return the response body
			})
			.fail(function(err) {
				O.o('errorhk--------------');
				console.error(err);
				return err;
			});
	}

	// actual call
	getResults('repos.txt').then(function(responses_arrayOfHTMLs) {
		// do something with the responses
		var i = 0;
		for (html in responses_arrayOfHTMLs)
		{
			O.o ('html # [' + html + ']');
			O.o ('html content:' + responses_arrayOfHTMLs[html]);
			var title = UtilUrl4.findTitle_htmlParse(responses_arrayOfHTMLs[html].toString());

			O.o (i + ' title [' + title + ']');
			//O.o (i + ' do something with the responses' + responses_arrayOfHTMLs[html].toString().slice(1,50));
			i++;
		}
	});

}




