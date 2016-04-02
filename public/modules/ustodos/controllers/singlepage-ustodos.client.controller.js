'use strict';

/*jshint multistr: true */


// hbklrb6 invoked by C:\utd\150719utdG\public\modules\ustodos\views\singlepage-ustodos.client.view.html

//var UtilClass = require('C:/utd/150719utdG/public/util/UtilClass.js');
//var O = require('C:/utd/150719utdG/public/util/U_o.js');
//var UtilString;
//var UtilClass = null;
//var UtilJsTypeDetect = require('C:/utd/150719utdG/public/util/UtilJsTypeDetect.js');
//var UtilHtmlCleaner = require('C:/utd/150719utdG/public/util/UtilHtmlCleaner.js');
//var UtilHtmlCleaner = require('C:/utd/150719utdG/public/util/UtilHtmlCleaner.js');



//var O = O;
//var CKEDITOR = CKEDITOR;
var tinyMCE = tinyMCE;
//var UtilJsTypeDetect = UtilJsTypeDetect;
//var UtilHrefThisText = UtilHrefThisText;
var UtilString = UtilString;
var Medium = Medium;
//var UtilDate = UtilDate;
//var UtilHtmlCleaner = UtilHtmlCleaner;

var CONST_SHOW_INIT_ALERTS = false;
var $ = $;
var UtilPrintObjects = UtilPrintObjects;

//alert('initing singlepage-ustodos.client.controller.js');

var NLB_bgFade = NLB_bgFade;
//var U_error = U_error;
var UtilClassz = UtilClassz;

//var utilHtmlCleanerFunctions = utilHtmlCleanerFunctions; // this is a file name
//alert('defining utilHtmlCleanerFunctions2_pasteProcessForContentEditable ');
//var utilHtmlCleanerFunctions2_pasteProcessForContentEditable = utilHtmlCleanerFunctions2_pasteProcessForContentEditable; // this is a file name

var mceId = 'idTinyMceTextArea';

//var uu_ = uu_ || {};

//alert ('in here 2');
//var myapplication = exports.myapplication;

//var unirest = require('unirest');
//var fn = function()
//{
//    u_.U_o.o ('got callback from unirequest get');
//}
//var unirequest = unirest.get('/ustodos');
//unirequest.timeout(5000);
//unirequest.end(fn);


// alert ('reiniting class');

var resolveFinalCommandBetweenUrlAndInputBox = function(commandFromInputBox, commandInputBox)
{
	//alert ('in resolveFinalCommandBetweenUrlAndInputBox  SEARCH $location.search().q:' + commandFromInputBox +
	//', commandInputBox:' + commandInputBox);

	//alert ('stateParams_searchstring_url:' + stateParams_searchstring_url);
	//alert ('commandFromInputBox:' + commandFromInputBox);


//	sdfsdf

var commandFinal = commandInputBox;
	if (commandFinal === undefined || !commandFinal) {
		commandFinal = commandFromInputBox;
	}
	if (commandFinal === undefined || !commandFinal) {
		commandFinal = '';
	}

	console.log ('commandFinal:'+commandFinal);
	return commandFinal;
};


// Ustodos controller
//var angularModule = angular.module('ustodos').directive('onFinishRender', function ($timeout) {
//var angularModule = null;
//try {
//    angularModule = angular.module('ustodos', ['ngSanitize']);
//    console.log ('no errorhks!!!!!!!!!!!!!!!!!!!!');
//}catch (err) {
//    console.log ('errorhk!!!!!!!!!!!!!!!!!!!!');
//}

var angularModule = null;
//angularModule = angular.module('ustodos');


//u_.U_o.a ('sssa1.5');



//angularModule.run(function($rootScope, $compile, $rootElement) {
//    // We'll create a new scope to use as the context for the view.
//    //$scope = $rootScope.$new();
//    $scope.model = [{name: 'first'}, {name: 'second'}, {name: 'third'}];
//
//    // Calling `$compile(html)` returns a function that, when called with
//    // a context object, links the compiled HTML to the given context (e.g.
//    // binds scope-based expressions in the view to the passed in scope).
//    var html = '<div ng-repeat='m in model'>{{m.name}}</div>';
//    var linkingFunction = $compile(html);
//    var elem = linkingFunction($scope);
//
//    // You can then use the DOM element like normal.
//    $rootElement.append(elem);
//});




//myApp. controller('myCtrl', ['$scope', '$sce', function($scope, $sce) {
//    // ...
//    $scope.preview_data.preview.embed.htmlSafe =
//        $sce.trustAsHtml(preview_data.preview.embed.html);
//}
//myApp. controller('myCtrl', ['$scope', '$sce', function($scope, $sce)




// works angularModule. controller('UstodosController', ['$scope', '$stateParams', '$location', '$rootScope', 'Authentication', 'Ustodos',
//    function($scope, $stateParams, $location, $rootScope, Authentication, Ustodos) {
// angularModule. controller('UstodosController', ['$scope', '$stateParams', '$location', '$rootScope', 'ngSanitize', 'Authentication', 'Ustodos',



var pasteHtmlContentEditableCleaner = function () {
	//alert('in scope.pasteHtmlContentEditableCleaner():' + window.clipboardData.getData('Text'));
	alert('in scope.pasteHtmlContentEditableCleaner():');
	var foo = 'xx:' + window.clipboardData.getData('Text');
	window.clipboardData.setData('Text', foo);
};





//.----------------. .----------------. .----------------. .----------------. .----------------. .----------------. .----------------. .----------------. .-----------------..----------------. .----------------. .----------------. .----------------. .-----------------.
//| .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. |
//| |      __      | | |   ______     | | |   ______     | | |              | | |  ________    | | |  _________   | | |  _________   | | |     _____    | | | ____  _____  | | |     _____    | | |  _________   | | |     _____    | | |     ____     | | | ____  _____  | |
//| |     /  \     | | |  |_   __ \   | | |  |_   __ \   | | |              | | | |_   ___ `.  | | | |_   ___  |  | | | |_   ___  |  | | |    |_   _|   | | ||_   \|_   _| | | |    |_   _|   | | | |  _   _  |  | | |    |_   _|   | | |   .'    `.   | | ||_   \|_   _| | |
//| |    / /\ \    | | |    | |__) |  | | |    | |__) |  | | |              | | |   | |   `. \ | | |   | |_  \_|  | | |   | |_  \_|  | | |      | |     | | |  |   \ | |   | | |      | |     | | | |_/ | | \_|  | | |      | |     | | |  /  .--.  \  | | |  |   \ | |   | |
//| |   / ____ \   | | |    |  ___/   | | |    |  ___/   | | |              | | |   | |    | | | | |   |  _|  _   | | |   |  _|      | | |      | |     | | |  | |\ \| |   | | |      | |     | | |     | |      | | |      | |     | | |  | |    | |  | | |  | |\ \| |   | |
//| | _/ /    \ \_ | | |   _| |_      | | |   _| |_      | | |              | | |  _| |___.' / | | |  _| |___/ |  | | |  _| |_       | | |     _| |_    | | | _| |_\   |_  | | |     _| |_    | | |    _| |_     | | |     _| |_    | | |  \  `--'  /  | | | _| |_\   |_  | |
//| ||____|  |____|| | |  |_____|     | | |  |_____|     | | |   _______    | | | |________.'  | | | |_________|  | | | |_____|      | | |    |_____|   | | ||_____|\____| | | |    |_____|   | | |   |_____|    | | |    |_____|   | | |   `.____.'   | | ||_____|\____| | |
//| |              | | |              | | |              | | |  |_______|   | | |              | | |              | | |              | | |              | | |              | | |              | | |              | | |              | | |              | | |              | |
//| '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' |
//'----------------' '----------------' '----------------' '----------------' '----------------' '----------------' '----------------' '----------------' '----------------' '----------------' '----------------' '----------------' '----------------' '----------------'
// section_app_Def

//alert ('initing app');

var app = angular.module('ustodos',[]);      // hhkk105 app def worked before ui.router was added but this video showed its use https://youtu.be/5JJFiAS1ys4

app.directive('repeatDone', function() {
	console.log ('@@@@@@@@@@@@@@@@ in repeatdone1');
	return function(scope, element, attrs) {
		//if (CONST_SHOW_INIT_ALERTS)
		//	alert('inONLOADINIT#7  in app.directive(repeatDone'); // happens per row!!!

		if (scope.$last) { // all are rendered
			if (CONST_SHOW_INIT_ALERTS)
				alert('inONLOADINIT#7b  in app.directive(repeatDone');

			scope.$eval(attrs.repeatDone);
		}
	};
});


//var app = angular.module('ustodos',['ngSanitize', 'ui.router']);      // worked before ui.router was added but this video showed its use https://youtu.be/5JJFiAS1ys4

////http://jsfiddle.net/whnSs/
//var app = angular.module('myApp', []);

// http://stackoverflow.com/questions/15666048/service-vs-provider-vs-factory    http://jsfiddle.net/pkozlowski_opensource/PxdSP/14/
//alert ('defining SppSvc');
// http://stackoverflow.com/questions/21919962/angular-share-data-between-controllers

//alert ('defining SppSvc');













//.----------------. .----------------. .----------------. .----------------. .----------------. .----------------. .----------------. .----------------. .----------------. .----------------. .----------------. .----------------. .----------------. .----------------.
//| .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. |
//| |    _______   | | |   ______     | | |   ______     | | |    _______   | | | ____   ____  | | |     ______   | | |              | | |    _______   | | |  _________   | | |  _______     | | | ____   ____  | | |     _____    | | |     ______   | | |  _________   | |
//| |   /  ___  |  | | |  |_   __ \   | | |  |_   __ \   | | |   /  ___  |  | | ||_  _| |_  _| | | |   .' ___  |  | | |              | | |   /  ___  |  | | | |_   ___  |  | | | |_   __ \    | | ||_  _| |_  _| | | |    |_   _|   | | |   .' ___  |  | | | |_   ___  |  | |
//| |  |  (__ \_|  | | |    | |__) |  | | |    | |__) |  | | |  |  (__ \_|  | | |  \ \   / /   | | |  / .'   \_|  | | |              | | |  |  (__ \_|  | | |   | |_  \_|  | | |   | |__) |   | | |  \ \   / /   | | |      | |     | | |  / .'   \_|  | | |   | |_  \_|  | |
//| |   '.___`-.   | | |    |  ___/   | | |    |  ___/   | | |   '.___`-.   | | |   \ \ / /    | | |  | |         | | |              | | |   '.___`-.   | | |   |  _|  _   | | |   |  __ /    | | |   \ \ / /    | | |      | |     | | |  | |         | | |   |  _|  _   | |
//| |  |`\____) |  | | |   _| |_      | | |   _| |_      | | |  |`\____) |  | | |    \ ' /     | | |  \ `.___.'\  | | |              | | |  |`\____) |  | | |  _| |___/ |  | | |  _| |  \ \_  | | |    \ ' /     | | |     _| |_    | | |  \ `.___.'\  | | |  _| |___/ |  | |
//| |  |_______.'  | | |  |_____|     | | |  |_____|     | | |  |_______.'  | | |     \_/      | | |   `._____.'  | | |   _______    | | |  |_______.'  | | | |_________|  | | | |____| |___| | | |     \_/      | | |    |_____|   | | |   `._____.'  | | | |_________|  | |
//| |              | | |              | | |              | | |              | | |              | | |              | | |  |_______|   | | |              | | |              | | |              | | |              | | |              | | |              | | |              | |
//| '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' |
//'----------------' '----------------' '----------------' '----------------' '----------------' '----------------' '----------------' '----------------' '----------------' '----------------' '----------------' '----------------' '----------------' '----------------'
// section_service section_spp


// archetype prototype service for access to data across controllers
app.factory('SppSvc', ['$rootScope', 'Ustodos', function($rootScope, Ustodos)
{
	//alert ('in SppSvc');















	var sppData = {};
	var itemsServiceFns = {};



	//hhkk106
	/**
	 *
	 * @param arrIntIndexesToDelete_or_oneUsToDo - delete index (in array)
	 * @param ustodos - side-effected array
     */
	itemsServiceFns.deleteDbUstotoOneByIndex = function(arrIntIndexesToDelete_or_oneUsToDo, ustodos)
	{
		//alert ('in deleteDbUstotoOneByIndex2 arrIntIndexesToDelete_or_oneUsToDo:'+arrIntIndexesToDelete_or_oneUsToDo);
		//try {
		//
		//}
		//u_.U_o.assert (false, 'asdasd');

		// Still support only one delete at a time!!!!!!!!!!!!!!
		u_.U_o.assert ((arrIntIndexesToDelete_or_oneUsToDo.length === 1), 'support only delete one right now, not:' + arrIntIndexesToDelete_or_oneUsToDo.length);

		var intIndexToDelete = arrIntIndexesToDelete_or_oneUsToDo[0];
		//alert('intIndexToDelete:'+intIndexToDelete);
		//return;
		//alert ('deleting i:' + i);
		try {
			var ustodo = ustodos[intIndexToDelete];

			var savOid = ustodo._id;
			u_.U_o.o('33333333333333333333333333333 splicing: i' + intIndexToDelete );
			ustodos.splice(intIndexToDelete, 1);

			ustodo.$delete(function() {
				console.log ('$delete done !!! savOid:' + savOid);
				//ustodos.splice(index, 1));
				//alert ('delete done, now remove from array');
				//array.;
			}, function(errorResponse) {
				var error = errorResponse.data.message;
				console.log ('ERROR ON SAVE !!! error:'  + error);
			});
			console.log ('done remove/delete');
		} catch (err) {
			console.log ('err:' + err);
		}
	};













	//itemsServiceFns.setSppData = function(sppData1) {
	//	//
	//	// alert ('in set0 ' + val + ':' + key);
	//	sppData2 = sppData1;
	//};
	//itemsServiceFns.set0 = function(val, key) {
	//	//
	//	// alert ('in set0 ' + val + ':' + key);
	//	data[val] = key;
	//
	//};
	//itemsServiceFns.get0 = function() {
	//	//alert ('in get0');
	//	return data;
	//};

	/**
	 * service to indicate if the editor contains non-saved content such that should not be overwritten
	 * @param val
     */
	itemsServiceFns.setModelDirty = function(val, caller)
	{
		//alert('1 setting service model ditry flag to:' + val);

		if (val)
		{
			//alert('2 setting dirty true caller:'+caller);

			/**
			 * get internal frame mce window elem id, e.g. to color it
			 * @returns {*}
             */
			var getMceWindowElement = function () {
				var elem = null;
				if (document.getElementById('idTinyMceTextArea_ifr'))
				{
					//alert ("is not null");
					// http://stackoverflow.com/questions/14451358/how-to-pick-element-inside-iframe-using-document-getelementbyid
					var mceWindowElement = document.getElementById('idTinyMceTextArea_ifr').contentWindow.document.getElementById('tinymce');
					if (document.getElementById('idTinyMceTextArea_ifr').contentWindow.document.getElementById('tinymce'))
					{
						//alert ('in eventMouseoverRow2:C');
						mceWindowElement.style['background-color'] = '#EEE'; // SETMODELLDIRTY
					}
				}
				return elem;
			};

			var mceWindowElement = getMceWindowElement();
			if (mceWindowElement)
			{
				mceWindowElement.style['background-color'] = '#EEE'; // SETMODELLDIRTY
			}

			//alert ('in eventMouseoverRow2:A');
			//var id = 'tinymce';
			//var id = 'mceu_0-body';
		}

		sppData.modelDirty = val;
		var elemId = 'mceu_57';
		if (document.getElementById(elemId) !== null)
		{
			if (val)
				document.getElementById(elemId).style.visibility='visible';
			else
				document.getElementById(elemId).style.visibility='hidden';

		}

		//if (document.getElementById('mceu_57-body').style.visibility==='hidden')
		//	document.getElementById('mceu_57-body').style.visibility='visible';
		//else
		//	document.getElementById('mceu_57-body').style.visibility='hidden';
		//

		//
		//{
		//	if (document.getElementById(elemId).style.visibility==='visible')
		//	//else
		//	//	document.getElementById(elemId).style.visibility='hidden';
		//}

	};
	itemsServiceFns.getModelDirty = function(caller) {
		//alert ('in getModelDirty caller:' + caller + ', sppData.modelDirty:' + sppData.modelDirty);
		return sppData.modelDirty;
	};

	itemsServiceFns.setWhichEditorShowing = function(val) {
		sppData.whichEditorShowing = val;
	};
	itemsServiceFns.getWhichEditorShowing = function() {
		return sppData.whichEditorShowing;
	};

	itemsServiceFns.setSelectedItem = function(val) {
		sppData.selectedItem = val;
	};
	itemsServiceFns.getSelectedItem = function() {
		return sppData.selectedItem;
	};

	return itemsServiceFns;
}]);

//alert ('done defining SppSvc');



//angular.module('ustodos'). controller('HeaderController',
//	['$scope',
//	'SppSvc',
//	function($scope,
//			 SppSvc
//	) {
//		$scope.SppSvc = SppSvc;
//		//$scope.gblx = gblx;
//
//	}]);









//.----------------. .----------------. .----------------. .----------------. .----------------. .----------------. .----------------. .-----------------..----------------. .----------------. .----------------. .----------------. .----------------. .----------------. .----------------.
//| .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. |
//| |  _________   | | |     ____     | | |     ____     | | |  _________   | | |              | | |     ______   | | |     ____     | | | ____  _____  | | |  _________   | | |  _______     | | |     ____     | | |   _____      | | |   _____      | | |  _________   | | |  _______     | |
//| | |_   ___  |  | | |   .'    `.   | | |   .'    `.   | | | |  _   _  |  | | |              | | |   .' ___  |  | | |   .'    `.   | | ||_   \|_   _| | | | |  _   _  |  | | | |_   __ \    | | |   .'    `.   | | |  |_   _|     | | |  |_   _|     | | | |_   ___  |  | | | |_   __ \    | |
//| |   | |_  \_|  | | |  /  .--.  \  | | |  /  .--.  \  | | | |_/ | | \_|  | | |              | | |  / .'   \_|  | | |  /  .--.  \  | | |  |   \ | |   | | | |_/ | | \_|  | | |   | |__) |   | | |  /  .--.  \  | | |    | |       | | |    | |       | | |   | |_  \_|  | | |   | |__) |   | |
//| |   |  _|      | | |  | |    | |  | | |  | |    | |  | | |     | |      | | |              | | |  | |         | | |  | |    | |  | | |  | |\ \| |   | | |     | |      | | |   |  __ /    | | |  | |    | |  | | |    | |   _   | | |    | |   _   | | |   |  _|  _   | | |   |  __ /    | |
//| |  _| |_       | | |  \  `--'  /  | | |  \  `--'  /  | | |    _| |_     | | |              | | |  \ `.___.'\  | | |  \  `--'  /  | | | _| |_\   |_  | | |    _| |_     | | |  _| |  \ \_  | | |  \  `--'  /  | | |   _| |__/ |  | | |   _| |__/ |  | | |  _| |___/ |  | | |  _| |  \ \_  | |
//| | |_____|      | | |   `.____.'   | | |   `.____.'   | | |   |_____|    | | |   _______    | | |   `._____.'  | | |   `.____.'   | | ||_____|\____| | | |   |_____|    | | | |____| |___| | | |   `.____.'   | | |  |________|  | | |  |________|  | | | |_________|  | | | |____| |___| | |
//| |              | | |              | | |              | | |              | | |  |_______|   | | |              | | |              | | |              | | |              | | |              | | |              | | |              | | |              | | |              | | |              | |
//| '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' |
//'----------------' '----------------' '----------------' '----------------' '----------------' '----------------' '----------------' '----------------' '----------------' '----------------' '----------------' '----------------' '----------------' '----------------' '----------------'
// section_footerController

angular.module('ustodos').controller
('FooterController',
	['$scope',
		'SppSvc',
		function($scope,
				 SppSvc
		) {
			//alert ('defining FooterController');
			$scope.SppSvc = SppSvc;
			//$scope.gblx = gblx;

		}
	]
);


var callbackCommand = function(callbackResult) {
	u_.U_o.o  ('in callbackCommand');
};





//.----------------. .----------------. .-----------------..----------------. .----------------. .----------------. .----------------. .----------------. .----------------. .-----------------..----------------. .----------------. .----------------. .----------------. .----------------. .----------------. .----------------.
//| .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. |
//| |    _______   | | |     _____    | | | ____  _____  | | |    ______    | | |   _____      | | |  _________   | | |              | | |     ______   | | |     ____     | | | ____  _____  | | |  _________   | | |  _______     | | |     ____     | | |   _____      | | |   _____      | | |  _________   | | |  _______     | |
//| |   /  ___  |  | | |    |_   _|   | | ||_   \|_   _| | | |  .' ___  |   | | |  |_   _|     | | | |_   ___  |  | | |              | | |   .' ___  |  | | |   .'    `.   | | ||_   \|_   _| | | | |  _   _  |  | | | |_   __ \    | | |   .'    `.   | | |  |_   _|     | | |  |_   _|     | | | |_   ___  |  | | | |_   __ \    | |
//| |  |  (__ \_|  | | |      | |     | | |  |   \ | |   | | | / .'   \_|   | | |    | |       | | |   | |_  \_|  | | |              | | |  / .'   \_|  | | |  /  .--.  \  | | |  |   \ | |   | | | |_/ | | \_|  | | |   | |__) |   | | |  /  .--.  \  | | |    | |       | | |    | |       | | |   | |_  \_|  | | |   | |__) |   | |
//| |   '.___`-.   | | |      | |     | | |  | |\ \| |   | | | | |    ____  | | |    | |   _   | | |   |  _|  _   | | |              | | |  | |         | | |  | |    | |  | | |  | |\ \| |   | | |     | |      | | |   |  __ /    | | |  | |    | |  | | |    | |   _   | | |    | |   _   | | |   |  _|  _   | | |   |  __ /    | |
//| |  |`\____) |  | | |     _| |_    | | | _| |_\   |_  | | | \ `.___]  _| | | |   _| |__/ |  | | |  _| |___/ |  | | |              | | |  \ `.___.'\  | | |  \  `--'  /  | | | _| |_\   |_  | | |    _| |_     | | |  _| |  \ \_  | | |  \  `--'  /  | | |   _| |__/ |  | | |   _| |__/ |  | | |  _| |___/ |  | | |  _| |  \ \_  | |
//| |  |_______.'  | | |    |_____|   | | ||_____|\____| | | |  `._____.'   | | |  |________|  | | | |_________|  | | |   _______    | | |   `._____.'  | | |   `.____.'   | | ||_____|\____| | | |   |_____|    | | | |____| |___| | | |   `.____.'   | | |  |________|  | | |  |________|  | | | |_________|  | | | |____| |___| | |
//| |              | | |              | | |              | | |              | | |              | | |              | | |  |_______|   | | |              | | |              | | |              | | |              | | |              | | |              | | |              | | |              | | |              | | |              | |
//| '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' |
//'----------------' '----------------' '----------------' '----------------' '----------------' '----------------' '----------------' '----------------' '----------------' '----------------' '----------------' '----------------' '----------------' '----------------' '----------------' '----------------' '----------------'
// section_singlepage   section_controller


