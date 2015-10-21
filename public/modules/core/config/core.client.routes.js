'use strict';

// Setting up route

//alert('defining in core.client.routes.js');
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		<!--hbklrb4-->
		$urlRouterProvider.otherwise('/');

		// Home state routing
			$stateProvider.
				state('home', {
					url: '/',
					//templateUrl: 'modules/core/views/home.client.view.html'
					//templateUrl: 'modules/ustodos/views/view-ustodo.client.view.html'
					//template: 'in core state home',
					templateUrl: 'modules/ustodos/views/singlepage-ustodos.client.view.html',
					controller: function ($scope) {
						//alert ('start state '+$state.$current)
						$scope.stateInfoHKstate='hihk';
				}
				//templateUrl: 'modules/core/views/home.client.view.html'
			}).
			state('hkhkstatecore1', {
				// http://localhost:3000/#!/core/hkhkstatecore1
				url: '/core/hkhkstatecore1',
				template: 'in core state hkhkstatecore1 <a ui-sref="hkhkstatecore2">sref to hkhkstatecore2</a> <br> ' +
				'<a href="/#!/core/hkhkstatecore2">href to #!/core/hkhkstatecore2</a> <br> ' +
				'<a href="/#!/ustodos/hkhkstateustodos1">href to #!/ustodos/hkhkstateustodos1</a> <br> ' +
				'<a href="/#!/ustodos/hkhkstateustodos1">href to #!/ustodos/hkhkstateustodos1</a> <br> ',
				controller: function ($scope, $state) {
					alert ('start state '+$state.$current)
					$scope.stateInfoHKstate='hihk';
				}
			}).
			state('hkhkstatecore2', {
				// http://localhost:3000/#!/core/hkhkstatecore2
				url: '/core/hkhkstatecore2',
				template: 'in core state hkhkstatecore2 <a ui-sref="hkhkstatecore1">sref to hkhkstatecore1</a>  <br> ' +
				'<a href="/#!/core/hkhkstatecore1">href to #/core/hkhkstatecore1</a>',
				controller: function ($scope, $state) {
					alert ('start state '+$state.$current)
					$scope.stateInfoHKstate='hihk';
				}
			})


		;





        //$stateProvider.
        //    state('home', {
        //        url: '/',
        //        templateUrl: 'modules/core/views/home.client.view.html'
        //    });

	}
]);
