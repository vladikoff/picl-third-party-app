'use strict';

angular.module('piclThirdPartyApp')
  .controller('DownloadsCtrl', function ($scope, dropboxService) {

    dropboxService.getData('downloads', function(data) {
      console.log('Downloads Data');
    });
  });
