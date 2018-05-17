import angular from 'angular';
import conwayGridComponent from './conwayGrid.component';

const conwayGridModule = angular.module('conwayGrid', [])

  .component('conwayGrid', conwayGridComponent)

  .name;

export default conwayGridModule;