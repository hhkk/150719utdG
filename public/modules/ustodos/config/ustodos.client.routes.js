'use strict';

//Setting up route
//O.a ('oneOfSeveral config routes');

angular.module('ustodos').config(['$stateProvider',
	function($stateProvider) {
		//alert ('in C:\utd\150719utdG\public\modules\ustodos\config\ustodos.client.routes.js');
        //O.a ('dddx');
		// Ustodos state routing
		$stateProvider.
            //state('findlistutd', {
            //// http://localhost:3000/#!/ustodos/findlist
            //url: '?q=',
            //templateUrl: '	modules/ustodos/views/findlist-ustodos.client.view.html'
            //}).
            //state('findlistUstodos_preloadedByUrl', {
            //// http://localhost:3000/#!/ustodos/findlist
            //url: '/ustodos/findlist?q=',
            //templateUrl: '	modules/ustodos/views/findlist-ustodos.client.view.html'
            //}).






        state('findlistUstodos', {
            // http://localhost:3000/#!/ustodos/findlist
            url: '/ustodos/',
            templateUrl: 'modules/ustodos/views/singlepage-ustodos.client.view.html'
        }).
		//state('findlistUstodos2', {
		//	// http://localhost:3000/#!
		//	// http://localhost:3000
		//	url: '/:searchstring_url',
		//	templateUrl: '	modules/ustodos/views/findlist-ustodos.client.view.html'
		//}).
		state('listUstodos', {
			// http://localhost:3000/#!/ustodos
			url: '/ustodos',
			templateUrl: 'modules/ustodos/views/list-ustodos.client.view.html',
			controller: function ($scope, $state) {
				alert ('start state '+$state.$current)
				$scope.stateInfoHKstate='hihk';
			}
		}).
			state('hkhkstateustodos1', {
				url: '/ustodos/hkhkstateustodos1',
				template: 'in ustodos state hkhkstateustodos1 <a ui-sref="hkhkstateustodos2">sref to hkhkstateustodos2</a> <br> ' +
				'<a href="#!/ustodos/hkhkstateustodos2">href to #/ustodos/hkhkstateustodos2</a>',
				controller: function ($scope, $state) {
					alert ('start state '+$state.$current)
					$scope.stateInfoHKstate='hihk';
				}
			}).
			state('hkhkstateustodos2', {
				url: '/ustodos/hkhkstateustodos2',
				template: 'in ustodos state hkhkstateustodos2 <a ui-sref="hkhkstateustodos1">sref to hkhkstateustodos1</a>  <br> ' +
				'<a href="#!/ustodos/hkhkstateustodos1">href to #/ustodos/hkhkstateustodos1</a>',
				//controller: function ($scope, $state) {
				//	alert ('start state '+$state.$current)
				//	$scope.stateInfoHKstate='hihk';
				//}
			}).



			state('createUstodo', {
			//http://localhost:3000/#!/ustodos/create
			url: '/ustodos/create',
			templateUrl: 'modules/ustodos/views/create-ustodo.client.view.html'
		}).
		state('viewUstodo', {
			// http://localhost:3000/#!/ustodos/549d29c6006bc4041fb22e70
			url: '/ustodos/:ustodoId',
			templateUrl: 'modules/ustodos/views/view-ustodo.client.view.html'
		}).
		state('editUstodo', {
			url: '/ustodos/:ustodoId/edit',
			templateUrl: 'modules/ustodos/views/edit-ustodo.client.view.html'
		})

		;
	}
]);
