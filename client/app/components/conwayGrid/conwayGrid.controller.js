class ConwayGridController {
  /* @ngInject */
  constructor($scope) {
    var _this = this;
    this.$scope = $scope;

    this.$scope.$on('generateGrid', function(event, data) {
      console.log('Received Params: ', _this.rowSize, _this.colSize);
    });
  }
}

export default ConwayGridController;
