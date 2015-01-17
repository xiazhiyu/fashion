'use strict';

var directives = angular.module('myApp.directives', []);


// directives.directive('myDestroy',function(){
//   // var link = function(scope, elem, attrs, ngModel) {
//   //   scope.$on('$destroy', function(){
//   //     alert("destroy");
//   //     // if(scope.form.y) delete scope.form.y;
//   //     scope.$apply();
//   //   }) 
//   // }

//   return 
//   {
//     restrict: 'A',
//     require: '?ngModel'
//     // link: link
//   }
// });


directives.directive('myAutoDestroy',function() {
    return {
        restrict: 'A',
        require : 'ngModel',
        link : function (scope, element, attrs, ngModelCtrl) {
            scope.$on("$destroy",function(){
              ngModelCtrl.$setViewValue(undefined);
            })
        }
    }
});