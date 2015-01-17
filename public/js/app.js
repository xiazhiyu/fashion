'use strict';
angular.module('myApp', [
  'ngRoute',
  'ngCookies',
  'ngMaterial',
  'ngSanitize',
  'myApp.controllers',
  'myApp.services',
  'myApp.directives',
  'myApp.filters',
  'myApp.karteModule'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/karte', {templateUrl: 'views/karte/index.html', controller: 'karteController'});
  $routeProvider.otherwise({redirectTo: '/karte'});
}]);