//u_.U_o.a ('oneOfSeveral controller with array - first?');
angular.module('ustodos').controller
	('SinglepageUstodosController',
		// angular.module('ustodos',['ngSanitize']). controller('UstodosController',
		// angular.module('ustodos',[]). controller('UstodosController',

		//function($scope, $window, $stateParams, $location, $document, $rootScope, $sce, $http, Authentication, Ustodos, Commands)
		['$scope', '$window', '$stateParams',
			'$location', '$document', '$rootScope',
			'$sce', '$http','$filter',
			'$state',
			'Authentication', 'Ustodos', 'Commands',
			'SppSvc',
			function($scope, $window, $stateParams,
					 $location, $document, $rootScope,
					 $sce, $http, $filter,
					 $state,
					 Authentication, Ustodos, Commands, SppSvc   // Ustodos is a $resource I think - .query on it maps to routes in ustodos.server.routes.js
			)
			{

				$scope.timeForTestingBind = (new Date()).toString();
				//$scope.saveOriginalDevCeHtml = $('div[id="idDivCEOmniBox"]')[0].innerHTML;
				var windowhk = angular.element($window);
				windowhk.bind('resize', function () {
					//console.log ('resize');
					//alert(windowhk.width() + 'x' + windowhk.height());
				});

				$scope.u_ = u_;
				//$scope.uu2_ = uu2_;
				//Uutil.testScopeAccess();

				//$scope.UcHtmlDocManipulate = UcHtmlDocManipulate;
				//$scope.U_error = U_error;
				//$scope.UtilClient = UtilClient;


				//function northOnresize ()
				//{
				//	//oooo("start north__onresize htNorthOri htMceTargetGiveNorth ");
				//	//return;
				//	var htNorthOri = $('#id-ui-layout-north-inner').height();
				//	var htMceTargetGiveNorth = htNorthOri - 28;
				//
				//	//var t = $('#testme2ta').val() + 'px';
				//	var t = htMceTargetGiveNorth + 'px';
				//	//alert ("setting to t:") // +t
				//	$(".mceIframeContainer").attr ('style', 'height: '+t);
				//	//var t = '300px'
				//	//alert ("setting to:" + t)
				//	$('#txtUpper_ifr').css('height', t);
				//	//oooo ("done north__onresize htNorthOri:" +  htNorthOri + ", htMceTargetGiveNorth:" + htMceTargetGiveNorth);
				//};




//test if jquery active		var o = $(window).width();
				//alert ('o:' + o)

				//alert('scope define');

				$scope.SppSvc = SppSvc;
				//alert ('in def');
				//SppSvc.setModelDirty (true, 'single cont 465');

				//works first time load only
				//addEventListener('load', load, false);
				//alert ('added listener');
				// oct 2015 seems not to be called at all even with add listener in place
				function load(){
					// dec 2015 seems not to be called at all even with add listener in place
					if (CONST_SHOW_INIT_ALERTS)
					   alert('inONLOADINIT#3.5  in addEventListener load in function load(){');

					//var el = document.getElementById("foo");
					//alert(el);
				}


				//$scope.processThis = function(s)
				//{
				//	//alert ('in here');
				//	return '<span style=\"word-break:break-all\"> xxyz ' + s + '</span>';
				//	//return '<div style=\"word-break:break-all\"> xxy ' + s + '</div>';
				//	//return '<div style="word-break:break-all>" xx' + s + '</div>';
				//}


				$scope.layoutDone = function()
				{
					//$('a[data-toggle="tooltip"]').tooltip(); // NOT CORRECT!
					//alert('start layoutDone');
					if (CONST_SHOW_INIT_ALERTS)
						alert('inONLOADINIT#6  in $scope.layoutDone(){');


					//var makeThisNotContentEditables = document.getElementsByClassName("makeThisNotContentEditable");
					//alert('makeThisNotContentEditables.length:' + makeThisNotContentEditables.length); // was len 0




					$scope.preEditText = null;
					$scope.preEditHtml = null;

					// FOCUS
					//$('.editable').bind('focus', function() {
					$('.focusblurme').bind('focus', function() {
						var hkindex = $(this)[0].getAttribute('hkindex'); // e.g., '3'
						$scope.preEditText = document.getElementById('ustodorow' + hkindex).innerText;
						$scope.preEditHtml = document.getElementById('ustodorow' + hkindex).innerText;
						// some attributes by . (aka ['xx']) and some by getAttribute('hkindex')
						//var id1 = document.getElementById($(this)[0].id); //$(this)[0].id == eg 'ustodorow3'
						//alert('document.getElementById("ustodorow" + hkindex)["innerText"]:' + document.getElementById("ustodorow" + hkindex)["innerText"]);
						//alert('document.getElementById("ustodorow" + hkindex)["innerHtml"]:' + document.getElementById("ustodorow" + hkindex)["innerHtml"]);

						//alert('focus on $(this)[0].id:' +  htmlelement);
						//for (var u in htmlelement) {
						//	//if (htmlelement.hasOwnProperty(u))
						//		console.log ('own prop of htmlelement :' + u);
						//}
					});



					// BLUR / CHANGE DETECT
					$('.focusblurme').blur(function() {
						// todo compare this against ustodo in mem array contents
						var hkindex = $(this)[0].getAttribute('hkindex'); // e.g., '3'
						var hkustodoid = $(this)[0].getAttribute('hkustodoid'); // e.g., '3'
						var postEditText = document.getElementById('ustodorow' + hkindex).innerText;
						var postEditHtml = document.getElementById('ustodorow' + hkindex).innerText;

						if ($scope.preEditText !== postEditText || $scope.preEditHtml !== postEditHtml)
						{
							//alert('changed hkindex:' + hkindex);
							//alert('changed hkustodoid:' + hkustodoid);
							$scope.saveSweep(hkustodoid);
						}

						//if (contents != $(this).html()) { // diff? change?
						// alert ('Handler for .change() called.  ' +'contents [' + contents + ']  ' + '$(this).html() [' + $(this).html() + ']');
						//contents = $(this).html();
						//}
					});
					//alert('done layoutDone');
				};


				$scope.toggleShowDetails = function(s)  // hhkk103
				{
					if (document.getElementById('hkheader').style.display === 'block') {
						document.getElementById('hkheader').style.display = 'none';
						//document.getElementById('hkidtoolbars').style.display = 'none';
						//document.getElementById('hkfooter').style.display = 'none';
						//document.getElementById('showHideDetails').innerHTML = 'Show';
					}
					else {
						document.getElementById('hkheader').style.display = 'block';
						//document.getElementById('hkidtoolbars').style.display = 'block';
						//document.getElementById('hkfooter').style.display = 'block';
						//document.getElementById('showHideDetails').innerHTML = 'Hide';
					}
				};

				$scope.preparePerRowHtml = function(s)
				{
					return s;
				};

				$scope.eventBlur3mce = function(s)
				{
					alert ('in blur') ;
				};



				// http://henriquat.re/basics-of-angular/services-dependency-injection/services-and-dependency-injection-in-angularjs.html

				//var myInjector = angular.injector(["ng"]);
				//var $http = myInjector.get("$http");
				//var $ngSanitize = myInjector.get("$ngSanitize");
				//var myInjector = angular.injector(["ng"]);
				//myInjector.invoke(myInjector.get("$ngSanitize"));


				//$scope.snippet =   'xxxxxxxxxxxx';
				//$scope.snippet =

				//    '<em onmouseover='this.textContent=\'PWN3D!\''>click here</em>\n' +
				//    'snippet</p>';
				//
				//$scope.deliberatelyTrustDangerousSnippet = function(s) {
				//    //alert ('in deliberatelyTrustDangerousSnippet [' + ']');
				//    //return null;
				//    return $sce.trustAsHtml(s);
				//};

				//alert ('reiniting scope');
				try
				{


					$scope.$on('$stateChangeSuccess', function () {
						console.log ('successful state change');
					});

					// works alert ('init ustodos.client. controller.js state:' + $state.$current);   // current state  .current
					//alert('initing scope $stateParams' + $stateParams);

					$scope.dynamicSearch = false; // bound via ng-model=lockMouseover to idcheckbox_dynamicSearch
					$scope.modelCheckboxUpdateOnWrite = true; // bound via ng-model=lockMouseover to idcheckbox_dynamicSearch
					$scope.modelCheckboxCtrlEnterToSave = false;
					$scope.reloadWarning = false;
					$scope.q = null; // current query
					//$scope.bindToTextBox = null; // current textbox to display
					$scope.numberCheckboxesChecked = 0;
					$scope.includeMceHtmlPasteFilter = true;
					//alert ('set gblx.modelDirty  = false;')

					//.----------------. .-----------------..----------------. .----------------.
					//| .--------------. | .--------------. | .--------------. | .--------------. |
					//| |  _________   | | | ____  _____  | | | _____  _____ | | | ____    ____ | |
					//| | |_   ___  |  | | ||_   \|_   _| | | ||_   _||_   _|| | ||_   \  /   _|| |
					//| |   | |_  \_|  | | |  |   \ | |   | | |  | |    | |  | | |  |   \/   |  | |
					//| |   |  _|  _   | | |  | |\ \| |   | | |  | '    ' |  | | |  | |\  /| |  | |
					//| |  _| |___/ |  | | | _| |_\   |_  | | |   \ `--' /   | | | _| |_\/_| |_ | |
					//| | |_________|  | | ||_____|\____| | | |    `.__.'    | | ||_____||_____|| |
					//| |              | | |              | | |              | | |              | |
					//| '--------------' | '--------------' | '--------------' | '--------------' |
					//'----------------' '----------------' '----------------' '----------------'
					// section_enum
					// input ENUM
					$scope.ns = {};
					$scope.ns.Input = {
						INPUT_NONE_IS_IN_FOCUS: -1,
						INPUT_0_TEXT: 0,
						INPUT_1_MEDIUM: 1,
						//INPUT_2_CKE:  2,
						INPUT_3_MCE:  3
					};

					// input ENUM
					$scope.enumKeyEvent = {
						ENTER: 1,
						SPACE: 2
					};

					// container ENUM
					$scope.enumContainer = {
						ADDRESSBAR_OR_OMNIBOXCE: 1,
						PERROWCE: 2
					};

					// enumProcessCommandCaller ENUM
					$scope.enumProcessCommandCaller = {
						URL: 1,
						HTMLSTARALLBUTTON: 2,
						EDITOR: 3
					};


					// input ENUM
					// $scope.enumCommands.COMMAND_SEARCH  $scope.enumCommands.COMMAND_WRITE
					$scope.enumCommands = {
						COMMAND_SEARCH: 1,
						COMMAND_WRITE: 2
					};



					SppSvc.setWhichEditorShowing($scope.ns.Input.INPUT_NONE_IS_IN_FOCUS);

					//angularModule. controller('UstodosController', ['$scope', '$stateParams', '$locationProvider', '$rootScope', '$sce',
					//    'Authentication', 'Ustodos',
					//    function($scope, $stateParams, $locationProvider, $rootScope, $sce, Authentication, Ustodos) {
					//angularModule. controller('UstodosController', ['$scope', '$stateParams', '$location', '$rootScope', 'ngSanitize', 'Authentication', 'Ustodos',
					//    function($scope, $stateParams, $location, $rootScope, ngSanitize, Authentication, Ustodos) {
					//$rootScope', $compile, $rootElement,
					//    u_.U_o.a ('sssa1');


					//$scope.pickCkEditorBasedOnPlatform = function()
					//{
					//    var x = 'Platform: '+ navigator.platform;
					//    document.getElementById('demo').innerHTML = x;
					//};

					//.----------------. .-----------------..----------------. .----------------. .----------------. .----------------.
					//| .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. |
					//| |     ____     | | | ____  _____  | | |   _____      | | |     ____     | | |      __      | | |  ________    | |
					//| |   .'    `.   | | ||_   \|_   _| | | |  |_   _|     | | |   .'    `.   | | |     /  \     | | | |_   ___ `.  | |
					//| |  /  .--.  \  | | |  |   \ | |   | | |    | |       | | |  /  .--.  \  | | |    / /\ \    | | |   | |   `. \ | |
					//| |  | |    | |  | | |  | |\ \| |   | | |    | |   _   | | |  | |    | |  | | |   / ____ \   | | |   | |    | | | |
					//| |  \  `--'  /  | | | _| |_\   |_  | | |   _| |__/ |  | | |  \  `--'  /  | | | _/ /    \ \_ | | |  _| |___.' / | |
					//| |   `.____.'   | | ||_____|\____| | | |  |________|  | | |   `.____.'   | | ||____|  |____|| | | |________.'  | |
					//| |              | | |              | | |              | | |              | | |              | | |              | |
					//| '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' |
					//'----------------' '----------------' '----------------' '----------------' '----------------' '----------------'
					// http://patorjk.com/software/taag/#p=display&h=2&v=1&f=Blocks&t=ONLOAD%0A
					// section_onload

					if (CONST_SHOW_INIT_ALERTS)
						alert('inONLOADINIT#3  in onload base code'); // repeat content not ready yet I suspect

					$scope.$watch('$viewContentLoaded', function(){ // like onload YES
						try {

							if (CONST_SHOW_INIT_ALERTS)
								alert('inONLOADINIT#5  in $viewContentLoaded $scope.$watch  onload');






							//$scope.localTinyMceInit(); // hbklrb11

							////var x = document.getElementById('idCkeEditorTextarea').innerHTML;
							//var x = document.getElementById('classContentEditablePerRow');
							//var x = document.getElementsByClassName("classContentEditablePerRow");

							// this is an HTMLObject I think, with main prop x[0].innerHTML aka x[0].innerText
							//var x = document.getElementsByClassName("WholePage");
							//console.log (' @@@@@@@@@@inONLOADINIT#5 $viewContentLoaded:' + x.length);

							//alert ('pre1 $state.get');
							//alert ($state.get());
							// works show all registered states alert(UtilPrintObjects.printObjJSONstringify('$state.get()', $state.get()));
							//alert (JSON.stringify($state.get()));
							//alert ('post1 $state.get');

							//var editor = CKEDITOR.instances.idCkeEditorTextarea;
							//alert ('focusManager.focus');
							//editor.focusManager.focus( editor.editable() );

							//CKEDITOR.instances.idCkeEditorTextarea.on('blur', function() {
							//    //alert('cke blur fired');
							//    //$scope.prop2Cke();
							//    //$scope.propagateTextChanges();
							//});

							// section_per_editor set initial editor
							SppSvc.setWhichEditorShowing($scope.ns.Input.INPUT_3_MCE);
							//document.getElementById('idDivForTinyMceEditorTextarea').style.display = 'block'; // hbklrbb
							//alert('xx:' + 'idTinyMceTextArea');
							//alert('xx:' + document.getElementById('idTinyMceTextArea'));
							//document.getElementById('idTinyMceTextArea').style.display = 'block';
							//document.getElementById('idTinyMceTextArea').style.display = 'block';
							$scope.currentVisibleCounter = $scope.ns.Input.INPUT_3_MCE;
							//setTimeout(function(){ $scope.focusOnId(mceId); }, 600); // hbklrb10

							$scope.title2 = '$scope.title2 from ustodo client controller';



							// from Chrome debugger
							//LocationHashbangUrl {$$protocol: "http", $$host: "localhost", $$port: 3000, $$path: "/", $$search: Object�}
							//$$absUrl: "http://localhost:3000/#!/?q=4444ffccffckkk"
							//$$compose: ()
							//$$hash: ""
							//$$host: "localhost"
							//$$parse: (url)
							//$$parseLinkUrl: (url, relHref)
							//$$path: "/"
							//$$port: 3000
							//$$protocol: "http"
							//$$replace: false
							//$$search: Object
							//q: "4444ffccffckkk"   <----------------------------------------
							//__proto__: Object
							//$$url: "/?q=4444ffccffckkk"
							//__proto__: Object

							//
							if (typeof ($location.$$search.q) === 'undefined')
								$scope.q = '*';
							else
								$scope.q = $location.$$search.q
							//alert('call processCommand w $scope.q:' + $
							// scope.q);
							$scope.processCommand($scope.enumCommands.COMMAND_SEARCH,
																$scope.enumProcessCommandCaller.URL, $scope.q, $scope.q, $scope.q);
						}
						catch(err)
						{
							u_.UtilError.emitError('error in $scope.$watch($viewContentLoaded, function(){ // like onload YES', err);
						}


						//ng-blur='propagateTextChanges()'

						//tinyMCE.get('idDivForTinyMceEditorTextarea').on('keyup',function(e){
						//    alert(this.getContent().replace(/(<[a-zA-Z\/][^<>]*>|\[([^\]]+)\])|(\s+)/ig,''));
						//});
					});

					//$scope.testTinyMce = function()
					//{
					//    console.log ('start testTinyMce');
					//    //tinymce.activeEditor.setContent('<span>some</span> html');
					//    tinyMCE.get('idTinyMceTextArea').setContent('<span>some1</span> html');
					//    //alert ('done testTinyMce');
					//}

					$scope.ngInitTopLevel= function()
					{
						if (CONST_SHOW_INIT_ALERTS)
							alert('inONLOADINIT#4  inSTARTUP nginit');
						//if ($scope.howManyTimesInited == 1)
						//alert ('in ngInitTopLevel');
						//setTimeout(function(){ $scope.localTinyMceInit(); }, 300); // hbklrbb12
						//else
						//$scope.localTinyMceInit(); // hbklrbb

						//$scope.localTinyMceInit(); // hbklrb11
						// $scope.localTinyMceInit();  // hbkeak
						//alert('may want to focus on input editor here'); //
						//tinymce.execCommand('mceFocus',false,'idTinyMceTextArea');
					};

					$scope.testNLBfadeBg = function() {
						alert('in testNLBfadeBg')      ;
						//UtilNLB_bgFade.NLBfadeBg('div1hk','green', '#FFFFFF','1500');
						alert('at this fade 1');
						u_.NLB_bgFade.NLBfadeBg('ustodorow0','green', '#FFFFFF','3500');
					};

					$scope.ngInitTinyMceButton = function()
					{
						//alert ('in ngInitTinyMceButton');
					};

					$scope.ngInitTinyMce = function()
					{
						//alert ('start testTinyMce');
						//tinymce.activeEditor.setContent('<span>some</span> html');
						//alert ('in ngInitTinyMce');
						//alert ('done testTinyMce');
					};

					//// section_init_cke
					//$scope.toggleCkeToolebarRich = 3; // will be turned off on first call
					//$scope.toggleCkeToolebar = function()
					//{
					//    if ($scope.editor)
					//        $scope.editor.destroy();
					//
					//    $scope.toggleCkeToolebarRich = ($scope.toggleCkeToolebarRich % 3) + 1 ;
					//    if ($scope.toggleCkeToolebarRich === 1)
					//    {
					//        alert ('set cke min');
					//        $scope.editor = CKEDITOR.replace( 'idCkeEditorTextarea', {
					//            //language: 'fr',
					//            customConfig: '/lib/ckeditor/config.js',
					//            startupFocus: false,
					//            uiColor: '#9AB8F3',
					//            //on: {
					//            //    'instanceReady': function (evt) { evt.editor.execCommand('maximize'); }},
					//            toolbar: []
					//        });
					//    }
					//    else if ($scope.toggleCkeToolebarRich === 2)
					//    {
					//        alert ('set cke rich');
					//        $scope.editor = CKEDITOR.replace( 'idCkeEditorTextarea', {
					//            //language: 'fr',
					//            customConfig: '/lib/ckeditor/config.js',
					//            startupFocus : false,
					//            uiColor: '#9AB8F3'
					//            ,
					//            toolbar: [
					//                { name: 'document', items: [ 'Source', '-', 'NewPage', 'Preview', '-', 'Templates' ] },	// Defines toolbar group with name (used to create voice label) and items in 3 subgroups.
					//                [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ],			// Defines toolbar group without name.
					//                //'/',																					// Line break - next group will be placed in new line.
					//                { name: 'basicstyles', items: [ 'Bold', 'Italic' ] }
					//            ]
					//        });
					//    }
					//    else if ($scope.toggleCkeToolebarRich === 3)
					//    {
					//        alert ('set cke rich');
					//        $scope.editor = CKEDITOR.replace( 'idCkeEditorTextarea', {
					//            //language: 'fr',
					//            customConfig: '/lib/ckeditor/config.js',
					//            startupFocus : false,
					//            uiColor: '#9AB8F3',
					//            toolbar: [
					//                { name: 'document', groups: [ 'mode', 'document', 'doctools' ], items: [ 'Source', '-', 'Save', 'NewPage', 'Preview', 'Print', '-', 'Templates' ] },
					//                { name: 'clipboard', groups: [ 'clipboard', 'undo' ], items: [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ] },
					//                { name: 'editing', groups: [ 'find', 'selection', 'spellchecker' ], items: [ 'Find', 'Replace', '-', 'SelectAll', '-', 'Scayt' ] },
					//                { name: 'forms', items: [ 'Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField' ] },
					//                '/',
					//                { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ], items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat' ] },
					//                { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ], items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl', 'Language' ] },
					//                { name: 'links', items: [ 'Link', 'Unlink', 'Anchor' ] },
					//                { name: 'insert', items: [ 'Image', 'Flash', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar', 'PageBreak', 'Iframe' ] },
					//                '/',
					//                { name: 'styles', items: [ 'Styles', 'Format', 'Font', 'FontSize' ] },
					//                // http://ckeditor.com/addon/colorbutton
					//                // C:/utd/150719utdG/public/lib/ckeditor/plugins/colorbutton
					//                // C:\Users\henryms\Downloads\colorbutton_4.4.7\colorbutton
					//                // see layout.server.view.html <!--<script type='text/javascript' src='/lib/ckeditor/plugins/colorbutton/plugin.js'></script>-->
					//                //C:\utd\150719utdG \public\lib\ckeditorNotFull
					//                //http://ckeditor.com/download
					//                { name: 'colors', items: [ 'TextColor', 'BGColor' ] },
					//                { name: 'tools', items: [ 'Maximize', 'ShowBlocks' ] },
					//                { name: 'others', items: [ '-' ] },
					//                { name: 'about', items: [ 'About' ] }
					//            ]
					//        });
					//    }
					//    else
					//    {
					//        alert ('logic error2 $scope.toggleCkeToolebarRich :' + $scope.toggleCkeToolebarRich );
					//    }
					//    //alert ('leaving cke $scope.toggleCkeToolebarRich:' + $scope.toggleCkeToolebarRich);
					//    u_.U_o.o ('$scope.toggleCkeToolebarRich :' + $scope.toggleCkeToolebarRich );
					//
					//};



					//.----------------. .----------------. .----------------.   .----------------. .-----------------..----------------. .----------------.
					//| .--------------. | .--------------. | .--------------. | | .--------------. | .--------------. | .--------------. | .--------------. |
					//| | ____    ____ | | |     ______   | | |  _________   | | | |     _____    | | | ____  _____  | | |     _____    | | |  _________   | |
					//| ||_   \  /   _|| | |   .' ___  |  | | | |_   ___  |  | | | |    |_   _|   | | ||_   \|_   _| | | |    |_   _|   | | | |  _   _  |  | |
					//| |  |   \/   |  | | |  / .'   \_|  | | |   | |_  \_|  | | | |      | |     | | |  |   \ | |   | | |      | |     | | | |_/ | | \_|  | |
					//| |  | |\  /| |  | | |  | |         | | |   |  _|  _   | | | |      | |     | | |  | |\ \| |   | | |      | |     | | |     | |      | |
					//| | _| |_\/_| |_ | | |  \ `.___.'\  | | |  _| |___/ |  | | | |     _| |_    | | | _| |_\   |_  | | |     _| |_    | | |    _| |_     | |
					//| ||_____||_____|| | |   `._____.'  | | | |_________|  | | | |    |_____|   | | ||_____|\____| | | |    |_____|   | | |   |_____|    | |
					//| |              | | |              | | |              | | | |              | | |              | | |              | | |              | |
					//| '--------------' | '--------------' | '--------------' | | '--------------' | '--------------' | '--------------' | '--------------' |
					//'----------------' '----------------' '----------------'   '----------------' '----------------' '----------------' '----------------'
					// section_mceinit  section_tinymce
					// http://patorjk.com/software/taag/#p=display&h=2&v=1&f=Blocks&t=MCE%20INIT%0A
					// n other project see UtilTinyMCE.js
					//tinyMCE.init({
					//    ...
					//    oninit : myCustomOnInit
					//});
					//

					//alert ('pre setIdleTimeout');
					// setIdleTimeout(500000); //
					//alert ('post setIdleTimeout');


					$scope.myCustomOnInit = function () // works
					{
						//alert('myCustomOnInit from mce');
						//var o = document.getElementById('idTinyMceTextArea');
						//alert('myCustomOnInit from mce o.ng-blur:' + o['ng-blur']);
						//alert('myCustomOnInit from mce o.style.display:' + o.style.display);

						//this.getDoc().body.style.fontSize = '13px';
						//tinyMCE.get('idTinyMceTextArea').setContent('<span>some1</span> html');
						//tinymce.activeEditor.setContent('<span>some</span> html');
					};



					$scope.focusOnId = function (id) // hbklrbb
					{
						alert ('in focusOnId :' + id);

						try {

							//if (id !== 'idDivForCkeEditorTextarea' && id !== 'idDivForTinyMceEditorTextarea')
							//{
							//    //alert ('in focusOnId 1:'+ id);
							//    var el = document.getElementById(id);
							//    var range = document.createRange();
							//    var sel = window.getSelection();
							//    //range.setStart(el.childNodes[0], 5);
							//    //range.collapse(true);
							//    //sel.removeAllRanges();
							//    //sel.addRange(range);
							//    el.focus();
							//}
							//else if (id === 'idDivForCkeEditorTextarea')
							//{
							//    //alert ('in focusOnId 2:'+ id);
							//    CKEDITOR.instances.idCkeEditorTextarea.focus();
							//}
							if (id === 'idDivForTinyMceEditorTextarea')
							{
								alert (' should not be here: in focusOnId 3:'+ id);
								var elx = document.getElementById(id);
								var rangex = document.createRange();
								var selx = window.getSelection();
								//rangex.setStart(el.childNodes[0], 5);
								//rangex.collapse(true);
								//selx.removeAllRanges();
								//selx.addRange(rangex);
								elx.focus();
							}
							else if (id === 'idTinyMceTextArea')
							{
								alert ('in focusOnId 4:'+ id);
								var el = document.getElementById(id);
								var range = document.createRange();
								var sel = window.getSelection();
								//range.setStart(el.childNodes[0], 5);
								//range.collapse(true);
								//sel.removeAllRanges();
								//sel.addRange(range);
								el.focus();
							}
							else
							{
								alert ('in focusOnId else');
								//    //var editor = CKEDITOR.instances.idCkeEditorTextarea;
								//    //editor.focusManager.focus( editor.editable() );
								//
								//
							}



						} catch (e) {
							console.log ('era1:' + e);
							alert ('era1:' + e);
						}

					};




















					// bulk commented 160217
					//$scope.localTinyMceInit = function (includeHtmlCleaner) //
					//{
                    //
					//	//alert ('in localTinyMceInit [' + mceId + ']'); // in tiny // hbklrb11
                    //
					//	if (!includeHtmlCleaner)
					//	{
					//		includeHtmlCleaner = true;
					//	}
                    //
                    //
					//	// 1111111111
					//	//tinyMCE.init({
					//	//    selector:'textarea',
					//	//    //setup : function(ed) {
					//	//    //    ed.onKeyDown.add(function(ed, e) {
					//	//    //        console.debug('Key down event: ' + e.keyCode);
					//	//    //    });
					//	//    oninit : '$scope.myCustomOnInit()'
					//	//    })
					//	//;
                    //
					//	// 222222222
					//	// tinymce4 works
					//	//tinymce.init({
					//	//    selector: 'textarea',
					//	//    theme: 'modern',
					//	//    //plugins: [
					//	//    //    'advlist autolink lists link image charmap print preview hr anchor pagebreak',
					//	//    //    'searchreplace wordcount visualblocks visualchars code fullscreen',
					//	//    //    'insertdatetime media nonbreaking save table contextmenu directionality',
					//	//    //    'emoticons template paste textcolor colorpicker textpattern'
					//	//    //],
					//	//    toolbar1: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
					//	//    toolbar2: 'print preview media | forecolor backcolor emoticons',
					//	//    image_advtab: true,
					//	//    templates: [
					//	//        {title: 'Test template 1', content: 'Test 1'},
					//	//        {title: 'Test template 2', content: 'Test 2'}
					//	//    ],
					//	//    setup : function(ed) {
					//	//        ed.onDeactivate.add(function(ed) {
					//	//            alert ('in special function');
					//	//            ed.save();  // or whatever you want to do to save the editor content
					//	//            ed.remove(); // removes tinymce instance
					//	//        });
					//	//
					//	//        ed.onKeyUp.add(function(ed,l) {
					//	//            alert ('in onkeyup');
					//	//            ed.save();  // or whatever you want to do to save the editor content
					//	//        });
					//	//    }
					//	//
					//	//});
                    //
					//	//// 333333333333
					//	////tinymce3 works
					//	//alert ('in tinymce init');
					//	//// section_editor_init_mce
                    //
                    //
					//	//tinyMCE.init({
					//	//    mode : 'textareas',
					//	//    theme : 'modern',
					//	//    theme_advanced_buttons1 : 'mybutton,bold,italic,underline,separator,strikethrough,justifyleft,justifycenter,justifyright, justifyfull,bullist,numlist,undo,redo,link,unlink',
					//	//    theme_advanced_buttons2 : '',
					//	//    theme_advanced_buttons3 : '',
					//	//    theme_advanced_toolbar_location : 'top',
					//	//    theme_advanced_toolbar_align : 'left',
					//	//    theme_advanced_statusbar_location : 'bottom',
					//	//    //plugins : 'inlinepopups',
					//	//    setup : function(ed) {
					//	//        // Add a custom button
					//	//        ed.addButton('mybutton', {
					//	//            title : 'My button',
					//	//            image : '/example_data/example.gif',
					//	//            onclick : function() {
					//	//                // Add you own code to execute something on click
					//	//                ed.focus();
					//	//                ed.selection.setContent('Hello world!');
					//	//            }
					//	//        });
					//	//    }
					//	//});
                    //
                    //
					//	// WORKS tested 150715
					//	// http://www.tinymce.com/tryit/menubutton.php
					//	// tinymce.init({
					//	//    selector: 'textarea',
					//	//    toolbar: 'mybutton',
					//	//    setup: function(editor) {
					//	//        editor.addButton('mybutton', {
					//	//            type: 'menubutton',
					//	//            text: 'My button',
					//	//            icon: false,
					//	//            menu: [
					//	//                {text: 'Menu item 1', onclick: function() {editor.insertContent('Menu item 1');}},
					//	//                {text: 'Menu item 2', onclick: function() {editor.insertContent('Menu item 2');}}
					//	//            ]
					//	//        });
					//	//    }
					//	//});
                    //
                    //
                    //
					//	// USED until at least 150715
                    //
					//	var tinyMceparams_pasteFilter = {};
					//	{
					//		if ($scope.includeMceHtmlPasteFilter)  //
					//		{
					//			//alert("yes $scope.includeMceHtmlPasteFilter:" + $scope.includeMceHtmlPasteFilter);
					//			tinyMceparams_pasteFilter.plugins = 'code, pagebreak, paste';
                    //
					//			// added paste 10/2015 - just having this paste affects wat is pasted
					//			//plugins: 'code, pagebreak', // added paste 10/2015
                    //
					//			// begin added with paste
					//			tinyMceparams_pasteFilter.theme_advanced_buttons3_add = 'pastetext,pasteword,selectall';
					//			tinyMceparams_pasteFilter.paste_auto_cleanup_on_paste = false;
					//			tinyMceparams_pasteFilter.paste_preprocess = function(pl, o) {
					//				// Content string containing the HTML from the clipboard
					//				//alert(o.content);
					//				//o.content = tinymcePasteCleanFilter.cleanHtmlPre(o.content, '<b><strong><u><i><p>' ); // htmlcleaner cleanhtml
					//				//o.content = ModuleTinymcePasteCleanFilter.tinymcePasteCleanFilter(o.content, '<b><strong><u><i><p>' ); // htmlcleaner
					//				//o.content = ModuleTinymcePasteCleanFilter.tinymcePasteCleanFilter(o.content, '<b><strong><u><i><p>' ); // htmlcleaner
					//				//alert('prehk [' + o.content + ']');
					//				//alert('posthk');
					//				//o.content = "-: CLEANED PRE :-\n" + o.content;
					//				// works
					//				//o.content = UtilHtmlCleaner.utilHtmlCleanerFunctions.testConvertHtmltoText(o.content); // htmlcleaner
					//			};
					//			tinyMceparams_pasteFilter.paste_postprocess = function(pl, o) {
					//				// Content DOM node containing the DOM structure of the clipboard
					//				//alert("in event paste_postprocess: o.node.innerHTML" + o.node.innerHTML);
					//				//o.node.innerHTML = o.node.innerHTML + "\n-: CLEANED POST :-";
					//			};
					//			// end added with paste
                    //
					//		}
					//	}
                    //
					//	var tinyMceparams_toolbars = {};
					//	{
					//		if (false)  //
					//		{
					//			tinyMceparams_toolbars =
					//			{
					//				//toolbar1: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent link',
					//				//toolbar2: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent link',
					//				toolbar1: 'mybuttonimage | mybuttonmenu | example | insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent link | bold italic ',
					//				//toolbar: false,
					//				//toolbar2: 'print preview media | forecolor backcolor emoticons',
					//				///toolbar2: 'bold italic',
					//				///these don't work": toolbar2: 'image ',
					//				//toolbar2: 'bold italic mybutton',
					//				//toolbar: 'mybutton',
                    //
					//				menubar : 'false'
                    //
					//			};
					//		}
					//		else{
					//			{
					//				tinyMceparams_toolbars =
					//				{
					//					//toolbar1: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent link',
					//					//toolbar2: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent link',
					//					//toolbar1: 'mybuttonimage | mybuttonmenu | example | insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent link | bold italic ',
					//					toolbar: false,
					//					//toolbar2: 'print preview media | forecolor backcolor emoticons',
					//					///toolbar2: 'bold italic',
					//					///these don't work": toolbar2: 'image ',
					//					//toolbar2: 'bold italic mybutton',
					//					//toolbar: 'mybutton',
                    //
					//					menubar : 'false'
                    //
					//				};
					//			}
                    //
					//		}
                    //
                    //
					//	}
                    //
                    //
					//	var tinyMceparams_theme = {};
					//	{
                    //
					//		if (true)
					//		{
					//			tinyMceparams_theme =
					//			{
					//				//theme : 'advanced',
					//				//theme_advanced_buttons1 : 'mybutton,bold,italic,underline,separator,strikethrough,justifyleft,justifycenter,justifyright, justifyfull,bullist,numlist,undo,redo,link,unlink',
					//				//theme_advanced_buttons2 : '',
					//				//theme_advanced_buttons3 : '',
					//				//theme_advanced_toolbar_location : 'top',
					//				//theme_advanced_toolbar_align : 'left',
					//				//theme_advanced_statusbar_location : 'bottom',
					//				//  theme : 'advanced',
					//				// Theme options
					//				//theme_advanced_buttons1 : 'save,newdocument,|,bold,italic,underline,strikethrough,|,justifyleft,justifycenter,justifyright,justifyfull,|,styleselect,formatselect,fontselect,fontsizeselect',
					//				//theme_advanced_buttons2 : 'cut,copy,paste,pastetext,pasteword,|,search,replace,|,bullist,numlist,|,outdent,indent,blockquote,|,undo,redo,|,link,unlink,anchor,image,cleanup,help,code,|,insertdate,inserttime,preview,|,forecolor,backcolor',
					//				//theme_advanced_buttons3 : 'tablecontrols,|,hr,removeformat,visualaid,|,sub,sup,|,charmap,emotions,iespell,media,advhr,|,print,|,ltr,rtl,|,fullscreen',
					//				//theme_advanced_buttons4 : 'insertlayer,moveforward,movebackward,absolute,|,styleprops,|,cite,abbr,acronym,del,ins,attribs,|,visualchars,nonbreaking,template,pagebreak',
					//				//theme_advanced_toolbar_location : 'top',
					//				//theme_advanced_toolbar_align : 'left',
					//				//theme_advanced_statusbar_location : 'bottom',
					//				//theme_advanced_resizing : true,
					//				//theme_advanced_statusbar_location : '', //
					//				//font_formats: "Arial=arial,helvetica,sans-serif;Courier New=courier new,courier,monospace;AkrutiKndPadmini=Akpdmi-n",
					//				//theme_advanced_font_sizes: "10px,12px,13px,14px,16px,18px,20px",
					//				//font_size_style_values : "10px,12px,13px,14px,16px,18px,20px",
					//				//content_css : "modules/core/css/core.css"
					//			};
                    //
					//		}
					//	}
                    //
					//	// http://howbigismybrowser.com/
					//	//var tinyMceparams_size = {};
					//	//{
					//	//	//alert (windowhk.height());
					//	//	if (windowhk.height() > 700)
					//	//	{
					//	//		//alert ('big browser');
					//	//		tinyMceparams_size =
					//	//		{
					//	//			width: '100%',
					//	//			height: '50%',
					//	//			resize: 'both'
					//	//		};
					//	//	} else {
					//	//		//alert ('little browser');
					//	//		tinyMceparams_size =
					//	//		{
					//	//			width: '100%',
					//	//			height: '10'
					//	//		};
					//	//	}
					//	//}
                    //
                    //
                    //
                    //
                    //
                    //
					//	// hbklrbb
                    //
                    //
					//	var tinyMceparams =
					//	{
					//		elementpath: false,
					//		statusbar: false,
					//		content_css : 'modules/core/css/core_mce.css',
                    //
					//		//mode : 'exact',
					//		//mode : 'textareas',
					//		//plugins : 'inlinepopups',
					//		//setup : function(ed) {
					//		//    // Add a custom button
					//		//    ed.addButton('mybutton', {
					//		//        title : 'My button',
					//		//        image : '/example_data/example.gif',
					//		//        onclick : function() {
					//		//            // Add you own code to execute something on click
					//		//            ed.focus();
					//		//            ed.selection.setContent('Hello world!');
					//		//        }
					//		//    });
					//		//}
					//		//
					//		//
                    //
                    //
					//		//mode : 'textareas',
					//		//mode : 'exact',
					//		mode : 'specific_textareas',
					//		elements : mceId, // hbklrbb
					//		//plugins : 'pagebreak,styleBAD,layer,table,save,advhr,advimage,advlink,emotions,iespell,inlinepopups,insertdatetime,preview,media,searchreplace,print,contextmenu,paste,directionality,fullscreen,noneditable,visualchars,nonbreaking,xhtmlxtras,template',
                    //
					//		oninit : $scope.myCustomOnInit,
                    //
					//		init_instance_callback : function()
					//		{
					//			if ($scope.q)   {
					//				console.log('in init_instance_callback');
					//				//if ($scope.q !== '*')
					//				//	$scope.setTextInShowingEditor($scope.searchedFor, 'line 3329a1');
					//				//else
					//				//	$scope.setTextInShowingEditor('', 'line 3329b1');
					//				//tinyMCE.activeEditor.setContent($scope.q);
					//			}
					//		},
                    //
					//		setup : function(ed)
					//		{
					//			//ed.onDeactivate.add(function(ed) {
					//			//    alert ('in special function');
					//			//    ed.save();  // or whatever you want to do to save the editor content
					//			//    ed.remove(); // removes tinymce instance
					//			//});
                    //
					//			//ed.onKeyUp.add(function(ed,l) {
					//			//    alert ('in onkeyup');
					//			//    ed.save();  // or whatever you want to do to save the editor content
					//			//});
					//			//ed.onInit.add(function() {
					//			//});
					//			ed.on('init', function(e)
					//			{
					//				//alert('in mce init function'); // in tinymce init
					//				var id = ed.id;
					//				var height = 75;
					//				//alert('document.getElementById(id + _ifr):'+ document.getElementById(id + '_ifr'));
					//				document.getElementById(id + '_ifr').style.height = height + 'px';
					//				//One line with buttons takes roughly 30px, so we add that
					//				//document.getElementById(id + '_tbl').style.height = (height + 30) + 'px';
                    //
                    //
					//				//alert('initing hkon2');
					//				//var width = ed.getWin().clientWidth/2;
					//				//var height = 10;
					//				//ed.theme.resizeTo(width, height);
                    //
					//				//alert('initing hkon');
					//				this.getDoc().body.style.fontSize = '20px';
					//				this.getDoc().body.style.border = '0px';
					//				//alert('init event' + e);
					//				var elemId = 'mceu_57';
					//				if (document.getElementById(elemId) !== null)
					//				{
					//					//alert ('1123123');
					//					//	if (document.getElementById('mceu_57').style.visibility==='hidden')
					//					//		document.getElementById('mceu_57').style.visibility='visible';
					//					//	else
					//					//		document.getElementById('mceu_57').style.visibility='hidden';
					//					//if (document.getElementById(elemId).style.visibility==='visible')
					//					//{
					//					document.getElementById(elemId).style.visibility='hidden';
					//					//alert ('1123123b');
                    //
					//					//}
					//					//else
					//					//	document.getElementById(elemId).style.visibility='hidden';
					//				}
                    //
					//				//tinyMCE.activeEditor.setContent('hi hk1!');
                    //
                    //
					//			});
                    //
					//			//ed.onLoadContent.add(function(ed, o) {
					//			//	// Output the element name
					//			//	alert ('sdfsf');
					//			//	//console.debug(o.element.nodeName);
					//			//});
                    //
					//			//    toolbar: 'mybutton',
					//			//    setup: function(editor) {
					//			ed.addButton('mybuttonimage', {
					//				//type: 'menubutton',
					//				//text: 'My button',
					//				//id: 'mcebuttonid2',
					//				//image: '/img/EditPencilBnW.png',
					//				image: '/img/SaveIconBlue.png',
					//				icon: false,
					//				onclick: function() {ed.insertContent('Menu item 0');},
					//				//menu: [
					//				//	{text: 'Menu item 1', onclick: function() {ed.insertContent('Menu item 1');}},
					//				//	{text: 'Menu item 2', onclick: function() {ed.insertContent('Menu item 2');}}
					//				//]
					//			});
                    //
					//			ed.addButton('mybuttonmenu', {
					//				type: 'menubutton',
					//				//id: 'mcebuttonid1',
					//				text: 'My button',
					//				//id: 'mcebuttonid',
					//				//image: '/img/EditPencilBnW.png',
					//				icon: false,
					//				//onclick: function() {ed.insertContent('Menu item 0')},
					//				menu: [
					//					{text: 'Menu item 1', onclick: function() {ed.insertContent('Menu item 1');}},
					//					{text: 'Menu item 2', onclick: function() {ed.insertContent('Menu item 2');}}
					//				]
					//			}					);
                    //
                    //
					//			ed.addButton('example', {                            qq
					//				text: 'My title',
					//				//image: '/img/EditPencilBnW.png',
					//				onclick: function() {
					//					ed.insertContent('Hello world!!');
					//				}
					//			});
					//			//alert ('inasd');
                    //
					//			//    }
                    //
					//			ed.on('keyup', function(e)
					//			{
					//				//alert('in keyup');
					//				if (ed.getContent({format : 'text'}).trim() === '*' ||
					//					ed.getContent({format : 'text'}).trim() === '')
					//				{
					//					SppSvc.setModelDirty (false, 'single cont 1403');
					//				} else {
					//					SppSvc.setModelDirty (true, 'single cont 1405');
					//				}
                    //
					//				$scope.$apply();
                    //
					//				//console.log ('e.keyIdentifier:' + e.keyIdentifier);
					//				//console.log ('e.keyCode:' + e.keyCode);
					//				//console.log ('e.metaKey:' + e.metaKey);
					//				//console.log ('e.shiftKey:' + e.shiftKey);
					//				//console.log ('e.altKey:' + e.altKey);
					//				//alert ('e.ctrlKey:' + e.ctrlKey);
                    //
                    //
					//				var text = ed.getContent({format : 'text'}).trim();
					//				var i = text.length;
					//				var allDots = true && text.length !== 0;
					//				while (i-- && allDots) {
					//					if (text[i] !== '.') {
					//						allDots = false;
					//						//allDots = true; // to default to detail view allDots true;
					//						//alert('alldots');
					//						break;
					//					}
					//				}
                    //
					//				if (allDots)
					//				{
                    //
					//					if (text.length % 2 === 1)
					//					{
					//						document.getElementById('hkheader').style.display = 'block';
					//						document.getElementById('hkidtoolbars').style.display = 'block';
					//						document.getElementById('hkfooter').style.display = 'block';
					//					}
					//					else
					//					{
					//						document.getElementById('hkheader').style.display = 'none';
					//						document.getElementById('hkidtoolbars').style.display = 'none';
					//						document.getElementById('hkfooter').style.display = 'none';
					//					}
                    //
                    //
					//					//	document.getElementById('hkheader').style.visibility = 'visible';
					//					//else
					//					//	document.getElementById('hkheader').style.visibility = 'hidden';
                    //
					//				}
                    //
					//				if (e.keyIdentifier === 'Enter') // section_enter_key
					//				{
					//					// alert ('enter pressed2');
					//					if (ed.getContent({format : 'text'}).trim() === '') {
					//						$scope.setTextInShowingEditor('*', 'line 889');
					//					}
                    //
					//					if ((!(!$scope.modelCheckboxCtrlEnterToSave && e.ctrlKey)) &&
					//						(!$scope.modelCheckboxCtrlEnterToSave || e.ctrlKey))
					//					{
					//						$scope.eventHandlerEditorcontentChange (
					//							$scope.enumKeyEvent.ENTER,
					//							ed.getContent({format : 'data'}),
					//							ed.getContent({format : 'html'}),
					//							ed.getContent({format : 'text'})
					//						);
					//					}
					//				} else if (e.keyCode === 32) //
					//				{
					//					$scope.eventHandlerEditorcontentChange (
					//						$scope.enumKeyEvent.SPACE,
					//						ed.getContent({format : 'data'}),
					//						ed.getContent({format : 'html'}),
					//						ed.getContent({format : 'text'})
					//					);
					//				}
                    //
					//				//console.log ('xx:' + tinyMCE.get('idDivForTinyMceEditorTextarea').getContent({format : 'text'}).trim());
                    //
					//				//check_submit();
					//			});
                    //
					//			//ed.onKeyPress.add(
					//			//    function (ed, evt) {
					//			//        alert('Editor-ID: '+ed.id+'\nEvent: '+evt);
					//			//        //....
					//			//    }
					//			//);
					//			//
					//			////ed.onInit.add(function(ed, evt) {
					//			//
					//			//    var dom = ed.dom;
					//			//    var doc = ed.getDoc();
					//			//
					//			//    tinymce.dom.Event.add(doc, 'blur', function(e) {
					//			//        alert('blur!!!');
					//			//    });
					//			//});
					//		}, // setup
					//		theme_advanced_path : false,
                    //
					//		//setup: function(editor) {
					//		//    editor.on('blur', function(e) {
					//		//        console.log('blur event', e);
					//		//    });
					//		//}
					//		//setup : function(ed) {
					//		//    ed.on('blur', function(e) {
					//		//        alert('blur');
					//		//    });
					//		//}
					//		//,
					//		//setup : function(ed) {
					//		//    ed.onInit.add(function(ed, evt) {
					//		//
					//		//        var dom = ed.dom;
					//		//        var doc = ed.getDoc();
					//		//
					//		//        tinymce.dom.Event.add(doc, 'blur', function(e) {
					//		//            // Do something when the editor window is blured.
					//		//            alert('blur!!!');
					//		//        });
					//		//    });
					//		//},
                    //
					//		//setup: function(editor) {
					//		//    editor.on('blur', function(e) {
					//		//        console.log('blur event', e);
					//		//    });
					//		//}
                    //
					//	};
                    //
					//	for (var propertyName1 in tinyMceparams_pasteFilter) {
					//		//alert (propertyName + ':' + tinyMceparams_pasteFilter[propertyName]);
					//		tinyMceparams[propertyName1] = tinyMceparams_pasteFilter[propertyName1];
					//	}
                    //
					//	for (var propertyName2 in tinyMceparams_toolbars) {
					//		//alert (propertyName + ':' + tinyMceparams_pasteFilter[propertyName]);
					//		tinyMceparams[propertyName2] = tinyMceparams_toolbars[propertyName2];
					//	}
                    //
					//	for (var propertyName3 in tinyMceparams_theme) {
					//		//alert (propertyName + ':' + tinyMceparams_pasteFilter[propertyName]);
					//		tinyMceparams[propertyName3] = tinyMceparams_theme[propertyName3];
					//	}
                    //
					//	//for (var propertyName in tinyMceparams_size) {
					//	//	//alert (propertyName + ':' + tinyMceparams_pasteFilter[propertyName]);
					//	//	tinyMceparams[propertyName] = tinyMceparams_size[propertyName];
					//	//}
                    //
					//	// hbkeak http://stackoverflow.com/questions/4651676/how-do-i-remove-tinymce-and-then-re-add-it
					//	tinyMCE.remove(); // tinymce init
					//	tinyMCE.init (tinyMceparams); // tinymce init
					//	//tinyMCE.execCommand('mceFocus',false,'idTinyMceTextArea');
					//	//	setTimeout(function(){ tinymce.execCommand('mceFocus',false,'idTinyMceTextArea') }, 100); // hbklrbb12
                    //
                    //
					//	//setTimeout(function(){ $scope.focusOnId(mceId) }, 2000); // hbklrbb
                    //
                    //
					//}; // localtinymceinit
                    //
					//
					//
					//
					//

















					//setTimeout(function(){ $scope.localTinyMceInit() }, 200); // hbklrbb
					//		setTimeout(function(){ $scope.focusOnId(mceId); }, ); // hbklrbb
					//$scope.focusOnId(mceId);

					// $scope.localTinyMceInit(); // hbklrb9


					//.----------------. .----------------. .----------------. .----------------. .----------------. .----------------. .----------------.
					//| .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. |
					//| | ____    ____ | | |     ______   | | |  _________   | | |              | | |     ____     | | |   _____      | | |  ________    | |
					//| ||_   \  /   _|| | |   .' ___  |  | | | |_   ___  |  | | |              | | |   .'    `.   | | |  |_   _|     | | | |_   ___ `.  | |
					//| |  |   \/   |  | | |  / .'   \_|  | | |   | |_  \_|  | | |              | | |  /  .--.  \  | | |    | |       | | |   | |   `. \ | |
					//| |  | |\  /| |  | | |  | |         | | |   |  _|  _   | | |              | | |  | |    | |  | | |    | |   _   | | |   | |    | | | |
					//| | _| |_\/_| |_ | | |  \ `.___.'\  | | |  _| |___/ |  | | |              | | |  \  `--'  /  | | |   _| |__/ |  | | |  _| |___.' / | |
					//| ||_____||_____|| | |   `._____.'  | | | |_________|  | | |   _______    | | |   `.____.'   | | |  |________|  | | | |________.'  | |
					//| |              | | |              | | |              | | |  |_______|   | | |              | | |              | | |              | |
					//| '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' |
					//'----------------' '----------------' '----------------' '----------------' '----------------' '----------------' '----------------'






					//// section_per_editor -1
					//$scope.whichInputIsInFocus = function() {
					//	//var currentlyInFocus = $scope.currentVisibleCounter % arrIds.length;
					//	//// 0 input text box
					//	//if ($scope.ns.Input.INPUT_0_TEXT === currentlyInFocus)
					//	//    return $scope.ns.Input.INPUT_0_TEXT;
					//	//// 1 medium
					//	//else if ($scope.ns.Input.INPUT_1_MEDIUM === currentlyInFocus)
					//	//    return $scope.ns.Input.INPUT_1_MEDIUM;
					//	////// 2 cke
					//	////else if ($scope.ns.Input.INPUT_2_CKE === currentlyInFocus)
					//	////    return $scope.ns.Input.INPUT_2_CKE;
					//	//
					//	//else if ($scope.ns.Input.INPUT_3_MCE === currentlyInFocus)
					//	return $scope.ns.Input.INPUT_3_MCE;
					//	//
					//	//else
					//	//    return $scope.ns.Input.INPUT_NONE_IS_IN_FOCUS;
					//};




					//$scope.editor = CKEDITOR.instances.idCkeEditorTextarea;

					//var e = CKEDITOR.instances['idCkeEditorTextarea'];
					var callcountContentDom = 0;
					//alert( 'hi hk e:' + e );
					//e.on( 'change', function() {
					//    u_.U_o.o ('callcountContentDom keyup:' + callcountContentDom++);
					//    //$scope.contentChange();
					//    //$scope.contentChange(CKEDITOR.instances.idCkeEditorTextarea.document.getBody().getHtml()+'ggg');
					//    //$scope.contentChange(+'hhh');
					//    $scope.eventHandlerEditorcontentChange(e.getData(), e.document.getBody().getHtml(), e.document.getBody().getText());
					//});
					// http://stackoverflow.com/questions/24375780/ckeditor-keyup-event-and-capturing-data-from-inline-editors
					//e.on( 'contentDom', function() {
					//    var editable = e.editable();
					//    editable.attachListener( editable, 'keyup', function() {
					//        u_.U_o.o ('callcountContentDom keyup:' + callcountContentDom++);
					//        $scope.eventHandlerEditorcontentChange(e.getData(), e.document.getBody().getHtml(), e.document.getBody().getText());
					//    } );
					//} );


					//e.on( 'keyup', function( event ) {
					//    alert( 'hi hk' );
					//    //alert( e.getData() );
					//});


					//$scope.editor.on( 'contentDom', function() {
					//    //alert ('in contentDom1');
					//    var editable = $scope.editor.editable();
					//    editable.attachListener( editable, 'keyup', function(event) {
					//        //var keyCode= (window.event ? keyEvent.keyCode : keyEvent.which);
					//
					//        u_.U_o.o ( '0 in contentdom ' );
					//        if ( !event.data.$.ctrlKey && !event.data.$.metaKey )
					//        {
					//            // something changed
					//            //u_.U_o.o ( '1 in contentdom ' + $scope.editor.getData() );
					//            //u_.U_o.o ( '2 in contentdom ' + event.data.$.keyCode);
					//            //u_.U_o.o ( '3 in contentdom ' + !event.data.$.ctrlKey && !event.data.$.metaKey);
					//            $scope.respondToKeyboardEvent('line360', event.data.$.keyCode);
					//        }
					//
					//
					//        //var keyCode= keyEvent.getKey();
					//        //u_.U_o.o ( '1 in contentdom ' + $scope.editor.getData() );
					//        //u_.U_o.o ( '2 in contentdom ' + keyCode);
					//        //u_.U_o.o ( '2 in contentdom ' + !event.data.$.ctrlKey && !event.data.$.metaKey);
					//        //u_.U_o.o ( $scope.editor.getData() );
					//        //$scope.respondToKeyboardEvent();
					//    } );
					//} );
					//

					//$scope.editor.on('contentDom', function( event )
					//{
					//    $scope.editor.document.on('key', function(event)
					//    {
					//        console.log('my key');
					//    });
					//
					//    //$scope.editor.on('keyup', function(event) {
					//    //    alert('raw keyup');
					//    //});
					//    //$scope.editor.document.on('keyup', function(event) {
					//    //    console.log('my keyup:' + $scope.editor.getData());
					//    //    //tinyMCE.get('idTinyMceTextArea').setContent('<span>some1</span> html'); // 4
					//    //});
					//
					//    $scope.editor.on('keydown', function(event) {
					//        console.log('my keydown');
					//    });
					//
					//    //$scope.editor.on( 'contentDom', function() {
					//    //    //alert ('in contentDom1');
					//    //    var editable = $scope.editor.editable();
					//    //    editable.attachListener( editable, 'keyup', function(ev) {
					//    //        u_.U_o.o ('in contentDom2 ' + ev);
					//    //
					//    //        console.log( $scope.editor.getData() );
					//    //    } );
					//    //} );
					//    //
					//    $scope.editor.on('key', function(event) {
					//        var x = CKEDITOR.instances.idCkeEditorTextarea.getData();
					//        //var xText = CKEDITOR.instances.idCkeEditorTextarea.document.getBody().getText()
					//        //o('raw key x:' + x); //
					//        $scope.respondToKeyboardEvent();
					//        //console.log('raw key xText:' + xText); //
					//        //$scope.showFocus();
					//
					//
					//        //alert ('raw key x:' + x)
					//    });
					//
					//    $scope.editor.on('keydown', function(event) {
					//        console.log('raw keydown');
					//    });
					//
					//    $scope.editor.document.on('mouseup', function(event) {
					//        console.log('mouseup');
					//    });
					//
					//    $scope.editor.document.on('blur', function(event) {
					//        alert('blur');
					//    });
					//
					//    //CKEDITOR.instances.editor1.on('OnBlur', function() {
					//
					//});
					//
					//



					if ($scope.editor)
					{
						$scope.editor.addCommand('mySimpleCommand', { // create named command
							exec: function(edt) {
								//    //    alert('onblur fired');
								//    //});
								alert(edt.getData());
							}
						});

						$scope.editor.ui.addButton('SuperButton', { // add new button and bind our command
							label: 'Click me',
							command: 'mySimpleCommand',
							toolbar: 'clipboard, 1',
							icon: 'https://avatars1.githubusercontent.com/u/5500999?v=2&s=16'
						});
					}


					//works cke init to max
					//CKEDITOR.on('instanceReady',
					//    function( evt )
					//    {
					//        var editor = evt.editor;
					//        editor.execCommand('maximize');
					//    });


					//CKEDITOR.replace( 'editor1' );
					//idCkeEditorTextarea
					//CKEDITOR.on('instanceReady', function (ev) {
					//    editor = ev.editor;
					//
					//    // Show this 'on' button.
					//    document.getElementById('idCkeEditorTextarea').style.display = '';
					//
					//    // Event fired when the readOnly property changes.
					//    editor.on('readOnly', function () {
					//        document.getElementById('idCkeEditorTextarea').style.display = this.readOnly ? 'none' : '';
					//        //document.getElementById('readOnlyOff').style.display = this.readOnly ? '' : 'none';
					//    });
					//});
					//function toggleReadOnly(isReadOnly) {
					//    // Change the read-only state of the editor.
					//    // http://docs.cksource.com/ckeditor_api/symbols/CKEDITOR.editor.html#setReadOnly
					//    editor.setReadOnly(isReadOnly);
					//}

					//$scope.testTinyMce();
					//tinyMCE.get('idTinyMceTextArea').setContent('<span>some2</span> html');


					$scope.testConvertHtmltoText = function() {

						try {
							var html = $('div[id="idDivCEOmniBox"]')[0].innerHTML;
							var text = u_.UtilHtmlCleaner.utilHtmlCleanerFunctions.testConvertHtmltoText(html);
							alert('editor innerhtml:' + html);
							alert('editor text:' + text);

						} catch (e) {
							u_.UtilError.emitError('error in testConvertHtmltoText', e)
						}
					};


					// section_per_editor 0
					$scope.inputbind ='search or inputx';

					$scope.toggleVisibility = function(id) {
						try {
							var e = document.getElementById(id);
							//alert ('in toggleVisibility 1 for id ' + id + ', e.style.display:' + e.style.display);
							if(e.style.display === 'block')
								e.style.display = 'none';
							else {
								//alert ('in else')
								e.style.display = 'block';
							}
							//alert ('in toggleVisibility 2 for id ' + id + ', e.style.display:' + e.style.display);

						} catch (e) {
							alert ('in error fir id ' + id + ' e:'+e);
						}
					};

					$scope.eventClickedTheAnimals = function() {
						alert ('in eventClickedTheAnimals line 542');
						$window.location.href = 'http://jpro.co?q=*';
						//  $window.location.href = 'http://www.google.com/search?q=' + GLOBAL_commandFromInputBox;
						//$location.search('hk', this.commandFromInputBox);
					};


					$scope.getKeyboardEventResult = function (keyEvent, keyEventDesc)
					{
						return keyEventDesc + ' (keyCode: ' + (window.event ? keyEvent.keyCode : keyEvent.which) + ')';
					};

					// Event handlers
					//$scope.onKeyDown = function ($event) {
					//    $scope.onKeyDownResult = getKeyboardEventResult($event, 'Key down');
					//};

					// good one! http://jsfiddle.net/kwc6mvcp/
					// copied this down to the ngRepeatFinished
					//$("#idDivCEOmniBox").bind("keydown", function(event) {
					// works
					//alert("$([contenteditable=true].length" + $("[contenteditable='true']").length);
					//$("[contenteditable='true']").bind("keydown", function(event) {
					//	// var target = $(event.target);
					//	if(event.keyCode === 13 || event.keyCode === 27)
					//	{
					//		$('<div contenteditable="true"></div>').appendTo('body').focus().remove();
					//		alert ('save here');
					//	}
					//})



					// seems no work
					//$("#idDivCEOmniBox").on('keydown', '.option-item.new', function(e) {
					//	if(e.keyCode == 13)
					//	{
					//		e.preventDefault();
					//	}
					//});



					//$("#idDivCEOmniBox").on('keydown', '.option-item.new', function(e) {
					//	alert('tried');
					//	if(e.keyCode == 13)
					//	{
					//		e.preventDefault();
					//	}
					//});
                    //



					//alert('start set up idDivCEOmniBox handler');
					// http://codepen.io/mightyiam/pen/KDlri

					//
					// also seems to work - try this in ng-repeat
					//$(function () {
					//	$('#idDivCEOmniBox').keydown(
					//		function (evt)
					//		{
					//			if (evt.which == 13)
					//			{
					//				//alert('tried2');
					//				evt.preventDefault();
					//				return false;
					//				//alert("All your bugs are belong to us.");
					//				//return false;
					//			}
					//			return ;
					//		});
					//	});



				//// http://stackoverflow.com/questions/18552336/prevent-contenteditable-adding-div-on-enter-chrome
				//$('div[contenteditable]').keydown(function(e) {
				//	// trap the return key being pressed
				//	if (e.keyCode === 13) {
				//		alert('hi hk');
				//		// insert 2 br tags (if only one br tag is inserted the cursor won't go to the next line)
				//		document.execCommand('insertHTML', false, '<br><br>');
				//		// prevent the default behaviour of return key pressed
				//		return false;
				//	}
				//});



				//$('#idDivCEOmniBox').on('keydown', function(e) {
				//	if (e.which == 13 && e.shiftKey == false) {
				//		//Prevent insertion of a return
				//		//You could do other things here, for example
				//		//focus on the next field
				//		alert('nada');
				//		return false;
				//	}
				//});
					//alert('done set up idDivCEOmniBox handler');

					// onchange for contentedtable http://stackoverflow.com/questions/8694054/onchange-event-with-contenteditable
					//
					//https://www.google.com/search?num=100&q=contenteditable+onchange

					// called from an initializer
					// all contenteditables keydown event
					$scope.addPerrowCE_EventHandlers = function ()
					{
						//$('[contenteditable=\'true\']').keydown
						// instr adds an event handler after the fact
						$('[class=\'classSpanPerrowCE\']').keydown
						(
							function (evt)
							{
								// not sure if this works ...
								// evt.preventDefault();
								alert('in keydown from addPerrowCE_EventHandlers()');

								// escape in perrow CE - save
								if (evt.which !== 27 ) // if not escape key section_escape
								{
									//alert ('!!!! in onKeyUp_MainContentEditable not escape');
									//// change local image to requiring a save
									//var savImgHtml = document.getElementById('savimg'+index);
									////alert ('savImgHtml.src:' + savImgHtml.src);
									//savImgHtml.src = savImgHtml.src.replaceAll('saveIcon.jpg', 'SaveIconBlue.png');
									//
									//// SET ROW BACKGGROUND COLOR ON EDITING MODE ENTRY

									return;
								}

								//return ;

								//$scope.eventHandlerEditorcontentChange($scope.enumKeyEvent.ENTER, htmlValue, htmlValue, htmlValue);
								//if (evt.which === 13) // enter key
								//{
								//	//alert('tried2');
								//	evt.preventDefault();
								//	var htmlValue = document.getElementById("idDivCEOmniBox").innerHTML;
                                //
								//	//setTimeout(function(){ alert('hello2enter'); }, 10);
                                //
                                //
								//	return false;
								//	//alert("All your bugs are belong to us.");
								//	//return false;
								//}
								//else if (evt.which === 27) // escape key
								//{
								//	//alert('tried2');
								//	evt.preventDefault();
								//	var htmlValue = document.getElementById("idDivCEOmniBox").innerHTML;
                                //
								//	setTimeout(function(){ alert('hello2escape'); }, 10);
								//	return false;
								//	//alert("All your bugs are belong to us.");
								//	//return false;
									//}
								return ;
							});




						// test method 1 onpaste
						// from http://stackoverflow.com/questions/3553041/how-can-you-catch-a-contenteditable-paste-event
						// http://www.w3schools.com/jsref/event_onpaste.asp
						document.getElementById('idDivCEOmniBox').onpaste = function(d) {
							//alert(d.clipboardData.);
							alert('in mainContentEditable onpaste');
							return true; // to allow or not the user insert
						}




						// test method 2 addevenslistener
						// from http://jsfiddle.net/MBags/
						// http://stackoverflow.com/questions/8694054/onchange-event-with-contenteditable
						// https://www.google.com/search?num=100&q=contenteditable+onchange+event
						function listener(evt)
						{
							alert ('in listener');
							var typ = evt.type;
							//if (typ === 'DOMCharacterDataModified') {
							var htmlValue = document.getElementById("idDivCEOmniBox").innerHTML;

							var logStr = 'event typ:' + typ 		 + ' new htmlValue [' +  htmlValue  + ']';
							u_.U_o.liveLog(logStr);
							//console.log (logStr);
							//alert (logStr);

							//alert(evt);
						}
						var editable = document.getElementById("idDivCEOmniBox");
						if (editable.addEventListener)
						{
							editable.addEventListener("input", listener, false);
							editable.addEventListener("DOMNodeInserted", listener, false);
							editable.addEventListener("DOMNodeRemoved", listener, false);
							editable.addEventListener("DOMCharacterDataModified", listener, false);
						}
					};


					/**
					 * make omnibox execute command or yellow the field due to key action
                     */
					//hhkk104
					$scope.omniboxKey_EventHandler = function (keyEvent) //
					{
						//u_.U_o.o ('!!!! in onKeyUp_MainContentEditable');
							//alert ('!!!! in onKeyUp_MainContentEditable');
						var html = $('div[id="idDivCEOmniBox"]')[0].innerHTML;
						//alert('comparing html ['+html+'] to ' + $('div[id="idDivCEOmniBox"]')[0].innerHTML);
						if (html !== $scope.saveOriginalDevCeHtml)
							SppSvc.setModelDirty(true,'line 2192');
						else
							SppSvc.setModelDirty(false,'line 2193');
						if (keyEvent.keyCode === 13) // enter key
						{
							u_.U_o.o('in omniboxKey_EventHandler keyEvent.keyCode === 13');

							var text = u_.UtilHtmlCleaner.utilHtmlCleanerFunctions.testConvertHtmltoText(html, false);

							// if write
							if (text.endsWith(' w'))
							{
								$scope.omniOrAddressBarCommandTextHandler("CE keydown added across the board line 1995", $scope.enumKeyEvent.ENTER,
									html, text, text);
								u_.U_o.liveLog ('returning false');
								return false;
							}
							else // search
							{
								$scope.omniOrAddressBarCommandTextHandler("CE keydown added across the board line 1995", $scope.enumKeyEvent.ENTER,
									html, text, text);
								u_.U_o.liveLog ('returning false');
								return false;
							}

							//evt.preventDefault();
							//setTimeout(function(){ alert('Hello2'); }, 10);
							//alert("All your bugs are belong to us.");
							//return false;
						}
						//document.getElementById('idDivCEOmniBox').style['background-color'] = 'yellow'; // SETMODELLDIRTY

						//alert('color yellow');
						document.getElementById("idDivCEOmniBox").style.borderWidth = "3px";
						document.getElementById("idDivCEOmniBox").style.borderColor = "yellow";

						// yellow if not escape
							// save
							//alert( 'in omniOrAddressBarCommandTextHandler save');
							//try {
                            //
							//	var maincontenteditableHtml = document.getElementById('idDivCEOmniBox').innerHTML;
							//	//	alert ('maincontenteditableHtml:' + maincontenteditableHtml);
                            //
							//	//alert('text.asciiTable 1():' + text.asciiTable('PRE NBSP AND 10 CONVERT'));
							//	var text =
							//		UtilHtmlCleaner.utilHtmlCleanerFunctions.testConvertHtmltoText(maincontenteditableHtml);
                            //
							//	//text = UtilString.convertNonBreakingSpace(text);
							//	//text = UtilString.convertRemoveTrailing10(text);
							//	//alert('text.asciiTable 2():' + text.asciiTable('POST NBSP AND 10 CONVERT'));
                            //
							//	//alert('eventHandlerEditorcontentChange text:' + text);
                            //
							//	//if (text.endsWith(' ') && $scope.dynamicSearch ) {
							//	//	//alert ('not skipping')
							//	//	$scope.processCommand($scope.enumCommands.COMMAND_SEARCH,
							//	//		'caller eventHandler space and ends w space', text, html, data);
							//	//}
							//	//else
							//	// IF ENTER
							//	alert('in trouble spot');
							//	if (enumKeyEvent === $scope.enumKeyEvent.ENTER) {
							//		alert ('not skipping 2');
							//		$scope.processCommand($scope.enumCommands.COMMAND_SEARCH,
							//			'caller eventHandler ENTER key pressed', text, html, data);
							//	}
							//	else if (text.endsWith(' w')) {
							//		$scope.processCommand($scope.enumCommands.COMMAND_WRITE,
							//			'caller eventHandlerEditorcontentChange write', text, html, data);
							//		//alert('calling processCommand');
							//	}
							//} catch (e) {
							//	UtilError.emitError('in eventHandlerEditorcontentChange', e);
							//	//alert ('sdfsdfsdf:' + e);
							//}
					};


					$scope.onKeyUp_perrow_text = function (keyEvent, index, _id) // https://docs.angularjs.org/api/ng/directive/ngKeyup
					{
						//
						//alert ('!!!! in onKeyUp_perrow_text');

						SppSvc.setModelDirty(true);
						// if not escape then return
						if (keyEvent.keyCode !== 27 ) // if not escape key section_escape
						{
							// change local image to requiring a save
							var savImgHtml = document.getElementById('savimg'+index);
							//alert ('savImgHtml.src:' + savImgHtml.src);
							savImgHtml.src = savImgHtml.src.replaceAll('saveIcon.jpg', 'SaveIconBlue.png');

							// SET ROW BACKGGROUND COLOR ON EDITING MODE ENTRY
							var areaPerRowToChangeColorOnToIndicateEditing = document.getElementById('ustodorow'+index);
							//alert('setyellow');

							areaPerRowToChangeColorOnToIndicateEditing.style.borderStyle = 'solid'; // SETMODELLDIRTY
							areaPerRowToChangeColorOnToIndicateEditing.style.borderWidth = '3px'; // SETMODELLDIRTY
							areaPerRowToChangeColorOnToIndicateEditing.style.borderColor = 'yellow'; // SETMODELLDIRTY
							//areaPerRowToChangeColorOnToIndicateEditing.style.backgroundColor = 'green'; // SETMODELLDIRTY
							//alert('setyellow done');

							return;
						}

						$scope.saveSweep(_id);
					};


					$scope.saveSweep = function (_id) // ID to change
					{
						//alert ('in $scope.saveSweep _id:' + _id);
						//alert ('newHtml:' + newHtml);

						var found = false;
						//find the element in memory matching the id passed from the UI on the click
						// might have this passed in OK - check it and maybe can remove this loop
						var updateCallBackIfErrorIndex = -1;
						var updateCallBackIfError = function(errorResponse) {
							u_.NLB_bgFade.NLBfadeBg('numberWrapForFade'+updateCallBackIfErrorIndex,'red', 'pink','100');
							document.getElementById('ustodorow'+updateCallBackIfErrorIndex).style['background-color'] = 'pink'; // SETMODELLDIRTY
							//UtilNLB_bgFade.NLBfadeBg('ustodorow'+updateCallBackIfErrorIndex,'red', 'pink','100');

							alert('error on save errorResponse.data.message [' + errorResponse.data.message + ']');
						};
						for (var i = 0; i < $scope.ustodos.length; i++)
						{
							if ($scope.ustodos[i]._id === _id)
							{
								found = true;
								//alert ('found match at index:' + i + ' with original text :' + $scope.ustodos[i]);

								var savImgHtml = document.getElementById('savimg'+i);
								//alert ('savImgHtml.src:' + savImgHtml.src);
								savImgHtml.src = savImgHtml.src.replaceAll('SaveIconBlue.png', 'saveIcon.jpg');

								//var areaPerRowToChangeColorOnToIndicateEditing = document.getElementById('ustodorow'+i)
								//areaPerRowToChangeColorOnToIndicateEditing.style['background-color'] = 'white'; // SETMODELLDIRTY


								//alert('compare [' + $scope.ustodos[i].html + '] to [' + newHtml + ']')
								// section_update per row on update with escape key
								var newHtml = document.getElementById('ustodorow'+i).innerHTML;
								var newText = document.getElementById('ustodorow'+i).innerText;

								if ($scope.ustodos[i].html !== newHtml)
								{
									$scope.ustodos[i].html = newHtml;
									$scope.ustodos[i].text = newText;
									updateCallBackIfErrorIndex = i;
									$scope.ustodos[i].$update(function() { // bridge maps to ustodos.server.controller.js exports.update = function(req, res) { in server controller
										//alert('at this fade 2');
										u_.NLB_bgFade.NLBfadeBg('numberWrapForFade'+i,'greenyellow', '#FFFFFF','1500');
										//$scope.ustodos[i].html = newHtml;
										var areaPerRowToChangeColorOnToIndicateEditing = document.getElementById('ustodorow'+i);
										//alert('at this fade 3');
										areaPerRowToChangeColorOnToIndicateEditing.style['background-color'] = 'greenyellow'; // SETMODELLDIRTY
										setTimeout(function(){
											areaPerRowToChangeColorOnToIndicateEditing.style['background-color'] = 'white'; // SETMODELLDIRTY
										}, 700);
									}, updateCallBackIfError);
								}
								document.getElementById('ustodorow'+i).blur();
								break;
							}

						}
						//u_.U_o.o ('========== $scope.state_delectedItem set to -1');
						SppSvc.setSelectedItem(-1);

						if (!found) {
							alert ('ustodo not found - reload page');
						}

					};


					$scope.onKeyUp = function (desc, keyEvent, ENUM_KEYEVENTcaller) // https://docs.angularjs.org/api/ng/directive/ngKeyup
					{
						// currently hits alert only to:
						// text box and medium
						// and NOT CK or MCE or perRow editor
						//alert ('in onkeyup');

						//if ($scope.getTextHtmlAndValueInShowingEditor().xValue === '')
						//    $scope.mouseoverlock = 'off';
						//else
						//    $scope.mouseoverlock = 'on';
						//u_.U_o.o ('========== set mouseoverlock:' + $scope.mouseoverlock);


						//u_.U_o.o ('in onkeyup desc ['+ desc +'] ENUM_KEYEVENTcaller [' + ENUM_KEYEVENTcaller + 'keyEvent.keyCode:' + keyEvent.keyCode);
						if (keyEvent.ctrlKey)
							return;
						if (keyEvent.altKey)
							return;
						//if (keyEvent.keyCode === 27 ) // escape key
//                    return;
						if (keyEvent.keyCode >= 35 && keyEvent.keyCode <= 40) // home end and arrow keys
							return;
						if (keyEvent.keyCode >= 16 && keyEvent.keyCode <= 18) // shift alt ctrl key up
							return;


						var keyCode= (window.event ? keyEvent.keyCode : keyEvent.which);
						//u_.U_o.o('onKeyUp:' + keyCode);
						//u_.U_o.o('onKeyUp:' + getKeyboardEventResult($event, 'Key up')); //
						// $scope.respondToKeyboardEvent('line634', keyCode);
					};

					//$scope.onKeyUp = function(ev) {
					//    ////alert('onKeyUp:' + ev); //
					//    //console.log('onKeyUp:' + getKeyboardEventResult); //
					//    ////console.log ('onKeyUp'); //
					//    ////$scope.showFocus();
					//    //$scope.respondToKeyboardEvent()
					//    ////$scope.propagateTextChanges();
					//};

					var getKeyboardEventResult = function (keyEvent, keyEventDesc)
					{
						return keyEventDesc + ' (keyCode: ' + (window.event ? keyEvent.keyCode : keyEvent.which) + ')';
					};

					$scope.currentTextValueAfterBlur = null;
					$scope.currentHtmlValueAfterBlur = null;


					$scope.prop3mce = function () {
						alert ('start prop3mce ');
						try {
							//alert ('start case 2')
							//var xText = tinyMCE.getInstanceById('idTinyMceTextArea').getContent({format: 'text'});
							var xText = tinyMCE.activeEditor.getContent({format: 'text'});
							var xHtml= tinyMCE.activeEditor.getContent();
							//alert ('got mce content xText:' + xText)
							//alert ('got mce content xHtml:' + xHtml)
							//alert(tinymce.activeEditor.selection.getContent({format: 'text'}));
							//var xHtml = CKEDITOR.instances.idCkeEditorTextarea.getData();
							//alert('start case 2 x [' + xText + ']')
							$scope.currentValueAfterBlurText = xText;
							$scope.currentValueAfterBlurHtml = xHtml;

							// 0 text input
							//document.getElementById('idInput0TypeText').value = xText;

							// 1 medium
							//$scope.mmmm.element.innerHTML = xHtml;

							// 2 CKE
							//var tt = '<u>' + xHtml + '</u>';
							//alert ('sett data into 2 cke tt [' + tt + ']');
							//CKEDITOR.instances.mail_msg.insertText(obj['template']);
							//CKEDITOR.instances.wysiwyg.insertHtml('[quote={$row['author']}]' + stringContent + '[/quote]');
							//CKEDITOR.instances.idCkeEditorTextarea.setData(xHtml);
							//CKEDITOR.instances.idCkeEditorTextarea.insertHtml(tt);
							//CKEDITOR.instances.idCkeEditorTextarea.setData(tt);

							// 3 mce
							//tinyMCE.getInstanceById('idTinyMceTextArea').setContent(xHtml);



						}  catch (e) {
							alert ('error in prop3mce:' + e);
						}
					};



					//var arrIds = ['idInput0TypeText', 'idMediumEditor', 'idDivForCkeEditorTextarea', 'idDivForTinyMceEditorTextarea', ];
					//var arrIds = ['idInput0TypeText', 'idMediumEditor', 'idDivForCkeEditorTextarea', 'idTinyMceTextArea', ];      // hbklrbb
					$scope.currentVisibleCounter = $scope.ns.Input.INPUT_0_TEXT; // arrIds.length-1;

					$scope.showFocus= function() {
						alert ('document.activeElement.id:' + document.activeElement.id);
						alert ('document.activeElement.parentElement.id:' + document.activeElement.parentElement.id);
						//alert ('document.activeElement.parentElement.id:' + document.activeElement.parentElement.parentElement.id);
						//alert ('document.activeElement.parentElement.id:' + document.activeElement.parentElement.parentElement.parentElement.id);
						//alert ('document.activeElement.parentElement.id:' + document.activeElement.parentElement.parentElement.parentElement.parentElement.id);

					};


					// section_visible
					//.----------------. .----------------. .----------------. .----------------. .----------------. .----------------. .----------------.
					//| .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. |
					//| | ____   ____  | | |     _____    | | |    _______   | | |     _____    | | |   ______     | | |   _____      | | |  _________   | |
					//| ||_  _| |_  _| | | |    |_   _|   | | |   /  ___  |  | | |    |_   _|   | | |  |_   _ \    | | |  |_   _|     | | | |_   ___  |  | |
					//| |  \ \   / /   | | |      | |     | | |  |  (__ \_|  | | |      | |     | | |    | |_) |   | | |    | |       | | |   | |_  \_|  | |
					//| |   \ \ / /    | | |      | |     | | |   '.___`-.   | | |      | |     | | |    |  __'.   | | |    | |   _   | | |   |  _|  _   | |
					//| |    \ ' /     | | |     _| |_    | | |  |`\____) |  | | |     _| |_    | | |   _| |__) |  | | |   _| |__/ |  | | |  _| |___/ |  | |
					//| |     \_/      | | |    |_____|   | | |  |_______.'  | | |    |_____|   | | |  |_______/   | | |  |________|  | | | |_________|  | |
					//| |              | | |              | | |              | | |              | | |              | | |              | | |              | |
					//| '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' |
					//'----------------' '----------------' '----------------' '----------------' '----------------' '----------------' '----------------'

					//$scope.toggleVisibilityTo3 = function(callerId) {
					//alert ('in toggleVisibilityTo3 MCE callerId [' + callerId + ']');
					//SppSvc.setWhichEditorShowing($scope.ns.Input.INPUT_3_MCE);
					//    document.getElementById('idTinyMceTextArea').style.display = 'block';
					//    $scope.currentVisibleCounter = $scope.ns.Input.INPUT_3_MCE;
					//    setTimeout(function(){ $scope.focusOnId('idTinyMceTextArea'); }, 300);
					//    setTimeout(function(){ $scope.focusOnId('idTinyMceTextArea'); }, 600);
					//};



					// section_propagate
					//.----------------. .----------------. .----------------. .----------------. .----------------. .----------------. .----------------. .----------------. .----------------.
					//| .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. |
					//| |   ______     | | |  _______     | | |     ____     | | |   ______     | | |      __      | | |    ______    | | |      __      | | |  _________   | | |  _________   | |
					//| |  |_   __ \   | | | |_   __ \    | | |   .'    `.   | | |  |_   __ \   | | |     /  \     | | |  .' ___  |   | | |     /  \     | | | |  _   _  |  | | | |_   ___  |  | |
					//| |    | |__) |  | | |   | |__) |   | | |  /  .--.  \  | | |    | |__) |  | | |    / /\ \    | | | / .'   \_|   | | |    / /\ \    | | | |_/ | | \_|  | | |   | |_  \_|  | |
					//| |    |  ___/   | | |   |  __ /    | | |  | |    | |  | | |    |  ___/   | | |   / ____ \   | | | | |    ____  | | |   / ____ \   | | |     | |      | | |   |  _|  _   | |
					//| |   _| |_      | | |  _| |  \ \_  | | |  \  `--'  /  | | |   _| |_      | | | _/ /    \ \_ | | | \ `.___]  _| | | | _/ /    \ \_ | | |    _| |_     | | |  _| |___/ |  | |
					//| |  |_____|     | | | |____| |___| | | |   `.____.'   | | |  |_____|     | | ||____|  |____|| | |  `._____.'   | | ||____|  |____|| | |   |_____|    | | | |_________|  | |
					//| |              | | |              | | |              | | |              | | |              | | |              | | |              | | |              | | |              | |
					//| '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' |
					//'----------------' '----------------' '----------------' '----------------' '----------------' '----------------' '----------------' '----------------' '----------------'             $scope.propagateTextChanges = function()
					{
						try
						{
							$scope.count++;

						} catch (e) {
							alert ('e22:' + e);
						}

					} // structuring block


					// MAJOR COMMON FUNCTION - SET ACTIVE EDITOR CONTENT
					// set text shown for mouseover

					// section_per_editor 3
					//
					//$scope.setTextInShowingEditor = function(e, callerID, processFailure) active  current active editor
					$scope.setTextInShowingEditor = function(e, callerID, processFailure)
					{
						//alert('in setTextInShowingEditor callerID' + callerID);
						try {
							$('div[id="idDivCEOmniBox"]')[0].innerHTML = e;
							//$('div[id="idDivCEOmniBox2"]')[0].innerHTML = e;


							//		$scope.bindToTextBox = $scope.q;


							//switch($scope.whichInputIsInFocus())
							//{
							//    case $scope.ns.Input.INPUT_3_MCE:
							//alert ('in settext 3 e [' + e + '] callerID [' + callerID + ']');
							//alert ('in settext 3');
							//alert ('+++++++++ in setTextInShowingEditor target INPUT_3_MCE e:' + e);
							//if (tinyMCE.activeEditor !== null)
							//{
							//	alert ('in tinyMCE.activeEditor');
							//	if (u_.UtilJsTypeDetect.isString(e)) {
							//		//tinyMCE.get('idTinyMceTextArea').setContent(e);
							//		//alert('setttt');
							//		//alert ('in setTextInShowingEditor as string e [' + e + '] callerID [' + callerID + ']');
							//		tinyMCE.activeEditor.setContent(e);
							//	}
							//	//alert('logic error - setting CKE rich editor with string [' + e + '] leaving at prior value');
							//	else {
							//		//tinyMCE.get('idTinyMceTextArea').setContent(e.innerHTML);
							//		//alert('settttt');
							//		//alert ('in setTextInShowingEditor NOT as string e [' + e + '] callerID [' + callerID + ']');
							//		tinyMCE.activeEditor.setContent(e.innerHTML);
							//	}
							//}
							//else {
							//	//if ($scope.ustodos && $scope.ustodos.length > 0 ) //
							//		//$scope.bindToTextBox = 'hi mom!'; // $scope.ustodos[0];
							//		//$scope.bindToTextBox = $scope.ustodos[0].html; // $scope.ustodos[0];
							//	//else
							//		$scope.bindToTextBox = $scope.q;
							//}
							////        break;
							////
							////    default:
							////        alert ('era - bad input resolution');
							////}
						}
						catch (e) {
							if (typeof(window) !== 'undefined')
								alert('errorxxx'+e);
							u_.UtilError.emitError ('era3', e);
							if (processFailure)
								u_.UtilError.emitError ('era3', e);
							throw e;
						}
					};

					// section_per_editor 5
					$scope.getTextHtmlAndValueInShowingEditor = function()
					{
						var rtn = {};
						rtn.xText = null;
						rtn.xHtml = null;
						rtn.xValue = null;
						rtn.xHtmlStripped = null;


						var xText = null;
						var xHtml = null;
						var xValue = null;
						var xHtmlStripped = null;
						try
						{
							//switch($scope.whichInputIsInFocus())
							//{
							//    case $scope.ns.Input.INPUT_3_MCE:
							//alert ('in setTextInShowingEditor for input2cke');


							//xText = tinyMCE.activeEditor.getContent({format: 'text'});
							//xHtml= tinyMCE.activeEditor.getContent();

							xHtml = $('div[id="idDivCEOmniBox"]')[0].innerHTML;
							xText = u_.UtilHtmlCleaner.utilHtmlCleanerFunctions.testConvertHtmltoText(xHtml);

							//alert ('xHtml from 3 mce [' + xHtml + ']');
							//        break;
							//    default:
							//        alert ('era - bad input resolution');
							//} // switch

						} catch (e) {
							alert ('era2:' + e);
							throw e;
						}

						rtn.xText = xText;
						rtn.xHtml = xHtml;
						rtn.xValue = xValue;
						rtn.xHtmlStripped = xHtmlStripped;
						return rtn;
					};



					//alert ('defined medium');

					console.log ('000000000000000000000000000000 in ustodos.client. controller init');

					//tinymce.init({
					//    selector: 'textarea'
					//});
					//console.log ('done tinymce init !!!!!!!!!!!!! ');

					// see https://devcenter.heroku.com/articles/nodejs-mongoose#querying
					// see http://jsfiddle.net/FxM3B/4/  for examples
					$scope.operators = [];

					// see https://devcenter.heroku.com/articles/nodejs-mongoose#querying
					// see http://jsfiddle.net/FxM3B/4/  for examples

					//var query = Commands.find({});
					//        query.sort('commandDescription', 1);


					//var x = Commands.query();
					//x.sort('commandDescription', 1);

					//$scope.modelForSelectId = '-save';
					$scope.selectModel = 'Bing (b)';

					$scope.commands = Commands.query(function()
					{
						//$scope.commands = query.exec (function() {
						//alert ('done query $scope.commands.length:' + $scope.commands.length);
						try {
							for (var i = 0; i < $scope.commands.length; i++) {
								$scope.commands[i].commandDescription2 = $scope.commands[i].commandDescription +
									' - ' + $scope.commands[i].commandCode ;
								//var map = {};
								////console.log('$scope.commands[i].commandDescription:' + $scope.commands[i].commandDescription);
								//map.value = $scope.commands[i].commandUrl;
								//map.displayName = $scope.commands[i].commandDescription + ' (' + $scope.commands[i].commandCode + ')';
								////alert('$scope.commands[i].commandDescription:' + $scope.commands[i].commandDescription);
								////commandsValueName.push ({value:$scope.commands[i].commandDescription})
								//$scope.operators.push(map);
							}

							//alert('pre sort');
							$scope.commands = $scope.commands.sort(function (a, b) {
								if (a.commandDescription.toLowerCase() > b.commandDescription.toLowerCase())
									return 1;
								else
									return -1;
							});
							//alert ('post sort $scope.commands.length:' + $scope.commands.length);
						} catch (err) {
							alert('era in commands query:' + err);
						}
					});

					$scope.commandForSelectInitialValue = $scope.commands[0];

					//var x = Commands.query();
					//x.sort('commandDescription', 1);

					$scope.operators = [];

					$scope.filterCondition = '-save';


					$scope.mml = angular.element(document.getElementById('myMenuList'));

					//$locationProvider.html5Mode(true).hashPrefix('!');

					$scope.SkipValidationHK = function(value) {
						return $sce.trustAsHtml(value);
					};

					// section_handlers section_events mouseover rows etc.
					//.----------------. .----------------. .-----------------..----------------. .----------------. .----------------. .----------------. .----------------.
					//| .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. |
					//| |  ____  ____  | | |      __      | | | ____  _____  | | |  ________    | | |   _____      | | |  _________   | | |  _______     | | |    _______   | |
					//| | |_   ||   _| | | |     /  \     | | ||_   \|_   _| | | | |_   ___ `.  | | |  |_   _|     | | | |_   ___  |  | | | |_   __ \    | | |   /  ___  |  | |
					//| |   | |__| |   | | |    / /\ \    | | |  |   \ | |   | | |   | |   `. \ | | |    | |       | | |   | |_  \_|  | | |   | |__) |   | | |  |  (__ \_|  | |
					//| |   |  __  |   | | |   / ____ \   | | |  | |\ \| |   | | |   | |    | | | | |    | |   _   | | |   |  _|  _   | | |   |  __ /    | | |   '.___`-.   | |
					//| |  _| |  | |_  | | | _/ /    \ \_ | | | _| |_\   |_  | | |  _| |___.' / | | |   _| |__/ |  | | |  _| |___/ |  | | |  _| |  \ \_  | | |  |`\____) |  | |
					//| | |____||____| | | ||____|  |____|| | ||_____|\____| | | | |________.'  | | |  |________|  | | | |_________|  | | | |____| |___| | | |  |_______.'  | |
					//| |              | | |              | | |              | | |              | | |              | | |              | | |              | | |              | |
					//| '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' |
					//'----------------' '----------------' '----------------' '----------------' '----------------' '----------------' '----------------' '----------------'             $scope.event = null;

					//jQuery('#edit').on('keyup', function() {
					//    alert ('hi');
					//    //$this = $(this);
					//    //$this.scrollTop(0);
					//
					//    //var contentOuterHeight = 0;
					//    //var line_height = 18;
					//    //
					//    //$('#edit *').each(function() {
					//    //    $this = $(this);
					//    //    contentOuterHeight += $this.outerHeight(true);
					//    //});
					//    //
					//    //// if (contentOuterHeight == 0) {
					//    //// when there are no elements, just text, add one line-height
					//    //contentOuterHeight += line_height;
					//    //// }
					//    //$('#edit').height(contentOuterHeight);
					//    //
					//    //$('#edit_container').scrollTop(0);
					//});

					//var o = u_.U_o.o;

					// Handler 1
					var callcounteventHandlerEditorcontentChange = 0;
					var priorhtml = null;

					var wasEnterPressed = function (oldhtml, newhtml)
					{
						//var rtndiff = '';
						//if (oldhtml.length > newhtml.length)
//                    return false;
////                else
						//            {
						//var j = 0; // new index
						//for (var j = 0; j < newhtml.length; j++)
						//{
						//    if (ol)
						//}
						if (newhtml.endsWith('<p><br></p>'))
							return true;
						//          }

					};


					$scope.eventNgChange_idcheckbox_includeMceHtmlPasteFilter = function()
					{
						$scope.localTinyMceInit();
						alert('Completed init of TinyMCE');
					};

					// eventHandlerEditorcontentChange was eventHandlerCKEcontentChange
					$scope.callCounter_eventHandlerEditorcontentChange = 0;
					//
					$scope.omniOrAddressBarCommandTextHandler = function(caller, enumKeyEvent, html, text, data)
					{
						$scope.callCounter_eventHandlerEditorcontentChange++;

						//console.log ('$scope.callCounter_eventHandlerEditorcontentChange:' + $scope.callCounter_eventHandlerEditorcontentChange);

						//
						//alert( '######### in eventHandlerEditorcontentChange');

						try {

							//document.getElementById('idInputTextFilter').value = text;

							callcounteventHandlerEditorcontentChange++;
							if (enumKeyEvent === $scope.enumKeyEvent.ENTER)
							{
								//alert ('enter pressed1');
							}
							else if (enumKeyEvent === $scope.enumKeyEvent.SPACE)
							{
								//u_.U_o.o ('space pressed');
							}
							//if (html === priorhtml)
							//    alert('same html');

							priorhtml = html;

							//u_.U_o.o ( 'callcnt [' + callcounteventHandlerEditorcontentChange +
							//'] in eventHandlerEditorcontentChange ' +
							//'] \r\n1 data [' + data + '] ascii [' + data.asciiTable('data (1/3)') + ']' +
							//'] \r\n2 html [' + html + '] ascii [' + html.asciiTable('html (2/3)') + ']' +
							//'] \r\n3 text [' + text + '] ascii [' + text.asciiTable('text (3/3)') + ']');
							//alert( 'data  [' + data + ']');
							//alert( 'html [' + html + ']');
							//alert( 'text [' + text + ']');
							//u_.U_o.o('text [' + text + ']');
							//u_.U_o.o('text.charCodeAt(text.length-1) [' + text.charCodeAt(text.length - 1) + ']');

							//var lastCharacter = text.charCodeAt(text.length - 1);
							////alert ('testing if I should be calling processCommand');
							//if (lastCharacter == 160)
							//    text[text.length - 1] = ' ';
							//if (text.length > 1) {
							//    var lastCharacter = text.charCodeAt(text.length - 2);
							//    //alert ('testing if I should be calling processCommand');
							//    if (lastCharacter == 160)
							//        text[length - 1] = ' ';
							//}
							//
							//
							////if (UtilString.endsWith(text, ' ') ||
							////                    UtilString.endsWith(text, ' w'))
							//var x = 'abcde'
							////alert ('x:' + x);
							////if (x.endsWith('cde'))
							////                    alert ('x.endsWith(cde)');
							////                else
							////                    alert ('not x.endsWith(cde)');
							//

							//              alert ('text.asciiTable()1:');
							//alert('text.asciiTable 1():' + text.asciiTable('PRE NBSP AND 10 CONVERT'));
							text = u_.UtilString.convertNonBreakingSpace(text);
							text = u_.UtilString.convertRemoveTrailing10(text);
							//alert('text.asciiTable 2():' + text.asciiTable('POST NBSP AND 10 CONVERT'));

							//
							// alert ('eventHandlerEditorcontentChange text:' + text);
							// if (text.endsWith(' ') && $scope.dynamicSearch ) {
							if (text.endsWith(' ') && $scope.dynamicSearch ) {
								//alert ('not skipping')
								$scope.processCommand($scope.enumCommands.COMMAND_SEARCH,
									'caller eventHandler space and ends w space', text, html, data);
							}
							else if (enumKeyEvent === $scope.enumKeyEvent.ENTER) {
								//alert ('not skipping 2')
								$scope.processCommand($scope.enumCommands.COMMAND_SEARCH,
									'caller eventHandler ENTER key pressed', text, html, data);
							}
							else if (text.endsWith(' w')) {
								$scope.processCommand($scope.enumCommands.COMMAND_WRITE,
									'caller omniOrAddressBarCommandTextHandler write', text, html, data);
								//alert('calling processCommand');
							}
						} catch (e) {
							u_.UtilError.emitError('in omniOrAddressBarCommandTextHandler', e);
							//alert ('sdfsdfsdf:' + e);
						}
					};


					$scope.keyCount = 0;

					// Handler 2
					$document.bind('keypress', function(event) {
						//o ('inkey keypress event.keyCode:' + event.keyCode + ', $scope.keyCount:'+$scope.keyCount);
						$scope.keyCount++;
					});

					// Handler
					$scope.myFnOnKeyUp = function($index, $event) { // onkey
						//o ('inkey myFnOnKeyUp $index:' + $index + ', $event.keyCode:' + $event.keyCode);
						//console.log (i + '. aaa event.altKey:'+event.altKey);
					};

					// Handler
					$scope.myFnOnKeyDown = function($index, $event) { // onkey
						//u_.U_o.o ('inkey myFnOnKeyDown $index:' + $index + ', $event.keyCode:' + $event.keyCode);
						//u_.U_o.o ( ' [ ' + $scope.ustodo.$index + ']');

					};

					// Handler
					$scope.event_click_timeAgo = function (_id) {
						alert (_id);
					};

					// Handler
					$scope.buttonClickSearchStar = function() {
						alert ('asdsad');
						this.commandFromInputBox = '*';
						this.processCommand($scope.enumCommands.COMMAND_SEARCH, 'SERVER line 1189', this.commandFromInputBox);
					};

					//$scope.eventMouseoverRow = function(i) {
					//    //console.log ('in eventMouseoverRow ' + i);
					//    var x = document.getElementById('ustodorow'+i);
					//    //var x = angular.element('ustodorow'+i);
					//    //console.log ('in eventMouseoverRow x.innerText:' + x.innerText);
					//    $scope.commandFromInputBox = x.innerText;
					//    //elem.contentEditable = false;
					//    //console.log ('in eventMouseoverRow set this.commandFromInputBox :' + x.innerText);
					//};
					//
					// Handler
					$scope.stateOKtoOverwrite = function() {
						return (SppSvc.getSelectedItem() === -1);
					};

					$scope.eventMouseoverCurrentSearch = function() {
						if ($scope.stateOKtoOverwrite()) {
							//if ($scope.mouseoverlock !== 'on') {
							//$scope.setTextInShowingEditor(document.getElementById('ustodorow'+i));
							$scope.setTextInShowingEditor($scope.searchedFor, 'line 2275');
							//}
						}
					};

					$scope.isCurrentEditorEmpty = function()  {

						//alert('in isCurrentEditorEmpty 1');
						return $scope.getTextHtmlAndValueInShowingEditor().xText.trim() === '';
						//alert('in isCurrentEditorEmpty 2');
					};

					$scope.eventMouseoverRow2 = function(i)
					{
						//alert ('in eventMouseoverRow2  $scope.getTextHtmlAndValueInShowingEditor() ['+ $scope.getTextHtmlAndValueInShowingEditor().xText + ']');
						if (
							// if no item is selected and model is  selected, if not
							(SppSvc.getSelectedItem() === -1 && !SppSvc.getModelDirty('singlepage'))
							||
							$scope.isCurrentEditorEmpty()
						)
						{
							//if ($scope.mouseoverlock !== 'on') {
							//$scope.setTextInShowingEditor(document.getElementById('ustodorow'+i));
							$scope.setTextInShowingEditor(decodeURI($scope.ustodosFiltered[i].html), 'line 2254');

							SppSvc.setModelDirty (false);
						}
					};


					$scope.eventMouseoverRow3 = function(s) {
						//alert ('in eventMouseoverRow3 s:' + s);
						$scope.setTextInShowingEditor(s, 'line 2291');
					};

					// selectId
					// Handler
					$scope.yyutdact = function() {
						alert ('yyutdact');
						$scope.mmmm.element.focus();
						window.getSelection().setPosition(0);
						console.log ('doneit');
					};

					// Handler
					$scope.utdEventSelectedEngine = function() {
						try
						{
							//var t = document.getElementById('selectId').value;
							//var options = document.getElementById('selectId').options;
							var idxSelected = parseInt(document.getElementById('selectId').value);
							//var commandDisplayName = options[idxSelected].innerText;
							//for (var i = 0; i < $scope.commands.length; i++) {
							//    if ($scope.commands[i].commandDescription === commandDisplayName) {
							//        //alert ('found match:'+$scope.commands[i].commandDescription);
							//        var finalUrl = $scope.commands[i].commandUrl.replace(/%s/, this.commandFromInputBox);
							//        // alert ('finalUrl:'+finalUrl);
							//        $window.location.href = finalUrl;
							//    }
							//}
							var selectedCommandUrl = $scope.commands[idxSelected].commandUrl;
							//var finalUrl = selectedCommandUrl.replace(/%s/, this.commandFromInputBox); // change %s
							var finalUrl = selectedCommandUrl.replace(/%s/, $scope.currentValueAfterBlurText); // change %s
							//alert('going for ['+finalUrl + ']');

							//finalUrl = finalUrl.replace(/^.*\)/, ''); // get rid of parens
							alert ('setting line 1266 finalUrl:' + finalUrl);
							$window.location.href = finalUrl;

							//$location.path('/')
							//$location.url('http://www.yahoo.com')
							//$window.location.href = '#/tab/category/1';
							//var target = angular.element('#textHKKH');
							//$scope.commandUrl = $scope.commands[idxSelected].commandUrl;
							//var idxSelected = parseInt(document.getElementById('selectId').value);
							//var selectedCommandUrl = $scope.commands[idxSelected].commandUrl;
							//isDirtySetFlag_updateScopeStateFlag_SaveDiffsOption(true);
							//$scope.$apply()
						} catch (err) {
							alert ('err in utdact:' + err);
						}


					};


					//var commandLastProcessedHash = {};
					//$scope.respondToKeyboardEvent = function(desc, keyCode)
					//{
					//    //u_.U_o.o ('in $scope.respondToKeyboardEvent() desc ['+ desc + ']');
					//    // 0 idInput0TypeText
					//    // 1 idMediumEditor
					//    // 2 parent like CKE
					//
					//    // 0 text input
					//    var xText = null;
					//    var xHtml = null;
					//    var xValue = null;
					//    var bShouldIcommand = false;
					//
					//
					//    // decide for each input type whether to search
					//    var xHtmlStripped = null;
					//    //alert('in switchscope.whichInputIsInFocus');
					//    alert('$scope.whichInputIsInFocus()');
					//
					//    switch($scope.whichInputIsInFocus())
					//    {
					//        case $scope.ns.Input.INPUT_0_TEXT:
					//            alert ('$scope.ns.Input.INPUT_0_TEXT');
					//
					//            xText = document.getElementById('idInput0TypeText').innerText;
					//            xHtml = document.getElementById('idInput0TypeText').innerHTML;
					//            xValue = document.getElementById('idInput0TypeText').value;
					//            u_.U_o.o ('in 1 respondToKeyboardEventkey 1 xText:' + xText);
					//            u_.U_o.o ('in 2 respondToKeyboardEventkey 2 xHtml:' + xHtml);
					//            u_.U_o.o ('in 3 respondToKeyboardEventkey 3 xValue:' + xValue);
					//            //u_.U_o.o ('keyCode:' + keyCode);
					//            //u_.U_o.o ('keyCode:' + keyCode);
					//
					//            if (keyCode === 13)
					//            {
					//                //alert ('bShouldIcommand based on keyCode === 13 enter key ');
					//                bShouldIcommand = true;
					//            }
					//            else if (xValue.charCodeAt(xValue.length-1) === 32)
					//            {
					//                alert ('xValue.charCodeAt(xValue.length-1) === 32');
					//                if (xValue.trim().charCodeAt(xValue.trim().length-1) === 87)
					//                {
					//                    //u_.U_o.o ('bShouldIcommand based on space and lastchar 87 big w');
					//                    bShouldIcommand = true;
					//                }
					//                else if (xValue.trim().charCodeAt(xValue.trim().length-1) === 119)
					//                {
					//                    //u_.U_o.o ('bShouldIcommand based on space and lastchar 119 little w');
					//                    bShouldIcommand = true;
					//                }
					//                //else if (document.getElementById('idcheckbox_dynamicSearch').checked)
					//                else if ($scope.dynamicSearch)
					//                {
					//                    //u_.U_o.o ('bShouldIcommand based on space and idcheckbox_dynamicSearch checked');
					//                    bShouldIcommand = true;
					//                }
					//
					//
					//            }
					//            break;
					//
					//        case $scope.ns.Input.INPUT_1_MEDIUM:
					//            alert ('Input.INPUT_1_MEDIUM');
					//            xText = $scope.mmmm.element.innerText;
					//            xHtml = $scope.mmmm.element.innerHTML;
					//            xValue = $scope.mmmm.element.innerText;
					//            u_.U_o.o ('xHtml [' + xHtml + ']');
					//            //xHtmlStripped = xHtml.replace('<p>','');
					//            //xHtmlStripped = xHtmlStripped.replace('</p>','');
					//            //xHtmlStripped = xHtmlStripped.trim();
					//            //if (xHtmlStripped.endsWith('&nbsp;')) {
					//                //bShouldIcommand = true;
					//                //u_.U_o.o ('yes ends with space');
					//            //}
					//
					//            //if (xValue.charCodeAt(xValue.length-1) === 32)
					//            //{
					//            //    if (xValue.trim().charCodeAt(xValue.trim().length-1) === 87)
					//            //    {
					//            //        //u_.U_o.o ('bShouldIcommand based on space and lastchar 87 big w');
					//            //        bShouldIcommand = true;
					//            //    }
					//            //    else if (xValue.trim().charCodeAt(xValue.trim().length-1) === 119)
					//            //    {
					//            //        //u_.U_o.o ('bShouldIcommand based on space and lastchar 119 little w');
					//            //        bShouldIcommand = true;
					//            //    }
					//            //    else if (document.getElementById('idcheckbox_dynamicSearch').checked)
					//            //    {
					//            //        //u_.U_o.o ('bShouldIcommand based on space and idcheckbox_dynamicSearch checked');
					//            //        bShouldIcommand = true;
					//            //    }
					//            //}
					//
					//
					//
					//
					//
					//
					//            //else
					//            ///alert ('no search');
					//            break;
					//
					//        case $scope.ns.Input.INPUT_2_CKE:
					//            alert ('$scope.ns.Input.INPUT_2_CKE');
					//            xText= CKEDITOR.instances.idCkeEditorTextarea.document.getBody().getText();
					//            xHtml = CKEDITOR.instances.idCkeEditorTextarea.getData();
					//            xValue = CKEDITOR.instances.idCkeEditorTextarea.document.getBody().getText();
					//            xHtmlStripped = xHtml.replace('<p>','');
					//            xHtmlStripped = xHtmlStripped.replace('</p>','');
					//            xHtmlStripped = xHtmlStripped.trim();
					//            if (xHtmlStripped.endsWith('&nbsp;')) {
					//                bShouldIcommand = true;
					//                u_.U_o.o ('ske editor ends with nbsp');
					//                //alert ('yes search');
					//            }
					//            break;
					//
					//        default:
					//            alert ('era - bad input resolution');
					//    }
					//    //alert ('xText [' + xText + ']');
					//    //alert ('xHtml [' + xHtml + ']');
					//    //alert ('xHtmlStripped [' + xHtmlStripped + ']');
					//    //alert ('xText [' + xText[xText.length-1] + ']')
					//    //alert ('xText -1 [' + xText.charCodeAt(xText.length-1) + ']');
					//    //alert ('xText -2 [' + xText.charCodeAt(xText.length-2) + ']');
					//    //alert ('xText -3 [' + xText.charCodeAt(xText.length-3) + ']');
					//    //window.document.title = 'jp2 - '+xText; // not jpro:
					//
					//    //xText = xText.trim();
					//    //xHtml = xHtml.trim();
					//    //xValue = xValue.trim();
					//
					//    // was this same command last processed within the last 1/x second
					//
					//    if (bShouldIcommand)
					//    {
					//        // if not a sup command
					//        u_.U_o.o ('1 set search xValue:'+ xValue);
					//        // hbk 1505
					//        $location.search('q', xValue.trim());
					//        u_.U_o.o ('2 set search xValue:'+ xValue);
					//        u_.U_o.o ('######## in bShouldIcommand');
					//        var skipThisCommandAlreadProcessed = false;
					//        var timeLastEncountered = commandLastProcessedHash[xText];
					//        if (timeLastEncountered && (UtilDate.getTimeInMillis()-timeLastEncountered) < 200) {
					//            skipThisCommandAlreadProcessed = true;
					//            //u_.U_o.o ('skipping command too quick');
					//        }
					//        commandLastProcessedHash[xText] = UtilDate.getTimeInMillis();
					//
					//        //alert ('yes need to process command');
					//        if (!skipThisCommandAlreadProcessed) {
					//            u_.U_o.o ('############ not skipping');
					//            $scope.processCommand('CLIENT JS line 1383', xText, xHtml, xValue, callbackCommand);
					//        }
					//    }
					//    //else {
					//    //    //alert ('no need to process command');
					//    //}
					//
					//    //alert ('document.activeElement.id:' + document.activeElement.id + ', parent:' + document.activeElement.parentElement.id);
					//    //alert ('document.activeElement.parentElement.id:' + document.activeElement.parentElement.id);
					//}; // respondtokeyboardevent

					$scope.name = 'Whirled';

					$scope.areThereChanges = false;
					//
					//$scope.$on('$destroy', function() {
					//    window.onbeforeunload = undefined;
					//});
					//$scope.$on('$locationChangeStart', function(event, next, current) {
					//    if(!confirm('Are you sure you want to leave this page?')) {
					//        event.preventDefault();
					//    }
					//});
					//
					//
					var confirmExit = function ()
					{
						if (isDirtySetFlag_updateScopeStateFlag_SaveDiffsOption(false))
							return 'Your changes will be lost.  Are you sure you want to exit this page?';
					};
					window.onbeforeunload = confirmExit;


					$scope.alignAnUstodoWithUstodoHtmlByIndex = function(i) {
						var myEl = angular.element( document.querySelector( '#ustodorow' + i ) );
						$scope.ustodos[i].html = myEl[0].innerHTML;
						$scope.ustodos[i].text = myEl[0].innerText;
						$scope.ustodos[i].html = myEl[0].innerHTML;

						$scope.ustodos[i].$update(function() {
							console.log ('SAVED !!! ' + $scope.ustodos[i].html);
						}, function(errorResponse) {
							$scope.error = errorResponse.data.message;
							console.log ('ERROR ON SAVE !!! '  + $scope.ustodos[i].html);
						});
					};

					{
						//Shift - 16
						//Ctrl - 17
						//Alt - 18
						//u_.U_o.o ('reinit window.keyStates.keyStateShiftDown');
						window.keyStates = {};
						window.keyStates.keyStateShiftDown = false;
						window.keyStates.keyStateCtrlDown = false;
						window.keyStates.keyStateAltDown = false;

						document.addEventListener('keydown', function(evt) {
							var e = window.event || evt;
							var key = e.which || e.keyCode;
							//u_.U_o.o ('keydown:' + key );
							//u_.U_o.o ('turn on shift');
							if (16 === key) {
								window.keyStates.keyStateShiftDown = true;
							} else if (17 === key) {
								window.keyStates.keyStateCtrlDown = true;
							} else if (18 === key) {
								window.keyStates.keyStateAltDown = true;
							}
						}, false);

						document.addEventListener('keyup', function(evt) {
							var e = window.event || evt;
							var key = e.which || e.keyCode;
							//u_.U_o.o ('turn off shift');
							if (16 === key) {
								window.keyStates.keyStateShiftDown = false;
							} else if (17 === key) {
								window.keyStates.keyStateCtrlDown = false;
							} else if (18 === key) {
								window.keyStates.keyStateAltDown = false;
							}
						}, false);

						//u_.U_o.o ('reinit window.keyStates.keyStateShiftDown:' + window.keyStates.keyStateShiftDown);

					}


					// section_svrcalls
					//.----------------. .----------------. .----------------.   .----------------. .----------------. .----------------. .----------------. .----------------.
					//| .--------------. | .--------------. | .--------------. | | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. |
					//| |    _______   | | | ____   ____  | | |  _______     | | | |     ______   | | |      __      | | |   _____      | | |   _____      | | |    _______   | |
					//| |   /  ___  |  | | ||_  _| |_  _| | | | |_   __ \    | | | |   .' ___  |  | | |     /  \     | | |  |_   _|     | | |  |_   _|     | | |   /  ___  |  | |
					//| |  |  (__ \_|  | | |  \ \   / /   | | |   | |__) |   | | | |  / .'   \_|  | | |    / /\ \    | | |    | |       | | |    | |       | | |  |  (__ \_|  | |
					//| |   '.___`-.   | | |   \ \ / /    | | |   |  __ /    | | | |  | |         | | |   / ____ \   | | |    | |   _   | | |    | |   _   | | |   '.___`-.   | |
					//| |  |`\____) |  | | |    \ ' /     | | |  _| |  \ \_  | | | |  \ `.___.'\  | | | _/ /    \ \_ | | |   _| |__/ |  | | |   _| |__/ |  | | |  |`\____) |  | |
					//| |  |_______.'  | | |     \_/      | | | |____| |___| | | | |   `._____.'  | | ||____|  |____|| | |  |________|  | | |  |________|  | | |  |_______.'  | |
					//| |              | | |              | | |              | | | |              | | |              | | |              | | |              | | |              | |
					//| '--------------' | '--------------' | '--------------' | | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' |
					//'----------------' '----------------' '----------------'   '----------------' '----------------' '----------------' '----------------' '----------------'
					$scope.saveUstodoGiven = function(ustodo, i)
					{
						alert('in saveUstodoGiven');
						var myEl = angular.element(document.querySelector('#ustodorow' + i));
						ustodo.html = myEl[0].innerHTML;
						ustodo.text = myEl[0].innerText;
						ustodo.datelastmod = new Date();


						console.log('SAVED1 !!! ustodo.html [' + ustodo.html);
						console.log('SAVED2 !!! ustodo.text [' + ustodo.text);
						console.log('SAVED3 !!! ustodo.json [' + ustodo.json);
						console.log('SAVED4 !!! ustodo.jsonx [' + ustodo.jsonx);
						ustodo.$update(function () {
							alert('SAVED OK !!! ');
						}, function (errorResponse) {
							$scope.error = errorResponse.data.message;
							console.log('ERROR ON SAVE !!! ' + ustodo.html);
						});
					};






					// has any row changed
					var callCnt_isDirty = 0;
					var time_last_save = 0;
					var isDirtySetFlag_updateScopeStateFlag_SaveDiffsOption = function (saveDiffs)
					{
						//if (saveDiffs)
						//alert(' start save ');
						callCnt_isDirty++;
						$scope.areThereChanges = false;
						for (var i = 0; i < $scope.ustodos.length; i++) {
							//for (var i = 0; i < 1; i++) {
							//console.log ('ustodo checking dirty and saving $scope.ustodos.length:'
							//    + $scope.ustodos.length);
							// angular getelement
							//console.log ('testing dirty on item [' + i + '] html [' + $scope.ustodos[i].html + ']');
							//console.log ('has inner html [' + myEl[0].innerHTML + ']');

							//'ustodorow1'
							var myEl = angular.element( document.querySelector( '#ustodorow' + i ) );
							//console.log (i + '. @@@@@@@@@@@@@@@@ checking for change $scope.areThereChanges:' + $scope.areThereChanges);
							var anyChangeThisRow = false; // creates race condition for a microsecond, user could lose edit - real ulikely
							if (myEl[0] !== undefined) {
								anyChangeThisRow = ($scope.ustodos[i].html !== myEl[0].innerHTML);
								if (anyChangeThisRow) {
									//console.log(i + '. A changed  [' + $scope.ustodos[i].html + ']');
									//console.log(i + '. A vs inner [' + myEl[0].innerHTML + ']');
									if (saveDiffs)
									{
										$scope.ustodos[i].html = myEl[0].innerHTML;
										//console.log(i + '. B changed  [' + $scope.ustodos[i].html + ']');
										//console.log(i + '. B vs inner [' + myEl[0].innerHTML + ']');
										//console.log(i + '. B id changed  [' + $scope.ustodos[i]._id+ ']');

										//saveOneUstodo($scope.ustodos[i]);

										// ends up in C:\utd\150719utdG \app\controllers\ustodos.server. controller.js
										// .exports.update
									}
									$scope.areThereChanges = true;
									//name = 'll'+ $scope.areThereChanges;
									if (!saveDiffs) // for non save, only need one
										break;
								}
								//alert ('loop done');
							}
							// diff here
						}
						//console.log (callCnt_isDirty + '. exiting isDirty returning with $scope.areThereChanges:'+ $scope.areThereChanges);
					};


					// every x minutes timer - might be needed for
					//self.addEventListener('message', function(evt) {
					//    var gateway = new XMLHttpRequest();
					//    var intie = setInterval(function() {
					//        gateway.open('GET',evt.data.load_url,true);
					//        gateway.send();
					//        gateway.onreadystatechange = function() {
					//            if (gateway.readyState==4 && gateway.status==200)
					//                self.postMessage(gateway.responseText);
					//        }
					//    }, 300000); //every 5 minutes
					//}, false);

					$scope.UtilDate = UtilDate;

					//$scope.testfn = function(dateStrFromMongo)
					//{
					//    console.log('in testfn');
					//    return UtilDate.dateFromMongoString(dateStrFromMongo);
					//}
					/**
					 * this includes an example of how to dynamically insert an iframe
					 */
					$scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent)
					{
						if (CONST_SHOW_INIT_ALERTS)
							alert('inONLOADINIT#A ngRepeatFinished');


						//
						//alert("22222222 $([contenteditable=true].length" + $("[contenteditable='true']").length);
						//$("[contenteditable='true']").bind("keydown", function(event)
						//{
						//	// var target = $(event.target);
						//	if(event.keyCode === 13 || event.keyCode === 27)
						//	{
						//		$('<div contenteditable="true"></div>').appendTo('body').focus().remove();
						//		alert ('save here');
						//	}
						//});





					});


					//$scope.testScopeAccess = UcHtmlDocManipulate.testScopeAccess;
					//u_.UtilError.emitError('xxxe');
					//Uutil2_.Dt_u_.U_o.dt_o2b('calling dt_o2b1 a');
					//Uutil2_.Dt_u_.U_o.uu_a('calling uu_a');
					//Uutil2_.Dt_u_.U_o.o('calling o');
					//Uutil2_.Dt_u_.U_o.e('calling e');
					//Uutil2_.Dt_u_.U_o.x('calling o');
					$scope.mouseOut = function(fn) {
						//alert('in mouseout');
						//document.getElementById('idDivCEOmniBox').style.height = '24px';
							//document.getElementById('idDivCEOmniBox').style.display = 'compact';

					}

					$scope.idDivCEOmniBox_eventHandler_ngMouseover = function(id)
					{
						//alert('idDivCEOmniBox_eventHandler_ngMouseover:');
						//document.getElementById('idDivCEOmniBox').style.maxHeight = 'none';
						//document.getElementById('idDivCEOmniBox').style.height = 'auto';
						//document.getElementById('idDivCEOmniBox').style.display = 'block';

						//alert('idDivCEOmniBox_eventHandler_ngMouseover:' + id);

					}

					$scope.clearOmniBox = function() {
						document.getElementById('idDivCEOmniBox').innerHTML = ''
					}
					// hhkk testbutton
					$scope.testButton= function(fn)
					{
						//alert('in testbutton');
						try
						{
							u_.U_o.o('hi sister!');
							//u_.U_o.a('hi sister!');

							if (false) {
								document.getElementById('idTextareaUtdLog').style.resize = "myFunction()";
								document.getElementById('idDivCEOmniBox').style.resize = "myFunction()";
							}

							//document.getElementById("idDivCEOmniBox").innerHTML = 'testbutton';

							if (false) // test $scope.testConvertHtmltoText();
							{
								// works $('div[contenteditable="true"]').trigger('focus');
								$scope.testConvertHtmltoText();
							}


							if (false) // alldots alternate
							{
								//if (text.length % 2 === 1)
								//{
								document.getElementById('hkheader').style.display = 'block';
								document.getElementById('hkidtoolbars').style.display = 'block';
								document.getElementById('hkfooter').style.display = 'block';
								//					}
								//					else
								//					{
								//						document.getElementById('hkheader').style.display = 'none';
								//						document.getElementById('hkidtoolbars').style.display = 'none';
								//						document.getElementById('hkfooter').style.display = 'none';
								////					}

							}


							if (false) // convert div to iframe
							{
								//idPerRowIframeTop

								//alert('pre');
								//console.log(__dirname); // not on client
								//console.log(__filename); // not on client
								//alert('post');

								//	alert('document.getElementById(testIframeReplace).innerHTML :' + document.getElementById('testIframeReplace').innerHTML);

								//alert('$(#testIframeReplace) :' + $('#testIframeReplace') );
								//alert('$(#testIframeReplace).val() :' + $('#testIframeReplace').val() );
								//$('#testIframeReplace').html('your iframe code goes here');

								//$('#testIframeReplace').replaceWith('<iframe><html><head></head><body>dddddddddddd' +
								//		 '</body></html></iframe>');

								//var div = document.getElementById("testIframeReplace");
								//alert('div.innerHTML:' + div.innerHTML);
								//var iframe = document.createElement("iframe");
								//document.body.appendChild(iframe);
								//iframe.innerHTML = div.innerHTML;
								//div.parentNode.removeChild(div);

								// WORKS!
								//var divIdToReplace = 'testIframeReplace';
								//var newIframeId = 'newIframeIdx';
								//var savDivInnerHtml = document.getElementById(divIdToReplace).innerHTML;

								//alert('at utilclient');

								u_.UcHtmlDocManipulate.convertElementToIframeById(
									'idDivCumIframe', 'idDivCumIframePostTransform', true, "this is a new iframe with id idDivCumIframePostTransform", 80, 300);

								//$('#' + divIdToReplace).html('<iframe id=\'' + newIframeId + '\'><html><head></head><body></body></html></iframe>');
								//document.getElementById(newIframeId).contentDocument.write(savDivInnerHtml);
							}


							if (false) {
								try {
									u_.U_o.o('using front door');
									//u_.U_o.o('using back door');
									//throw "erra"
								} catch (err) {
									u_.UtilError.emitError('r', err);
								}

								//
								//alert('tiptop');wwwwwwwwwwwwwww
								//wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwu_.UtilError.emitError('U_error2.o from singlepage-ustodos.client.controller.js'); //
								//uu_.UtilError.emitError('xxxe');
								//Uutil2_.Dt_u_.U_o.dt_o2b('calling dt_o2b2');

								//uut_O3.o ('called uut_O3 inside $scope.testButton in singlepage-ustodos.client.controller.js');
								//var s = Uutil.UcHtmlDocManipulate.testScopeAccess();

								//Uutil.UtilError.emitError('testerror');
								//U_error.testWithinEmitError('testerror');

								//$scope.u_.U_o.o ('in testbutton2');
							}

							if (false) // set style for contenteditable focus
							{
								$("[contenteditable='true']").on("focus", function () {
									$(".editable").toggleClass("focus");
								});

								$("[contenteditable='true']").on("blur", function () {
									$(".editable").toggleClass("focus");
								});
							}


							if (false) {

								alert(window.clipboardData.getData('Text'));
							}

							if (false) {
								$scope.ustodosFiltered[0].html = 'hi mom';
							}

							if (false) {
								//
								alert('made it to start');
								//var html_string= "contenthbk";
								//document.getElementById('idPerRowIframeTop').src = "data:text/html;charset=utf-8," + escape(html_string+' TOP');
								////document.getElementById('idPerRowIframe0').src = "data:text/html;charset=utf-8," + escape(html_string +' 0');
								////document.getElementById('idPerRowIframeBottom').src = "data:text/html;charset=utf-8," + escape(html_string +' BOTTOM');
								//document.getElementById('idPerRowIframe0').src = "data:text/html;charset=utf-8," + escape(html_string +' BOTTOM');
								//alert("made it to end ");
							}


							if (false) {
								//var makeThisNotContentEditables = document.getElementsByClassName("makeThisNotContentEditable");
								//alert('makeThisNotContentEditables.length:' + makeThisNotContentEditables.length);
								//makeThisNotContentEditables.forEach (function (y) {
								//	y.contentEditable = false;
								//	alert('set one');
								//});
								var arrelems = $('.makeThisNotContentEditable');
								arrelems.each(function (y) {
									arrelems[y].contentEditable = false;
									alert('set one:' + arrelems[y].contentEditable);
								});
							}
							//if (true) // WORKS YAY - adds to location 0 in the list - then confirms saved when done
							//{
							//	var mycopy = jQuery.extend(true, {}, $scope.ustodos[0]);
							//	//no work var copyUnderscore = _($scope.ustodos[0]).clone();
							//	//alert ('mycopy:' + mycopy);
							//	//var x = $scope.ustodos
							//	$scope.ustodos.splice(0, 0, mycopy);
							//}

							//if (true) {
							//	document.getElementById('HKTEST').style['background-color'] = 'blue';
							//}

							//if (true) {
							//	alert ('pre fade');
							//	$scope.testNLBfadeBg();
							//	alert ('post fade');
							//}

							//alert ('in keyup $scope.getTextHtmlAndValueInShowingEditor()'+$scope.getTextHtmlAndValueInShowingEditor());
							//CKEDITOR.instances.editor.destroy();

							//alert ('in testbutton');
							//if (true)    //
							//{
							//	var x = document.getElementById('topLevelTableRow1');
							//
							//	//x.
							//
							//	if (confirm('Do you want to convert this to text?'))
							//	{
							//		var foo = window.clipboardData.getData('Text');
							//		window.clipboardData.setData('Text', foo);
							//	} else
							//	{
							//		// Do nothing!
							//	}
							//
							//
							//}

							if (false) {
								var o = document.getElementById('idTinyMceTextArea');
								//alert('myCustomOnInit from mce o.ng-blur:' + o['ng-blur']);
								alert('myCustomOnInit from mce o.style.display:' + o.style.display);
							}

							if (false) {
								alert('w:' + windowhk.width() + ', x ht:' + windowhk.height());
							}

							if (false)    // works to set text as mce window // TEST changing one of the text rows to a textarea
							{
								alert('x:');
								////var x = document.getElementById('topLevelTableRow1');
								////alert ('x:' + x);
								////alert ('x.firstElementChild.innerHTML:' + x.firstElementChild.innerHTML);
								////alert ('x.firstChild.innerHTML:' + x.firstChild.innerHTML);
								////x.innerHTML= '<textarea id="hktestTinyMceTextArea"></textarea>';
								//
								////<textarea ng-blur="eventBlur3mce()" id="idTinyMceTextArea"></textarea>
								//
								////$scope.localTinyMceInit();
								//// hbkeak tinymce.execCommand('mceFocus',false,'idTinyMceTextArea');
								//setTimeout(function(){ tinymce.execCommand('mceFocus',false,'idTinyMceTextArea') }, 100); // hbklrbb12
								////setTimeout(function(){ alert('done') }, 100); // hbklrbb12
							}

							if (false) {
								//alert ('document.getElementById(checkBoxAll).value = :' + document.getElementById('checkBoxAll').checked);
								document.getElementById('checkBoxAll').checked = false;
							}

							if (false) {
								//document.getElementById('mceu_34').style.visibility='hidden';
								if (document.getElementById('mceu_57-body').style.visibility === 'hidden')
									document.getElementById('mceu_57-body').style.visibility = 'visible';
								else
									document.getElementById('mceu_57-body').style.visibility = 'hidden';

								//if (document.getElementById('mceu_58-body').style.visibility==='hidden')
								//	document.getElementById('mceu_58-body').style.visibility='visible';
								//else
								//	document.getElementById('mceu_58-body').style.visibility='hidden';

								//if (document.getElementById('mceu_34').style.display==='none')
								//	document.getElementById('mceu_34').style.display='inline'
								//else
								//	document.getElementById('mceu_34').style.display='none'
								//


								//var ed = tinymce.activeEditor;
								//ed.addButton('mybutton2', {
                                //	//type: 'menubutton',
                                //	//text: 'My button',
                                //	//id: 'mcebuttonid2',
                                //	image: '/img/EditPencil.png',
                                //	icon: false,
                                //	onclick: function() {ed.insertContent('Menu item 0')},
                                //	//menu: [
                                //	//	{text: 'Menu item 1', onclick: function() {ed.insertContent('Menu item 1');}},
                                //	//	{text: 'Menu item 2', onclick: function() {ed.insertContent('Menu item 2');}}
                                //	//]
                                //});
                                //
                                //tinymce.execCommand("mceRepaint");
                                //alert ('done repaint');
                            }


                            if (false) {
                                var documentx = document.getElementById('mcebuttonid2').firstElementChild.firstElementChild;
                                alert('UtilClassz.getClass(documentx):' + UtilClassz.getClass(documentx));
                                //var documentx = document.getElementById('mcebuttonid2').children.children;
                                //<div id="mcebuttonid2" class="mce-widget mce-btn mce-last" tabindex="-1" aria-labelledby="mcebuttonid2"><button role="presentation" type="button" tabindex="-1"><i class="mce-ico mce-i-none" style="background-image: url('/img/EditPencilBnW.png')"></i></button></div>
                                //	<button role="presentation" type="button" tabindex="-1"><i class="mce-ico mce-i-none" style="background-image: url('/img/EditPencilBnW.png')"></i></button>
                                //    <i class="mce-ico mce-i-none" style="background-image: url('/img/EditPencilBnW.png')"></i>				}
                                //alert ("documentx" + documentx)
                                alert('documentx.style:' + documentx.style);
                                alert('documentx.style.height:' + documentx.style.height);
                                alert('documentx.style.length:' + documentx.style.length);
                                alert('documentx.style.item(0):' + documentx.style.item(0));
                                alert('documentx.style.item(4):' + documentx.style.item(4));
                                alert('documentx.style.getParentRule:' + documentx.style.getParentRule());
                                alert('documentx.style.getLength():' + documentx.style.getLength());
                                alert('documentx.style.getCssText():' + documentx.style.getCssText());
                                alert('UtilClassz.getClass(documentx.style):' + UtilClassz.getClass(documentx.style));
                                //getProperties is not a function alert ('UtilClassz.getClass(documentx.style.getProperties()):' + documentx.style.getProperties())
                                alert('UtilClassz.getClass(documentx.style.getOwnPropertyNames()):' + documentx.style.getOwnPropertyNames());
                                alert('documentx.className:' + documentx.className);
                                alert('documentx.style:' + documentx.style);
                                //alert ('documentx.style.background-image' + documentx.style.background-image);
                                alert('documentx.style.cssText:' + documentx.style.cssText);
                                alert('documentx.style.getPropertyValue(background-image):' + documentx.style.getPropertyValue('background-image'));
                                //alert ('documentx.style.getPropertyCSSValue(background-image)' + documentx.style.getPropertyCSSValue('background-image'));
                            }
                            if (false) {
                                document.getElementById('imageIdRedPEncil').style.visibility = 'visible';
//alert('pre:' + angular.element( document.querySelector( '#imageIdRedPEncilbnw' ) ).src);
                                //angular.element( document.querySelector( '#imageIdRedPEncilbnw' ) ).src = '/img/ClearText.png';
                                //alert('post:' + angular.element( document.querySelector( '#imageIdRedPEncilbnw' ) ).src);

                                //alert('pre:' + document.getElementById( 'imageIdRedPEncilbnw' ).src);
                                //alert('post:' + document.getElementById( 'imageIdRedPEncilbnw' ).src);

                                //angular.element( document.querySelector( '#imageIdRedPEncilbnw' ) ).width = '15';
//					alert ('onload - set width to:'+angular.element( document.querySelector( '#imageIdRedPEncilbnw' ) ).width);
                                //alert ('onload - set width to:'+document.getElementById('imageIdRedPEncilbnw').width);
                                //alert ('onload - set style.width to:'+document.getElementById('imageIdRedPEncilbnw').style.width);
                                //document.getElementById('imageIdRedPEncilbnw').width = 300;
                                //document.getElementById('imageIdRedPEncil').style.visibility='visible';
                                //document.getElementById( 'imageIdRedPEncilbnw' ).src = '/img/ClearText.png';
                                //document.getElementById( 'imageIdRedPEncil' ).src = '/img/ClearText.png';

                            }
                            if (false) {
                                SppSvc.setModelDirty(!SppSvc.getModelDirty('singlepage'));
                            }

                            if (false) // green fade text
                            {
                                u_.NLB_bgFade.NLBfadeBg('numberWrapForFade1', 'green', '#FFFFFF', '1500');
                            }

                            if (false) {
                                var xText = tinyMCE.activeEditor.getContent({format: 'text'});
                                var xHtml = tinyMCE.activeEditor.getContent();
                                alert('xHtml:' + xHtml);
                            }

                            if (false)
                                document.getElementById('idInputTextFilter').value = ' hi mom';

                            if (false)
                                alert('$scope.dynamicSearch:' + $scope.dynamicSearch);

                            // TEST WORKED?
                            //if (false) {
                            //    document.getElementsByClassName('cke_top')[0].style.display = 'none';
                            //    document.getElementsByClassName('cke_bottom')[0].style.display = 'none';
                            //    CKEDITOR.instances.idCkeEditorTextarea.execCommand('maximize');
                            //    setTimeout(function(){ CKEDITOR.instances.idCkeEditorTextarea.execCommand('minimize'); }, 2000);
                            //}

                            //CKEDITOR.instances.idCkeEditorTextarea.resize('100%',height);

                            // WORKS $scope.getTextHtmlAndValueInShowingEditor();
                            //var xText = tinyMCE.getInstanceById('idTinyMceTextArea').getContent({format: 'text'});
                            //var xHtml= tinyMCE.getInstanceById('idTinyMceTextArea').getContent();
                            //alert ('got mce content xText:' + xText)
                            //alert ('got mce content xHtml:' + xHtml)
                            //tinyMCE.getInstanceById('idTinyMceTextArea').setContent('hi mom');


                            //alert('in testbutton');
                            //document.getElementById('ustodorow0').blur();
                            //$window.location.href = 'http://www.google.com/search?q=';
                            //alert ('in eventClickedTheAnimals line 542');
                            //$window.location.href = 'http://jpro.co?q=*';
                            //$window.location.href = 'http://www.google.com/search?q=';
                            //window.location.href = 'sdsdf';
                            //$location.path('/sdsdf').replace();

                            //$location.path('/')
                            //$location.url('http://www.yahoo.com')
                            //$window.location.href = '#/tab/category/1';
                            //var target = angular.element('#textHKKH');
                            //$scope.commandUrl = $scope.commands[idxSelected].commandUrl;
                            //var idxSelected = parseInt(document.getElementById('selectId').value);
                            //var selectedCommandUrl = $scope.commands[idxSelected].commandUrl;
                            //isDirtySetFlag_updateScopeStateFlag_SaveDiffsOption(true);

                            //$location.search('hk', 'sdfsdf');
                        } catch (e) {
							u_.U_o.oerr('error in testbutton', e)
                        }

					};

					$scope.authentication = Authentication;


					//$scope.htmlString = '<a ng-href='http://hkon.net' target='_blank'>hkon.net</a>';
					$scope.htmlString = '<ul><li>render me please</li></ul>';
					//this.htmlString = 'hhhhhhhhhhhhhh';
					//$scope.htmlString = $sce.trustAsHtml($scope.htmlString);
					//

					//$scope.posts = [{url:'http://u2d.co', text:'u2d'},{url:'http://ibm.com', text:'ibm'}];

					// test
					$scope.showClient = function(client) {
						alert('in showclient line 1664');

						$location.path('#/user/' + client.tagid);
					};

					$scope.hklinkycallcount = 0;
					$scope.hklinky= function(client) {
						//alert ('in  hklinky');
						console.log ('in hklinky ');
						$scope.hklinkycallcount++;
						//var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/i;
						//return 'hklinkyrtn:' + client.replace(exp,'<a href='$1'>$1</a>');
						return 'hklinkyrtn:' + client;
					};



					// Remove existing Ustodo
					$scope.remove = function(ustodo) {
						console.log ('2 in ustodos.client. controller REMOVE');
						if ( ustodo ) {
							ustodo.$remove();

							for (var i in $scope.ustodos) {
								if ($scope.ustodos [i] === ustodo) {
									$scope.ustodos.splice(i, 1);
								}
							}
						} else {
							$scope.ustodo.$remove(function() {
								alert ('in 2line 1719');
								$location.path('ustodos');
							});
						}
					};

					// Update existing Ustodo
					$scope.update = function() {
						console.log ('3 in ustodos.client. controller UPDATE');
						var ustodo = $scope.ustodo;

						ustodo.$update(function() {
							alert ('in 3 line 1731');
							$location.path('ustodos/' + ustodo._id);
						}, function(errorResponse) {
							$scope.error = errorResponse.data.message;
						});
					};

					//var callbackhkhk_find = function()
					//{
					//	//alert ('in callbackhkhk_find');
					//	$scope.setUstodosFiltered('caller1_find', $scope.ustodos);
					//};
					//
					$scope.ustodosQueryCommon = function (caller, jsonquery, callback) {
						// 1 corresponds to exports.list2 in ustodos.server. controller.js
						// see also app.route('/ustodos').get in ustodos.server.routes.js
						//alert ('xxxxxxxxxxxxx in ustodosQueryCommon caller:' + caller);
						//u_.U_o.o('gg:' + UtilHrefThisText.testUtilHrefThisText());
						//alert('hh:' + UtilHrefThisText.testUtilHrefThisText());
						return Ustodos.query(jsonquery, callback); // Ustodosis a "resource"  // maps to a get? in ustodos.server.routes.js? is that a RESOURCE behavior?
					} ;

					// Find a list of Ustodos
					$scope.find = function() {
						alert ('4 in ustodos.client. controller FIND');
						//getProperties('props Ustodos:', Ustodos);

						//alert (' in scope.find');
						//$scope.ustodos = Ustodos. query(); //original
						//returns a single not array, causing a fail $scope.ustodos = Ustodos. query({ustodoId: '54929d5d1d3df384165f4fa2'});
						// seems to work but returns all? $scope.ustodos = Ustodos. query({name: 'ggggg'});
						//$scope.ustodos = Ustodos. query({name: 'ggggg'}); // Works!

						// 2 corresponds to exports.list2 in ustodos.server. controller.js
						//$scope.ustodos = $scope.ustodosQueryCommon('caller$scope.find', {text: ''}, callbackhkhk_find);
						// http://docs.mongodb.org/manual/reference/operator/query/and/
						// http://docs.mongodb.org/manual/reference/operator/query/not/
						alert ('1 in this funny query hbkx pre len:' + $scope.ustodos.length);
						//see also
						//$scope.ustodos = $scope.ustodosQueryCommon('caller_$scope.processCommand_NotWrite',
						//	{q: xTextCommandRemoved.trim()

						//$scope.ustodos = $scope.ustodosQueryCommon('caller$scope.find', {$and: [{text: 'xx'}, {$not:{deleted: true}}]}, callbackhkhk_find);
						//$scope.ustodos = $scope.ustodosQueryCommon('caller$scope.find', {$and: [{text: 'x'}, {$not:{text: 'y'}}]}, callbackhkhk_find);
						$scope.ustodosQueryCommon('caller$scope.find', {text: ''}, callbackFromQuery);

						alert ('2 in this funny query hbkx pos len:' + $scope.ustodos.length);


						//alert ('____ $scope.ustodos.length:' + $scope.ustodos.length);

						//$scope.ustodos = Ustodos. query({ustodoId: '54929d5d1d3df384165f4fa2'});
						//$scope.ustodos = Ustodos. query({ustodoId: '54929d5d1d3df384165f4fa2'});
						//$scope.ustodos = Ustodos. query({ustodoId: '54929d5d1d3df384165f4fa2'});
						//console.log ('in ustodos.client. controller FIND2 $scope.ustodos.length:' + $scope.ustodos.length);
						//console.log ('in ustodos.client. controller FIND2');

						//alert ('set commandsxx ');
						//{
						//alert('in ustodos.client. controller $scope.commands.length:' + $scope.commands.length);
						//};
						//$scope.commands = Commandsss.query();
						//alert ('in ustodos.client. controller $scope.commands.length:'+$scope.commands.length);


					};

					// Find existing Ustodo
					$scope.findOne = function() {
						console.log ('5 in ustodos.client. controller FINDONE');
						$scope.ustodo = Ustodos.get({ // Ustodos is a $resource I think - .query on it maps to routes in ustodos.server.routes.js
							// ORIGINAL A/B SPLIT
							ustodoId: $stateParams.ustodoId    // original
							//ustodoId: '54929d5d1d3df384165f4fa2'  // worked!!
							//name: /road/
							//name: 'as'
						});
					};

					// Search for new Ustodo (findlist)
					$scope.callCountSearch = 0;

					$scope.sayhi = function() {
						alert ('df');
					};


					// section_checkbox
					//.----------------. .----------------. .----------------. .----------------. .----------------. .----------------. .----------------. .----------------.
					//| .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. |
					//| |     ______   | | |  ____  ____  | | |  _________   | | |     ______   | | |  ___  ____   | | |   ______     | | |     ____     | | |  ____  ____  | |
					//| |   .' ___  |  | | | |_   ||   _| | | | |_   ___  |  | | |   .' ___  |  | | | |_  ||_  _|  | | |  |_   _ \    | | |   .'    `.   | | | |_  _||_  _| | |
					//| |  / .'   \_|  | | |   | |__| |   | | |   | |_  \_|  | | |  / .'   \_|  | | |   | |_/ /    | | |    | |_) |   | | |  /  .--.  \  | | |   \ \  / /   | |
					//| |  | |         | | |   |  __  |   | | |   |  _|  _   | | |  | |         | | |   |  __'.    | | |    |  __'.   | | |  | |    | |  | | |    > `' <    | |
					//| |  \ `.___.'\  | | |  _| |  | |_  | | |  _| |___/ |  | | |  \ `.___.'\  | | |  _| |  \ \_  | | |   _| |__) |  | | |  \  `--'  /  | | |  _/ /'`\ \_  | |
					//| |   `._____.'  | | | |____||____| | | | |_________|  | | |   `._____.'  | | | |____||____| | | |  |_______/   | | |   `.____.'   | | | |____||____| | |
					//| |              | | |              | | |              | | |              | | |              | | |              | | |              | | |              | |
					//| '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' |
					//'----------------' '----------------' '----------------' '----------------' '----------------' '----------------' '----------------' '----------------'



					$scope.lastChecked = null;
					$scope.checkBoxClickedToggleAll = function()
					{
						var checkboxFirst = document.getElementById('idcheckbox0');
						u_.U_o.assert (checkboxFirst);
						var areAllCbStatesSame = true;
						var checkboxFirstState = checkboxFirst.checked;

						var x = $('.chkbox');
						//u_.U_o.o ('x.length:' + x.length);
						// check if all are checked so it's just a toggle
						for (var i = 0; i < x.length; i++ )
						{
							//u_.U_o.o ('testing for cb index :' + 'idcheckbox'+i);
							if (document.getElementById('idcheckbox'+i).checked !== checkboxFirstState) {
								areAllCbStatesSame = false;
								break;
							}
						}
						if (areAllCbStatesSame)
						{
							for (var j = 0; j < x.length; j++ )
							{
								document.getElementById('idcheckbox'+j).checked = !checkboxFirstState;
							}
						}
						else // not all same, set all to T
						{
							for (var k = 0; k < x.length; k++ )
							{
								document.getElementById('idcheckbox'+k).checked = true;
							}
						}
						$scope.synchNumberCheckboxesChecked();

					}; // checkboxclickedToggleAll

					SppSvc.setSelectedItem(-1);

					$scope.synchNumberCheckboxesChecked = function() {
						//alert ('in synchNumberCheckboxesChecked ');
						try
						{ //
							var indexx = 0;
							// archetype prototype howto - iterate over all of a class
							$scope.numberCheckboxesChecked = 0;
							var $chkboxes = $('.chkbox');
							for (indexx = 0; indexx < $chkboxes.length; ++indexx)
							{
								//alert("indexx:" + indexx);
								if ($chkboxes[indexx].checked)
								{
									document.getElementById('idConentEditableRow'+indexx).style['background-color'] = '#FFFF99';
									$scope.numberCheckboxesChecked++;
								} else {
									document.getElementById('idConentEditableRow'+indexx).style['background-color'] = null;
								}

							}
						}
						catch(err)
						{
							alert ('error here');
							UtilError.emitError('error in synchNumberCheckboxesChecked()', err);
						}

					};


					$scope.checkBoxClickedSingle = function(j)
					{
						//alert ('========== $scope.state_delectedItem set to j:' + j);
						SppSvc.setSelectedItem(j);

						//alert ('in checkBoxClickedSingle j:' + j)  ;
						//var elem = angular.element(document.querySelector('#hktablespan'));

						//find('.classname'), assumes you already have the starting elem to search from
						//var checkboxes = angular.element(elem.querySelector('.chkbox'));

						//var checkboxes = angular.element('chkbox');
						//var checkboxes = angular.element.find('input');
						//var checkboxes = document.querySelector('input')
						//var checkboxes = angular.find('input');
						//$( 'p' ).find( 'span' )
						// http://stackoverflow.com/questions/659508/how-can-i-shift-select-multiple-checkboxes-like-gmail
						// http://www.informit.com/articles/article.aspx?p=2271482&seqNum=10
						//var checkboxes = jQuery('input');  // WORKS! as long as all.js has jquery line
						//var checkboxes = $('.chkbox');  // WORKS! as long as all.js has jquery line

						//alert ('checkboxes:' + checkboxes);

						//var $chkboxes = $('.chkbox');
						var thisCheckBox = document.getElementById('idcheckbox'+j);

						var $chkboxes = $('.chkbox');

						//if(!$scope.lastChecked) {

						//u_.U_o.o ('set $scope.lastChecked to:' + $scope.lastChecked.id);
						//}

						if( window.keyStates.keyStateShiftDown === true)
						{
							//alert ('yes window.keyStates.keyStateShiftDown');
							var start = $chkboxes.index(thisCheckBox);
							if ($scope.lastChecked)
							{
								var end = $chkboxes.index($scope.lastChecked);
								//alert('using lastchecked start [' + start + '] end [' + end + '] ');
								$chkboxes.slice(Math.min(start,end), Math.max(start,end)+ 1).prop('checked', $scope.lastChecked.checked);
								//alert('used lastchecked successfully');
								//u_.U_o.o ('set $scope.lastChecked to:' + $scope.lastChecked.id);
							}
						}

						//alert('setting lastchecked');
						$scope.lastChecked = thisCheckBox;
						$scope.synchNumberCheckboxesChecked();

					}; // checkBoxClickedSingle



					$scope.operationOnChecked_Delete = function()       // Delete Selected
					{
						//alert('in operationOnChecked_Delete');
						var x = $('.chkbox');
						// check if all are checked so it's just a toggle
						var arrOidsToDelete = [];
						for (var i = 0; i < x.length; i++)
						{
							if (document.getElementById('idcheckbox'+i).checked)
							{
								arrOidsToDelete.push($scope.ustodos[i]._id);
								//alert('in operationOnChecked_Delete');
							}
						}

						if (arrOidsToDelete.length === 0)
						{
							alert('No items selected to delete.');
							return;
						}
						//alert ('delete all:' + arrOidsToDelete);

						// now make web service call

						try {

							// 11111111 works kinda - in url tho not in body
							// pairs with this and params seem to be only in URL
							//app.route('/ustodobulkdel')
							//    .delete(users.requiresLogin, ustodos.ustodobulkdel);
							//var jsnval = {inner:'value'};
							//$http({
							//    url: '/ustodobulkdel',
							//        method: 'delete',
							//    params: {jsnkey: jsnval}
							//}).success(function(data) {
							//    u_.U_o.o ('data:' + data.toString());
							//});


							// 22222  works in that it makes it to themethod, but can't find req data anywhere not in URL or body or params or query
							// http://stackoverflow.com/questions/5643321/how-to-make-remote-rest-call-inside-node-js-any-curl
							//app.route('/ustodobulkdel')
							//    .delete(users.requiresLogin, ustodos.ustodobulkdel);
							//$http.delete('/ustodobulkdel', {form:{key:'hkvalue'}}).
							//    success(function(data) {
							//        u_.U_o.o ('data:' + data.toString());
							//    });


							// 3333 works great in that it makes it to the method, and req data is not in the URL but in the
							//$http.post('/exports.ustodobulkdel ', {form:{key:'hkvalue', arrOidsToDelete:arrOidsToDelete}}).
							$http.post('/ustodobulkdel', {form:{key:'hkvalue', arrOidsToDelete:arrOidsToDelete}}).
							success(function(data)
							{
								//alert('success on return from exports.ustodobulkdel ');
								//u_.U_o.o ('data:' + data.toString());
								$scope.find(); // to $scope.find = function() {in
								$scope.synchNumberCheckboxesChecked();


							}). error(function(data, status, headers, config) {
								// called asynchronously if an error occurs
								// or server returns response with an error status.
								alert('error on return from exports.ustodobulkdel ');
								u_.U_o.o ('dataxx:' + data);
								u_.U_o.o ('statusxx:' + status);
								u_.U_o.o ('headersxx:' + headers);
								u_.U_o.o ('configxx:' + config);
							});
							//alert('posted to exports.ustodobulkdel ');

							//$http.delete('/ustodobulkdel', {
							//    params: { user_id: user.id }
							//}).success(function(data) {
							//        u_.U_o.o ('data:' + data.toString());
							//});

							// http://stackoverflow.com/questions/12190166/angularjs-any-way-for-http-post-to-send-request-parameters-instead-of-json
							//$http.post('/ustodobulkdel', {
							//    params: { user_id: user.id }
							//}).success(function(data) {
							//        u_.U_o.o ('data:' + data.toString());
							//});
						} catch (e) {
							u_.U_o.e ('errrra:' + e);
						}
						$scope.synchNumberCheckboxesChecked();
					};


					// hhkk106
					$scope.deleteDbUstotoOneByIndex = SppSvc.deleteDbUstotoOneByIndex;

					//alert ('setting setUstodosFiltered');
					$scope.setUstodosFiltered = function(caller, ustodosUnfiltered)
					{
						//alert('in setUstodosFiltered caller [' + caller + '] dirtying $scope.ustodosFiltered ustodosUnfiltered.length' + ustodosUnfiltered.length);
						$scope.ustodosFiltered = ustodosUnfiltered;
						document.ustodosFilterCacheDirty = true;
					};

					// section_processcommand
					// http://patorjk.com/software/taag/#p=display&h=2&v=1&f=Blocks&t=processCommand
					//.----------------. .----------------. .----------------. .----------------. .----------------. .----------------. .----------------. .----------------. .----------------. .----------------. .----------------. .----------------. .-----------------..----------------.
					//| .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. | .--------------. |
					//| |   ______     | | |  _______     | | |     ____     | | |     ______   | | |  _________   | | |    _______   | | |    _______   | | |     ______   | | |     ____     | | | ____    ____ | | | ____    ____ | | |      __      | | | ____  _____  | | |  ________    | |
					//| |  |_   __ \   | | | |_   __ \    | | |   .'    `.   | | |   .' ___  |  | | | |_   ___  |  | | |   /  ___  |  | | |   /  ___  |  | | |   .' ___  |  | | |   .'    `.   | | ||_   \  /   _|| | ||_   \  /   _|| | |     /  \     | | ||_   \|_   _| | | | |_   ___ `.  | |
					//| |    | |__) |  | | |   | |__) |   | | |  /  .--.  \  | | |  / .'   \_|  | | |   | |_  \_|  | | |  |  (__ \_|  | | |  |  (__ \_|  | | |  / .'   \_|  | | |  /  .--.  \  | | |  |   \/   |  | | |  |   \/   |  | | |    / /\ \    | | |  |   \ | |   | | |   | |   `. \ | |
					//| |    |  ___/   | | |   |  __ /    | | |  | |    | |  | | |  | |         | | |   |  _|  _   | | |   '.___`-.   | | |   '.___`-.   | | |  | |         | | |  | |    | |  | | |  | |\  /| |  | | |  | |\  /| |  | | |   / ____ \   | | |  | |\ \| |   | | |   | |    | | | |
					//| |   _| |_      | | |  _| |  \ \_  | | |  \  `--'  /  | | |  \ `.___.'\  | | |  _| |___/ |  | | |  |`\____) |  | | |  |`\____) |  | | |  \ `.___.'\  | | |  \  `--'  /  | | | _| |_\/_| |_ | | | _| |_\/_| |_ | | | _/ /    \ \_ | | | _| |_\   |_  | | |  _| |___.' / | |
					//| |  |_____|     | | | |____| |___| | | |   `.____.'   | | |   `._____.'  | | | |_________|  | | |  |_______.'  | | |  |_______.'  | | |   `._____.'  | | |   `.____.'   | | ||_____||_____|| | ||_____||_____|| | ||____|  |____|| | ||_____|\____| | | | |________.'  | |
					//| |              | | |              | | |              | | |              | | |              | | |              | | |              | | |              | | |              | | |              | | |              | | |              | | |              | | |              | |
					//| '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' | '--------------' |
					//'----------------' '----------------' '----------------' '----------------' '----------------' '----------------' '----------------' '----------------' '----------------' '----------------' '----------------' '----------------' '----------------' '----------------'
					$scope.mouseoverlock = 'off'; // mouselock mouseoverlock
					//alert ('reinit mouseoverlock');



					// hbkk
					var UtdUserCommand = function (xText, xHtml) {
						this.xText = xText;
						this.xHtml = xHtml;
						this.xTextTrimmed = xText.trim();
						this.isWriteCommand = u_.UtilString.endsWith(this.xTextTrimmed, ' w') || u_.UtilString.endsWith(this.xTextTrimmed, ' W');
						this.xTextCommandRemoved = null;

						if (this.isWriteCommand) {
							//alert ('in endsWith w');
							this.xTextCommandRemoved = this.xTextTrimmed.slice(0, this.xTextTrimmed.length - 1).trim();
							u_.U_o.liveLog('in write \r\n' +
								' xHtml [' + xHtml + ']\r\n' +
								' xTextCommandRemoved.asciiTable():' + this.xTextCommandRemoved.asciiTable());
							//alert('in write xTextCommandRemoved [' + this.xTextCommandRemoved + ']');
						}
						else
						{
							this.xTextCommandRemoved = this.xTextTrimmed; //no command so removed is same
						}
						//console.log('UtdUserCommand instantiated this.xText [' + this.xText + '] this.xHtml [' + this.xHtml + ']');
					};

					var ustodosQueryCommon_wrapper = function(xTextCommandRemoved, callbackFromQuery)
					{
						$scope.searchedFor = xTextCommandRemoved;
						//alert ('post write - search for $scope.searchedFor [' + $scope.searchedFor + ']');

						//alert ('in ustodosQueryCommon_wrapper xTextCommandRemoved [' + xTextCommandRemoved + ']');

						$scope.ustodosQueryCommon('caller_$scope.processCommand_NotWrite',
							{q:xTextCommandRemoved}, // same as x
							callbackFromQuery);      // this is a GET - see RESOURCE

						$location.search('q', xTextCommandRemoved);       // yoo bar foo bar baz not $location.path
						$scope.filterText = xTextCommandRemoved;
						//$scope.searchedFor = utdUserCommand.xTextCommandRemoved;
						////alert ('post write - search for $scope.searchedFor [' + $scope.searchedFor + ']');
						//
						////alert ('in not a write xTextCommandRemoved.trim [' + xTextCommandRemoved.trim() + ']');
						//
						//$scope.ustodos = $scope.ustodosQueryCommon('caller_$scope.processCommand_NotWrite',
						//	{q:utdUserCommand.xTextCommandRemoved}, // same as x
						//	callbackFromQuery);      // this is a GET - see RESOURCE
						//$location.search('q', utdUserCommand.xTextCommandRemoved);       // yoo bar foo bar baz not $location.path
						//$scope.filterText = utdUserCommand.xTextCommandRemoved;

					};


					/**
					 * main callback response from query
					 * @param arrayUstodosResources
                     */
					var callbackFromQuery = function(arrayUstodosResources) {
						$scope.ustodos = arrayUstodosResources;
						//alert ('in callbackFromQuery post get callback:'+$scope.ustodos);

						// consider interleaving URLs here
						$scope.setUstodosFiltered('caller2', $scope.ustodos);
						SppSvc.setModelDirty (false, 'caller_callbackFromQuery');
						if ($scope.ustodos.length > 0)
							$scope.setTextInShowingEditor(decodeURI($scope.ustodos[0].html), 'line 3329a2');
						else
							$scope.setTextInShowingEditor('', 'line 3329a2b');
						//alert ('in callbackFromQuery post get callback2');
					};  ///callbackfromquery

					/**
					 * this call is the first point after any specific input editor
					 * @param scopeEnumCommand
					 * @param callerId
					 * @param xText
					 * @param xHtml
					 * @param xValue maybe aka data?
					 */
					// hhkk104
					$scope.hkdecodeURI = function(s)
					{

						var rtn = 'decodeURI_function_failed';
						try {
							rtn = decodeURI(s);
						}
						catch (err) {
							//alert('erra33 in singlepage-ustodos.client.controller.js' + s);
							//console.log('malformed erra33 in singlepage-ustodos.client.controller.js:');
							//console.log('malformed erra33 in singlepage-ustodos.client.controller.js:' + err.toString() + ':' + err.stack);
						}
						return rtn;
					};

					$scope.hktest97 = "hktest97y";

					$scope.testOutsiderCall = function(layout) {
						$scope.hktestlayout = null;
						alert('ddddddf');
						return hktest97;
					}

					$scope.processCommand = function(scopeEnumCommand, enumProcessCommandCaller, xText, xHtml)
					{
						var utdUserCommand = new UtdUserCommand(xText, xHtml);
						//alert ('in processCommand caller [' + enumProcessCommandCaller + ']');
						//u_.U_o.o ('1 ===================== in processCommand for 1 xText [' + xText + ']');
						//u_.U_o.o ('2 ===================== in processCommand for 2 xHtml [' + xHtml + ']');

						SppSvc.setSelectedItem(-1);

						//$scope.setTextInShowingEditor(xValue);

						try
						{
							//$scope.searchedForAsLink = 'http://ibm.com/test';
							//u_.U_o.o ('============================= in html2text [' + UtilHrefThisText.html2text(xValue)+ ']');
							// <a target='_blank' href='http://ibm.com'>http://ibm.com</a>

							$scope.callCountSearch++;

							// what is xTextCommandRemovedTrimmedr

							// TODO ADD A WRITE HERE
							//$scope.ustodos = Ustodos.WRITE????  ({q: xTextCommandRemoved}, fn);      // this is a GET - see RESOURCE

							//.----------------. .----------------. .----------------. .----------------. .----------------.
							//| .--------------. | .--------------. | .--------------. | .--------------. | .--------------. |
							//| | _____  _____ | | |  _______     | | |     _____    | | |  _________   | | |  _________   | |
							//| ||_   _||_   _|| | | |_   __ \    | | |    |_   _|   | | | |  _   _  |  | | | |_   ___  |  | |
							//| |  | | /\ | |  | | |   | |__) |   | | |      | |     | | | |_/ | | \_|  | | |   | |_  \_|  | |
							//| |  | |/  \| |  | | |   |  __ /    | | |      | |     | | |     | |      | | |   |  _|  _   | |
							//| |  |   /\   |  | | |  _| |  \ \_  | | |     _| |_    | | |    _| |_     | | |  _| |___/ |  | |
							//| |  |__/  \__|  | | | |____| |___| | | |    |_____|   | | |   |_____|    | | | |_________|  | |
							//| |              | | |              | | |              | | |              | | |              | |
							//| '--------------' | '--------------' | '--------------' | '--------------' | '--------------' |
							//'----------------' '----------------' '----------------' '----------------' '----------------'
							// http://patorjk.com/software/taag/#p=display&h=2&v=1&f=Blocks&t=WRITE

							// section_write
							if (utdUserCommand.isWriteCommand) // e.g., $scope.enumCommands.COMMAND_WRITE  // 							{
							{


								//alert ('in write utdUserCommand.xTextCommandRemoved [' + utdUserCommand.xTextCommandRemoved + ']');
								//alert ('in write xHtml [' + xHtml + ']');
								//alert ('in write xTextCommandRemoved.asciiTable():' + xTextCommandRemoved.asciiTable());
								//alert ('in endsWith w');

								//alert ('in write xHtml replaced [' + xHtml + ']');

								//alert ('commandRemoved_toSearchFor_trimmed:' + commandRemoved_toSearchFor_trimmed);
								//var target = '';
								// may want to leave angular sanitize call in here for future use as a test that it will always run
								var x = $filter('linky')(utdUserCommand.xTextCommandRemoved); // links to C:\utd\150719utdG\public\lib\angular-sanitize\angular-sanitize.js per client side debugger run on a save

								//alert ('utdUserCommand.xTextCommandRemoved:' + utdUserCommand.xTextCommandRemoved);
								//alert ('x:' + x);
								//alert ('xHtml:' + xHtml);
								// hbkk
								//alert ('saving ustodo with html:utdUserCommand.xHtml.replaceLast(\' w\', \'\')' + utdUserCommand.xHtml.replaceLast(' w', ''));
								//alert ('saving ustodo with text:utdUserCommand.xTextCommandRemoved' + utdUserCommand.xTextCommandRemoved);

								// be sure not a spurious replacement in case html formatting
								//var htmlWindex = utdUserCommand.xHtml.indexOf(' w');
								//if (htmlWindex > 0 && htmlWindex <  utdUserCommand.xHtml.length -2 )
								//{
								//	alert('erra345');
								//}
								// section_routes_to_server_exports.create = function(req, res)
								var ustodo = new Ustodos ({
									// looks like mongoose
									// http://mongoosejs.com/docs/index.html
									// need to be model schema elements from ustodo.server.model.js
									// joey: 'and pete', // not sufficient to just be here
									//html: 'htmlhk:'+utdUserCommand.xHtml.replaceLast(' w', ''),
									html: encodeURI(utdUserCommand.xHtml),
									text: utdUserCommand.xTextCommandRemoved,
									datelastmod: (''+new Date()),
									datecreated: (''+new Date()),
									// (I guess "if in schema" covers both client-server and server-db)
									utdUserCommand: JSON.stringify(utdUserCommand)  // this goes to the DB if in schema
								});

								//
								//if (UtilHtmlCleaner.isHTML2Regex(utdUserCommand.xHtml))
								//{
								//	alert('html detected');
								//} else {
								//	alert('no html detected');
								//}

								//ustodo._doc.x1212 = 'x1212'; //
								//ustodo.xxx = 'xxx2';
								//ustodo.y1212 = 'y1212';

								//getProperties('props ustodo:', ustodo);
								//alert ('saving ustodo.text:' + ustodo.text);
								// Redirect after save
								//u_.U_o.o ('1 $$$$$$$$$$$$$$$$$$ save callerId 1 [' + callerId + '] ustodo.html [' + ustodo.html+ ']');
								//u_.U_o.o ('2 $$$$$$$$$$$$$$$$$$ save callerId 2 [' + callerId + '] ustodo.text [' + ustodo.text + ']');
								//u_.U_o.o ('3 $$$$$$$$$$$$$$$$$$ save callerId 3 [' + callerId + '] ustodo.value [' + ustodo.value + ']');
								//u_.U_o.o ('4 $$$$$$$$$$$$$$$$$$ save callerId 4 [' + callerId + '] ustodo.jsonx [' + ustodo.jsonx + ']');
								//u_.U_o.o ('5 $$$$$$$$$$$$$$$$$$ save callerId 5 [' + callerId + '] commandRemoved_toSearchFor_trimmed [' + commandRemoved_toSearchFor_trimmed + ']');
								//alert('pre ustodo save ');
								// hbkk
								ustodo.$save
								(
									function(response) // line 60 of 'ustodos.server. controller.js' exports.create
									{
										//alert ('successful save');
										ustodosQueryCommon_wrapper('*', callbackFromQuery);


										// section_query // section_read
										//$location.path('ustodos/' + response._id);
										// http://patorjk.com/software/taag/#p=display&h=2&v=1&f=Blocks&t=QUERY
										//.----------------. .----------------. .----------------. .----------------. .----------------.
										//| .--------------. | .--------------. | .--------------. | .--------------. | .--------------. |
										//| |    ___       | | | _____  _____ | | |  _________   | | |  _______     | | |  ____  ____  | |
										//| |  .'   '.     | | ||_   _||_   _|| | | |_   ___  |  | | | |_   __ \    | | | |_  _||_  _| | |
										//| | /  .-.  \    | | |  | |    | |  | | |   | |_  \_|  | | |   | |__) |   | | |   \ \  / /   | |
										//| | | |   | |    | | |  | '    ' |  | | |   |  _|  _   | | |   |  __ /    | | |    \ \/ /    | |
										//| | \  `-'  \_   | | |   \ `--' /   | | |  _| |___/ |  | | |  _| |  \ \_  | | |    _|  |_    | |
										//| |  `.___.\__|  | | |    `.__.'    | | | |_________|  | | | |____| |___| | | |   |______|   | |
										//| |              | | |              | | |              | | |              | | |              | |
										//| '--------------' | '--------------' | '--------------' | '--------------' | '--------------' |
										//'----------------' '----------------' '----------------' '----------------' '----------------'

										//alert ('in write query [' + commandRemoved_toSearchFor_trimmed + ']');
										//u_.U_o.o ('=============== in section QUERY1');
										//$scope.ustodos = $scope.ustodosQueryCommon('caller_$scope.processCommand_Write', {q: '*'}, callbackFromQuery);

										// hbk 1505
										//$location.search('q', commandRemoved_toSearchFor_trimmed);       // yoo bar foo bar baz
										//UtilNLB_bgFade.NLBfadeBg('idInput0TypeText','green', '#FFFFFF','1500');
										// pairs with ustodos.server. controller.js line 85 return res.status(400)
										// return res.status(400).send
										// hbkk error reply
									},
									function(errorResponse) {
										alert('failed to save record:' + errorResponse.data.message);
										$scope.error = errorResponse.data.message;
									}
								);
								//alert  ('will search after write wasAwrite [' + wasAwrite +
								//'] for commandRemoved_toSearchFor_trimmed:' + commandRemoved_toSearchFor_trimmed);

								//xTextCommandRemoved = commandRemoved_toSearchFor_trimmed;
							} // if was write
							else //not write command
							{

								//alert ('post write - search for 2');
								ustodosQueryCommon_wrapper(utdUserCommand.xTextCommandRemoved, callbackFromQuery);
							}
							//alert ('post write - search for ');


							// POST WRIT IF IT WAS A WRITE
							//u_.U_o.o ('=============== in section QUERY2')
							//var t = new RegExp(xTextCommandRemoved.trim(), 'i');


							//{$and:
							//	[
							//		{q:xTextCommandRemoved.trim()},
							//		{deleted:{$ne:true}}
							//	]
							//}

							// exports.processCommandReadPortion
							// ustodos.server.routes.js may be related to this
							//app.route('/ustodos')
							//	.get(users.requiresLogin, ustodos.list2)
							// ustodos.server. controller.js and may map to exports.list2 = function(req, res) { in

							//new RegExp(t, 'i')
							//{ $regex: new RegExp(xTextCommandRemoved.trim(), 'i') }
							//{$regex:xTextCommandRemoved.trim(), $options:'i'}
							//{ $regex: /thort/, $options: 'i' } // { $regex: /acme.*corp/, $options: 'i' }
							//{q:
							//    xTextCommandRemoved.trim()
							////{$not:{deleted:true}}
							//    //new RegExp(t, 'i')
							//    //{ $regex: new RegExp(xTextCommandRemoved.trim(), 'i') }
							//    //{$regex:xTextCommandRemoved.trim(), $options:'i'}
							//    //{ $regex: /thort/, $options: 'i' } // { $regex: /acme.*corp/, $options: 'i' }
							//
							//},

							//$scope.ustodos = $scope.ustodosQueryCommon('caller_$scope.processCommand_NotWrite',
							//  {q:xTextCommandRemoved.trim()});      // this is a GET - see RESOURCE
							//{q:{$regex:xTextCommandRemoved.trim()}});      // this is a GET - see RESOURCE
							//{q:{$regex:xTextCommandRemoved.trim(), $options:'i'}});      // this is a GET - see RESOURCE
							//{q:xTextCommandRemoved.trim() }, callbackFromQuery);      // this is a GET - see RESOURCE
							// {key:{$regex:value, $options:‘i’}}

							//{q:new RegExp(xTextCommandRemoved.trim(), 'i') }, callbackFromQuery);      // this is a GET - see RESOURCE
							// {q:{ '$regex' : xTextCommandRemoved.trim(), '$options' : '-i' }}, callbackFromQuery);      // this is a GET - see RESOURCE

							// http://stackoverflow.com/questions/5499451/case-insensitive-query-on-mongodb
							//{ '$regex' : 'C#', '$options' : '-i' }


							//alert('setting search commandRemoved_toSearchFor_trimmed [' + xTextCommandRemoved + ']');
							//$location.path('#/user/' + client.tagid);



							// section_location_set_url
							//alert ('in herehk pre $location.search');

							//alert ('commandRemoved_toSearchFor_trimmed:'+ commandRemoved_toSearchFor_trimmed);




							//var UtilClass = require('C:/utd/150719utdG/public/util/UtilClass.js');
							//console.log ('%%%$$%%$$%%%%%%%%%%%%% UtilClassx.getClass(this):'+utd.Class.getClass(this));
							//console.log ('%%%$$%%$$%%%%%%%%%%%%% UtilClassx.utilGetClass(this):'+UtilClassx.utilGetClass(this));

							//setTimeout(function(){alert('in ustodos')}, 2000);
							//setTimeout(function(){

							//setTimeout(function(){
							//console.log ('hi1 hk this.newUrl :' + newUrl );
							//console.log ('hi2 hk this.commandFromInputBox:' + this.commandFromInputBox);
							//console.log ('hi3 hk $scope.hkhkhkbk:' + $scope.hkhkhkbk);
							//$location.path('/#!/ddddddd');
							//$location.path(newUrl).replace();
							//$location.skipReload().path('/newpath').replace(); // https://github.com/angular-ui/ui-router/issues/427
							// https://github.com/angular-ui/ui-router/issues/427
							// https://www.google.com/search?num=100&es_sm=93&q=angular+%24location.path+replace&oq=angular+%24location.path+replace&gs_l=serp.3..0i22i30.1345.1711.0.2094.2.2.0.0.0.0.130.250.0j2.2.0.msedr...0...1c.1.61.serp..0.2.250.2tLK_AkIUUs
							// https://www.google.com/search?q=angular+change+url&oq=angular+change+url&aqs=chrome..69i64j0l5.704j0j9&sourceid=chrome&es_sm=93&ie=UTF-8
							// https://docs.angularjs.org/api/ng/service/$location


							//window.location.href = '/#!/ssss2' ;
							//$scope.apply();

							//            try {

							//$locationProvider.html5Mode(true);
							//window.location.href = '/#!/ustodos/findlist/' + $scope.hkhkhkbk;

							// this is the one to toggle 150304
							//window.location.href = '/#!/?q=' + $scope.hkhkhkbk;
							//$location.path($location.path() + 'ddd/#!/?q=' + $scope.hkhkhkbk);

							//window.location.href = '/?q=sdfdfdf';
							//$location.path('#/login');
							//alert ('22c $location.absUrl():' + $location.absUrl());
							//alert ('22d window.location.href:' + window.location.href);
							//alert ('22e this.commandFromInputBox:' + this.commandFromInputBox);
							//window.location.href = window.location.href + '/xxx' + this.commandFromInputBox;
							//window.location.href = window.location.href + '/xxx';
							//https://docs.angularjs.org/guide/$location
							//alert(a'assigned this.commandFromInputBox:'+ this.commandFromInputBox);


							//console.log (getClass('ssdfsdfdsf', this.commandFromInputBox));

							//$scope.ustodos = Ustodos. query ({name: /141229/});
							//setTimeout(function(){console.log ('in ustodos.client. controller SEARCH2 $scope.ustodos.length:' + $scope.ustodos.length);}, 1000);
							//setTimeout(function(){alert ('in ustodos.client. controller SEARCH2 $scope.ustodos.length:' + $scope.ustodos.length);}, 1000);
							//$scope.$apply();


							//getProperties('props this:', this);
							//var ustodo = new Ustodos ({
							//	name: this.name,  //  mystery
							//	commandFromInputBox: this.commandFromInputBox //  mystery
							//});
							//getProperties('props ustodo:', ustodo);




							//// Redirect after save
							//ustodo.$save(function(response) {
							//	$location.path('ustodos/' + response._id);
							//	$scope.name = '';
							//}, function(errorResponse) {
							//	$scope.error = errorResponse.data.message;

						} catch (e) {
							alert ('got error calling UtilError.emitError');
							UtilError.emitError('processCommand enumProcessCommandCaller [' + enumProcessCommandCaller + ']', e);
							throw e;
						}
						$scope.mouseoverlock = 'off';

					};  // $scope.processCommand

					// Search for one  existing Ustodo by string
					$scope.searchOne = function() {
						alert ('7 in ustodos.client. controller SEARCHONE');
						console.log ('7  getting ustodo searchOne :' + $stateParams.ustodoId);
						$scope.ustodo = Ustodos.get({
							// ORIGINAL A/B SPLIT
							ustodoSearchString: $stateParams.ustodoId
							//ustodoId: '54929d5d1d3df384165f4fa2'  // worked!!
							//name: /road/
							//name: 'as'
						});
					};

					//u_.U_o.a ('sssa2');

					// <select> element displays its options on mousedown, not click.
					//        $scope.showSelectDropdown = function () { // WORKS
					//            var event;
					//            event = document.createEvent('MouseEvents');
					//            event.initMouseEvent('mousedown', true, true, window);
					//            document.getElementById('selectId').dispatchEvent(event);
					//        };
					//

					$scope.filterDoesThisRowHtmlMatch = function(s, filterText) {
						alert ('in here hk');
						var s2 = '';
						var arrTokens = s.split(/\s/);
						for (var i = 0; i < arrTokens.length; i++) {
							//u_.U_o.o ('testing for filterText [' + filterText + '] :' + arrTokens[i]);
							if (arrTokens[i].indexOf(filterText) > 0) {
								//u_.U_o.o ('found:');
								s2 = s2 + ' ' + arrTokens[i];
							}
						}
						return s2;
					};

					$scope.filterText = null;

					$scope.onTrueOffFalse = false;
					// commented 150513

					// called by UI when idInputTextFilter changes
					$scope.updateUstodosFiltered = function (s)
					{

						//alert ('========================= in ttttttttttt updateUstodosFiltered');
						if (document.ustodosFilterCacheDirty === false) {
							//alert('setting cache dirty');
							document.ustodosFilterCacheDirty = true;
						}

						$scope.ustodosFiltered = [];
						u_.U_o.o ('in updateUstodosFiltered() s  [' + s + ']');
						var useCaseSensitiveRestrict = false;
						if (s && s.hasUpperCase()) {
							u_.U_o.o ('USE CASE SENS');
							useCaseSensitiveRestrict = true;
						} else {
							u_.U_o.o ('DO NOT USE CASE SENS');
						}

						for (var i = 0; i < $scope.ustodos.length; i++)
						{
							var strOneOfManyIterThru = $scope.ustodos[i].html;
							if (!useCaseSensitiveRestrict) {
								strOneOfManyIterThru = strOneOfManyIterThru.toLowerCase();
								if (s)
									s = s.toLowerCase();
							}

							if (!s || strOneOfManyIterThru.indexOf(s) >= 0) {
								$scope.ustodosFiltered.push($scope.ustodos[i]);
								//u_.U_o.o ('MATCH in dyamic client-only filter updateUstodosFiltered matching s [' + s + '] vs strOneOfManyIterThru [' + strOneOfManyIterThru +  '] index [' + i + ']');
							}
							//else {
							//u_.U_o.o ('NO MATCH in dyamic client-only filter updateUstodosFiltered matching s [' + s + '] vs strOneOfManyIterThru [' + strOneOfManyIterThru + '] index [' + i + ']');
							//}
							//if (i % 2 == 0)
						}
						u_.U_o.o ('---------------updateUstodosFiltered done from len [' + $scope.ustodos.length + '] len [' + $scope.ustodosFiltered.length + '] ');
					};



					$scope.hkngfocustest_original = {};
					$scope.hkngfocustest = function(index) {

						//u_.U_o.o('================ from hkngfocustest:' + index);
						SppSvc.setSelectedItem(index);
						//alert('in hkngfocustest:' + index);

						var x = document.getElementById('ustodorow'+index);
						var expanded = (x.style.maxHeight === 'none');
						if (!expanded)
						{
						    if (Object.keys($scope.hkngfocustest_original).length === 0) {
								$scope.hkngfocustest_original.maxHeight = x.style.maxHeight; // save original
								$scope.hkngfocustest_original.height = x.style.height; // save original
							}
							x.style.maxHeight = 'none';
							x.style.height = 'auto';
						} else {

							x.style.maxHeight = $scope.hkngfocustest_original.maxHeight;
							x.style.height = $scope.hkngfocustest_original.eight;
						}
					};

					//alert ('done defining medium');

					//
					//$scope.init =function() {
					//    tinyMCE.get('idTinyMceTextArea').setContent('<span>some1</span> html');
					//}
					//



					/**
					 .----------------. .----------------. .----------------. .-----------------.
					 | .--------------. | .--------------. | .--------------. | .--------------. |
					 | | ____    ____ | | |      __      | | |     _____    | | | ____  _____  | |
					 | ||_   \  /   _|| | |     /  \     | | |    |_   _|   | | ||_   \|_   _| | |
					 | |  |   \/   |  | | |    / /\ \    | | |      | |     | | |  |   \ | |   | |
					 | |  | |\  /| |  | | |   / ____ \   | | |      | |     | | |  | |\ \| |   | |
					 | | _| |_\/_| |_ | | | _/ /    \ \_ | | |     _| |_    | | | _| |_\   |_  | |
					 | ||_____||_____|| | ||____|  |____|| | |    |_____|   | | ||_____|\____| | |
					 | |              | | |              | | |              | | |              | |
					 | '--------------' | '--------------' | '--------------' | '--------------' |
					 '----------------' '----------------' '----------------' '----------------'
					 //section_main - executes on load - not a function ded
					 */

					window.onbeforeunload = function () // reload
					{
						//if ($scope.reloadWarning)
						//    return 'Are you sure?';
						if (SppSvc.getModelDirty('singlepage'))
							return 'Exit?  A record changed.  Exiting will lose it.';
					};

				} catch (e) {
					alert ('e33:' + e);
					throw e;
				}
			}
		]
	)
	.directive('myCustomer', function()  // section_ tail defined against app (e.g., myApp or userApp)
	{
		alert ('========================= in directive 1');
		return {
			//templateUrl: function(elem, attr){
			//    return 'customer-'+attr.type+'.html';
			template: function(elem, attr){

				console.log ('in mycustomer directive ==================================');
				//return 'ggggggggggghhhhhhhhhhhhhh';
				return 'ustodo text: <a href=>';
				//http:\/\/applex.com' target='_blank'>http:\/\/applex.com<\/a>';

			}
		};
	})
	.directive('autoFocus', function($timeout) {
		alert ('========================= in directive 2');
		return {
			restrict: 'AC',
			link: function(_scope, _element) {
				$timeout(function(){
					_element[0].focus();
				}, 0);
			}
		};
	})
	.directive('onFinishRender', function ($timeout) {
		// oct 2015 seems not called
		//u_.U_o.a('sss2');
		if (CONST_SHOW_INIT_ALERTS)
			alert('inONLOADINIT#8  in directive(onFinishRender{');
		$('div[id="idDivCEOmniBox"]').trigger('focus');


		if (CONST_SHOW_INIT_ALERTS)
			alert('inONLOADINIT#8d  in directive(onFinishRender{');
		//document.getElementById('perRowIframe').src = "data:text/html;charset=utf-8," + escape(html_string);


		return {
			restrict: 'A',
			link: function (scope, element, attr) {
				if (scope.$last === true) {
					$timeout(function () {
						//u_.U_o.a ('sss3');
						// not hit?

						if (CONST_SHOW_INIT_ALERTS)
							alert('onFinishRender inONLOADINIT#8b  in directive(onFinishRender{');
						if (true) // WORKS YAY - adds to location 0 in the list - then confirms saved when done
						{
							//var makeThisNotContentEditables = document.getElementsByClassName("makeThisNotContentEditable");
							var arrelems = $('.makeThisNotContentEditable');
							arrelems.each (function(y) {
								arrelems[y].contentEditable = false;
								//alert('set one:' + arrelems[y].contentEditable);
							});
							if (CONST_SHOW_INIT_ALERTS)
								alert('onFinishRender inONLOADINIT#8c makeThisNotContentEditables' );
								//alert('onFinishRender inONLOADINIT#8c makeThisNotContentEditables.length:' + makeThisNotContentEditables.length);

						}

						scope.$emit('ngRepeatFinished'); // this
						//alert('ngRepeatFinished');
					});
				}
			}
		};
	})
	.filter('filterUstodos', function()
		{

			alert('runs on reload only ========================= in filter 1');
			// see also
			return function( ustodos, s)
			{
				//u_.U_o.o ('========================= in filter 1b');
				if ( document.ustodosFilterCacheDirty !== true )
				{
					alert ('returning cached ustodos ['+ustodos+'] filtered s [' + s + '] TimeSynched [' + document.ustodosLastCommitTimeSynched + ']');
					return document.ustodosFilterCache;
				}
				//else
				//{
				//    // alert ('getting new filter');
				//}






				var useCaseSensitiveRestrict = false;
				if (s && s.hasUpperCase())
					useCaseSensitiveRestrict = true;

				var ustodosFiltered = [];
				var i = 0;
				angular.forEach(ustodos, function(ustodo)
				{
					i++;

					if (i % 100 === 0)
						u_.U_o.o ('======  filter do not keep');
					//}

					ustodosFiltered.push(ustodo);

				});
				document.ustodosFilterCache = ustodosFiltered;
				document.ustodosFilterCacheDirty = false;

				//u_.U_o.o ('@@@@@@@@@ filter done ustodosFiltered.length:'+ustodosFiltered.length);

				return document.ustodosFilterCache;
			};
		}
	)
