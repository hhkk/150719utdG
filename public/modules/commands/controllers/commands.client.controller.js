'use strict';

// Commands controller
angular.module('commands').controller('CommandsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Commands',
	function($scope, $stateParams, $location, Authentication, Commands) {
		$scope.authentication = Authentication;

		// Create new Command
		$scope.create = function() {
			// Create new Command object
			var command = new Commands ({
				name: this.name
			});

			// Redirect after save
			command.$save(function(response) {
				$location.path('commands/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Command
		$scope.remove = function(command) {
			if ( command ) { 
				command.$remove();

				for (var i in $scope.commands) {
					if ($scope.commands [i] === command) {
						$scope.commands.splice(i, 1);
					}
				}
			} else {
				$scope.command.$remove(function() {
					$location.path('commands');
				});
			}
		};

		// Update existing Command
		$scope.update = function() {
			var command = $scope.command;

			command.$update(function() {
				$location.path('commands/' + command._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Commands
		$scope.find = function() {
			$scope.commands = Commands.query();
		};

		// Find existing Command
		$scope.findOne = function() {
			$scope.command = Commands.get({ 
				commandId: $stateParams.commandId
			});
		};
	}
]);