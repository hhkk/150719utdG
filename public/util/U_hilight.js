
'use strict';

/**
 * Created by henryms on 4/15/2016.
 * from https://www.eriwen.com/javascript/highlight-search-results-with-js/
 */
// var O = require('C:/utd/150719utdG/public/util/U_o.js');
//var UtilDate = require('C:/utd/150719utdG/public/util/UtilDate.js');
//u_.req ('C:/utd/150719utdG/public/util/UtilDate.js');

//var U_error = require('C:/utd/150719utdG/public/util/UtilError.js');


{

	/**
	 *
	 * @param searchStringAndAcrossSpaces - | means or ( ToDo  eventually) space means and
     */

	var highlightOnLoad = function (searchStringAndAcrossSpaces) {

		if (!searchStringAndAcrossSpaces || searchStringAndAcrossSpaces === '*')
			return;

		try
		{
			var arrSearchStringAndAcrossSpaces = searchStringAndAcrossSpaces.split(" ");

			if (arrSearchStringAndAcrossSpaces.length === 0) {
				//u_.U_o.o();
				return;
			}

			//alert('in highlightOnLoad')
			// Get search string
			//if (/s\=/.test(window.location.search))
			//if (/\?q\=/.test(window.location.search)) {
			//searchStringAndAcrossSpaces = getSearchString();
			//Starting node, parent to all nodes you want to search

			var arrPerRowCEelems_50orWhatever = document.getElementsByClassName("classPerRowTextOnly");

			//u_.U_o.o('xxddxx:' + u_.UtilClass.getClass('arrPerRowCEelems_50orWhatever', arrPerRowCEelems_50orWhatever));


			// get 50 or whatever elements per row
			var len = arrPerRowCEelems_50orWhatever.length;
			var icountOf50 = 0;
			while (icountOf50 < len) {
				//arrPerRowCEelems_50orWhatever[len].style.backgroundColor = "green";

				//var elementid = perRowCEelem_Among50orWhatever.id;
				//console.log ('icountOf50:' + icountOf50++ + ', in ITER ' + ':' + elementid);
				//var perRowCEelem_Among50orWhatever = document.getElementById(elementid);

				// Informational message for search
				var searchInfo = 'Results:';

				// Split search terms on '|' and iterate over resulting array
				//var searchTerms = searchStringAndAcrossSpaces.split('|');
				var i = -1;

				// including spaces
				for (i in arrSearchStringAndAcrossSpaces) {
					// e.g., ('<html>text to be highlighted</html>', 'tester', 0)
					highlightTextNodes_ReplaceInnerHtml(
						arrPerRowCEelems_50orWhatever[icountOf50++],
						arrSearchStringAndAcrossSpaces[i],
						icountOf50);
					// Add to info-string
					searchInfo += ' <span class="HkHilite_highlighted HkHilite_term' + i + '">' + arrSearchStringAndAcrossSpaces[i] + '</span> ';
				}



				//for (i in searchTerms) {
				//	// The regex is the secret, it prevents text within tag declarations to be affected
				//	//var regex = new RegExp(">([^<]*)?(" + searchTerms[i] + ")([^>]*)?<", "ig");
				//	var regex = new RegExp('(.*)('+searchTerms[i]+')(.*)');
				//	highlightTextNodes_ReplaceInnerHtml(perRowCEelem_Among50orWhatever, regex, i);
				//	// Add to info-string
				//	searchInfo += ' <span class="HkHilite_highlighted HkHilite_term' + i + '">' + searchTerms[i] + '</span> ';
				//}





				//// Create div describing the search
				//var searchTermDiv = document.createElement("H3");
				//searchTermDiv.className = 'searchterms';
				//searchTermDiv.innerHTML = searchInfo;
				//// Insert as very first child in searched node
				//perRowCEelem_Among50orWhatever.insertBefore(searchTermDiv, perRowCEelem_Among50orWhatever.childNodes[0]);


			//}


				//alert('done finding a match');
			}
		} catch (e) {
			alert('in hilight, error:' + e);
			u_.UtilError.emitError('hilight error', e);
		}


		// Pull the search string out of the URL
		//function getSearchString() {
		//	// Return sanitized search string if it exists
		//	//var rawSearchString = window.location.search.replace(/[a-zA-Z0-9\?\&\=\%\#]+s\=(\w+)(\&.*)?/,"$1");
		//	var rawSearchString = 'i';
		//	return rawSearchString;
        //
		//	// Replace '+' with '|' for regex
		//	// Also replace '%20' if your cms/blog uses this instead (credit to erlando for adding this)
		//	//return rawSearchString.replace(/\%20|\+/g,"\|");
		//}


		function highlightTextNodes_ReplaceInnerHtml(element, searchSubTermAlreadySpaceSplit, icountOf50) {
			//alert('in highlightTextNodes_ReplaceInnerHtml')


			var isHTML = false;
			var regex;
			// The regex is the secret, it prevents text within tag declarations to be affected

			if (u_.UtilHtmlCleaner.isHTML3(element.innerHTML)) {
				regex = new RegExp(">([^<]*)?(" + searchSubTermAlreadySpaceSplit + ")([^>]*)?<", "ig");
				isHTML = true;
			}
			else {
				regex = new RegExp('(.*)('+ searchSubTermAlreadySpaceSplit +')(.*)');
				isHTML = false;
			}

			var tempinnerHTML = '<html>' + element.innerHTML + '</html>';

			// Do regex replace
			// Inject span with class of 'highlighted termX' for google style highlighting
			//alert('replaced');
			//var htmlPre = element.innerHTML;
			if (isHTML) {
				element.innerHTML = tempinnerHTML.replace(regex, '>$1<span class="HkHilite_highlighted HkHilite_term' + icountOf50 + '">$2</span>$3<');
			}   else {
				element.innerHTML = tempinnerHTML.replace(regex, '$1<span class="HkHilite_highlighted HkHilite_term' + icountOf50 + '">$2</span>$3');
			}

			tempinnerHTML = tempinnerHTML.slice(6,-7); // remove html pre and post amble

			//if (htmlPre.strcmp(element.innerHTML) === 0) {
				//console.log('same no change:' + htmlPre);
			//} else {
				//console.log('diff :' + htmlPre + ' became ' + element.innerHTML);
			//}
		}
	};

	u_setup('U_hilight', 'highlightOnLoad', highlightOnLoad);

	if (typeof exports !== 'undefined') {
		exports.U_hilight = U_hilight;
	}

	var U_hilight; // probably needed only to quiet compile time check warnings

}

var test = false;
if (test) {
//	writeFileSync('c:/tmp/t.txt', 'time in a bottle\r\n');
	var element = {};
	element.innerHTML = "<html>this here is a tester hk</html>"

	highlightTextNodes_ReplaceInnerHtml(element, "tester", 1, true)

}