;














//u_.U_o.a ('oneOfSeveral $routeProvider', '$locationProvider');
//angular.module('ustodos')
//	//.config (
//	//['$locationProvider',
//	//    function ($locationProvider) {
//	//
//	//        //commenting out this line (switching to hashbang mode) breaks the app
//	//        //-- unless # is added to the templates
//	//        $locationProvider.html5Mode(true);
//	//
//	//        //$routeProvider.when('/', {
//	//        //    template: 'this is home. go to <a href='/about'/>about</a>'
//	//        //});
//	//        //$routeProvider.when('/about', {
//	//        //    template: 'this is about. go to <a href='/'/>home</a'
//	//        //});
//	//    }
//	//])
//	////.config(function($locationProvider ) {
//	////    $locationProvider.html5Mode(true);
//	////    //$routeProvider.otherwise({redirectTo: '/home', controller: HomeCtrl});
//	////})
//	.directive('onFinishRender', function ($timeout) {
//		// oct 2015 seems not called
//		u_.U_o.a('sss2');
//		alert ('done onload');
//		return {
//			restrict: 'A',
//			link: function (scope, element, attr) {
//				if (scope.$last === true) {
//					$timeout(function () {
//						//u_.U_o.a ('sss3');
//						scope.$emit('ngRepeatFinished');
//						alert('ngRepeatFinished');
//					});
//				}
//			}
//		};
//	}
//	);

