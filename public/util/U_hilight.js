
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

	var highlightOnLoad = function (searchString) {
		if (searchString === '*')
			return;
		try {

			//alert('in highlightOnLoad')
			// Get search string
			//if (/s\=/.test(window.location.search))
			if (/\?q\=/.test(window.location.search)) {
				//searchString = getSearchString();
				// Starting node, parent to all nodes you want to search

				var arrElems_classPerRowTextOnly = document.getElementsByClassName("classPerRowTextOnly");

				//u_.U_o.o('xxddxx:' + u_.UtilClass.getClass('arrElems_classPerRowTextOnly', arrElems_classPerRowTextOnly));


				var len = arrElems_classPerRowTextOnly.length;
				var icount = 0;
				while (icount < len) {
					//arrElems_classPerRowTextOnly[len].style.backgroundColor = "green";

					var textContainerNode = arrElems_classPerRowTextOnly[icount++];
					//var elementid = textContainerNode.id;
					//console.log ('icount:' + icount++ + ', in ITER ' + ':' + elementid);
					//var textContainerNode = document.getElementById(elementid);

					// Informational message for search
					var searchInfo = 'Results:';

					// Split search terms on '|' and iterate over resulting array
					var searchTerms = searchString.split('|');
					var i = -1;
					for (i in searchTerms) {
						// The regex is the secret, it prevents text within tag declarations to be affected
						//var regex = new RegExp(">([^<]*)?(" + searchTerms[i] + ")([^>]*)?<", "ig");
						var regex = new RegExp('(.*)('+searchTerms[i]+')(.*)');
						highlightTextNodes(textContainerNode, regex, i);
						// Add to info-string
						searchInfo += ' <span class="HkHilite_highlighted HkHilite_term' + i + '">' + searchTerms[i] + '</span> ';
					}

					//// Create div describing the search
					//var searchTermDiv = document.createElement("H3");
					//searchTermDiv.className = 'searchterms';
					//searchTermDiv.innerHTML = searchInfo;
					//// Insert as very first child in searched node
					//textContainerNode.insertBefore(searchTermDiv, textContainerNode.childNodes[0]);


				}


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

		//alert('hi mom');

		function highlightTextNodes(element, regex, termid) {
			//alert('in highlightTextNodes')
			var tempinnerHTML = element.innerHTML;
			// Do regex replace
			// Inject span with class of 'highlighted termX' for google style highlighting
			//alert('replaced');
			var htmlPre = element.innerHTML;
			element.innerHTML = tempinnerHTML.replace(regex, '>$1<span class="HkHilite_highlighted HkHilite_term' + termid + '">$2</span>$3<');
			if (htmlPre.strcmp(element.innerHTML) === 0) {
				//console.log('same no change:' + htmlPre);
			} else {
				//console.log('diff :' + htmlPre + ' became ' + element.innerHTML);
			}
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
}





