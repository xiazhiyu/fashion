'use strict';

/* Filters */

angular.module('myApp.filters', [])
.filter('newline',['$sce',function($sce) {
  return function(text){
    return $sce.trustAsHtml(text.replace(/\n/g, '<br/>'));
  }
}]);
