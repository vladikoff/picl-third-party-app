'use strict';

describe('Controller: SnippetsCtrl', function () {

  // load the controller's module
  beforeEach(module('piclThirdPartyApp'));

  var SnippetsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SnippetsCtrl = $controller('SnippetsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
