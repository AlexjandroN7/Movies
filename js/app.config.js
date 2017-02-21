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
             templateUrl: 'templates/upcoming.template.html',
             controller: 'upcomingController'
           }).
           when('/topRated', {
             templateUrl: 'templates/top-rated.template.html',
             controller: 'topRatedController'
           }).
           when('/nowPlaying', {
             templateUrl: 'templates/now-playing.template.html',
             controller: 'nowPlayingController'
           }).
           when('/:movieName', {
             template: '<h1>TODO create movie detail view</h1>',
             controller: 'movieListController'
           }).
           otherwise({
             redirectTo: '/'
           });
        });
