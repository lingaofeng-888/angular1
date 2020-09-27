require('./index.css');
require('./other.css');
import angular from 'angular';
var app = angular.module('shop', []);
app.controller('car', function($scope) {
    $scope.name="apple";
    $scope.price=7;
});

