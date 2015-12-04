angular.module('BnpApp', [])
  .controller('mainController', function($scope, $rootScope) {
    $rootScope.signOut = function(){
      $rootScope.user = {};
    };
  }).controller('headController', function($scope, $rootScope) {
    $scope.auth = function(arg){
      arg["firstname"] = 'Dylan';
      arg["lastname"] = 'Gillard';
      $rootScope.user = arg;
    };

  });
