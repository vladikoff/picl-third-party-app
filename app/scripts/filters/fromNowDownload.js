'use strict';

angular.module('piclThirdPartyApp')
  .filter('fromNowDownload', function () {
    return function(input) {
      return moment(new Date(input / 1000)).fromNow()
    };
  });
