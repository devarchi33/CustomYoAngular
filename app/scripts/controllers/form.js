'use strict';

/**
 * @ngdoc function
 * @name skyfly33App.controller:FormCtrl
 * @description
 * # FormCtrl
 * Controller of the skyfly33App
 */
 angular.module('skyfly33App')
 .controller('FormCtrl', function ($scope, $http) {
 	this.awesomeThings = [
 	'HTML5 Boilerplate',
 	'AngularJS',
 	'Karma'
 	];

 	$scope.name = "formControllerrrrrr";
 	$scope.save = function(intake) {
 		$scope.name = angular.copy(intake);
 	};
 	
 	var sampleSVG = d3.select("#viz")
 	.append("svg")
 	.attr("width", 100)
 	.attr("height", 100);    

 	sampleSVG.append("circle")
 	.style("stroke", "#1BBBFB")
 	.style("fill", "#1BBBFB")
 	.attr("r", 40)
 	.attr("cx", 50)
 	.attr("cy", 50)
 	.on("mouseover", function(){d3.select(this).style("fill", "red").style("stroke","red");})
 	.on("mouseout", function(){d3.select(this).style("fill", "#1BBBFB").style("stroke","#1BBBFB");});

 	d3.selectAll("p")
 	.data([4, 8, 15, 16, 23, 42])
 	.style("font-size", function(d) { return d + "px"; });

 	d3.selectAll("p").style("color", function(d, i) {
 		return i % 2 ? "#1BBBFB" : "red";
 	});
 });
