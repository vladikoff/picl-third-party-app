'use strict';

angular.module('piclThirdPartyApp')
  .controller('BookmarksCtrl', function ($scope, dropboxService) {

    dropboxService.getData('bookmarks', function(data) {
      console.log('Tab Data');
      console.log(data);
      console.log(Object.keys(data));
    });

  });
