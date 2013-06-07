'use strict';

angular.module('piclThirdPartyApp', [])
  .config(function ($routeProvider, $locationProvider) {
    // http://stackoverflow.com/questions/11095179/using-html5-pushstate-on-angular-js
    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        redirectTo: '/tabs'
      })
      .when('/tabs', {
        templateUrl: 'views/tabs.html',
        controller: 'TabsCtrl'
      })
      .when('/downloads', {
        templateUrl: 'views/downloads.html',
        controller: 'DownloadsCtrl'
      })
      .when('/bookmarks', {
        templateUrl: 'views/bookmarks.html',
        controller: 'BookmarksCtrl'
      })
      .when('/addons', {
        templateUrl: 'views/addons.html',
        controller: 'AddonsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });