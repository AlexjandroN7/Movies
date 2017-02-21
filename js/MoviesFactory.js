(function() {

  angular.module("movieApp")
    .factory("MoviesFactory", function($http) {

      var apiKey = '93c5311362abee15fcceeeafefac9991'

      /* getPopular */
      function getPopular(){
        var url = 'https://api.themoviedb.org/3/movie/popular?api_key=<%KEY%>'
        url = url.replace('<%KEY%>',apiKey)

        return $http.get(url)
                  .then( getResults )
                  .then( shortenResults )
      }

   

      return {
        getPopular: getPopular,
       
      }

    })

  function getResults(response) {
    return response.data.results;
  }

  function shortenResults(movies) {
    console.log(movies);
    return movies.map(function(movie) {
      var currentMovieShortened = {
        title: movie.title,
        poster_path: 'http://image.tmdb.org/t/p/w150/' + movie.poster_path
      }
      return currentMovieShortened;
    })
  }

})()
