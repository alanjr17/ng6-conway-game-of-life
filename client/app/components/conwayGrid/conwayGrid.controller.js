class ConwayGridController {
  /* @ngInject */
  constructor($scope, $interval) {
    var _this = this;
    this.$scope = $scope;
    this.$interval = $interval;

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

  /**
   * Init an infinite Loop that call cicle functions.
   * 1. Iterate all cells and apply game rules to eval next step behavior.
   * 2. After evaluate all cells, update all status for the next step.
   * 3. Increase iteration counter 
   */
  startGame() {
    this.interval = this.$interval(() => {
      this.loopCellMatrix();
      this.updateCellsFuture();
      this.iteration++;
    }, 300);
  }

  /**
   * Iterate all Matrix and call a function to evaluate each cell neighbors
   */
  loopCellMatrix() {
    for(let row = 0; row < this.rowSize; row++) {
      for(let cell = 0; cell < this.colSize; cell++) {
        this.grid[row][cell].willLive = this.decideCellFuture(row, cell);
      }
    }
  }

   /**
   * This functions iterate all 8 neighbors and count alive ones.
   * After count, apply the GAME RULES and decide which cell will live or die.
   * @param  {int} indexR Receive current row pointer
   * @param  {int} indexC Receive current cell pointer
   * @return  {boolean} Return what will be the condition of this cell for the next iteration
   */
  decideCellFuture(indexR, indexC) {
    let aliveNgh = 0;

    for(let row = indexR-1; row <= indexR+1; row++) {
      for(let cell = indexC-1; cell <= indexC+1; cell++) {
        if( this.grid[row] && this.grid[row][cell] && (row!=indexR || cell!=indexC) 
          && this.grid[row][cell].alive) {
          aliveNgh++;
        }
      }
    }

    if( aliveNgh == 3 ) {
      return true;
    } else if ( aliveNgh == 2 && this.grid[indexR][indexC].alive) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * After being evaluated all the grid, Iterate all cells and UPDATE current "alive" status
   * with "willLive" value.
   */
  updateCellsFuture() {
    for(let row = 0; row < this.rowSize; row++) {
      for(let cell = 0; cell < this.colSize; cell++) {
        this.grid[row][cell].alive = this.grid[row][cell].willLive; 
      }
    }
  }

  /**
   * Cancel game interval
   */
  stopGame() {
    this.$interval.cancel(this.interval);
  }

  /**
   * Clear all Grid with empty values, reset iterator count and set Default seeds.
   */
  resetGame() {
    this.initGrid();
    this.setDefaultSeeds();
    this.iteration = 0;
  }

  setPeriod15() {
    this.initGrid();
    this.iteration = 0;

    this.grid[10][25].alive = true;
    this.grid[11][25].alive = true;
    this.grid[12][24].alive = true;
    this.grid[12][26].alive = true;
    this.grid[13][25].alive = true;
    this.grid[14][25].alive = true;
    this.grid[15][25].alive = true;
    this.grid[16][25].alive = true;
    this.grid[17][24].alive = true;
    this.grid[17][26].alive = true;
    this.grid[18][25].alive = true;
    this.grid[19][25].alive = true;
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
