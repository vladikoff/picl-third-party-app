'use strict';

angular.module('piclThirdPartyApp')
  .controller('BookmarksCtrl', function ($scope, dropboxService) {
    $scope.devices = [];

    dropboxService.getData('bookmarks', function(data) {
      $scope.devices = data;
      $scope.$apply();
    });
  });
