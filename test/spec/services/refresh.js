'use strict';

describe('Service: refresh', function () {

  // load the service's module
  beforeEach(module('piclThirdPartyApp'));

  // instantiate service
  var refresh;
  beforeEach(inject(function (_refresh_) {
    refresh = _refresh_;
  }));

  it('should do something', function () {
    expect(!!refresh).toBe(true);
  });

});
