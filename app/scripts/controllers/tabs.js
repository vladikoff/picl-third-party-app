'use strict';

angular.module('piclThirdPartyApp')
  .controller('TabsCtrl', function ($scope, dropboxService) {
    console.log('tabs');

    dropboxService.getData('tabs', function(data) {
      console.log('Tab Data');
      console.log(data);
      console.log(Object.keys(data));
    });

  });