window.onload = function()
{
	//var x = document.getElementById('imageIdRedPEncilbnw');
	//try {
	if (CONST_SHOW_INIT_ALERTS)
		alert('inONLOADINIT#1  in window.onload');

	//setTimeout(function(){ $scope.localTinyMceInit() }, 2000); // hbklrb11
	//setTimeout(function(){ $scope.focusOnId(mceId); }, 3000); // hbklrbb
	//var x = angular.element('imageIdRedPEncilbnw');
	//angular.element( document.querySelector( '#imageIdRedPEncil' ) ).src = '/img/ClearText.png';
	//angular.element( document.querySelector( '#imageIdRedPEncilbnwxxx' ) ).width = '15';
	//alert ('xxsonload - set width to:'+angular.element( document.querySelector( '#imageIdRedPEncilbnwxxx' ) ).width);
	//alert ('yyyonload - set width to:'+angular.element( document.querySelector( '#imageIdRedPEncilbnwxxx' ) ).style.width );
	//angular.element( document.querySelector( '#imageIdRedPEncilbnwxxx' ) ).style.color = 'visible';
	//document.getElementById('imageIdRedPEncilbnw').width = 300;
	//document.getElementById('imageIdRedPEncil').style.visibility='visible';
	//document.getElementById('imageIdRedPEncil').style.visibility='visible';
	//angular.element( document.querySelector( '#imageIdRedPEncil' ) ).style.visibility='visible';

	//}
	//catch(err)
	//{
//		alert ('in error catcher');
	//UtilError.emitError('in onload error', err);
	//}

//CKEDITOR.replace( 'editor1' );
//CKEDITOR.instances.editor1.on('blur', function() {
//    alert('onblur fired');
};

//alert ('done onload');


//$("[contenteditable='true']").on("focus", function() {
//	$(".editable").toggleClass("focus");
//})
//
//$("[contenteditable='true']").on("blur", function() {
//	$(".editable").toggleClass("focus");
//})
