'use strict';

describe('Controller: RefreshCtrl', function () {

  // load the controller's module
  beforeEach(module('piclThirdPartyApp'));

  var RefreshCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RefreshCtrl = $controller('RefreshCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
