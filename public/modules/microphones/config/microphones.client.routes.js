'use strict';
//Setting up route
angular.module('microphones').config(['$stateProvider',
	function($stateProvider) {
		// Microphones state routing
		$stateProvider.
		state('listMicrophones', {
			url: '/microphones',
			templateUrl: 'modules/microphones/views/list-microphones.client.view.html'
		}).
		state('createMicrophone', {
			url: '/microphones/create',
			templateUrl: 'modules/microphones/views/create-microphone.client.view.html'
		}).
		state('viewMicrophone', {
			url: '/microphones/:microphoneId',
			templateUrl: 'modules/microphones/views/view-microphone.client.view.html'
		}).
		state('editMicrophone', {
			url: '/microphones/:microphoneId/edit',
			templateUrl: 'modules/microphones/views/edit-microphone.client.view.html'
		});
	}
]);
