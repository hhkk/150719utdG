'use strict';

//var UtilClass = require('C:/utd/150719utdG/public/util/UtilClass.js');
//var O = require('C:/utd/150719utdG/public/util/O.js');
//var UtilClass = null;
//var UtilJsTypeDetect = require('C:/utd/150719utdG/public/util/UtilJsTypeDetect.js');



var O = O;
//var CKEDITOR = CKEDITOR;
var tinyMCE = tinyMCE;
var UtilJsTypeDetect = UtilJsTypeDetect;
var UtilHrefThisText = UtilHrefThisText;
var UtilString = UtilString;
var Medium = Medium;
var UtilDate = UtilDate;

var $ = $;
var UtilPrintObjects = UtilPrintObjects;

var UtilNLB_bgFade = UtilNLB_bgFade;
var UtilErrorEmitter = UtilErrorEmitter;
var UtilClassz = UtilClassz;

var UtilHtmlCleaner = UtilHtmlCleaner; // this is a file name

alert ('in here 2');
//var myapplication = exports.myapplication;

//var unirest = require('unirest');
//var fn = function()
//{
//    O.o ('got callback from unirequest get');
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
//var getHtmlHk = function(index) {
//    console.log ('A getHtmlHk:'+index);
//    return ustodos[$index].html
//    console.log ('B getHtmlHk:'+index);
//}

var angularModule = null;
//angularModule = angular.module('ustodos');


//O.a ('sssa1.5');



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




//myApp.controller('myCtrl', ['$scope', '$sce', function($scope, $sce) {
//    // ...
//    $scope.preview_data.preview.embed.htmlSafe =
//        $sce.trustAsHtml(preview_data.preview.embed.html);
//}
//myApp.controller('myCtrl', ['$scope', '$sce', function($scope, $sce)




// works angularModule.controller('UstodosController', ['$scope', '$stateParams', '$location', '$rootScope', 'Authentication', 'Ustodos',
//    function($scope, $stateParams, $location, $rootScope, Authentication, Ustodos) {
// angularModule.controller('UstodosController', ['$scope', '$stateParams', '$location', '$rootScope', 'ngSanitize', 'Authentication', 'Ustodos',




//alert ('initing app');

var app = angular.module('ustodos');      // worked before ui.router was added but this video showed its use https://youtu.be/5JJFiAS1ys4
//var app = angular.module('ustodos',['ngSanitize', 'ui.router']);      // worked before ui.router was added but this video showed its use https://youtu.be/5JJFiAS1ys4

////http://jsfiddle.net/whnSs/
//var app = angular.module('myApp', []);

// http://stackoverflow.com/questions/15666048/service-vs-provider-vs-factory    http://jsfiddle.net/pkozlowski_opensource/PxdSP/14/
//alert ('defining SppSvc');
// http://stackoverflow.com/questions/21919962/angular-share-data-between-controllers

//alert ('defining SppSvc');

