'use strict';

describe('Controller: Custom1Ctrl', function () {

  // load the controller's module
  beforeEach(module('skyfly33App'));

  var Custom1Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Custom1Ctrl = $controller('Custom1Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Custom1Ctrl.awesomeThings.length).toBe(3);
  });
});
