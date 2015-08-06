'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		// Home state routing
		$stateProvider.
			state('home', {
				//templateUrl: 'modules/core/views/home.client.view.html'
				url: '/',
				//templateUrl: 'modules/ustodos/views/view-ustodo.client.view.html'
				templateUrl: 'modules/ustodos/views/findlist-ustodos.client.view.html',
				controller: function ($scope) {

					$scope.title='hihk';

				}
				//templateUrl: 'modules/core/views/home.client.view.html'
			}).
			state('home2', {
				url: '/',
				templateUrl: 'modules/ustodos/views/list-ustodos.client.view.html'
			}).
			state('HKTestSref', {
				url: '/ustodos/hijoe',
				template: 'hi hk from HKTestSref url should be url: \'/ustodos/hijoe\' and is in fact http://localhost:3000/#!/ustodos/hijoe'
			})
		;





        //$stateProvider.
        //    state('home', {
        //        url: '/',
        //        templateUrl: 'modules/core/views/home.client.view.html'
        //    });

	}
]);
