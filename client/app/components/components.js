import angular from 'angular';
import Home from './home/home';
import ConwayGrid from './conwayGrid/conwayGrid';

const componentModule = angular.module('app.components', [
  Home,
  ConwayGrid
])

  .name;

export default componentModule;
