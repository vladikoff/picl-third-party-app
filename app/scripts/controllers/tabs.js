'use strict';

angular.module('piclThirdPartyApp')
  .controller('TabsCtrl', function ($rootScope, $scope, dropboxService) {
    $scope.devices = [];

    $rootScope.syncService.getData('tabs', function(data) {
      $scope.devices = data;
      $scope.$apply();
    });

  });

angular.module('piclThirdPartyApp').
  filter('fromNow', function() {
    return function(dateString) {
      return moment(new Date(dateString)).fromNow()
    };
  });
