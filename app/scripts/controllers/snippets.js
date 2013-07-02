'use strict';

angular.module('piclThirdPartyApp')
  .controller('SnippetsCtrl',  function ($rootScope, $scope, dropboxService) {
    $scope.devices = [];

    $rootScope.syncService.getData('snippets', function(data) {
      $scope.devices = data;
      $scope.$apply();
    });
  });
