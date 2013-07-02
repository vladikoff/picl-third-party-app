'use strict';

angular.module('piclThirdPartyApp')
  .service('dropboxService', function ($rootScope) {

    $rootScope.reqStack = 0;

    // new dropbox client app
    $rootScope.client = new Dropbox.Client({
      key: 'gBZIklF5PfA=|f3fms27tm69IELcc347Wmtex0IZ8k+n2y8Sy21+6Hg==',
      sandbox: true
    });

    // setup auth driver
    $rootScope.client.authDriver(new Dropbox.Drivers.Redirect({
      rememberUser: true,
      receiverUrl: 'http://' + window.location.host + '/oauth_receiver.html'
    }));

    return {
      /**
       * Check if logged into dropbox without the auth flow
       * @param scope
       */
      connectService: function(scope, cb) {
        $rootScope.client.authenticate({interactive: false}, function() {
          console.log($rootScope.client.isAuthenticated());
          scope.loggedIn = $rootScope.client.isAuthenticated();
          scope.loggedName = 'Dropbox';
          if (scope.loggedIn) {
            scope.$apply();
          }

          if (cb) cb($rootScope.client.isAuthenticated());
        });
      },
      /**
       * Get the dropbox client
       * @returns {*}
       */
      client: function() {
        return $rootScope.client;
      },
      /**
       * Check if authenticated to dropbox
       * @returns {*}
       */
      connected: function() {
        return $rootScope.client && $rootScope.client.isAuthenticated();
      },
      /**
       * Trigger login flow
       * @param scope
       */
      login: function(scope) {
        $rootScope.client.authenticate(function (error, client) {
          console.log(error);

          scope.loggedIn = $rootScope.client.isAuthenticated();
          if (scope.loggedIn) {
            scope.$apply();
          }

          $rootScope.client.getUserInfo(function (error, userInfo) {
            if (error) {
              console.log(error);
            }
            console.log("Hello, " + userInfo.name + "!");
          });
        });
        //window.location.reload();
      },
      /**
       * Logout from dropbox, forget tokens
       */
      logout: function() {
        $rootScope.client.signOut(function() {

          window.location.reload();
        });
      },
      /**
       * Get data for a content type
       * @param type
       * @param callback
       */
      getData: function(type, callback) {
        if (this.connected()) {
          $("#progress").show();
          $rootScope.reqStack++;

          $rootScope.client.readFile("." + type + ".json", function(error, data) {
            try {
              callback(JSON.parse(data));
            } catch(e) {
              console.log('fail');
              callback({});
            }

            $rootScope.reqStack--;
            if ($rootScope.reqStack === 0) {
              $("#progress").hide();
            }
          })
        } else {
          console.log('not connected');
        }
      }
    };
  });
