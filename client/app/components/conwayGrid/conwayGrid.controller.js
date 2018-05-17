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
    this.loopCellMatrix();
    this.iteration++;
  }

  /**
   * Iterate all Matrix and call a function to evaluate each cell neighbors
   */
  loopCellMatrix() {
    for(let row = 0; row < this.rowSize; row++) {
      for(let cell = 0; cell < this.colSize; cell++) {
        console.log(this.decideCellFuture(row, cell));
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
