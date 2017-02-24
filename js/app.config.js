'use strict';

angular.
  module('movieApp').
  config(function($routeProvider) {
        $routeProvider.
           when('/', {
             template: '<popular-component></popular-component>'

           }).
           when('/upcoming', {
             template: '<upcoming-component></upcoming-component>'

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
