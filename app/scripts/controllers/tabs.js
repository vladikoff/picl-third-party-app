'use strict';

angular.module('piclThirdPartyApp')
  .controller('TabsCtrl', function ($scope, dropboxService) {
    $scope.devices = [];

    dropboxService.getData('tabs', function(data) {
      $scope.devices = data;
      $scope.$apply();
    });

  });

angular.module('piclThirdPartyApp').
  filter('fromNowDownload', function() {
    return function(dateString) {
      return moment(new Date(dateString)).fromNow()
    };
  });
