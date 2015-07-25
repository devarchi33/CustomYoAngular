'use strict';

/**
 * @ngdoc overview
 * @name skyfly33App
 * @description
 * # skyfly33App
 *
 * Main module of the application.
 */
angular
  .module('skyfly33App', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/custom1', {
        templateUrl: 'views/custom1.html',
        controller: 'Custom1Ctrl',
        controllerAs: 'custom1'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
