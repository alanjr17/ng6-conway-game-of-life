import ConwayGridModule from './conwayGrid';
import ConwayGridController from './conwayGrid.controller';
import ConwayGridComponent from './conwayGrid.component';
import ConwayGridTemplate from './conwayGrid.html';

describe('ConwayGrid', () => {
  let $rootScope;
  let $scope;
  let makeController;

  beforeEach(window.module(ConwayGridModule));

  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();    
    makeController = () => new ConwayGridController($scope);
  }));

  describe('Controller', () => {

    it('init Grid with correct size 10x10', () => {
      const controller = makeController();
      controller.rowSize = 10;
      controller.colSize = 10;
      controller.initGrid();

      expect(controller.grid.length).toEqual(10);
      expect(controller.grid[0].length).toEqual(10);
    });

    it('init Grid with correct size 50x50', () => {
      const controller = makeController();
      controller.rowSize = 50;
      controller.colSize = 50;
      controller.initGrid();

      expect(controller.grid.length).toEqual(50);
      expect(controller.grid[0].length).toEqual(50);
    });

    it('Keep cell alive with 2+ alive neighbors', () => {
      const controller = makeController();
      controller.rowSize = 10;
      controller.colSize = 10;
      controller.initGrid();
      controller.setDefaultSeeds();

      expect(controller.decideCellFuture(0,0)).toBe(true);
    });

    it('Kill cell with 3´alive neighbors', () => {
      const controller = makeController();
      controller.rowSize = 10;
      controller.colSize = 10;
      controller.initGrid();
      controller.setDefaultSeeds();

      controller.grid[1][4].alive = true;
      expect(controller.grid[2][3].alive).toBe(false);
      expect(controller.decideCellFuture(2,3)).toBe(true);
    });

    it('Keep death cells with no 3 alive neighbors', () => {
      const controller = makeController();
      controller.rowSize = 10;
      controller.colSize = 10;
      controller.initGrid();
      controller.setDefaultSeeds();

      expect(controller.decideCellFuture(1,1)).toBe(false);

      expect(controller.decideCellFuture(10,10)).toBe(false);
    });

    it('reborn cells in the correct way', () => {
      const controller = makeController();
      controller.rowSize = 10;
      controller.colSize = 10;
      controller.initGrid();
      controller.setDefaultSeeds();

      controller.grid[1][4].alive = true;
      expect(controller.grid[2][3].alive).toBe(false);
      expect(controller.decideCellFuture(2,3)).toBe(true);
    });

  });

  describe('Component', () => {
    // component/directive specs
    const component = ConwayGridComponent;

    it('includes the intended template', () => {
      expect(component.template).toEqual(ConwayGridTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).toEqual(ConwayGridController);
    });
  });
});