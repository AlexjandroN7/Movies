angular.module('popularMovie')
  .controller('popularController', ['$http','$scope', 'popularFactory', function($http, $scope, popularFactory){


    $scope.title = "Popular Movies"
    popularFactory.getPopular()
        .then(function(movies) {
            $scope.movies = movies;
        });

  }])
