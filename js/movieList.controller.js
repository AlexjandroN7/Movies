angular.module("movieApp")
    .controller('movieListController', function($http, $scope, $rootScope, MoviesFactory) {

        $rootScope.section = 'popular'
        $scope.title = "Popular Movies"
        MoviesFactory.getPopular()
            .then(function(movies) {
                $scope.movies = movies;
            })
    })
    .controller('topRatedController', function($http, $scope, $rootScope, topRatedFactory) {

        $rootScope.section = 'topRated'
        $scope.title = "Top Rated Movies"
        topRatedFactory.getTopRated()
            .then(function(movies) {
                $scope.movies = movies;
            })
    })
    .controller('upcomingController', function($http, $scope, $rootScope, upcomingFactory) {

        $rootScope.section = 'upcoming'
        $scope.title = "Upcoming Movies"
        upcomingFactory.getUpcoming()
            .then(function(movies) {
                $scope.movies = movies;
            })

    })

    .controller('nowPlayingController', function($http, $scope, $rootScope, nowPlayingFactory) {

        $rootScope.section = 'nowPlaying'
        $scope.title = "Now Playing Movies"
        nowPlayingFactory.getNowPlaying()
            .then(function(movies) {
                $scope.movies = movies;
            })
    })
