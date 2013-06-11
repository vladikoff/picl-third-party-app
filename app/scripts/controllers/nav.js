'use strict';

angular.module('piclThirdPartyApp')
  .controller('NavCtrl', ['$scope', '$location', 'dropboxService', function ($scope, $location, dropboxService) {
    $scope.navClass = function (page) {
      var currentRoute = $location.path().substring(1) || 'tabs';
      return page === currentRoute ? 'active' : '';
    };

    $scope.loggedIn = false;

    $scope.$watch("loggedIn", function(newValue, oldValue){
      console.log("Value Changed: " + newValue + ' from ' + oldValue);
    });


    // TODO: might not be the best place for this
    dropboxService.connectService($scope);

    var login = function () {
      dropboxService.login($scope);
    };

    $scope.login = login;
  }]);
