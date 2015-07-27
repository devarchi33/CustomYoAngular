'use strict';

/**
 * @ngdoc function
 * @name skyfly33App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the skyfly33App
 */
 angular.module('skyfly33App')
 .controller('AboutCtrl', function ($scope, $http) {
 	this.awesomeThings = [
 	'HTML5 Boilerplate',
 	'AngularJS',
 	'Karma'
 	];

 	$scope.population = 700000000;
 	$scope.countries = [
 	{
 		name : 'korea',
 		location : 'Asia' 
 	},
 	{
 		name : 'USA',
 		location : 'America'
 	}
 	];

 	$http.get("http://www.w3schools.com/angular/customers.php")
 	.success(
 		function(response){
 			$scope.names = response.records;
 	});
 });
