'use strict';

(function() {
	// Microphones Controller Spec
	describe('Microphones Controller Tests', function() {
		// Initialize global variables
		var MicrophonesController,
		scope,
		$httpBackend,
		$stateParams,
		$location;

		// The $resource service augments the response object with methods for updating and deleting the resource.
		// If we were to use the standard toEqual matcher, our tests would fail because the test values would not match
		// the responses exactly. To solve the problem, we define a new toEqualData Jasmine matcher.
		// When the toEqualData matcher compares two objects, it takes only object properties into
		// account and ignores methods.
		beforeEach(function() {
			jasmine.addMatchers({
				toEqualData: function(util, customEqualityTesters) {
					return {
						compare: function(actual, expected) {
							return {
								pass: angular.equals(actual, expected)
							};
						}
					};
				}
			});
		});

		// Then we can start by loading the main application module
		beforeEach(module(ApplicationConfiguration.applicationModuleName));

		// The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
		// This allows us to inject a service but then attach it to a variable
		// with the same name as the service.
		beforeEach(inject(function($controller, $rootScope, _$location_, _$stateParams_, _$httpBackend_) {
			// Set a new global scope
			scope = $rootScope.$new();

			// Point global variables to injected services
			$stateParams = _$stateParams_;
			$httpBackend = _$httpBackend_;
			$location = _$location_;

			// Initialize the Microphones controller.
			MicrophonesController = $controller('MicrophonesController', {
				$scope: scope
			});
		}));

		it('$scope.find() should create an array with at least one Microphone object fetched from XHR', inject(function(Microphones) {
			// Create sample Microphone using the Microphones service
			var sampleMicrophone = new Microphones({
				name: 'New Microphone'
			});

			// Create a sample Microphones array that includes the new Microphone
			var sampleMicrophones = [sampleMicrophone];

			// Set GET response
			$httpBackend.expectGET('microphones').respond(sampleMicrophones);

			// Run controller functionality
			scope.find();
			$httpBackend.flush();

			// Test scope value
			expect(scope.microphones).toEqualData(sampleMicrophones);
		}));

		it('$scope.findOne() should create an array with one Microphone object fetched from XHR using a microphoneId URL parameter', inject(function(Microphones) {
			// Define a sample Microphone object
			var sampleMicrophone = new Microphones({
				name: 'New Microphone'
			});

			// Set the URL parameter
			$stateParams.microphoneId = '525a8422f6d0f87f0e407a33';

			// Set GET response
			$httpBackend.expectGET(/microphones\/([0-9a-fA-F]{24})$/).respond(sampleMicrophone);

			// Run controller functionality
			scope.findOne();
			$httpBackend.flush();

			// Test scope value
			expect(scope.microphone).toEqualData(sampleMicrophone);
		}));

		it('$scope.create() with valid form data should send a POST request with the form input values and then locate to new object URL', inject(function(Microphones) {
			// Create a sample Microphone object
			var sampleMicrophonePostData = new Microphones({
				name: 'New Microphone'
			});

			// Create a sample Microphone response
			var sampleMicrophoneResponse = new Microphones({
				_id: '525cf20451979dea2c000001',
				name: 'New Microphone'
			});

			// Fixture mock form input values
			scope.name = 'New Microphone';

			// Set POST response
			$httpBackend.expectPOST('microphones', sampleMicrophonePostData).respond(sampleMicrophoneResponse);

			// Run controller functionality
			scope.create();
			$httpBackend.flush();

			// Test form inputs are reset
			expect(scope.name).toEqual('');

			// Test URL redirection after the Microphone was created
			expect($location.path()).toBe('/microphones/' + sampleMicrophoneResponse._id);
		}));

		it('$scope.update() should update a valid Microphone', inject(function(Microphones) {
			// Define a sample Microphone put data
			var sampleMicrophonePutData = new Microphones({
				_id: '525cf20451979dea2c000001',
				name: 'New Microphone'
			});

			// Mock Microphone in scope
			scope.microphone = sampleMicrophonePutData;

			// Set PUT response
			$httpBackend.expectPUT(/microphones\/([0-9a-fA-F]{24})$/).respond();

			// Run controller functionality
			scope.update();
			$httpBackend.flush();

			// Test URL location to new object
			expect($location.path()).toBe('/microphones/' + sampleMicrophonePutData._id);
		}));

		it('$scope.remove() should send a DELETE request with a valid microphoneId and remove the Microphone from the scope', inject(function(Microphones) {
			// Create new Microphone object
			var sampleMicrophone = new Microphones({
				_id: '525a8422f6d0f87f0e407a33'
			});

			// Create new Microphones array and include the Microphone
			scope.microphones = [sampleMicrophone];

			// Set expected DELETE response
			$httpBackend.expectDELETE(/microphones\/([0-9a-fA-F]{24})$/).respond(204);

			// Run controller functionality
			scope.remove(sampleMicrophone);
			$httpBackend.flush();

			// Test array after successful delete
			expect(scope.microphones.length).toBe(0);
		}));
	});
}());