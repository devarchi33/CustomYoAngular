'use strict';

/**
 * @ngdoc function
 * @name skyfly33App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the skyfly33App
 */
angular.module('skyfly33App')
  .controller('AboutCtrl', function ($scope) {
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
  });
