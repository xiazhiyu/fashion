/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var karteModule = angular.module('myApp.karteModule',['ngMaterial']);

karteModule.factory('karteService', ['$http','$rootScope','$mdToast', function($http,$rootScope,$mdToast) { 
  return new karteService($http, $rootScope, $mdToast); 
}]);  

karteModule.controller('karteController', ['$scope','$rootScope','$location','karteService','$mdDialog',karteController]); 
// dataElementModule.controller('dataElementCreateController', ['$scope','dataElementService','pageParameterService',dataElementCreateController]); 

