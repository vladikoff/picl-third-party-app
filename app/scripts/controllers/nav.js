'use strict';

angular.module('piclThirdPartyApp')
  .controller('NavCtrl', ['$scope', '$location', 'dropboxService', 'driveService', function ($scope, $location, dropboxService, driveService) {
    $scope.navClass = function (page) {
      var currentRoute = $location.path().substring(1) || '';
      return page === currentRoute ? 'active' : '';
    };

    $scope.loggedIn = false;

    $scope.$watch("loggedIn", function(newValue, oldValue){
      console.log("Value Changed: " + newValue + ' from ' + oldValue);
    });

    $scope.refresh = function () {
      window.location.reload();
    };

    // TODO: might not be the best place for this
    dropboxService.connectService($scope);

    var login = function () {
      dropboxService.login($scope);
    };

    var logout = function () {
      dropboxService.logout();
    };

    var loginDrive = function () {
      driveService.login($scope);
    };


    /*
    var addGlass = function () {
      var creds = dropboxService.client().credentials();
      var tokens =  jQuery.param(creds);
      window.open('http://localhost:8500/connect?' + tokens);
    };
    */

    $scope.login = login;
    $scope.loginDrive = loginDrive;
    $scope.logout = logout;
  }]);
