'use strict';

describe('Controller: LaunchCtrl', function () {

  // load the controller's module
  beforeEach(module('piclThirdPartyApp'));

  var LaunchCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LaunchCtrl = $controller('LaunchCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
