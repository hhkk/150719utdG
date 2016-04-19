'use strict';

{
	/**
	 * Created by henryms on 3/2016.
	 */


	//<div id="idDivCumIframe" width="100%" height="50px" data-ng-bind="">
	//	x
	//	</div>
	//
	//	iframe1
	//	<iframe id="idPerRowIframeTop1"  width="100%" height="50" >
	//	</iframe>
	//
	//	iframe2
	//	<iframe id="idPerRowIframeTop2" class="classPerRowIframexxxy" width="100%" height="50" >
	//	</iframe>
	//
	//





	var injectTextToIframe = function (iframeId, textToInject) {
		var sPre = '\
			this text and its surrounding Iframe were injected \
			<span class="hkcssContentedit" >   \
			<div class="WholePage focusblurme"  \
				state="nonIframed"  \
				id="ustodorow{{$index}}"  \
				hkindex="{{$index}}"  \
				hkustodoid="{{ustodo._id}}"  \
				contenteditable="true"  \
				xxonpaste="UtilHtmlCleaner2_pasteProcessForContentEditable.handlepaste (this, event)"  \
				ng-focus="hkngfocustest($index)"  \
				ng-keyup="onKeyUp_perrow_text($event, $index, ustodosFiltered[$index]._id)"  \
			>';

		var sPost = '</div>  \
					</span>  \
					';

		var sMid = encodeURIComponent($scope.ustodosFiltered[0].html);
		var sAll = sPre + 'hi dad!' + sMid + sPost;
		//var sAll = sPre + sPost;
		document.getElementById('idPerRowIframeTop2').src = 'data:text/html;charset=utf-8,' + sAll;

		// document.getElementById('idPerRowIframeTop').src = "data:text/html;charset=utf-8," + escape(html_string+' TOP');
		// //document.getElementById('idPerRowIframe0').src = "data:text/html;charset=utf-8," + escape(html_string +' 0');
		// //document.getElementById('idPerRowIframeBottom').src = "data:text/html;charset=utf-8," + escape(html_string +' BOTTOM');


	}





	var test160117 = false;
	if (test160117)
	{
	}




	u_setup('U_o', 'o', o);
	u_setup('U_o', 'oerr', oerr);
	u_setup('U_o', 'assert', assert);
	u_setup('U_o', 'a', a);
	u_setup('U_o', 'e', e);
	u_setup('U_o', 'liveLog', liveLog);

	if (typeof exports !== 'undefined') {
		exports.getUrlsFromText = getUrlsFromText;
		exports.hrefThisText = hrefThisText;
		exports.html2text = html2text;
		exports.isUrl = isUrl;
		exports.addNoContentEditableToHrefs = addNoContentEditableToHrefs;
		exports.unUrlThisText = unUrlThisText;
	}

}


var U_o;



