'use strict';
import angular from 'angular';

// Declare app level module which depends on views, and core components
angular.module('myApp', [ ])
    .controller('appController', ['$scope', function ($scope) {
      $scope.title = 'Hello World';
    }]);
