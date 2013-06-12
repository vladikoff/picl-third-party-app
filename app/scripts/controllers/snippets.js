'use strict';

angular.module('piclThirdPartyApp')
  .controller('SnippetsCtrl',  function ($scope, dropboxService) {
    $scope.devices = [];

    dropboxService.getData('snippets', function(data) {
      $scope.devices = data;
      $scope.$apply();
    });
  });
