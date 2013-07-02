'use strict';

angular.module('piclThirdPartyApp')
  .service('driveService', function ($rootScope) {

    // new dropbox client app
    $rootScope.driveClient = {};

    var CLIENT_ID = '883869750843.apps.googleusercontent.com';
    var SCOPES = 'https://www.googleapis.com/auth/drive';

    /**
    * Check if the current user has authorized the application.
    */
    function checkAuth() {

    }

    /**
    * Called when authorization server replies.
    *
    * @param {Object} authResult Authorization result.
    */
    function handleAuthResult(authResult) {
      console.log(authResult);
    }

    return {
      connectService: function(scope) {

      },
      client: function() {
      },
      connected: function() {
      },
      login: function(scope) {
        gapi.auth.authorize({'client_id': CLIENT_ID, 'scope': SCOPES, 'immediate': false}, handleAuthResult);
      },
      logout: function() {

      },

      getData: function(type, callback) {
        var request = gapi.client.request({
          'path': '/upload/drive/v2/files',
          'method': 'POST',
          'params': {'uploadType': 'multipart'},
          'headers': {
            'Content-Type': 'multipart/mixed; boundary="' + boundary + '"'
          },
          'body': multipartRequestBody});
      }
    };
  });
