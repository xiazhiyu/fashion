'use strict';

angular.module('myApp.controllers', [])
  .factory('User',['$http',function($http){
    var testUser = function(){
        $http.get("users").success(function(data){
            console.log(data);
        }).error(function(msg){
            console.log(msg);
        });
    };
    return {test:testUser};
  }])
  .controller('MyCtrl0', [function() {

  }])
  .controller('MyCtrl1', ['User','$scope','$mdDialog',function(User,$scope,$mdDialog) {
      // console.log("test me");
      // User.test(function(data){
      //   console.log(data);
      // });
     
      // $scope.data = {
      //   group1 : 'Banana',
      //   group2 : '2'
      // };

  }])
  .controller('MyCtrl2', [function() {

  }]);