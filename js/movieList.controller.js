'use strict';


angular.module('movieApp').controller('movieListController', function($scope, $http) {
    $http.get('https://api.themoviedb.org/3/movie/popular?api_key=93c5311362abee15fcceeeafefac9991').success(function(data) {
        $scope.movies = data.results;
    });
});
angular.module('movieApp').controller('UpcomingListController', function($scope, $http) {
    $http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=be54fd1f19e0dea3de2cd4867e03448b').success(function(data) {
        $scope.movies = data.results;
    });
});

angular.module('movieApp').controller('PlayingListController', function($scope, $http) {
    $http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=be54fd1f19e0dea3de2cd4867e03448b').success(function(data) {
        $scope.movies = data.results;
    });
});

angular.module('movieApp').controller('TopListController', function ($scope, $http){
        $http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=be54fd1f19e0dea3de2cd4867e03448b').success(function(data) {
              $scope.movies = data.results;
            });

        });

angular.module('movieApp').controller('SpecsListController', function ($scope, $routeParams){

    $scope.specs = $routeParams.specs;
});
