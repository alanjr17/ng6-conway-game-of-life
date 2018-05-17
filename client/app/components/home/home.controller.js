class HomeController {
  /* @ngInject */
  constructor($scope) {
    this.$scope = $scope;

    this.rowSize = 50;
    this.colSize = 50;
  }

  /**
   * Send an Event to conwayGrid child component to init behavior
   * @param  {string}
   * @return  {boolean}
   */
  generateGrid() {
    console.log('generateGrid');
  }
}

export default HomeController;