// archetype prototype service for access to data across controllers
app.factory('SppSvc', function() {
	//alert ('in SppSvc');
	var sppData = {};
	var itemsServiceFns = {};

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

 	itemsServiceFns.setModelDirty = function(val) {
		sppData['modelDirty'] = val;
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
 	itemsServiceFns.getModelDirty = function() {
		return sppData['modelDirty'];
	};

 	itemsServiceFns.setWhichEditorShowing = function(val) {
		sppData['whichEditorShowing'] = val;
	};
 	itemsServiceFns.getWhichEditorShowing = function() {
		return sppData['whichEditorShowing'];
	};

 	itemsServiceFns.setSelectedItem = function(val) {
		sppData['selectedItem'] = val;
	};
 	itemsServiceFns.getSelectedItem = function() {
		return sppData['selectedItem'];
	};

	return itemsServiceFns;
});

//alert ('done defining SppSvc');



//angular.module('ustodos').controller('HeaderController',
//	['$scope',
//	'SppSvc',
//	function($scope,
//			 SppSvc
//	) {
//		$scope.SppSvc = SppSvc;
//		//$scope.gblx = gblx;
//
//	}]);

angular.module('ustodos').controller('FooterController',
	['$scope',
	'SppSvc',
	function($scope,
			 SppSvc
	) {
		//alert ('defining FooterController');
		$scope.SppSvc = SppSvc;
		//$scope.gblx = gblx;

	}]);


var callbackCommand = function(callbackResult) {
    O.o  ('in callbackCommand');
};


//O.a ('oneOfSeveral controller with array - first?');
angular.module('ustodos').controller('SinglepageUstodosController',
//angular.module('ustodos',['ngSanitize']).controller('UstodosController',
// angular.module('ustodos',[]).controller('UstodosController',

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
		 Authentication, Ustodos, Commands
		 , SppSvc
		)
    {

		$scope.SppSvc = SppSvc;
		//alert ('in def');
		SppSvc.setModelDirty (true);

		//works first time load only
		// addEventListener('load', load, false);
		function load(){
			//alert('in angular addEventListener load');

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

		$scope.preparePerRowHtml = function(s)
		{
			return s;
		}



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
				console.log ("successful state change");
			});

			// works alert ('init ustodos.client.controller.js state:' + $state.$current);   // current state  .current
            //alert('initing scope $stateParams' + $stateParams);

            $scope.dynamicSearch = false; // bound via ng-model=lockMouseover to idcheckbox_dynamicSearch
            $scope.modelCheckboxUpdateOnWrite = true; // bound via ng-model=lockMouseover to idcheckbox_dynamicSearch
            $scope.modelCheckboxCtrlEnterToSave = false;
            $scope.reloadWarning = false;
            $scope.q = null; // current query
			$scope.numberCheckboxesChecked = 0;
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
            $scope.enumKeyEvent= {
                ENTER: 1,
                SPACE: 2
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

            //angularModule.controller('UstodosController', ['$scope', '$stateParams', '$locationProvider', '$rootScope', '$sce',
            //    'Authentication', 'Ustodos',
            //    function($scope, $stateParams, $locationProvider, $rootScope, $sce, Authentication, Ustodos) {
            //angularModule.controller('UstodosController', ['$scope', '$stateParams', '$location', '$rootScope', 'ngSanitize', 'Authentication', 'Ustodos',
            //    function($scope, $stateParams, $location, $rootScope, ngSanitize, Authentication, Ustodos) {
            //$rootScope', $compile, $rootElement,
            //    O.a ('sssa1');


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



            $scope.$watch('$viewContentLoaded', function(){ // like onload YES
				try {

					//alert ('in onload');
					//var x = document.getElementById('idCkeEditorTextarea').innerHTML;
					//alert ('in $viewContentLoaded:' + x);

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
					//alert ('oin here');
					$scope.toggleVisibilityTo3('line 260 onload');


					$scope.title2 = "$scope.title2 from ustodo client controller"


					var q = $location.$$search.q;
					//$scope.toggleVisibilityTo3('line 3656 main');
					if (q) {
						$scope.q = q;
						$scope.processCommand($scope.enumCommands.COMMAND_SEARCH, $scope.enumProcessCommandCaller.URL, q, q, q);
						//$scope.setTextInShowingEditor(q, 'line 275 main');

					} else {
						$scope.processCommand($scope.enumCommands.COMMAND_SEARCH, 'CLIENT JS line 2355', '*', '*', '*');
					}
				}
				catch(err)
				{
					UtilErrorEmitter.emitError('error in $scope.$watch($viewContentLoaded, function(){ // like onload YES', err);
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
                //alert ('in ngInitTopLevel');
            };

            $scope.testNLBfadeBg = function() {
                alert('in testNLBfadeBg')      ;
                UtilNLB_bgFade.NLBfadeBg('div1hk','green', '#FFFFFF','1500');
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
            //    O.o ('$scope.toggleCkeToolebarRich :' + $scope.toggleCkeToolebarRich );
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
            // section_mceinit
            // http://patorjk.com/software/taag/#p=display&h=2&v=1&f=Blocks&t=MCE%20INIT%0A
            // n other project see UtilTinyMCE.js
            //tinyMCE.init({
            //    ...
            //    oninit : myCustomOnInit
            //});
            //

			//alert ('pre setIdleTimeout');
			// setIdleTimeout(500000); // hbkk 150924 works
			//alert ('post setIdleTimeout');


			$scope.myCustomOnInit = function () // works
            {
                //alert('myCustomOnInit from mce');
				//this.getDoc().body.style.fontSize = '13px';
                //tinyMCE.get('idTinyMceTextArea').setContent('<span>some1</span> html');
                //tinymce.activeEditor.setContent('<span>some</span> html');
            };

            // 1111111111
            //tinyMCE.init({
            //    selector:'textarea',
            //    //setup : function(ed) {
            //    //    ed.onKeyDown.add(function(ed, e) {
            //    //        console.debug('Key down event: ' + e.keyCode);
            //    //    });
            //    oninit : '$scope.myCustomOnInit()'
            //    })
            //;

            // 222222222
            // tinymce4 works
            //tinymce.init({
            //    selector: 'textarea',
            //    theme: 'modern',
            //    //plugins: [
            //    //    'advlist autolink lists link image charmap print preview hr anchor pagebreak',
            //    //    'searchreplace wordcount visualblocks visualchars code fullscreen',
            //    //    'insertdatetime media nonbreaking save table contextmenu directionality',
            //    //    'emoticons template paste textcolor colorpicker textpattern'
            //    //],
            //    toolbar1: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
            //    toolbar2: 'print preview media | forecolor backcolor emoticons',
            //    image_advtab: true,
            //    templates: [
            //        {title: 'Test template 1', content: 'Test 1'},
            //        {title: 'Test template 2', content: 'Test 2'}
            //    ],
            //    setup : function(ed) {
            //        ed.onDeactivate.add(function(ed) {
            //            alert ('in special function');
            //            ed.save();  // or whatever you want to do to save the editor content
            //            ed.remove(); // removes tinymce instance
            //        });
            //
            //        ed.onKeyUp.add(function(ed,l) {
            //            alert ('in onkeyup');
            //            ed.save();  // or whatever you want to do to save the editor content
            //        });
            //    }
            //
            //});

            //// 333333333333
            ////tinymce3 works
            //alert ('in tinymce init');
            //// section_editor_init_mce


            //tinyMCE.init({
            //    mode : 'textareas',
            //    theme : 'modern',
            //    theme_advanced_buttons1 : 'mybutton,bold,italic,underline,separator,strikethrough,justifyleft,justifycenter,justifyright, justifyfull,bullist,numlist,undo,redo,link,unlink',
            //    theme_advanced_buttons2 : '',
            //    theme_advanced_buttons3 : '',
            //    theme_advanced_toolbar_location : 'top',
            //    theme_advanced_toolbar_align : 'left',
            //    theme_advanced_statusbar_location : 'bottom',
            //    //plugins : 'inlinepopups',
            //    setup : function(ed) {
            //        // Add a custom button
            //        ed.addButton('mybutton', {
            //            title : 'My button',
            //            image : '/example_data/example.gif',
            //            onclick : function() {
            //                // Add you own code to execute something on click
            //                ed.focus();
            //                ed.selection.setContent('Hello world!');
            //            }
            //        });
            //    }
            //});


            // WORKS tested 150715
            // http://www.tinymce.com/tryit/menubutton.php
            // tinymce.init({
            //    selector: 'textarea',
            //    toolbar: 'mybutton',
            //    setup: function(editor) {
            //        editor.addButton('mybutton', {
            //            type: 'menubutton',
            //            text: 'My button',
            //            icon: false,
            //            menu: [
            //                {text: 'Menu item 1', onclick: function() {editor.insertContent('Menu item 1');}},
            //                {text: 'Menu item 2', onclick: function() {editor.insertContent('Menu item 2');}}
            //            ]
            //        });
            //    }
            //});



            // USED until at least 150715
            tinyMCE.init
			(
				{
                //mode : 'exact',


                //mode : 'textareas',
                //theme : 'advanced',
                //theme_advanced_buttons1 : 'mybutton,bold,italic,underline,separator,strikethrough,justifyleft,justifycenter,justifyright, justifyfull,bullist,numlist,undo,redo,link,unlink',
                //theme_advanced_buttons2 : '',
                //theme_advanced_buttons3 : '',
                //theme_advanced_toolbar_location : 'top',
                //theme_advanced_toolbar_align : 'left',
                //theme_advanced_statusbar_location : 'bottom',
                //plugins : 'inlinepopups',
                //setup : function(ed) {
                //    // Add a custom button
                //    ed.addButton('mybutton', {
                //        title : 'My button',
                //        image : '/example_data/example.gif',
                //        onclick : function() {
                //            // Add you own code to execute something on click
                //            ed.focus();
                //            ed.selection.setContent('Hello world!');
                //        }
                //    });
                //}
                //
                //












                plugins: 'code, pagebreak, paste',

				theme_advanced_buttons3_add : "pastetext,pasteword,selectall",
				paste_auto_cleanup_on_paste : true,
				paste_preprocess : function(pl, o) {
					// Content string containing the HTML from the clipboard
					//alert(o.content);
					//o.content = tinymcePasteCleanFilter.cleanHtmlPre(o.content, '<b><strong><u><i><p>' ); // htmlcleaner cleanhtml
					//o.content = ModuleTinymcePasteCleanFilter.tinymcePasteCleanFilter(o.content, '<b><strong><u><i><p>' ); // htmlcleaner
					//o.content = ModuleTinymcePasteCleanFilter.tinymcePasteCleanFilter(o.content, '<b><strong><u><i><p>' ); // htmlcleaner
					alert('prehk');
					o.content = UtilHtmlCleaner.utilHtmlCleaner.cleanHtmlPre(o.content, '<b><strong><u><i><p>' ); // htmlcleaner
					alert('posthk');

					//o.content = "-: CLEANED PRE :-\n" + o.content;
				},
				paste_postprocess : function(pl, o) {
					// Content DOM node containing the DOM structure of the clipboard
					//alert(o.node.innerHTML);
					o.node.innerHTML = o.node.innerHTML + "\n-: CLEANED POST :-";
				},

                mode : 'textareas',
                //  theme : 'advanced',
                //plugins : 'pagebreak,styleBAD,layer,table,save,advhr,advimage,advlink,emotions,iespell,inlinepopups,insertdatetime,preview,media,searchreplace,print,contextmenu,paste,directionality,fullscreen,noneditable,visualchars,nonbreaking,xhtmlxtras,template',

                // Theme options
                //theme_advanced_buttons1 : 'save,newdocument,|,bold,italic,underline,strikethrough,|,justifyleft,justifycenter,justifyright,justifyfull,|,styleselect,formatselect,fontselect,fontsizeselect',
                //theme_advanced_buttons2 : 'cut,copy,paste,pastetext,pasteword,|,search,replace,|,bullist,numlist,|,outdent,indent,blockquote,|,undo,redo,|,link,unlink,anchor,image,cleanup,help,code,|,insertdate,inserttime,preview,|,forecolor,backcolor',
                //theme_advanced_buttons3 : 'tablecontrols,|,hr,removeformat,visualaid,|,sub,sup,|,charmap,emotions,iespell,media,advhr,|,print,|,ltr,rtl,|,fullscreen',
                //theme_advanced_buttons4 : 'insertlayer,moveforward,movebackward,absolute,|,styleprops,|,cite,abbr,acronym,del,ins,attribs,|,visualchars,nonbreaking,template,pagebreak',
                //theme_advanced_toolbar_location : 'top',
                //theme_advanced_toolbar_align : 'left',
                //theme_advanced_statusbar_location : 'bottom',
                //theme_advanced_resizing : true,
				theme_advanced_statusbar_location : "", // hbkk
                width: '100%',
                height: '100%',
                resize: 'both',
                elements : 'idTinyMceTextArea',
                //toolbar1: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent link',
                toolbar1: 'mybuttonimage | mybuttonmenu | example | insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent link | bold italic ',
                //toolbar2: 'print preview media | forecolor backcolor emoticons',
                ///toolbar2: 'bold italic',
                ///these don't work": toolbar2: 'image ',
                //toolbar2: 'bold italic mybutton',
                //toolbar: 'mybutton',
				oninit : $scope.myCustomOnInit,

				//toolbar: 'true',
                menubar : 'false',
                init_instance_callback : function() {
                    if ($scope.q)
                        tinyMCE.activeEditor.setContent($scope.q);
                },

                setup : function(ed) {
                    //ed.onDeactivate.add(function(ed) {
                    //    alert ('in special function');
                    //    ed.save();  // or whatever you want to do to save the editor content
                    //    ed.remove(); // removes tinymce instance
                    //});

                    //ed.onKeyUp.add(function(ed,l) {
                    //    alert ('in onkeyup');
                    //    ed.save();  // or whatever you want to do to save the editor content
                    //});

					ed.on('init', function(e) {
						this.getDoc().body.style.fontSize = '20px';
						//alert('init event' + e);
						var elemId = 'mceu_57';
						if (document.getElementById(elemId) !== null)
						{
							//alert ('1123123');
						//	if (document.getElementById('mceu_57').style.visibility==='hidden')
						//		document.getElementById('mceu_57').style.visibility='visible';
						//	else
						//		document.getElementById('mceu_57').style.visibility='hidden';
							//if (document.getElementById(elemId).style.visibility==='visible')
							//{
								document.getElementById(elemId).style.visibility='hidden';
								//alert ('1123123b');

							//}
							//else
							//	document.getElementById(elemId).style.visibility='hidden';
						}
					});

					//ed.onLoadContent.add(function(ed, o) {
					//	// Output the element name
					//	alert ('sdfsf');
					//	//console.debug(o.element.nodeName);
					//});

                    //    toolbar: 'mybutton',
                    //    setup: function(editor) {
					ed.addButton('mybuttonimage', {
						//type: 'menubutton',
						//text: 'My button',
						//id: 'mcebuttonid2',
						//image: '/img/EditPencilBnW.png',
						image: '/img/SaveIconBlue.png',
						icon: false,
						onclick: function() {ed.insertContent('Menu item 0')},
						//menu: [
						//	{text: 'Menu item 1', onclick: function() {ed.insertContent('Menu item 1');}},
						//	{text: 'Menu item 2', onclick: function() {ed.insertContent('Menu item 2');}}
						//]
					});

					ed.addButton('mybuttonmenu', {
						type: 'menubutton',
						//id: 'mcebuttonid1',
						text: 'My button',
						//id: 'mcebuttonid',
						//image: '/img/EditPencilBnW.png',
						icon: false,
						//onclick: function() {ed.insertContent('Menu item 0')},
						menu: [
							{text: 'Menu item 1', onclick: function() {ed.insertContent('Menu item 1');}},
							{text: 'Menu item 2', onclick: function() {ed.insertContent('Menu item 2');}}
						]
					}					);


					ed.addButton('example', {
						text: 'My title',
						//image: '/img/EditPencilBnW.png',
						onclick: function() {
							ed.insertContent('Hello world!!');
						}
					});
					//alert ('inasd');

                    //    }

                    ed.on('keyup', function(e)
					{
						if (ed.getContent({format : 'text'}).trim() === '*' ||
							ed.getContent({format : 'text'}).trim() === '')
						{
							SppSvc.setModelDirty (false);
						} else {
							SppSvc.setModelDirty (true);
						}

						$scope.$apply();

						//console.log ('e.keyIdentifier:' + e.keyIdentifier);
						//console.log ('e.keyCode:' + e.keyCode);
						//console.log ('e.metaKey:' + e.metaKey);
						//console.log ('e.shiftKey:' + e.shiftKey);
						//console.log ('e.altKey:' + e.altKey);
						//alert ('e.ctrlKey:' + e.ctrlKey);


						if (e.keyIdentifier === 'Enter')
						{
							if (ed.getContent({format : 'text'}).trim() === '') {
								$scope.setTextInShowingEditor('*', 'line 889');
							}

							if ((!(!$scope.modelCheckboxCtrlEnterToSave && e.ctrlKey)) &&
								(!$scope.modelCheckboxCtrlEnterToSave || e.ctrlKey))
							{
								$scope.eventHandlerEditorcontentChange (
									$scope.enumKeyEvent.ENTER,
									ed.getContent({format : 'data'}),
									ed.getContent({format : 'html'}),
									ed.getContent({format : 'text'})
								);
							}
						} else if (e.keyCode === 32) {
							$scope.eventHandlerEditorcontentChange (
								$scope.enumKeyEvent.SPACE,
								ed.getContent({format : 'data'}),
								ed.getContent({format : 'html'}),
								ed.getContent({format : 'text'})
							);
						}

                        //console.log ('xx:' + tinyMCE.get('idDivForTinyMceEditorTextarea').getContent({format : 'text'}).trim());

                        //check_submit();
                    });

                    //ed.onKeyPress.add(
                    //    function (ed, evt) {
                    //        alert('Editor-ID: '+ed.id+'\nEvent: '+evt);
                    //        //....
                    //    }
                    //);
                    //
                    ////ed.onInit.add(function(ed, evt) {
                    //
                    //    var dom = ed.dom;
                    //    var doc = ed.getDoc();
                    //
                    //    tinymce.dom.Event.add(doc, 'blur', function(e) {
                    //        alert('blur!!!');
                    //    });
                    //});
                }, // setup
				theme_advanced_path : false,

					//setup: function(editor) {
                //    editor.on('blur', function(e) {
                //        console.log('blur event', e);
                //    });
                //}
                //setup : function(ed) {
                //    ed.on('blur', function(e) {
                //        alert('blur');
                //    });
                //}
                //,
                //setup : function(ed) {
                //    ed.onInit.add(function(ed, evt) {
                //
                //        var dom = ed.dom;
                //        var doc = ed.getDoc();
                //
                //        tinymce.dom.Event.add(doc, 'blur', function(e) {
                //            // Do something when the editor window is blured.
                //            alert('blur!!!');
                //        });
                //    });
                //},

                //setup: function(editor) {
                //    editor.on('blur', function(e) {
                //        console.log('blur event', e);
                //    });
                //}

            }); // tinymce init



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



            // from old project tinymce init
            //            tinyMCE.init
            //            (
            //                {
            ////                paste_auto_cleanup_on_paste : true,
            ////                paste_preprocess : function(pl, o) {
            ////                    // Content string containing the HTML from the clipboard
            ////                    alert('hi mom' + o.content);
            ////                    o.content = '-: CLEANED :-\n' + o.content;
            ////                },
            //
            //
            //                    // General options
            //                    oninit : initMyCustom,
            //
            //                    setup : function(ed)
            //                    {
            //
            //                        try
            //                        {
            ////                        ed.onActivate.add(function(ed) {
            ////                            alert('Editor was activated: ' + ed.id);
            ////                        });
            //
            //
            //                            // 2 Add a custom button
            //                            ed.addButton('mybutton', {
            //                                title : 'myTitle',
            //                                image : 'myImage.png',
            //                                onclick : function() {ed.selection.setContent('<p>Hello!</p>')}
            //                            });
            //
            //
            //                            ed.onClick.add
            //                            (
            //                                function(ed,e)
            //                                {
            //                                    //alert ('onClick:' + e.target.nodeName);
            //                                    //if (e.target.nodeName == 'A'&&e.altKey) {
            //                                    if (e.target.nodeName == 'A' && e.altKey) {
            //                                        window.open(e.target.href,'_blank');
            //                                    }
            //                                }
            //                            );
            //
            //                            ed.onKeyUp.add //hbk130616
            //                            (
            //                                function(ed,l)
            //                                {
            //
            //                                    // console.log('in keyup add')
            //
            //                                    var txtUpperText = tinyMCE.get('txtUpper').getContent({format : 'text'}).trim();
            //                                    if (document.title.toLowerCase() != txtUpperText.toLowerCase())
            //                                        document.title = '* '+txtUpperText;
            //
            //                                    var txtUpperHtml = tinyMCE.get('txtUpper').getContent({format : 'html'}).trim();
            //                                    //alert('in ed.onKeyUp.add3 l.keyCode :' + l.keyCode );
            //                                    //                                if (txtUpperText.endsWith('...'))
            //                                    //                                {
            //                                    //                                        //alert ('yes match')
            //                                    //                                    tinyMCE.activeEditor.setContent(txtUpperText[0])
            //                                    //                                    //setCaretToPos(getElementByIdHK('txtUpper'), 10000)
            //                                    //                                    //var rng = tinymce.DOM.createRng();
            //                                    //                                    //tinyMCE.activeEditor.setSelectionRange(tinyMCE.activeEditor, 0, 1);
            //                                    //                                    var textareahbk = document.getElementById('txtUpper');
            //                                    //                                    console.log ('moveCaretToEnd now textareahbk:'+ textareahbk );
            //                                    //                                    moveCaretToEnd(textareahbk);
            //                                    //
            //                                    //
            //                                    //
            //                                    //                                    //tinyMCE.activeEditor.selection.select(ed.dom.select('#_mce_temp_rob')[0])
            //                                    //                                }
            //                                    //                                else
            //                                    //                                {
            //                                    //                                    //alert ('no match')
            //                                    //                                }
            //
            //                                    // Type here
            //                                    //var txtUpperText = tinyMCE.activeEditor.getContent({format : 'html'}).trim();
            //                                    //var txtUpperText = tinyMCE.activeEditor.getContent({format : 'text'}).trim();
            //                                    //console.log ('in initmcehbk.1 in MCE Key up event: ' + l.keyCode + ', txtUpperText [' + txtUpperText + ']');
            //
            //                                    if (l.keyCode == 27) // escape
            //                                    {
            //                                        //oooo ('console > got an escape')
            //
            //                                        // escapehk
            //                                        if ( rowClickedDbId != '') //if already editing a row then first unedit
            //                                        {
            //                                            oooo ('console > got an escape 1')
            //                                            //alert ('escapehk')
            //                                            //alert ('txtUpper:'+ document.getElementById('txtUpper').value);
            //                                            //alert ('unclick id:' + rowClickedIndex)
            //                                            //console.log ('calling tableChangeUnclickRowTA')
            //                                            tableChangeUnclickRowTA('console > got an escape', rowClickedIndexCurrent)
            //                                            // togglezoom
            //                                            //innerLayout.show('south')
            //                                            //innerLayout.show('east')
            //                                            //innerLayout.show('west')
            //
            //                                            //        console.log('post unclick rowClickedIndex:' + rowClickedIndex)
            //                                            //        console.log('post unclick rowClickedDbId:' + rowClickedDbId)
            //
            //                                        }
            //                                        else
            //                                        {
            //                                            oooo ('console > got an escape 2')
            //                                            //document.activeElement.blur()
            //                                            //oooo('2setting to idTextFieldUtdoptions')
            ////                                        $('#idTextFieldUtdoptions').focus();
            ////                                        $('#idTextFieldUtdoptions').blur();
            //
            //                                            //id='select_se_command'
            //
            //                                            $('#select_se_command').focus();
            //                                            $('#select_se_command').blur();
            //                                        }
            //                                    }
            //                                    else if (l.keyCode == 13) // ENTER KEY
            //                                    {
            //                                        if (true) // make this false to disable enter key from either form of tinymce rich text box
            //                                        {
            //                                            //alert ('gg:' + convertStringToAsciiCommaSeparatedString(tinyMCE.activeEditor.getContent({format : 'html'}).trim()))
            //                                            //tinyMCE.activeEditor.setContent(trimTrailingNbspWithSpace(tinyMCE.activeEditor.getContent({format : 'html'})));
            //                                            if (txtUpperText == '')
            //                                            {
            //                                                txtUpperText = '*'
            //                                                tinyMCE.get('txtUpper').setContent('*');
            //                                            }
            //                                            txtUpperText = tinyMCE.get('txtUpper').getContent({format : 'text'}).trim();
            //                                            txtUpperHtml = tinyMCE.get('txtUpper').getContent({format : 'html'}).trim();
            //
            //
            //                                            //as compared with var commandText = getElementByIdHK('txtUpper').value.trim()  // real ampersand
            //                                            //as compared with var commandHTML = getElementByIdHK('txtUpper').innerHTML.trim()   // encoded ampersand
            //
            //
            //                                            //alert ('s1 [' + convertStringToAsciiCommaSeparatedString(txtUpperText) + ']');
            //                                            //alert ('s2 [' + toHex(txtUpperText) + ']');
            //
            //                                            // alert ('got an enter')
            //                                            while (txtUpperText.trim().endsWith('<br />'))
            //                                            {
            //                                                cnt++;if (cnt > 2)
            //                                                break;
            //                                                txtUpperText = txtUpperText.substr(0, txtUpperText.length-6).trim()
            //                                            }
            //
            //                                            if (txtUpperText.endsWith('&nbsp;'))
            //                                            {
            //                                                alert ('do I ever get here?');
            //                                            }
            //                                            else
            //                                            {
            //                                                // alert ('3 Key up event1 in enter key [' + txtUpperText  + ']')
            //
            //                                                var cnt = 0
            //                                                while (txtUpperText.trim().endsWith('<br />'))
            //                                                {
            //                                                    cnt++;if (cnt > 2)
            //                                                    break;
            //                                                    //alert ('3.5 Key up event trimming from:' + txtUpperText)
            //                                                    txtUpperText = txtUpperText.substr(0, txtUpperText.length-6).trim()
            //                                                    //alert ('trimming to:' + txtUpperText)
            //                                                }
            //                                                //alert ('4 Key up event in enter key pre filter [' + txtUpperText + ']')
            //                                                while (txtUpperText.trim().endsWith('<br />'))
            //                                                {
            //                                                    cnt++;if (cnt > 2)
            //                                                    break;
            //                                                    //alert ('trimming from:' + txtUpperText)
            //                                                    txtUpperText = txtUpperText.substr(0, txtUpperText.length-6).trim()
            //                                                    //alert ('trimming to:' + txtUpperText)
            //                                                }
            //                                                //alert ('5 1.777 Key up event in enter key ready to submit[' + txtUpperText + '] ensdwith ' w' [' + txtUpperText.endsWith(' w') + ']')
            //                                                //alert ('5 1.777 Key up event in enter key ready to submit [' + txtUpperText + '] getElementByIdHK('idTextFieldUtdoptions').value [' + getElementByIdHK('idTextFieldUtdoptions').value + ']')
            //                                                //console.log ('calling ajax from mcehandler 1.777')
            //
            //                                                // see also in gsp '        function onActionButtonClick_userClickedReset() {'
            //                                                ajax_FetchJsonTableData('AJAXCALLERID_CALLER_MCEHANDLER', txtUpperHtml.trim(), txtUpperText.trim(), false, getElementByIdHK('idTextFieldUtdoptions').value)
            //
            //                                            }
            //                                            //alert ('in tinymce.dom.Event.cancel(e);')
            //                                            //tinymce.dom.Event.cancel(evt);  hbk130616
            //
            //                                        }
            //                                    }
            //                                    else // ELSE A CHARACTER
            //                                    {
            //                                        //alert ('in ed.onKeyUp.add');
            //                                        //alert ('6 Key up event in else remotefunction')
            //                                        //copyupdown(2);
            //                                        //                            ${
            //                                        //                                remoteFunction(action: 'ajax_autocompleteSearchUpper',
            //                                        //                                    update: [success: 'leftnav', failure: 'not_listoutputxxxxxxxxxxx'],
            //                                        //                                    //params: '\'autocomp=\' + l.content',
            //                                        //                                    params: '\'autocomp=\' + tinyMCE.activeEditor.getContent({format : \'text\'})',
            //                                        //                            onComplete: 'postautocomplete(\'from_tiny_mce\');')
            //                                        // RESTRICT VIEWED RECORD SET
            //                                        //alert ('comparing to:' + hksetTermsInTxtupperSpaceDelimited.toString())
            //                                        //alert ('comparing:' + taclass)
            //                                        //alert ('to:' + CONST_FIELD_UPPER_CLASS )
            //
            //                                        if (taclass == CONST_FIELD_UPPER_CLASS )
            //                                        {
            //                                            PageData_state_txtUpperEdited = true;
            //                                            //alert ('set edted to true');
            //                                            //alert ('eureka it'txtUpperText true!');
            //                                            if (document.getElementById('idCheckboxFilter').checked)
            //                                            {
            //                                                // is there already a timer? clear if if there is
            //                                                // var stoppedTyping // outside the function
            ////                                            if (stoppedTyping)
            ////                                                clearTimeout(stoppedTyping);
            ////                                            // set a new timer to execute 3 seconds from last keypress
            ////                                            stoppedTyping = setTimeout(function(){
            ////                                                //alert ('you stopped typing seconds are up - filter  !!')
            //                                                hideRowsNotContainingFullTermSet('character in mce', tinyMCE.get('txtUpper').getContent({format : 'text'}), true, true, true, true, compareModes.contains)
            //                                                //}, 500); // millisecond timer
            //
            //
            //                                            }
            //                                        }
            //
            //
            //
            //
            //                                    }
            //                                }
            //
            //                            );
            //
            //                            ed.onInit.add(function(editor) {
            //                                tinymce.dom.Event.add(editor.getBody(), 'focus', function(e) {
            //                                    //oooo('focus1 ' +taclass);
            //                                    if (taclass == CONST_FIELD_UPPER_CLASS )
            //                                    {
            //                                        //oooo('focus12 '+rowClickedIndexCurrent)
            //                                        if (rowClickedIndexCurrent != '')
            //                                            tableChangeUnclickRowTA('unclick row hk', rowClickedIndexCurrent)
            //                                    }
            //
            //                                });
            //                            });
            //
            //                            ed.onInit.add(function(editor) {
            //                                tinymce.dom.Event.add(editor.getBody(), 'blur', function(e) {
            //                                    //oooo('blur2 ' +taclass);
            //                                });
            //                            });
            //
            //                            ed.onInit.add (
            //                                function(ed)
            //                                {
            //                                    //alert ('in mce onInit init . add')
            //                                    ed.getDoc().body.style.fontSize = inFontSize;
            //                                    ed.getDoc().body.style.color = 'olive';          // tinymce color constrolled here hbk color
            ////                                ed.getDoc().body.style.padding = '0'; //hbk
            ////                                ed.getDoc().body.style.margin = '0';  // hbk
            //                                    //tinyMCE.execCommand('mceFocus', false, 'txtUpper');
            //                                    var rich = (typeof tinyMCE != 'undefined') && tinyMCE.activeEditor != null && !tinyMCE.activeEditor.isHidden();
            //                                    //alert ('rich2:' + rich);
            //                                    //var s = tinyMCE.activeEditor.getContent();
            //                                    //tinyMCE.activeEditor.setContent(s)
            //
            //                                    //tinyMCE.activeEditor.focus();
            //
            //                                    //tinyMCE.get('txtUpper').focus();
            //
            //                                    //window.parent.tinyMCE.get(textareaIdToInit).focus()
            //
            //                                    this.focus();
            //
            //                                    window.parent.tinyMCE.execCommand('mceFocus', false, textareaIdToInit);
            //
            //
            //
            //                                }
            //                            );
            //
            //                        }
            //                        catch(err)
            //                        {
            //                            handleErr(err);
            //                        }
            //                    },
            //                    //onchange_callback : 'myCustomOnChangeHandler',
            //                    mode : 'specific_textareas', // see http://www.tinymce.com/wiki.php/Configuration:editor_selector
            //                    //mode : 'textareas', // see http://www.tinymce.com/wiki.php/Configuration:editor_selector
            //                    //editor_selector : /(mceEditor|mceRichText)/   not tried - from article
            //                    editor_selector : taclass, // only textareas with this clas
            //                    //editor_selector : 'classRowTextArea', // only textareas with this clas
            //                    //elements : 'fld2Lower', // only textareas with this clas
            //
            //                    //theme : themein, //advanced or simple
            //                    theme : 'simple', //advanced or simple
            //                    //theme : 'advanced', //advanced or simple
            //
            //                    // https://groups.google.com/forum/#!msg/jquery-ui-layout/dGIYxZX2JLI/W074IODoGv8J
            //                    //north__onresize: function () { alert ('resized'); },
            //                    //south__onresize: alert ('resized') },
            //                    ////plugins : 'autoresize, autolink,lists,spellchecker,pagebreak,style,layer,table,' +
            //                    // 'save,advhr,advimage,advlink,emotions,iespell,inlinepopups,insertdatetime,preview,media,' +
            //                    // 'searchreplace,print,contextmenu,paste,directionality,fullscreen,noneditable,visualchars,' +
            //                    // 'nonbreaking,xhtmlxtras,template',
            //                    //plugins : 'autoresize',
            //
            ////                //plusin 'autoresize',  // hbk130414
            //                    width: '100%',
            //                    height: '100%',
            ////                autoresize_min_height: 200,
            ////                autoresize_max_height: 800,
            //
            //
            //
            //
            //
            //                    //width: '100%',
            //                    //theme_advanced_statusbar_location : 'bottom',
            //                    //theme_advanced_resizing : true,
            //                    //theme_advanced_toolbar_location : 'left',
            //                    //theme_advanced_toolbar_align : 'left',
            //
            //                    theme : 'simple',
            //                    //plugins : 'autoresize',
            //
            //// from http://stackoverflow.com/questions/1799123/how-to-automatic-resize-tinymce
            ////                width: '100%',
            ////                height: 400,
            ////                autoresize_min_height: 400,
            ////                autoresize_max_height: 800,
            //
            //
            //
            //
            //                    //height: inheight,
            //                    // Theme options
            //                    //theme_advanced_buttons1 : buttons,
            //
            //                    //theme_advanced_buttons3 : 'tablecontrols,|,hr,removeformat,visualaid,|,sub,sup,|,charmap,emotions,iespell,media,advhr,|,print,|,ltr,rtl,|,fullscreen',
            //                    //theme_advanced_buttons4 : 'insertlayer,moveforward,movebackward,absolute,|,styleprops,spellchecker,|,cite,abbr,acronym,del,ins,attribs,|,visualchars,nonbreaking,template,blockquote,pagebreak,|,insertfile,insertimage',
            //
            //                    theme_advanced_buttons1 : 'save,newdocument,|,bold,italic,underline,strikethrough,|,justifyleft,justifycenter,justifyright,justifyfull,|,styleselect,formatselect,fontselect,fontsizeselect',
            //                    // NEAR ORIGINAL        theme_advanced_buttons2 : 'cut,copy,paste,pastetext,pasteword,|,search,replace,|,bullist,numlist,|,outdent,indent,blockquote,|,undo,redo,|,link,unlink,anchor,image,cleanup,help,code,|,insertdate,inserttime,preview,|,forecolor,backcolor',
            //                    // NEAR ORIGINAL       //theme_advanced_buttons3 : 'tablecontrols,|,hr,removeformat,visualaid,|,sub,sup,|,charmap,emotions,iespell,media,advhr,|,print,|,ltr,rtl,|,fullscreen',
            //                    // NEAR ORIGINAL       //theme_advanced_buttons4 : 'insertlayer,moveforward,movebackward,absolute,|,styleprops,spellchecker,|,cite,abbr,acronym,del,ins,attribs,|,visualchars,nonbreaking,template,blockquote,pagebreak,|,insertfile,insertimage',
            //                    //init_instance_callback: function (inst) { alert ('in resize'); inst.execCommand('mceAutoResize'); },
            //                    //init_instance_callback: function (inst) { alert('hi') },
            //                    // Skin options
            //                    //skin : 'o2k7',
            //                    //skin_variant : 'silver',
            //                    toolbar_items_size : 'small',
            //                    // Example content CSS (should be your site CSS)
            //                    //content_css : 'js/tinymce/jscripts/tiny_mce/themes/simple/skins/default/content.css',
            //
            //
            //
            //
            //                    // Drop lists for link/image/media/template dialogs
            //                    template_external_list_url : 'js/template_list.js',
            //                    external_link_list_url : 'js/link_list.js',
            //                    external_image_list_url : 'js/image_list.js',
            //                    media_external_list_url : 'js/media_list.js',
            //                    //js/tinymce/examples/lists/link_list
            //                    //        template_external_list_url : '../js/tinymce/examples/lists/template_list.js',
            //                    //        external_link_list_url : '../js/tinymce/examples/lists/link_list.js',
            //                    //        external_image_list_url : '../js/tinymce/examples/lists/image_list.js',
            //                    //        media_external_list_url : '../js/tinymce/examples/lists/media_list.js',
            //
            //                    // Replace values for the template plugin
            //                    template_replace_values : {
            //                        username : 'Some User',
            //                        staffid : '991234'
            //                    },
            //
            //
            //
            //                    // new lines only one line
            //                    force_br_newlines : true,
            //                    force_p_newlines : false,
            //                    forced_root_block : ''   // Needed for 3.x
            //                    ,auto_focus: textareaIdToInit,
            //
            //                    apply_source_formatting : true,
            //                    remove_linebreaks: false
            //                }
            //            );
            //
            //        }
            //        catch (err)
            //        {
            //            handleErr('in error in mceinit', err);
            //        }


















            // ckeditor test
            //CKEDITOR.replace('idCkeEditorTextarea');
            //alert('setting editor');
            // section_editor_init_cke
            //if (!$scope.alreadyInitializedCKeditor)
            //{
            //    alert ('initing CKEDITOR');
            //    $scope.toggleCkeToolebar();
            //    $scope.alreadyInitializedCKeditor = true;
            //}


            //$scope.whichInputIsInFocus = function() {
            //    if (document.activeElement.id === 'idInput0TypeText')
            //        return $scope.ns.Input.INPUT_0_TEXT;
            //    // 1 medium
            //    else if (document.activeElement.id === 'idMediumEditor')
            //        return $scope.ns.Input.INPUT_1_MEDIUM;
            //    // 2 cke
            //    else if (document.activeElement.parentElement.id.indexOf('cke') >= 0)
            //        return $scope.ns.Input.INPUT_2_CKE;
            //    else
            //        alert ('errra');
            //}

            // section_per_editor -1
            $scope.whichInputIsInFocus = function() {
                var currentlyInFocus = $scope.currentVisibleCounter % arrIds.length;
                // 0 input text box
                if ($scope.ns.Input.INPUT_0_TEXT === currentlyInFocus)
                    return $scope.ns.Input.INPUT_0_TEXT;
                // 1 medium
                else if ($scope.ns.Input.INPUT_1_MEDIUM === currentlyInFocus)
                    return $scope.ns.Input.INPUT_1_MEDIUM;
                //// 2 cke
                //else if ($scope.ns.Input.INPUT_2_CKE === currentlyInFocus)
                //    return $scope.ns.Input.INPUT_2_CKE;

                else if ($scope.ns.Input.INPUT_3_MCE === currentlyInFocus)
                    return $scope.ns.Input.INPUT_3_MCE;

                else
                    return $scope.ns.Input.INPUT_NONE_IS_IN_FOCUS;
            };

            //$scope.editor = CKEDITOR.instances.idCkeEditorTextarea;

            //var e = CKEDITOR.instances['idCkeEditorTextarea'];
            var callcountContentDom = 0;
            //alert( 'hi hk e:' + e );
            //e.on( 'change', function() {
            //    O.o ('callcountContentDom keyup:' + callcountContentDom++);
            //    //$scope.contentChange();
            //    //$scope.contentChange(CKEDITOR.instances.idCkeEditorTextarea.document.getBody().getHtml()+'ggg');
            //    //$scope.contentChange(+'hhh');
            //    $scope.eventHandlerEditorcontentChange(e.getData(), e.document.getBody().getHtml(), e.document.getBody().getText());
            //});
            // http://stackoverflow.com/questions/24375780/ckeditor-keyup-event-and-capturing-data-from-inline-editors
            //e.on( 'contentDom', function() {
            //    var editable = e.editable();
            //    editable.attachListener( editable, 'keyup', function() {
            //        O.o ('callcountContentDom keyup:' + callcountContentDom++);
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
            //        O.o ( '0 in contentdom ' );
            //        if ( !event.data.$.ctrlKey && !event.data.$.metaKey )
            //        {
            //            // something changed
            //            //O.o ( '1 in contentdom ' + $scope.editor.getData() );
            //            //O.o ( '2 in contentdom ' + event.data.$.keyCode);
            //            //O.o ( '3 in contentdom ' + !event.data.$.ctrlKey && !event.data.$.metaKey);
            //            $scope.respondToKeyboardEvent('line360', event.data.$.keyCode);
            //        }
            //
            //
            //        //var keyCode= keyEvent.getKey();
            //        //O.o ( '1 in contentdom ' + $scope.editor.getData() );
            //        //O.o ( '2 in contentdom ' + keyCode);
            //        //O.o ( '2 in contentdom ' + !event.data.$.ctrlKey && !event.data.$.metaKey);
            //        //O.o ( $scope.editor.getData() );
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
            //    //        O.o ('in contentDom2 ' + ev);
            //    //
            //    //        console.log( $scope.editor.getData() );
            //    //    } );
            //    //} );
            //    //
            //    $scope.editor.on('key', function(event) {
            //        var x = CKEDITOR.instances.idCkeEditorTextarea.getData();
            //        //var xText = CKEDITOR.instances.idCkeEditorTextarea.document.getBody().getText()
            //        //o('raw key x:' + x); // hbkhbk
            //        $scope.respondToKeyboardEvent();
            //        //console.log('raw key xText:' + xText); // hbkhbk
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


            $scope.focusOnId = function (id) {
                //alert ('in focusOnId :' + id);

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
                        //alert ('in focusOnId 3:'+ id);
                        var el = document.getElementById(id);
                        var range = document.createRange();
                        var sel = window.getSelection();
                        //range.setStart(el.childNodes[0], 5);
                        //range.collapse(true);
                        //sel.removeAllRanges();
                        //sel.addRange(range);
                        el.focus();
                    }
                    //else
                    //{
                    //    //alert ('in focusOnId else');
                    //    //var editor = CKEDITOR.instances.idCkeEditorTextarea;
                    //    //editor.focusManager.focus( editor.editable() );
                    //
                    //
                    //}



                } catch (e) {
                    console.log ('era1:' + e);
                }

            };



            // section_per_editor 0
            $scope.inputbind ='search or inputx';

            //$scope.onKeyDownInputField = function() {
            //    //var inputText = $scope.mmmm.element.innerText;
            //    $scope.count++;
            //    O.o('in onKeyDownInputField:'+$scope.count)
            //    //console.log ('inkey onKeyDownInputField t:' + t);
            //    if (inputText.indexOf('search or input') === 0)
            //    {
            //        //console.log ('change it:' + t);
            //        //$scope.mmmm.element.innerHTML = '';
            //        //$scope.mmmm.element.innerText
            //    }
            //}

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


            $scope.onKeyUp_perrow_text = function (keyEvent, index, _id) // https://docs.angularjs.org/api/ng/directive/ngKeyup
            {
				var newHtml = document.getElementById('ustodorow'+index).innerHTML;
				var newText = document.getElementById('ustodorow'+index).innerText;

                if (keyEvent.keyCode !== 27 ) // if not escape key
				{
					// change local image to requiring a save
					var savImgHtml = document.getElementById('savimg'+index);
					//alert ('savImgHtml.src:' + savImgHtml.src);
					savImgHtml.src = savImgHtml.src.replaceAll('saveIcon.jpg', 'SaveIconBlue.png');

					return;
				}


                //alert ('newHtml:' + newHtml);
                //alert ('in onKeyUp_perrow_text escape id:' + 'ustodorow'+index); // not non-escape

				UtilNLB_bgFade.NLBfadeBg('numberWrapForFade'+index,'green', '#FFFFFF','1500');
				//alert ('newHtml:' + newHtml);

                //<a target='_blank' href='http://ibm.com'>http://ibm.com</a>

                var fnCallbackFromUpdate = function (errorResponse) {
                    alert ('ERROR ON SAVE !!! errorResponse:' + errorResponse);
                    //
                    //$scope.error = errorResponse.data.message;
                    //alert ('ERROR ON SAVE !!! ' + $scope.ustodos[i].html);
                };

                var found = false;
                //find the element in memory matching the id passed from the UI on the click
                // might have this passed in OK - check it and maybe can remove this loop
                for (var i = 0; i < $scope.ustodos.length; i++)
                {
                    if ($scope.ustodos[i]._id === _id)
                    {
                        found = true;
                        //alert ('found match at index:' + i + ' with original text :' + $scope.ustodos[i]);


						var savImgHtml = document.getElementById('savimg'+index);
						//alert ('savImgHtml.src:' + savImgHtml.src);
						savImgHtml.src = savImgHtml.src.replaceAll('SaveIconBlue.png', 'saveIcon.jpg');


						$scope.ustodos[i].html = newHtml;

                        // maps to exports.update
                        //$scope.ustodos[i].$update(function () {
                        //    alert ('---------------------------- SAVED utd OK !!! ');
                        //}, fnCallbackFromUpdate);

                        // section_update per row on update with escape key
                        $scope.ustodos[i].$update(function() { // bridge maps to ustodos.server.controller.js exports.update = function(req, res) { in server controller
                            //alert('success save newHtml [' + newHtml + ']');

                        }, function(errorResponse) {
                            alert('error on save errorResponse.data.message [' + errorResponse.data.message + ']');
                        });
                        //alert ('done update submit [' + $scope.ustodos[i].html + ']');
                    }
                }
                //O.o ('========== $scope.state_delectedItem set to -1');
				SppSvc.setSelectedItem(-1);

				document.getElementById('ustodorow'+index).blur();

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
                //O.o ('========== set mouseoverlock:' + $scope.mouseoverlock);


                //O.o ('in onkeyup desc ['+ desc +'] ENUM_KEYEVENTcaller [' + ENUM_KEYEVENTcaller + 'keyEvent.keyCode:' + keyEvent.keyCode);
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
                //O.o('onKeyUp:' + keyCode);
                //O.o('onKeyUp:' + getKeyboardEventResult($event, 'Key up')); // hbkhbk
                // $scope.respondToKeyboardEvent('line634', keyCode);
            };

            //$scope.onKeyUp = function(ev) {
            //    ////alert('onKeyUp:' + ev); // hbkhbk
            //    //console.log('onKeyUp:' + getKeyboardEventResult); // hbkhbk
            //    ////console.log ('onKeyUp'); // hbkhbk
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

            // section_per_editor 1
            $scope.prop0Input = function () {
                try {

                    //alert ('in prop0');
                    var x = document.getElementById('idInput0TypeText').value;

                    $scope.currentValueAfterBlurText = x;
                    $scope.currentValueAfterBlurHtml = x;

                    //alert ('start case 0 x [' + x + ']')
                    // 0 text input
                    //document.getElementById('idInput0TypeText').value = x;

                    // 1 medium
                    $scope.mmmm.element.innerHTML = x;

                    // 2 CKE
                    //CKEDITOR.instances.idCkeEditorTextarea.setData(x);

                    // 3 mce

                    //tinyMCE.getInstanceById('idTinyMceTextArea').setContent(x);
                    tinyMCE.get('idTinyMceTextArea').setContent(x);


                    //O.o('done case 0')
                }  catch (e) {
                    alert ('error in prop0Input:' + e);
                }
            };

            $scope.prop1Medium = function () {
                try {
                    //alert ('in prop1');

                    var x = $scope.mmmm.element.innerText;
                    var xHtml = $scope.mmmm.element.innerHTML;
                    $scope.currentValueAfterBlurText = x;
                    $scope.currentValueAfterBlurHtml = xHtml;
                    O.o('start case 1 x [' + x + ']');
                    //alert ('start case 1 x:' + x);

                    // 0 text input
                    document.getElementById('idInput0TypeText').value = x;

                    // 1 medium
                    //$scope.mmmm.element.innerHTML = $scope.inputbind;

                    // 2 CKE
                    //CKEDITOR.instances.idCkeEditorTextarea.setData(xHtml);

                    // 3 mce
                    //tinyMCE.getInstanceById('idTinyMceTextArea').setContent(xHtml);
                    tinyMCE.get('idTinyMceTextArea').setContent(xHtml);

                    O.o('done case 1');
                }  catch (e) {
                    alert ('error in prop1Medium:' + e);
                }
            };

            //$scope.prop2Cke = function () {
            //    alert ('in prop2Cke ')
            //    try {
            //        //alert ('start case 2')
            //        var xText = CKEDITOR.instances.idCkeEditorTextarea.document.getBody().getText();
            //        var xHtml = CKEDITOR.instances.idCkeEditorTextarea.getData();
            //        //alert('start case 2 x [' + xText + ']')
            //        $scope.currentValueAfterBlurText = xText;
            //        $scope.currentValueAfterBlurHtml = xHtml;
            //
            //        // 0 text input
            //        document.getElementById('idInput0TypeText').value = xText;
            //
            //        // 1 medium
            //        $scope.mmmm.element.innerHTML = xHtml;
            //
            //        // 2 CKE
            //        //CKEDITOR.instances.idCkeEditorTextarea.setData($scope.inputbind)
            //
            //        // 3 mce
            //        //alert ('settr mce [' + xHtml + ']');
            //        tinyMCE.getInstanceById('idTinyMceTextArea').setContent(xHtml);
            //
            //
            //    }  catch (e) {
            //        alert ('error in prop2Cke:' + e);
            //    }
            //};

            $scope.prop3mce = function () {
                alert ('start prop3mce ')
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
                    document.getElementById('idInput0TypeText').value = xText;

                    // 1 medium
                    $scope.mmmm.element.innerHTML = xHtml;

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



            var arrIds = ['idInput0TypeText', 'idMediumEditor', 'idDivForCkeEditorTextarea', 'idDivForTinyMceEditorTextarea', ];
            //var arrIds = ['idInput0TypeText', 'idMediumEditor', 'idDivForCkeEditorTextarea', 'idDivForTinyMceEditorTextarea'];
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
            //$scope.toggleVisibilityToNext = function() {
            //
            //    try {
            //        alert ('in toggleVisibilityToNext');
            //
            //        $scope.currentVisibleCounter++;
            //        //idInput0TypeText
            //        //idMediumEditor
            //        //idDivForCkeEditorTextarea
            //        //idTinyMceTextArea
            //        ////idInput4TypeSpan
            //
            //        for (var i = 0; i < arrIds.length; i++)
            //        {
            //            try {
            //                var e = document.getElementById(arrIds[i]);
            //                if (i === $scope.currentVisibleCounter % arrIds.length) {
            //                    e.style.display = 'block';
            //                    $scope.focusOnId(arrIds[i]);
            //
            //                    //alert ('in toggleVisibility 1 for id ' + id + ', e.style.display:' + e.style.display);
            //                    //O.o ('in toggleVisibility for id ' + arrIds[i] + ', setting display to:' + e.style.display);
            //                    //O.o ('in toggleVisibility $scope.currentVisibleCounter:' + $scope.currentVisibleCounter);
            //                    //O.o ('in toggleVisibility arrIds.length:' + arrIds.length);
            //                    //O.o ('in toggleVisibility $scope.currentVisibleCounter % arrIds.length:' + ($scope.currentVisibleCounter % arrIds.length));
            //                }
            //                else
            //                    e.style.display = 'none';
            //
            //            } catch (e) {
            //                alert ('erra in toggleVisibilityToNext loop on id [' + arrIds[i] + '] e:' + e );
            //            }
            //        }
            //    } catch (e) {
            //        alert ('era in toggleVisibilityToNext:' + e);
            //    }
            //
            //    //alert ('in toggleVisibilityToNext');
            //
            //    //this.toggleVisibility('idInput0TypeText');
            //    //this.toggleVisibility('idMediumEditor');
            //    //this.toggleVisibility('idDivForCkeEditorTextarea');
            //};

            // section_per_editor 2
            $scope.toggleVisibilityTo0 = function() {
				//alert ('in toggleVisibilityTo0');
                // couldn't figure out mce blur so use this
				SppSvc.setWhichEditorShowing($scope.ns.Input.INPUT_0_TEXT);
                $scope.focusOnId(arrIds[0]);
                if ($scope.whichInputIsInFocus === $scope.ns.Input.INPUT_3_MCE)
                    $scope.prop3mce();
                document.getElementById(arrIds[1]).style.display = 'none';
                document.getElementById(arrIds[2]).style.display = 'none';
                document.getElementById(arrIds[3]).style.display = 'none';
                document.getElementById(arrIds[0]).style.display = 'block';
                $scope.currentVisibleCounter = $scope.ns.Input.INPUT_0_TEXT;

            };

            $scope.toggleVisibilityTo1 = function() {
				//alert ('in toggleVisibilityTo1');
                // couldn't figure out mce blur so use this
				SppSvc.setWhichEditorShowing($scope.ns.Input.INPUT_1_MEDIUM);
                //alert ('in toggleVisibilityTo1 Medium');
                if ($scope.whichInputIsInFocus === $scope.ns.Input.INPUT_3_MCE)
                    $scope.prop3mce();
                document.getElementById(arrIds[0]).style.display = 'none';
                document.getElementById(arrIds[2]).style.display = 'none';
                document.getElementById(arrIds[3]).style.display = 'none';
                document.getElementById(arrIds[1]).style.display = 'block';
                //alert('pre move focus to 1 in toggleVisibilityTo1')
                $scope.focusOnId(arrIds[1]);
                //alert('post move focus to 1 in toggleVisibilityTo1')
                $scope.currentVisibleCounter = $scope.ns.Input.INPUT_1_MEDIUM;
            };

            //$scope.toggleVisibilityTo2 = function() {
				//alert ('in toggleVisibilityTo2');
            //    $scope.whichEditorShowing = $scope.ns.Input.INPUT_2_CKE;
            //    //alert ('in toggleVisibilityTo2 CKE');
            //    if ($scope.whichInputIsInFocus() == $scope.ns.Input.INPUT_3_MCE)
            //    {
            //        $scope.prop3mce();
            //    }
            //    document.getElementById(arrIds[0]).style.display = 'none';
            //    document.getElementById(arrIds[1]).style.display = 'none';
            //    document.getElementById(arrIds[3]).style.display = 'none';
            //    document.getElementById(arrIds[2]).style.display = 'block';
            //    $scope.currentVisibleCounter = $scope.ns.Input.INPUT_2_CKE;
            //    setTimeout(function(){ $scope.focusOnId(arrIds[2]); }, 300);
            //    setTimeout(function(){ $scope.focusOnId(arrIds[2]); }, 600);
            //};
            //
            $scope.toggleVisibilityTo3 = function(callerId) {
				//alert ('in toggleVisibilityTo3');
				SppSvc.setWhichEditorShowing($scope.ns.Input.INPUT_3_MCE);
                //alert ('in toggleVisibilityTo3 MCE callerId [' + callerId + ']');
                document.getElementById(arrIds[0]).style.display = 'none';
                document.getElementById(arrIds[1]).style.display = 'none';
                document.getElementById(arrIds[2]).style.display = 'none';
                document.getElementById(arrIds[3]).style.display = 'block';
                $scope.currentVisibleCounter = $scope.ns.Input.INPUT_3_MCE;
                setTimeout(function(){ $scope.focusOnId(arrIds[3]); }, 300);
                setTimeout(function(){ $scope.focusOnId(arrIds[3]); }, 600);
            };


            //alert ('defining eventClickedTheAnimals ');

            $scope.eventBlur0InputText = function () {
                $scope.prop0Input();

            };

            $scope.eventBlur1Medium = function () {

                //alert ('in eventBlur1Medium');
                $scope.prop1Medium();
            };


            $scope.eventBlur3mce = function () {
                alert ('in eventBlur3mce') ;
                $scope.prop3mce();
            };


            $scope.alerthk = function () {

                alert ('in alerthk:' );
            };



            //alert ('defining medium');
            $scope.mmmm = new Medium({
                element: document.getElementById('idMediumEditor'),
                modifier: 'auto',
                placeholder: '',
                autofocus: false,
                autoHR: true,
                mode: Medium.richMode,
                maxLength: -1,
                modifiers: {
                    'b': 'bold',
                    'i': 'italicize',
                    'u': 'underline',
                    'v': 'paste'
                },
                tags: {
                    'break': 'br',
                    'horizontalRule': 'hr',
                    'paragraph': 'p',
                    'outerLevel': ['pre', 'blockquote', 'figure'],
                    'innerLevel': ['a', 'b', 'u', 'i', 'img', 'strong']
                },
                cssClasses: {
                    editor: 'Medium',
                    pasteHook: 'Medium-paste-hook',
                    placeholder: 'Medium-placeholder',
                    clear: 'Medium-clear'
                },
                attributes: {
                    remove: ['style', 'class']
                },
                pasteAsText: true,
                beforeInvokeElement: function () {
                    //this = Medium.Element
                },
                beforeInsertHtml: function () {
                    //this = Medium.Html
                },
                beforeAddTag: function (tag, shouldFocus, isEditable, afterElement) {
                },
                keyContext: null,
                pasteEventHandler: function(e) {
                    /*default paste event handler*/
                }
            });

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
                    //O.o('in propagateTextChanges');
                    //O.o('in onKeyUp1:'+$scope.count);
                    //O.o('in onKeyUp $scope.inputbind:'+$scope.inputbind);

                    // 0 input text
                    //if ($scope.currentVisibleCounter % arrIds.length === 0)
                    //{
                    //    $scope.prop0Input();
                    //}
                    //// 1 medium mmmm
                    //else if ($scope.currentVisibleCounter % arrIds.length === 1)
                    //{
                    //    $scope.prop1Medium();
                    //}
                    //// 2 cke
                    //else if ($scope.currentVisibleCounter % arrIds.length === 2)
                    //{
                    //    $scope.prop2Cke();
                    //}
                    //else
                    //{
                    //    alert ('fail!!');
                    //}
                    //alert ('in window.document.title 1 $scope.mmmm.element.innerText:' + $scope.mmmm.element.innerText);
                    //window.document.title = 'jp:'+$scope.mmmm.element.innerText; // not jpro:

                    //tinyMCE.activeEditor.setContent($scope.inputbind);

                    // had trouble with the set on mce - killed it for now
                    //var x = tinyMCE.get('idTinyMceTextArea').getContent();;
                    //O.o('current mce :' + x )
                    //tinyMCE.get('idTinyMceTextArea').setContent($scope.inputbind);;


                    //var x = document.getElementById('idInput0TypeText').innerText

                    //O.o('in onKeyUp2 set title to ============ ['+x + ']');


                    //O.o('in onKeyUp:'+$scope.count)
                    //var inputText = $scope.mmmm.element.innerText; // medium
                    ////console.log ('inkey onKeyUp index t [' + t + ']' );
                    //
                    //if (inputText.length > 1)
                    //{
                    //    if (inputText[inputText.length-1].charCodeAt(0) === 10)
                    //    {
                    //        //alert       ('enter detected');
                    //        $scope.processCommand(inputText);
                    //    }
                    //    //console.log('t-1:' + t[t.length-1])
                    //    //console.log('t-1:' + t[t.length-1].charCodeAt(0))
                    //    //console.log('t-2:' + t[t.length-2])
                    //    //console.log('t-2:' + t[t.length-2].charCodeAt(0))
                    //    //console.log('a:' + $scope.mmmm.element.innerHTML);
                    //}
                    //isDirtySetFlag_updateScopeStateFlag_SaveDiffsOption(false);
                    //alert ('inkey keypress commandFromInputBox:' + this.inputbind);
                    //var t = $scope.mmmm.element.innerText;
                    //if (t.indexOf('search or input') === 1)
                    //{
                    //    $scope.mmmm.element.innerText = 'joe';
                    //    //$scope.mmmm.element.innerText
                    //}

                    //console.log('a [' + $scope.mmmm.element.innerText + ']');

                    //$scope.$apply()

                } catch (e) {
                    alert ('e22:' + e);
                }

            } // structuring block


            // MAJOR COMMON FUNCTION - SET ACTIVE EDITOR CONTENT
            // set text shown for mouseover

            // section_per_editor 3
            $scope.setTextInShowingEditor = function(e, callerID, processFailure)
            {
                //alert ('in setTextInShowingEditor e [' + e + '] callerID [' + callerID + ']');
                try {
                    switch($scope.whichInputIsInFocus())
                    {
                        case $scope.ns.Input.INPUT_0_TEXT:
                            //alert ('+++++++++ in setTextInShowingEditor target INPUT_0_TEXT e:' + e);
                            if (UtilJsTypeDetect.isString(e)) {
                                //alert('set inp in setTextInShowingEditor for input0text [' + e + ']');
                                document.getElementById('idInput0TypeText').value = e;
                            }
                            else
                                document.getElementById('idInput0TypeText').value = e.innerText;
                            break;
                        case $scope.ns.Input.INPUT_1_MEDIUM:
                            //alert ('+++++++++ in setTextInShowingEditor target INPUT_1_MEDIUM e:' + e);
                            alert ('in setTextInShowingEditor for input1medium');
                            if (UtilJsTypeDetect.isString(e))
                            //alert('logic error - setting Medium rich editor with string [' + e + '] leaving at prior value');
                                $scope.mmmm.element.innerHTML = e;
                            else
                                $scope.mmmm.element.innerHTML = e.innerHTML;
                            break;
                        //case $scope.ns.Input.INPUT_2_CKE:
                        //    alert ('in settext 2');
                        //    //alert ('+++++++++ in setTextInShowingEditor target INPUT_2_CKE e:' + e);
                        //    if (UtilJsTypeDetect.isString(e))
                        //    {
                        //        //alert('logic error - setting CKE rich editor with string [' + e + '] leaving at prior value');
                        //        CKEDITOR.instances.idCkeEditorTextarea.setData(e);
                        //    }
                        //    else
                        //        CKEDITOR.instances.idCkeEditorTextarea.setData(e.innerHTML);
                        //    break;
                        case $scope.ns.Input.INPUT_3_MCE:
                            //alert ('in settext 3 e [' + e + '] callerID [' + callerID + ']');
                            //alert ('in settext 3');
                            //alert ('+++++++++ in setTextInShowingEditor target INPUT_3_MCE e:' + e);
                            if (UtilJsTypeDetect.isString(e)) {
                                //tinyMCE.get('idTinyMceTextArea').setContent(e);
                                tinyMCE.activeEditor.setContent(e);
                            }
                            //alert('logic error - setting CKE rich editor with string [' + e + '] leaving at prior value');
                            else {
                                //tinyMCE.get('idTinyMceTextArea').setContent(e.innerHTML);
                                tinyMCE.activeEditor.setContent(e.innerHTML);
                            }
                            break;

                        default:
                            alert ('era - bad input resolution');
                    }
                } catch (e) {
                    if (processFailure)
                        UtilErrorEmitter.emitError ('era3', e);
                    throw e;
                }
            };

            // section_per_editor 5
            $scope.getTextHtmlAndValueInShowingEditor = function()
            {
                var xText = null;
                var xHtml = null;
                var xValue = null;
                var xHtmlStripped = null;
                try {
                    switch($scope.whichInputIsInFocus())
                    {
                        case $scope.ns.Input.INPUT_0_TEXT:
                            xText = document.getElementById('idInput0TypeText').innerText;
                            xHtml = document.getElementById('idInput0TypeText').innerHTML;
                            xValue = document.getElementById('idInput0TypeText').value;
                            break;
                        case $scope.ns.Input.INPUT_1_MEDIUM:
                            xText = $scope.mmmm.element.innerText;
                            xHtml = $scope.mmmm.element.innerHTML;
                            xValue = $scope.mmmm.element.innerText;
                            xHtmlStripped = xHtml.replace('<p>','');
                            xHtmlStripped = xHtmlStripped.replace('</p>','');
                            xHtmlStripped = xHtmlStripped.trim();
                            break;
                        //case $scope.ns.Input.INPUT_2_CKE:
                        //    xHtml = CKEDITOR.instances.idCkeEditorTextarea.getData();
                        //    alert ('xHtml from 2 cke [' + xHtml + ']');
                        //    break;
                        case $scope.ns.Input.INPUT_3_MCE:
                            //alert ('in setTextInShowingEditor for input2cke');
							xText = tinyMCE.activeEditor.getContent({format: 'text'});
							xHtml= tinyMCE.activeEditor.getContent();
                            //alert ('xHtml from 3 mce [' + xHtml + ']');
                            break;
                        default:
                            alert ('era - bad input resolution');
                    } // switch

                } catch (e) {
                    alert ('era2:' + e);
                    throw e;
                }

                var rtn = {};
                rtn.xText = xText;
                rtn.xHtml = xHtml;
                rtn.xValue = xValue;
                rtn.xHtmlStripped = xHtmlStripped;
                return rtn;
            };



            //alert ('defined medium');

            console.log ('000000000000000000000000000000 in ustodos.client.controller init');

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
            //$scope.commands = Commands.query(function() {
            //    //$scope.commands = query.exec (function() {
            //    //alert ('done query $scope.commands.length:' + $scope.commands.length);
            //    for (var i = 0; i < $scope.commands.length; i++) {
            //        var map = {};
            //        console.log ('$scope.commands[i].commandDescription:' + $scope.commands[i].commandDescription);
            //        map.value = $scope.commands[i].commandDescription;
            //        map.displayName = $scope.commands[i].commandDescription;
            //        //alert('$scope.commands[i].commandDescription:' + $scope.commands[i].commandDescription);
            //        //commandsValueName.push ({value:$scope.commands[i].commandDescription})
            //        $scope.operators.push(map);
            //    }
            //
            //});
            //
            $scope.filterCondition = '-save';



            //$scope.filterCondition= {
            //    operator: 'eq'
            //};

            //$scope.commandsxx = 1;

            //$scope.filterCondition= {
            //    operator: 'eq'
            //};

            //$scope.commandsxx = 1;
            //$scope.operators = [
            //    {value: 'eq', displayName: 'equals'},
            //    {value: 'neq', displayName: 'not equal'}
            //];

            $scope.mml = angular.element(document.getElementById('myMenuList'));

            //$locationProvider.html5Mode(true).hashPrefix('!');

            $scope.SkipValidationHK = function(value) {
                return $sce.trustAsHtml(value);
            };

            // section_handlers sectionevents mouseover rows etc.
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

            //var o = O.o;

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

            // eventHandlerEditorcontentChange was eventHandlerCKEcontentChange
            $scope.eventHandlerEditorcontentChange = function(enumKeyEvent, data, html, text)
            {
                try {

                    //document.getElementById('idInputTextFilter').value = text;

                    callcounteventHandlerEditorcontentChange++;
                    if (enumKeyEvent === $scope.enumKeyEvent.ENTER)
                    {
                        //alert ('enter pressed');
                    }
                    else if (enumKeyEvent === $scope.enumKeyEvent.SPACE)
                    {
                        O.o ('space pressed');
                    }
                    //if (html === priorhtml)
                    //    alert('same html');

                    priorhtml = html;

			//O.o ( 'callcnt [' + callcounteventHandlerEditorcontentChange +
			//'] in eventHandlerEditorcontentChange ' +
			//'] \r\n1 data [' + data + '] ascii [' + data.asciiTable('data (1/3)') + ']' +
			//'] \r\n2 html [' + html + '] ascii [' + html.asciiTable('html (2/3)') + ']' +
			//'] \r\n3 text [' + text + '] ascii [' + text.asciiTable('text (3/3)') + ']');
                    //alert( 'data  [' + data + ']');
                    //alert( 'html [' + html + ']');
                    //alert( 'text [' + text + ']');
                    //O.o('text [' + text + ']');
                    //O.o('text.charCodeAt(text.length-1) [' + text.charCodeAt(text.length - 1) + ']');

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
                    text = UtilString.convertNonBreakingSpace(text);
                    text = UtilString.convertRemoveTrailing10(text);
                    //alert('text.asciiTable 2():' + text.asciiTable('POST NBSP AND 10 CONVERT'));

                    //if (text.endsWith(' ') && $scope.dynamicSearch ) {
                    if (text.endsWith(' ') && $scope.dynamicSearch ) {
                        //alert ('not     skipping')
                        $scope.processCommand($scope.enumCommands.COMMAND_SEARCH,
                            'caller eventHandler space and ends w space', text, html, data);
                    }
                    else if (enumKeyEvent === $scope.enumKeyEvent.ENTER) {
                        $scope.processCommand($scope.enumCommands.COMMAND_SEARCH,
                            'caller eventHandler ENTER key pressed', text, html, data);
                    }
                    else if (text.endsWith(' w')) {
                        $scope.processCommand($scope.enumCommands.COMMAND_WRITE,
                            'caller eventHandlerEditorcontentChange write', text, html, data);
                        //alert('calling processCommand');
                    }
                } catch (e) {
                    UtilErrorEmitter.emitError('in eventHandlerEditorcontentChange', e);
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
                //O.o ('inkey myFnOnKeyDown $index:' + $index + ', $event.keyCode:' + $event.keyCode);
                //O.o ( ' [ ' + $scope.ustodo.$index + ']');

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
				return $scope.getTextHtmlAndValueInShowingEditor().xText.trim() === '';
			}

            $scope.eventMouseoverRow2 = function(i)
			{
				//alert ('$scope.getTextHtmlAndValueInShowingEditor() ['+ $scope.getTextHtmlAndValueInShowingEditor().xText + ']');
				if (
					// if not selected, if not
					(SppSvc.getSelectedItem() === -1 && !SppSvc.getModelDirty()
				) ||
						$scope.isCurrentEditorEmpty())
					{
					//if ($scope.mouseoverlock !== 'on') {
					//$scope.setTextInShowingEditor(document.getElementById('ustodorow'+i));
					$scope.setTextInShowingEditor($scope.ustodosFiltered[i].html, 'line 2254');

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
            //    //O.o ('in $scope.respondToKeyboardEvent() desc ['+ desc + ']');
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
            //            O.o ('in 1 respondToKeyboardEventkey 1 xText:' + xText);
            //            O.o ('in 2 respondToKeyboardEventkey 2 xHtml:' + xHtml);
            //            O.o ('in 3 respondToKeyboardEventkey 3 xValue:' + xValue);
            //            //O.o ('keyCode:' + keyCode);
            //            //O.o ('keyCode:' + keyCode);
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
            //                    //O.o ('bShouldIcommand based on space and lastchar 87 big w');
            //                    bShouldIcommand = true;
            //                }
            //                else if (xValue.trim().charCodeAt(xValue.trim().length-1) === 119)
            //                {
            //                    //O.o ('bShouldIcommand based on space and lastchar 119 little w');
            //                    bShouldIcommand = true;
            //                }
            //                //else if (document.getElementById('idcheckbox_dynamicSearch').checked)
            //                else if ($scope.dynamicSearch)
            //                {
            //                    //O.o ('bShouldIcommand based on space and idcheckbox_dynamicSearch checked');
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
            //            O.o ('xHtml [' + xHtml + ']');
            //            //xHtmlStripped = xHtml.replace('<p>','');
            //            //xHtmlStripped = xHtmlStripped.replace('</p>','');
            //            //xHtmlStripped = xHtmlStripped.trim();
            //            //if (xHtmlStripped.endsWith('&nbsp;')) {
            //                //bShouldIcommand = true;
            //                //O.o ('yes ends with space');
            //            //}
            //
            //            //if (xValue.charCodeAt(xValue.length-1) === 32)
            //            //{
            //            //    if (xValue.trim().charCodeAt(xValue.trim().length-1) === 87)
            //            //    {
            //            //        //O.o ('bShouldIcommand based on space and lastchar 87 big w');
            //            //        bShouldIcommand = true;
            //            //    }
            //            //    else if (xValue.trim().charCodeAt(xValue.trim().length-1) === 119)
            //            //    {
            //            //        //O.o ('bShouldIcommand based on space and lastchar 119 little w');
            //            //        bShouldIcommand = true;
            //            //    }
            //            //    else if (document.getElementById('idcheckbox_dynamicSearch').checked)
            //            //    {
            //            //        //O.o ('bShouldIcommand based on space and idcheckbox_dynamicSearch checked');
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
            //                O.o ('ske editor ends with nbsp');
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
            //        O.o ('1 set search xValue:'+ xValue);
            //        // hbk 1505
            //        $location.search('q', xValue.trim());
            //        O.o ('2 set search xValue:'+ xValue);
            //        O.o ('######## in bShouldIcommand');
            //        var skipThisCommandAlreadProcessed = false;
            //        var timeLastEncountered = commandLastProcessedHash[xText];
            //        if (timeLastEncountered && (UtilDate.getTimeInMillis()-timeLastEncountered) < 200) {
            //            skipThisCommandAlreadProcessed = true;
            //            //O.o ('skipping command too quick');
            //        }
            //        commandLastProcessedHash[xText] = UtilDate.getTimeInMillis();
            //
            //        //alert ('yes need to process command');
            //        if (!skipThisCommandAlreadProcessed) {
            //            O.o ('############ not skipping');
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
                //O.o ('reinit window.keyStates.keyStateShiftDown');
                window.keyStates = {};
                window.keyStates.keyStateShiftDown = false;
                window.keyStates.keyStateCtrlDown = false;
                window.keyStates.keyStateAltDown = false;

				document.addEventListener('keydown', function(evt) {
                    var e = window.event || evt;
                    var key = e.which || e.keyCode;
                    //O.o ('keydown:' + key );
                    //O.o ('turn on shift');
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
                    //O.o ('turn off shift');
                    if (16 === key) {
                        window.keyStates.keyStateShiftDown = false;
                    } else if (17 === key) {
                        window.keyStates.keyStateCtrlDown = false;
                    } else if (18 === key) {
                        window.keyStates.keyStateAltDown = false;
                    }
                }, false);

                //O.o ('reinit window.keyStates.keyStateShiftDown:' + window.keyStates.keyStateShiftDown);

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
            $scope.saveUstodoGiven = function(ustodo, i) {
                var myEl = angular.element(document.querySelector('#ustodorow' + i));
                ustodo.html = myEl[0].innerHTML;
                ustodo.text = myEl[0].innerText;
                ustodo.datelastmod = new Date();


                console.log('SAVED1 !!! ustodo.html [' + ustodo.html);
                console.log('SAVED2 !!! ustodo.text [' + ustodo.text);
                console.log('SAVED3 !!! ustodo.json [' + ustodo.json);
                console.log('SAVED4 !!! ustodo.jsonx [' + ustodo.jsonx);
                ustodo.$update(function () {
                    console.log('SAVED OK !!! ');
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

                                // ends up in C:\utd\150719utdG \app\controllers\ustodos.server.controller.js
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

            $scope.testButton= function(s)
            {


                //alert ('in keyup $scope.getTextHtmlAndValueInShowingEditor()'+$scope.getTextHtmlAndValueInShowingEditor());
                //CKEDITOR.instances.editor.destroy();

				//alert ('in testbutton');
				if (true)
				{
					//alert ('document.getElementById(checkBoxAll).value = :' + document.getElementById('checkBoxAll').checked);
					document.getElementById('checkBoxAll').checked = false;

				}


				if (false)
				{
					//document.getElementById('mceu_34').style.visibility='hidden';
					if (document.getElementById('mceu_57-body').style.visibility==='hidden')
						document.getElementById('mceu_57-body').style.visibility='visible';
					else
						document.getElementById('mceu_57-body').style.visibility='hidden';

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
					alert ("UtilClassz.getClass(documentx):" + UtilClassz.getClass(documentx))
					//var documentx = document.getElementById('mcebuttonid2').children.children;
					//<div id="mcebuttonid2" class="mce-widget mce-btn mce-last" tabindex="-1" aria-labelledby="mcebuttonid2"><button role="presentation" type="button" tabindex="-1"><i class="mce-ico mce-i-none" style="background-image: url('/img/EditPencilBnW.png')"></i></button></div>
					//	<button role="presentation" type="button" tabindex="-1"><i class="mce-ico mce-i-none" style="background-image: url('/img/EditPencilBnW.png')"></i></button>
					//    <i class="mce-ico mce-i-none" style="background-image: url('/img/EditPencilBnW.png')"></i>				}
					//alert ("documentx" + documentx)
					alert ("documentx.style:" + documentx.style);
					alert ("documentx.style.height:" + documentx.style.height);
					alert ("documentx.style.length:" + documentx.style.length);
					alert ("documentx.style.item(0):" + documentx.style.item(0));
					alert ("documentx.style.item(4):" + documentx.style.item(4));
					alert ("documentx.style.getParentRule:" + documentx.style.getParentRule());
					alert ("documentx.style.getLength():" + documentx.style.getLength());
					alert ("documentx.style.getCssText():" + documentx.style.getCssText());
					alert ("UtilClassz.getClass(documentx.style):" + UtilClassz.getClass(documentx.style))
					//getProperties is not a function alert ("UtilClassz.getClass(documentx.style.getProperties()):" + documentx.style.getProperties())
					alert ("UtilClassz.getClass(documentx.style.getOwnPropertyNames()):" + documentx.style.getOwnPropertyNames())
					alert ("documentx.className:" + documentx.className)
					alert ("documentx.style:" + documentx.style);
					//alert ("documentx.style.background-image" + documentx.style.background-image);
					alert ("documentx.style.cssText:" + documentx.style.cssText);
					alert ("documentx.style.getPropertyValue(background-image):" + documentx.style.getPropertyValue('background-image'));
					//alert ("documentx.style.getPropertyCSSValue(background-image)" + documentx.style.getPropertyCSSValue('background-image'));
				}
				if (false)
				{
					document.getElementById('imageIdRedPEncil').style.visibility='visible';
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
				if (false)
				{
					SppSvc.setModelDirty (!SppSvc.getModelDirty());
				}

				if (false) // green fade text
				{
						UtilNLB_bgFade.NLBfadeBg('numberWrapForFade1', 'green', '#FFFFFF', '1500');
				}

				if (false) {
					var xText = tinyMCE.activeEditor.getContent({format: 'text'});
					var xHtml= tinyMCE.activeEditor.getContent();
					alert ('xHtml:' + xHtml);
				}

				if (false)
                    document.getElementById('idInputTextFilter').value = ' hi mom';

                if (false)
                    alert ('$scope.dynamicSearch:' + $scope.dynamicSearch);

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


            };

            $scope.authentication = Authentication;

            $scope.caption = 'My Caption';
            //$scope.htmlhkhk = $compile('<div>{{caption}}</div>')($scope);

            $scope.model = [{name: 'first'}, {name: 'second'}, {name: 'third'}];

            // Calling `$compile(html)` returns a function that, when called with
            // a context object, links the compiled HTML to the given context (e.g.
            // binds scope-based expressions in the view to the passed in scope).
            //var html = '<div ng-repeat='m in model'>{{m.name}}</div>';
            //var linkingFunction = $compile(html);
            //var elem = linkingFunction($scope);
            //
            //// You can then use the DOM element like normal.
            //$rootElement.append(elem);








            $scope.customer = {
                name: 'Naomi',
                address: '1600 Amphitheatre'
            };
            // plunker link from here








            $scope.htmlhk ='<div>htmlhk</div>';



            //$scope.htmlString = '<a ng-href='http://hkon.net' target='_blank'>hkon.net</a>';
            //$scope.htmlString = 'ffffffffffff';
            $scope.htmlString = '<ul><li>render me please</li></ul>';
            //this.htmlString = '<ul><li>render me please</li></ul>';
            //this.htmlString = 'hhhhhhhhhhhhhh';
            //$scope.htmlString = $sce.trustAsHtml($scope.htmlString);
            //

            //$scope.posts = [{url:'http://u2d.co', text:'u2d'},{url:'http://ibm.com', text:'ibm'}];
            $scope.postshk = ['a', 'b'];
            //console.log ('UtilClass.getClass($scope.posts):' + UtilClassz.getClass($scope.posts));
            //console.log ('$scope.posts.length:' + $scope.posts.length);
            //console.log ('$scope.posts[0]:' + $scope.posts[0]);

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




            //alert ('angularModule.controller(UstodosController)');
            // Create new Ustodo
            //$scope.create = function() {
            //    console.log ('1 in ustodos.client.controller CREATE');
            //    // Create new Ustodo object
            //    //getProperties('props this:', this);
            //    //getProperties('props Ustodos:', Ustodos);
            //    var ustodo = new Ustodos ({
            //        html: this.html//  mystery
            //    });
            //    //getProperties('props ustodo:', ustodo);
            //
            //    // section_save secstion_create_new new ustodo Redirect after save
            //    alert('pre save 1');
            //    ustodo.$save(function(response) {   // maps to exports.create
            //        alert ('in 1 line 1696');
            //        $location.path('ustodos/' + response._id);
            //
            //        // Clear form fields
            //        $scope.name = '';
            //    }, function(errorResponse) {
            //        $scope.error = errorResponse.data.message;
            //    });
            //};

            // Remove existing Ustodo
            $scope.remove = function(ustodo) {
                console.log ('2 in ustodos.client.controller REMOVE');
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
                console.log ('3 in ustodos.client.controller UPDATE');
                var ustodo = $scope.ustodo;

                ustodo.$update(function() {
                    alert ('in 3 line 1731');
                    $location.path('ustodos/' + ustodo._id);
                }, function(errorResponse) {
                    $scope.error = errorResponse.data.message;
                });
            };

            var callbackhkhk_find = function()
            {
                //alert ('in callbackhkhk_find');
                $scope.setUstodosFiltered('caller1_find', $scope.ustodos);
            };

            $scope.ustodosQueryCommon = function (caller, jsonquery, callback) {
                // corresponds to exports.list2 in ustodos.server.controller.js
                // see also app.route('/ustodos').get in ustodos.server.routes.js
                //alert ('xxxxxxxxxxxxx in ustodosQueryCommon caller:' + caller);
                return Ustodos.query(jsonquery, callback);     // maps to a get? in routes? is that a RESOURCE behavior?
            } ;

            // Find a list of Ustodos
            $scope.find = function() {
                alert ('4 in ustodos.client.controller FIND');
                //getProperties('props Ustodos:', Ustodos);

				//alert (' in scope.find');
                //$scope.ustodos = Ustodos. query(); //original
                //returns a single not array, causing a fail $scope.ustodos = Ustodos. query({ustodoId: '54929d5d1d3df384165f4fa2'});
                // seems to work but returns all? $scope.ustodos = Ustodos. query({name: 'ggggg'});
                //$scope.ustodos = Ustodos. query({name: 'ggggg'}); // Works!

                // corresponds to exports.list2 in ustodos.server.controller.js
                //$scope.ustodos = $scope.ustodosQueryCommon('caller$scope.find', {text: ''}, callbackhkhk_find);
				// http://docs.mongodb.org/manual/reference/operator/query/and/
				// http://docs.mongodb.org/manual/reference/operator/query/not/
				alert ('in this funny query hbkx pre len:' + $scope.ustodos.length);
				//see also
				//$scope.ustodos = $scope.ustodosQueryCommon('caller_$scope.processCommand_NotWrite',
				//	{q: commandTrimmed.trim()

				//$scope.ustodos = $scope.ustodosQueryCommon('caller$scope.find', {$and: [{text: 'xx'}, {$not:{deleted: true}}]}, callbackhkhk_find);
				//$scope.ustodos = $scope.ustodosQueryCommon('caller$scope.find', {$and: [{text: 'x'}, {$not:{text: 'y'}}]}, callbackhkhk_find);
				$scope.ustodos = $scope.ustodosQueryCommon('caller$scope.find', {text: ''}, callbackhkhk_find);


				alert ('in this funny query hbkx pos len:' + $scope.ustodos.length);


                //alert ('____ $scope.ustodos.length:' + $scope.ustodos.length);

                //$scope.ustodos = Ustodos. query({ustodoId: '54929d5d1d3df384165f4fa2'});
                //$scope.ustodos = Ustodos. query({ustodoId: '54929d5d1d3df384165f4fa2'});
                //$scope.ustodos = Ustodos. query({ustodoId: '54929d5d1d3df384165f4fa2'});
                //console.log ('in ustodos.client.controller FIND2 $scope.ustodos.length:' + $scope.ustodos.length);
                //console.log ('in ustodos.client.controller FIND2');

                //alert ('set commandsxx ');
                //{
                //alert('in ustodos.client.controller $scope.commands.length:' + $scope.commands.length);
                //};
                //$scope.commands = Commandsss.query();
                //alert ('in ustodos.client.controller $scope.commands.length:'+$scope.commands.length);


            };

            // Find existing Ustodo
            $scope.findOne = function() {
                console.log ('5 in ustodos.client.controller FINDONE');
                $scope.ustodo = Ustodos.get({
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
                O.assert (checkboxFirst);
                var areAllCbStatesSame = true;
                var checkboxFirstState = checkboxFirst.checked;

                var x = $('.chkbox');
                //O.o ('x.length:' + x.length);
                // check if all are checked so it's just a toggle
                for (var i = 0; i < x.length; i++ )
                {
                    //O.o ('testing for cb index :' + 'idcheckbox'+i);
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
				{ // hbkk
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
					UtilErrorEmitter.emitError('error in synchNumberCheckboxesChecked()', err);
				}

			}


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

                //O.o ('set $scope.lastChecked to:' + $scope.lastChecked.id);
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
						//O.o ('set $scope.lastChecked to:' + $scope.lastChecked.id);
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
					alert('No items selected to delete.')
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
                    //    O.o ('data:' + data.toString());
                    //});


                    // 22222  works in that it makes it to themethod, but can't find req data anywhere not in URL or body or params or query
                    // http://stackoverflow.com/questions/5643321/how-to-make-remote-rest-call-inside-node-js-any-curl
                    //app.route('/ustodobulkdel')
                    //    .delete(users.requiresLogin, ustodos.ustodobulkdel);
                    //$http.delete('/ustodobulkdel', {form:{key:'hkvalue'}}).
                    //    success(function(data) {
                    //        O.o ('data:' + data.toString());
                    //    });


                    // 3333 works great in that it makes it to the method, and req data is not in the URL but in the
                    //$http.post('/exports.ustodobulkdel ', {form:{key:'hkvalue', arrOidsToDelete:arrOidsToDelete}}).
                    $http.post('/ustodobulkdel', {form:{key:'hkvalue', arrOidsToDelete:arrOidsToDelete}}).
                        success(function(data)
						{
							//alert('success on return from exports.ustodobulkdel ');
                            //O.o ('data:' + data.toString());
                            $scope.find(); // to $scope.find = function() {in
							$scope.synchNumberCheckboxesChecked();


						}). error(function(data, status, headers, config) {
                            // called asynchronously if an error occurs
                            // or server returns response with an error status.
							alert('error on return from exports.ustodobulkdel ');
                            O.o ('dataxx:' + data);
                            O.o ('statusxx:' + status);
                            O.o ('headersxx:' + headers);
                            O.o ('configxx:' + config);
                        });
					//alert('posted to exports.ustodobulkdel ');

                    //$http.delete('/ustodobulkdel', {
                    //    params: { user_id: user.id }
                    //}).success(function(data) {
                    //        O.o ('data:' + data.toString());
                    //});

                    // http://stackoverflow.com/questions/12190166/angularjs-any-way-for-http-post-to-send-request-parameters-instead-of-json
                    //$http.post('/ustodobulkdel', {
                    //    params: { user_id: user.id }
                    //}).success(function(data) {
                    //        O.o ('data:' + data.toString());
                    //});
                } catch (e) {
                    O.e ('errrra:' + e);
                }
				$scope.synchNumberCheckboxesChecked()
            };



            $scope.deleteDbUstotoOneByIndex = function(arrIntIndexesToDelete_or_oneUsToDo)
            {
                //O.assert (false, 'asdasd');
                O.assert ((arrIntIndexesToDelete_or_oneUsToDo.length === 1), 'support only delete one right now, not:' + arrIntIndexesToDelete_or_oneUsToDo.length);

                // Still support only one delete at a time!!!!!!!!!!!!!!

                var intIndexToDelete = arrIntIndexesToDelete_or_oneUsToDo[0];
                //return;
                //alert ('deleting i:' + i);
                try {
                    var ustodo = $scope.ustodos[intIndexToDelete];

                    var savOid = ustodo._id;
                    O.o('33333333333333333333333333333 splicing: i' + intIndexToDelete );
                    $scope.ustodos.splice(intIndexToDelete, 1);

                    ustodo.$delete(function() {
                        console.log ('$delete done !!! savOid:' + savOid);
                        //$scope.ustodos.splice(index, 1));
                        //alert ('delete done, now remove from array');
                        //array.;
                    }, function(errorResponse) {
                        $scope.error = errorResponse.data.message;
                        //console.log ('ERROR ON SAVE !!! '  + $scope.ustodos[i].html);
                        console.log ('ERROR ON SAVE !!! $scope.error:'  + $scope.error);
                    });
                    console.log ('done remove/delete');
                } catch (err) {
                    console.log ('err:' + err);
                }
            };





            //alert ('setting setUstodosFiltered');
            $scope.setUstodosFiltered = function(caller, ustodosUnfiltered) {
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

            /**
             * this call is the first point after any specific input editor
             * @param scopeEnumCommand
             * @param callerId
             * @param xText
             * @param xHtml
             * @param xValue maybe aka data?
             */
            $scope.processCommand = function(scopeEnumCommand, enumProcessCommandCaller, xText, xHtml, xValue)
            {
                //alert ('in processCommand caller [' + enumProcessCommandCaller + ']')
                O.o ('1 ===================== in processCommand for 1 xText [' + xText + ']');
                O.o ('2 ===================== in processCommand for 2 xHtml [' + xHtml + ']');
                O.o ('3 ===================== in processCommand for 3 xValue [' + xValue + ']');

				SppSvc.setSelectedItem(-1);

				//$scope.setTextInShowingEditor(xValue);

                //alert (' =========================== in processcommand callerId [' +
                //callerId + '] xValue' + '[' + xValue + ']' );
                try {

                    if (enumProcessCommandCaller !== $scope.enumProcessCommandCaller.EDITOR)
                    {
                        //alert ('showing');
                        //try {
                        //    $scope.setTextInShowingEditor(xText, 'line 3262 process command', false);
                        //} catch (e) {
                        //
                        //}

                    }
                    //alert ('$scope.searchedFor[' + $scope.searchedFor + ']');

                    //$scope.searchedForAsLink = '<a ng-href=\'jpro.com\'> search</a>';
                    $scope.searchedForAsLink = 'http://ibm.com/test';
                    //O.o ('============================= in xValue [' + xValue + ']');
                    //O.o ('============================= in html2text [' + UtilHrefThisText.html2text(xValue)+ ']');
                    // <a target='_blank' href='http://ibm.com'>http://ibm.com</a>

                    $scope.callCountSearch++;
                    //o ('in search 0 this.commandFromInputBox:' + this.commandFromInputBox);
                    //if (false)
                    //{
                    //    if ($scope.mmmm) {
                    //        //var t = $scope.mmmm.element.innerText;
                    //        //var t =  tinyMCE.get('idTinyMceTextArea').getContent({format : 'text'});
                    //        var xText = document.getElementById('idInput0TypeText').value;
                    //        //  alert ('search for :' + t)
                    //        $scope.ustodos  = Ustodos. query ({q: xText});
                    //        $location.search('q', xText);       // yoo bar foo bar baz
                    //        window.document.title = 'jp:'+xText; // not jpro:
                    //    }
                    //} else
                    //O.o ('start search');
                    //this.commandFromInputBox = resolveFinalCommandBetweenUrlAndInputBox
                    //    //( $location.search.q  , this.commandFromInputBox);
                    //( $location.$$search.q, this.commandFromInputBox);
                    //o ('in search 1 $location.$$search.q:' +  $location.$$search.q);

                    //o ('in search 2 this.commandFromInputBox:' + this.commandFromInputBox);
                    //window.document.title = 'jps:'+$location.$$search.q; // not jpro:
                    //alert ('in joe $scope.searchedFor line2079' + $scope.searchedFor);
                    //window.document.title = 'jps:'+$scope.searchedFor; // not jpro:
                    //alert ('$location.$$search.q:'+$location.$$search.q);
                    //$location.path('/'+this.commandFromInputBox)
                    //$location.path('/'+$scope.searchedFor)
                    //$location.search('q', this.commandFromInputBox);       // yoo bar foo bar baz
                    //$scope.ustodos  = Ustodos. query ({q: this.commandFromInputBox});
                    //O.o  ('completed search');
                    // section_parseThecommand level 1 importance
                    //alert ('processing xText [' + xText + ']');
                    var commandUnTrimmed = xText;
                    var commandTrimmed = xText.trim();

                    //var commandRemoved_toSearchFor_trimmed = null;

                    var callbackFromQuery = function() {
                        //alert ('in callbackFromQuery post get callback');

							$scope.setUstodosFiltered('caller2', $scope.ustodos);
						SppSvc.setModelDirty(false);
                        //alert ('set gblx.modelDirty  = false2;')
                        $scope.setTextInShowingEditor($scope.searchedFor, 'line 3329');


                        //alert ('in callback from query')
                        //O.o ('$$$$$$$$$$$$$$$$$$$ done processCommand got callback after query $scope.ustodos.length [' + $scope.ustodos.length + ']');
                        //
                        ////for (var ustodo in $scope.ustodos) {
                        ////    // http://stackoverflow.com/questions/10179815/how-do-you-get-the-loop-counter-index-using-a-for-in-syntax-in-javascript
                        ////    var i = Object.keys($scope.ustodos).indexOf(ustodo);
                        ////    O.o ('looping on index i:' + i);
                        ////    O.o ('looping on id:' + ustodo._id);
                        ////    if (ustodo._id !== ustodo[i]._id)
                        ////            alert ('era - ids not same');
                        ////}
                        //
                        //// TEST that internal logic is not screwed up on indexing
                        //$scope.ustodos.forEach(function(ustodo, i) {
                        //    //var i = Object.keys($scope.ustodos).indexOf(ustodo);
                        //    //O.o ('looping on id:' + ustodo._id);
                        //    //O.o ('looping on i:' + i);
                        //    $scope.ustodos[i].arrayIndexInclient = i;
                        //    if (ustodo._id !== $scope.ustodos[i]._id)
                        //        alert ('era - ids not same');
                        //    //else
                        //    //    alert ('era - ids not same');
                        //});
                    };

                    // TODO ADD A WRITE HERE
                    //$scope.ustodos = Ustodos.WRITE????  ({q: commandTrimmed}, fn);      // this is a GET - see RESOURCE

                    // section_write
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
                    if (UtilString.endsWith(commandTrimmed, ' w') || UtilString.endsWith(commandTrimmed, ' W'))
                    {
                        //alert ('in write commandTrimmed [' + commandTrimmed  + ']');
                        //alert ('in write xHtml [' + xHtml + ']');
                        //alert ('in write commandTrimmed.asciiTable():' + commandTrimmed.asciiTable());
                        //alert ('in endsWith w');
                        commandTrimmed = commandTrimmed.slice(0, commandTrimmed.length - 1).trim();

                        var xHtmlPre = xHtml;
                        do {
                            xHtml = xHtml.trim();
                            if (xHtml.endsWith('<p>&nbsp;</p>'))
                                xHtml = xHtml.replaceLast('<p>&nbsp;</p>','');
                            //alert ('in loop xHtml [' + xHtml + ']');
                            xHtmlPre = xHtml;
                        }  while (xHtmlPre !== xHtml);
                        xHtml = xHtml.trim();

                        //alert ('in write xHtml replaced [' + xHtml + ']');

                        //alert ('commandRemoved_toSearchFor_trimmed:' + commandRemoved_toSearchFor_trimmed);
                        //var target = '';
                        var x = $filter('linky')(commandTrimmed);
                        //alert ('x:' + x);

                        var ustodo = new Ustodos ({
                            html: xHtml.replaceLast(' w', ''),//  mystery
                            text: commandTrimmed,//  mystery
                            datelastmod: (''+new Date()),
                            datecreated: (''+new Date()),
                            joey: 'and pete'
                        });
                        //getProperties('props ustodo:', ustodo);
                        //alert ('saving ustodo.text:' + ustodo.text);
                        // Redirect after save
                        //O.o ('1 $$$$$$$$$$$$$$$$$$ save callerId 1 [' + callerId + '] ustodo.html [' + ustodo.html+ ']');
                        //O.o ('2 $$$$$$$$$$$$$$$$$$ save callerId 2 [' + callerId + '] ustodo.text [' + ustodo.text + ']');
                        //O.o ('3 $$$$$$$$$$$$$$$$$$ save callerId 3 [' + callerId + '] ustodo.value [' + ustodo.value + ']');
                        //O.o ('4 $$$$$$$$$$$$$$$$$$ save callerId 4 [' + callerId + '] ustodo.jsonx [' + ustodo.jsonx + ']');
                        //O.o ('5 $$$$$$$$$$$$$$$$$$ save callerId 5 [' + callerId + '] commandRemoved_toSearchFor_trimmed [' + commandRemoved_toSearchFor_trimmed + ']');
                        //alert('pre save 2');
                        ustodo.$save(function(response) // ustodos.server.controller.js exports.create
                        {
							//alert ('in save');
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
                            //O.o ('=============== in section QUERY1');
                            //$scope.ustodos = $scope.ustodosQueryCommon('caller_$scope.processCommand_Write', {q: '*'}, callbackFromQuery);

                            // hbk 1505
                            //$location.search('q', commandRemoved_toSearchFor_trimmed);       // yoo bar foo bar baz
                            UtilNLB_bgFade.NLBfadeBg('idInput0TypeText','green', '#FFFFFF','1500');


                        }, function(errorResponse) {
                            $scope.error = errorResponse.data.message;
                            alert ('fail callback from save $scope.error:' + $scope.error);
                        });
                        //alert  ('will search after write wasAwrite [' + wasAwrite +
                        //'] for commandRemoved_toSearchFor_trimmed:' + commandRemoved_toSearchFor_trimmed);

                        //commandTrimmed = commandRemoved_toSearchFor_trimmed;
                    }


					// POST WRIT IF IT WAS A WRITE
                    {
                        //alert ('not a write - search for [' + commandTrimmed.trim() + ']');
                        //O.o ('=============== in section QUERY2')
                        //var t = new RegExp(commandTrimmed.trim(), 'i');


                        var t = commandTrimmed.trim();
                        $scope.searchedFor = t;
                        //alert ('in not a write commandTrimmed.trim [' + commandTrimmed.trim() + ']');

                        $scope.ustodos = $scope.ustodosQueryCommon('caller_$scope.processCommand_NotWrite',
							{q:commandTrimmed.trim()}

							//{$and:
							//	[
							//		{q:commandTrimmed.trim()},
							//		{deleted:{$ne:true}}  // hbkk 1509
							//	]
							//}

							// exports.processCommandReadPortion
							// ustodos.server.routes.js may be related to this
								//app.route('/ustodos')
								//	.get(users.requiresLogin, ustodos.list2)
							// ustodos.server.controller.js and may map to exports.list2 = function(req, res) { in


							//new RegExp(t, 'i')
							//{ $regex: new RegExp(commandTrimmed.trim(), 'i') }
							//{$regex:commandTrimmed.trim(), $options:'i'}
							//{ $regex: /thort/, $options: 'i' } // { $regex: /acme.*corp/, $options: 'i' }

                            ,
                            //{q:
                            //    commandTrimmed.trim()
								////{$not:{deleted:true}}
                            //    //new RegExp(t, 'i')
                            //    //{ $regex: new RegExp(commandTrimmed.trim(), 'i') }
                            //    //{$regex:commandTrimmed.trim(), $options:'i'}
                            //    //{ $regex: /thort/, $options: 'i' } // { $regex: /acme.*corp/, $options: 'i' }
                            //
                            //},
                            callbackFromQuery);      // this is a GET - see RESOURCE

                        //$scope.ustodos = $scope.ustodosQueryCommon('caller_$scope.processCommand_NotWrite',
//                           {q:commandTrimmed.trim()});      // this is a GET - see RESOURCE
                        //{q:{$regex:commandTrimmed.trim()}});      // this is a GET - see RESOURCE
                        //{q:{$regex:commandTrimmed.trim(), $options:'i'}});      // this is a GET - see RESOURCE
                        //{q:commandTrimmed.trim() }, callbackFromQuery);      // this is a GET - see RESOURCE
                        // {key:{$regex:value, $options:â€˜iâ€™}}

                        //{q:new RegExp(commandTrimmed.trim(), 'i') }, callbackFromQuery);      // this is a GET - see RESOURCE
                        // {q:{ '$regex' : commandTrimmed.trim(), '$options' : '-i' }}, callbackFromQuery);      // this is a GET - see RESOURCE

                        // http://stackoverflow.com/questions/5499451/case-insensitive-query-on-mongodb
                        //{ '$regex' : 'C#', '$options' : '-i' }


                        //alert('setting search commandRemoved_toSearchFor_trimmed [' + commandTrimmed + ']');
                        //$location.path('#/user/' + client.tagid);

                    } // if write else

                    // section_location_set_url
                    //alert ('in herehk pre $location.search');
                    $location.search('q', commandTrimmed);       // yoo bar foo bar baz not $location.path
					$scope.filterText = commandTrimmed;

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
                    //setTimeout(function(){console.log ('in ustodos.client.controller SEARCH2 $scope.ustodos.length:' + $scope.ustodos.length);}, 1000);
                    //setTimeout(function(){alert ('in ustodos.client.controller SEARCH2 $scope.ustodos.length:' + $scope.ustodos.length);}, 1000);
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
                    UtilErrorEmitter.emitError('processCommand enumProcessCommandCaller [' + enumProcessCommandCaller + ']', e);
                    throw e;
                }
                $scope.mouseoverlock = 'off';

            };  // $scope.processCommand

            // Search for one  existing Ustodo by string
            $scope.searchOne = function() {
                alert ('7 in ustodos.client.controller SEARCHONE');
                console.log ('7  getting ustodo searchOne :' + $stateParams.ustodoId);
                $scope.ustodo = Ustodos.get({
                    // ORIGINAL A/B SPLIT
                    ustodoSearchString: $stateParams.ustodoId
                    //ustodoId: '54929d5d1d3df384165f4fa2'  // worked!!
                    //name: /road/
                    //name: 'as'
                });
            };

            //O.a ('sssa2');

            // <select> element displays its options on mousedown, not click.
            //        $scope.showSelectDropdown = function () { // WORKS
            //            var event;
            //            event = document.createEvent('MouseEvents');
            //            event.initMouseEvent('mousedown', true, true, window);
            //            document.getElementById('selectId').dispatchEvent(event);
            //        };
            //
            // This isn't magic.
            //http://jsfiddle.net/fz2sY/39/
            $scope.runThis = function () {
            };





            $scope.filterDoesThisRowHtmlMatch = function(s, filterText) {
                alert ('in here hk');
                var s2 = '';
                var arrTokens = s.split(/\s/);
                for (var i = 0; i < arrTokens.length; i++)
                {
                    //O.o ('testing for filterText [' + filterText + '] :' + arrTokens[i]);
                    if (arrTokens[i].indexOf(filterText) > 0)
                    {
                        //O.o ('found:');
                        s2 = s2 + ' ' + arrTokens[i];
                    }
                }
                return s2;
            };

            $scope.filterText = null;

            $scope.onTrueOffFalse = false;
            // commented 150513
            $scope.updateUstodosFiltered = function (s)
            {

                //alert ('========================= in ttttttttttt updateUstodosFiltered');
                if (document.ustodosFilterCacheDirty === false)
                {
                    //alert('setting cache dirty');
                    document.ustodosFilterCacheDirty = true;
                }

                $scope.ustodosFiltered = [];
                O.o ('in updateUstodosFiltered() s  [' + s + ']');
                var useCaseSensitiveRestrict = false;
                if (s && s.hasUpperCase()) {
                    O.o ('USE CASE SENS');
                    useCaseSensitiveRestrict = true;
                }    else {
                    O.o ('DO NOT USE CASE SENS');
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
                        //O.o ('MATCH in dyamic client-only filter updateUstodosFiltered matching s [' + s + '] vs strOneOfManyIterThru [' + strOneOfManyIterThru +  '] index [' + i + ']');
                    } else {
                        //O.o ('NO MATCH in dyamic client-only filter updateUstodosFiltered matching s [' + s + '] vs strOneOfManyIterThru [' + strOneOfManyIterThru + '] index [' + i + ']');
                    }
                    //if (i % 2 == 0)
                }
                O.o ('---------------updateUstodosFiltered done from len [' + $scope.ustodos.length + '] len [' + $scope.ustodosFiltered.length + '] ');
                //O.o ('in filterMatches() matching [' + $scope.ustodos[i].html + '] vs [' + $scope.filterText +
                //    '] index [' + i + '] result [' + ret + ']');
                // this was for string altering:
                //if (!$scope.onTrueOffFalse)
                //{
                //    for (var i = 0; i < $scope.ustodos.length; i++)
                //    {
                //        $scope.ustodos[i].htmlsave = $scope.ustodos[i].html ;
                //        $scope.ustodos[i].html = $scope.filterDoesThisRowHtmlMatch($scope.ustodos[i].html, filterText);
                //    }
                //} else {
                //    for (var i = 0; i < $scope.ustodos.length; i++)
                //    {
                //        $scope.ustodos[i].html = $scope.ustodos[i].htmlsave ;
                //        $scope.ustodos[i].htmlsave = null;
                //    }
                //}
                //$scope.onTrueOffFalse = !$scope.onTrueOffFalse;
                //$scope.$apply();
            };

            //$scope.filterMatches = function () {
            //    //$scope.$apply();
            //    return ret;
            //};



            $scope.hkngfocustest = function(index) {
                //O.o('================ from hkngfocustest:' + index);
				SppSvc.setSelectedItem(index);

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
                // request parameter read
                //alert ('$location.$$search.q:' + $location.$$search.q);
                //alert ('in main');

                //var q = $location.$$search.q;
                //
                //
                //$scope.toggleVisibilityTo3('line 3656 main');
                //
                //if (q) {
                //    $scope.processCommand($scope.enumCommands.COMMAND_SEARCH, $scope.enumProcessCommandCaller.URL, q, q, q);
                //    $scope.setTextInShowingEditor(q, 'line 3658 main');
                //
                //} else {
                //    $scope.processCommand($scope.enumCommands.COMMAND_SEARCH,'CLIENT JS line 2355', '*', '*', '*');
                //}
                //
                //window.onbeforeunload = function () {
                //    return 'Are you sure?';
                //}

            window.onbeforeunload = function () // reload
            {
                //if ($scope.reloadWarning)
                //    return 'Are you sure?';
                if (SppSvc.getModelDirty())
                    return 'Exit?  A record changed.  Exiting will lose it.';
            };

        } catch (e) {
            alert ('e33:' + e);
            throw e;
        }
    }
])
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
    .filter('filterUstodos', function()
    {

        alert('runs on reload only ========================= in filter 1');
        // see also
        return function( ustodos, s)
        {
            //O.o ('========================= in filter 1b');
            if ( document.ustodosFilterCacheDirty !== true )
            {
                alert ('returning cached ustodos ['+ustodos+'] filtered s [' + s + '] TimeSynched [' + document.ustodosLastCommitTimeSynched + ']');
                return document.ustodosFilterCache;
            }
            //else
            //{
            //    // alert ('getting new filter');
            //}






//
//$scope.ustodosFiltered = [];
//O.o ('in updateUstodosFiltered() s  [' + s + ']');
//var useCaseSensitiveRestrict = false;
//if (s && s.hasUpperCase())
//    useCaseSensitiveRestrict = true;
//
//for (var i = 0; i < $scope.ustodos.length; i++)
//{
//    var strOneOfManyIterThru = $scope.ustodos[i].html;
//    if (!useCaseSensitiveRestrict)
//        strOneOfManyIterThru = strOneOfManyIterThru.toLowerCase();
//
//    if (!s || strOneOfManyIterThru.indexOf(s) >= 0) {
//        $scope.ustodosFiltered.push($scope.ustodos[i]);
//        //O.o ('MATCH in dyamic client-only filter updateUstodosFiltered matching [' + $scope.ustodos[i].html + '] vs [' + $scope.filterText +  '] index [' + i + ']');
//    } else {
//        O.o ('NO MATCH in dyamic client-only filter updateUstodosFiltered matching [' + $scope.ustodos[i].html + '] vs [' + $scope.filterText + '] index [' + i + ']');
//    }
//    //if (i % 2 == 0)
//}















            var useCaseSensitiveRestrict = false;
            if (s && s.hasUpperCase())
                useCaseSensitiveRestrict = true;

            var ustodosFiltered = [];
            var i = 0;
            angular.forEach(ustodos, function(ustodo)
            {
                i++;
                //var strOneOfManyIterThru = ustodo.html;
                //if (!useCaseSensitiveRestrict)
                //    strOneOfManyIterThru = strOneOfManyIterThru.toLowerCase();
                //
                //if(!s || strOneOfManyIterThru.indexOf(s) >= 0) {
                ////if(true) {
                //O.o ('======  filter do keep');
                //    ustodosFiltered.push(ustodo);
                //}
                //else {

                if (i % 100 === 0)
                    O.o ('======  filter do not keep');
                //}

                ustodosFiltered.push(ustodo);

            });
            document.ustodosFilterCache = ustodosFiltered;
            document.ustodosFilterCacheDirty = false;

            //O.o ('@@@@@@@@@ filter done ustodosFiltered.length:'+ustodosFiltered.length);

            return document.ustodosFilterCache;
        };
    }
)
;














//O.a ('oneOfSeveral $routeProvider', '$locationProvider');
angular.module('ustodos')
    //.config (
    //['$locationProvider',
    //    function ($locationProvider) {
    //
    //        //commenting out this line (switching to hashbang mode) breaks the app
    //        //-- unless # is added to the templates
    //        $locationProvider.html5Mode(true);
    //
    //        //$routeProvider.when('/', {
    //        //    template: 'this is home. go to <a href='/about'/>about</a>'
    //        //});
    //        //$routeProvider.when('/about', {
    //        //    template: 'this is about. go to <a href='/'/>home</a'
    //        //});
    //    }
    //])
    ////.config(function($locationProvider ) {
    ////    $locationProvider.html5Mode(true);
    ////    //$routeProvider.otherwise({redirectTo: '/home', controller: HomeCtrl});
    ////})
    .directive('onFinishRender', function ($timeout) {
        O.a('sss2');
        alert ('done onload');
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                if (scope.$last === true) {
                    $timeout(function () {
                        //O.a ('sss3');
                        scope.$emit('ngRepeatFinished');
                        alert('ngRepeatFinished');
                    });
                }
            }
        };
    });

window.onload = function()
{
	//var x = document.getElementById('imageIdRedPEncilbnw');
	try {
		//alert('in window.onload');

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

	}
	catch(err)
	{
		alert ('in error catcher');
		UtilErrorEmitter.emitError('in onload error', err);
	}

//CKEDITOR.replace( 'editor1' );
//CKEDITOR.instances.editor1.on('blur', function() {
//    alert('onblur fired');
};

//alert ('done onload');

