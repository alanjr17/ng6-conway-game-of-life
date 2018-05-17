import HomeModule from './home';

describe('Home', () => {
  let $rootScope;
  let $componentController;

  beforeEach(window.module(HomeModule));

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $componentController = $injector.get('$componentController');
  }));

  describe('Controller', () => {
    // controller specs
    let controller;
    beforeEach(() => {
      controller = $componentController('home', {
        $scope: $rootScope.$new()
      });
    });

    it('has initial grid size', () => { 
      expect(controller.rowSize).toBe(50);
      expect(controller.colSize).toBe(50);
    });
  });
});
