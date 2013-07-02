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

    return {
      connectService: function (scope) {
        gapi.auth.authorize({'client_id': CLIENT_ID, 'scope': SCOPES, 'immediate': true}, function (authResult) {
          console.log('Drive:', console.log(authResult));
          if (authResult) {
            scope.loggedIn = true;
            scope.loggedName = 'Drive';
            if (scope.loggedIn) {
              scope.$apply();
            }
          }

        });
      },
      client: function () {
      },
      connected: function () {
      },
      login: function (scope) {
        var _that = this;
        gapi.auth.authorize({'client_id': CLIENT_ID, 'scope': SCOPES, 'immediate': false}, function (authResult) {
        });
      },
      logout: function () {

      },

      getData: function (type, callback) {
        var file =  "." + type + ".json";
        var findQuery = {
          q: "title = '" + file + "' and " + "trashed = false",
          maxResults: 1
        };

        gapi.client.load('drive', 'v2', function () {
          gapi.client.drive.files.list(findQuery).execute(function (response) {
            var fileUrl = null;
            try {
              fileUrl = response.items[0].downloadUrl;
            } catch (e) {
              console.log('File not found...');
            }
            if (fileUrl) {
              $.ajax({
                url: fileUrl,
                beforeSend: function (xhr) {
                  xhr.setRequestHeader('Authorization', 'OAuth ' + gapi.auth.getToken().access_token);
                },
                success: function (data) {
                  console.log(data);
                  callback(data);
                }
              });
            }

          });
        });
      }
    };
  });

