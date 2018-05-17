class ConwayGridController {
  /* @ngInject */
  constructor($scope) {
    var _this = this;
    this.$scope = $scope;

    this.$scope.$on('generateGrid', function(event, data) {
      _this.initGrid();
    });

    this.grid = [];
  }

  /**
   * Generate an array of arrays to define a new grid with component params sizes
   */
  initGrid() {
    this.grid = [];
    for(let row = 0; row < this.rowSize; row++) {
      let currentRow = [];
      for(let cell = 0; cell < this.colSize; cell++) {
        currentRow.push(this.getEmptyCell());
      }
      this.grid.push(currentRow);
    }
  }

  /**
   * Define an structure for Cells in grid that will be changed by the game loops
   */
  getEmptyCell() {
    return {
      alive: false,
      willLive: false
    }
  }
}

export default ConwayGridController;
