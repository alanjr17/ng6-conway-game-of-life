import template from './conwayGrid.html';
import controller from './conwayGrid.controller';
import './conwayGrid.scss';

const conwayGridComponent = {
  restrict: 'E',
  bindings: {
    rowSize: '<',
    colSize: '<'
  },
  template,
  controller,
};

export default conwayGridComponent;
