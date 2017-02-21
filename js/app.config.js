'use strict';

angular.
  module('movieApp').
  config(function($routeProvider) {
        $routeProvider. 
           when('/', {
             templateUrl: 'js/movie-list.template.html',
             controller: 'movieListController'
           }).
           when('/:movieName', {
             template: '<h1>TODO create movie detail view</h1>',
             controller: 'movieListController'
           }).
           otherwise({
             redirectTo: '/'
           });
        });