'use strict';

/**
 * Downloads content type
 */
angular.module('piclThirdPartyApp')
  .controller('DownloadsCtrl', function ($scope, dropboxService) {
    $scope.devices = [];

    dropboxService.getData('downloads', function(data) {
      $scope.devices = data;
      $scope.$apply();
    });
  });


/**
 * Size of the download
 */
angular.module('piclThirdPartyApp').
  filter('calc', function() {
    return function(fileSize) {
      return parseInt((fileSize / 1000)) + "kb";
    };
  });


/**
 * Download readable date conversion
 */
angular.module('piclThirdPartyApp')
  .filter('fromNowDownload', function () {
    return function(input) {
      return moment(new Date(input / 1000)).fromNow()
    };
  });

