'use strict';

angular.module('piclThirdPartyApp')
  .controller('DownloadsCtrl', function ($scope, dropboxService) {
    $scope.devices = [];

    dropboxService.getData('downloads', function(data) {
      $scope.devices = data;
      $scope.$apply();
    });
  });


angular.module('piclThirdPartyApp').
  filter('calc', function() {
    return function(fileSize) {
      return parseInt((fileSize / 1000)) + "kb";
    };
  });


angular.module('piclThirdPartyApp')
  .filter('fromNowDownload', function () {
    return function(input) {
      return moment(new Date(input / 1000)).fromNow()
    };
  });

