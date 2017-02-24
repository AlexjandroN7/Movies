angular.module('upcomingMovie')
  .controller('upcomingController', ['$http','$scope', 'upcomingFactory', function($http, $scope, upcomingFactory){


    $scope.title = "Upcoming Movies"
    upcomingFactory.getUpcoming()
        .then(function(movies) {
            $scope.movies = movies;
        });

  }])
