'use strict';

angular.module('piclThirdPartyApp')
  .controller('AddonsCtrl', function ($scope, dropboxService) {


    dropboxService.getData('addons', function(data) {
      console.log('Tab Data');
      console.log(data);
      console.log(Object.keys(data));
    });
  });
