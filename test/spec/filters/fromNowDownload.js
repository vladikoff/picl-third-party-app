'use strict';

describe('Filter: fromNowDownload', function () {

  // load the filter's module
  beforeEach(module('piclThirdPartyApp'));

  // initialize a new instance of the filter before each test
  var fromNowDownload;
  beforeEach(inject(function ($filter) {
    fromNowDownload = $filter('fromNowDownload');
  }));

  it('should return the input prefixed with "fromNowDownload filter:"', function () {
    var text = 'angularjs';
    expect(fromNowDownload(text)).toBe('fromNowDownload filter: ' + text);
  });

});
