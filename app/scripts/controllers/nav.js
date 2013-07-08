'use strict';

angular.module('piclThirdPartyApp')
  .controller('NavCtrl', ['$rootScope', '$scope', '$location', 'dropboxService', 'driveService', function ($rootScope, $scope, $location, dropboxService, driveService) {
    $scope.navClass = function (page) {
      var currentRoute = $location.path().substring(1) || '';
      return page === currentRoute ? 'active' : '';
    };

    $rootScope.syncService = null;
    $scope.loggedIn = false;

    $scope.$watch("loggedIn", function(newValue, oldValue){
      console.log("Value Changed: " + newValue + ' from ' + oldValue);
    });

    $scope.refresh = function () {
      window.location.reload();
    };

    // TODO: might not be the best place for this
    dropboxService.connectService($scope, function(connected) {
      if (!connected) {
        driveService.connectService($scope);
        // TODO: here
        $rootScope.syncService = driveService;
      } else {
        $rootScope.syncService = dropboxService;
      }
    });

    var login = function () {
      dropboxService.login($scope);
    };

    var logout = function () {
      dropboxService.logout();
    };

    var loginDrive = function () {
      driveService.login($scope);
    };

    $scope.login = login;
    $scope.loginDrive = loginDrive;
    $scope.logout = logout;
  }]);
