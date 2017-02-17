'use strict';

angular.
  module('movieApp').
  config(function($routeProvider) {
        $routeProvider.
           when('/', {
             templateUrl: 'templates/movie-list.template.html',

             controller: 'movieListController'
           }).
           when('/upcoming', {
             templateUrl:'templates/movie-list.template.html',
             controller:'UpcomingListController'
           }).
           when('/playing', {
             templateUrl:'templates/movie-list.template.html',
             controller:'PlayingListController'
           }).
           when('/top', {
             templateUrl:'templates/movie-list.template.html',
             controller:'TopListController'
           }).
           when('/:specs', {
             templateUrl:'templates/movie-specs.template.html',
             controller:'SpecsListController'
           }).
           otherwise({
             redirectTo: '/'
           });
        });
