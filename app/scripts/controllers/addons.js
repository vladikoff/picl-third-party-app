'use strict';

angular.module('piclThirdPartyApp')
  .controller('AddonsCtrl', function ($scope, dropboxService) {
    $scope.devices = [];

    dropboxService.getData('addons', function(data) {
      $scope.devices = data;
      $scope.$apply();
    });
  });


angular.module('piclThirdPartyApp').
  filter('viewUrl', function() {
    return function(urlObj) {
      if (urlObj.url) {
        return "<a href='" + urlObj.url.prePath + "/en-US/firefox/addon/" + urlObj.id.split("@")[0] + "' class='btn'>Download</a><br/>";
      } else {
        return "";
      }
    };
  });
