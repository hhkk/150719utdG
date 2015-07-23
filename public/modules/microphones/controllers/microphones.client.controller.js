'use strict';

// Microphones controller
angular.module('microphones').controller('MicrophonesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Microphones',
	function($scope, $stateParams, $location, Authentication, Microphones) {
		$scope.authentication = Authentication;

		// Create new Microphone
		$scope.create = function() {
			// Create new Microphone object
			var microphone = new Microphones ({
				name: this.name,
				bbgg: this.bbgg
			});

			// Redirect after save
			microphone.$save(function(response) {
				$location.path('microphones/' + response._id);

				// Clear form fields
				$scope.name = '';
				$scope.bbgg = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Microphone
		$scope.remove = function(microphone) {
			if ( microphone ) {
				microphone.$remove();

				for (var i in $scope.microphones) {
					if ($scope.microphones [i] === microphone) {
						$scope.microphones.splice(i, 1);
					}
				}
			} else {
				$scope.microphone.$remove(function() {
					$location.path('microphones');
				});
			}
		};

		// Update existing Microphone
		$scope.update = function() {
			var microphone = $scope.microphone;

			microphone.$update(function() {
				$location.path('microphones/' + microphone._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Microphones
		$scope.find = function() {
			$scope.microphones = Microphones.query();
		};

		// Find existing Microphone
		$scope.findOne = function() {
			$scope.microphone = Microphones.get({
				microphoneId: $stateParams.microphoneId
			});
		};
	}
]);
