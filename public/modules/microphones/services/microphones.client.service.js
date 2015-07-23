'use strict';

//Microphones service used to communicate Microphones REST endpoints
angular.module('microphones').factory('Microphones', ['$resource',
	function($resource) {
		return $resource('microphones/:microphoneId', { microphoneId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);