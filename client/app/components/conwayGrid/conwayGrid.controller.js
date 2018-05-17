class ConwayGridController {
  /* @ngInject */
  constructor($scope) {
    var _this = this;
    this.$scope = $scope;

    this.$scope.$on('generateGrid', function(event, data) {
      _this.initGrid();
      _this.setDefaultSeeds();
    });

    this.grid = [];
    this.iteration = 0;
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

  startGame() {
    console.log('Start Game');
  }

  stopGame() {
    console.log('Stop Game');
  }

  /**
   * Clear all Grid with empty values, reset iterator count and set Default seeds.
   */
  resetGame() {
    this.initGrid();
    this.setDefaultSeeds();
    this.iteration = 0;
  }

  setDefaultSeeds(){
    this.grid[0][0].alive = true;
    this.grid[0][1].alive = true;
    this.grid[1][0].alive = true;
    this.grid[1][3].alive = true;
    this.grid[2][1].alive = true;
    this.grid[2][2].alive = true;
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
