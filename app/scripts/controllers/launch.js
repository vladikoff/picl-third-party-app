'use strict';

/**
 * The list of most visited sites with their app icons
 */
angular.module('piclThirdPartyApp')
  .controller('LaunchCtrl', function ($scope, dropboxService) {
    $scope.devices = [];

    dropboxService.getData('favicons', function(data) {
      $scope.devices = data;
      $scope.$apply();
    });
  });

/**
 * Convert fav url to site link
 * TODO: needs updating
 */
angular.module('piclThirdPartyApp').
  filter('urlToLink', function() {
    return function(urlString) {
      if (urlString) {
        var a = urlString.split("://")[1];
        if (a) {
          return "http://" + a.split("/")[0];
        } else {
          return "#";
        }
      } else {
        return "#";
      }
    };
  });
