'use strict';

/**
 * @ngdoc function
 * @name skyfly33App.controller:Custom1Ctrl
 * @description
 * # Custom1Ctrl
 * Controller of the skyfly33App
 */
 angular.module('skyfly33App')
 .controller('Custom1Ctrl', function ($scope) {
 	this.awesomeThings = [
 	'HTML5 Boilerplate',
 	'AngularJS',
 	'Karma'
 	];

 	$scope.valueCustom = "skyfly33727";
 	$scope.firstName = "Donghoon";
 	$scope.lastName = "Lee";
 	$scope.fullName = function() {
 		return $scope.firstName + " " + $scope.lastName;
 	}
 });
