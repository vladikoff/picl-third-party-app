'use strict';

angular.module('piclThirdPartyApp')
  .controller('AddonsCtrl', function ($scope, dropboxService) {
    $scope.devices = [];

    dropboxService.getData('addons', function(data) {
      $scope.devices = data;
      $scope.$apply();
    });
  });
