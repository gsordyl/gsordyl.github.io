'use strict';

/**
 * @ngdoc overview
 * @name gsordylgithubioApp
 * @description
 * # gsordylgithubioApp
 *
 * Main module of the application.
 */
angular
  .module('gsordylgithubioApp', [
    'ngRoute'
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
      .otherwise({
        redirectTo: '/'
      });
  });
