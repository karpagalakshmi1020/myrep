(function(){
'use strict';
   angular.module(‘simpleCal',[])
   .controller(‘simpleCalController', function($scope){
   $scope.n1="";
   $scope.n2="";
   $scope.totalValue=0;
   $scope.cal = function(){
     var t=tcal();
     $scope.totalValue = t;       }
    function tcal() {
      return parseInt($scope.n1)+parseInt($scope.n2); }
   });
})();
