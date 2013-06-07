'use strict';

angular.module('piclThirdPartyApp')
  .controller('NavCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.navClass = function (page) {
      var currentRoute = $location.path().substring(1) || 'tabs';
      return page === currentRoute ? 'active' : '';
    };

    // TODO: move this
    var client = new Dropbox.Client({
      key: 'gBZIklF5PfA=|f3fms27tm69IELcc347Wmtex0IZ8k+n2y8Sy21+6Hg==',
      sandbox: true
    });

    client.authDriver(new Dropbox.Drivers.Popup());

    $scope.dbClient = client;
  }]);
