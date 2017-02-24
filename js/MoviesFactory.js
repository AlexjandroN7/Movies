/*(function() {

  angular.module("movieApp")
    .factory("MoviesFactory", function($http) {

      var apiKey = '93c5311362abee15fcceeeafefac9991'


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
    .factory("topRatedFactory", function($http) {


        var apiKey = '93c5311362abee15fcceeeafefac9991'


      function getTopRated(){
        var url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=<%KEY%>'
        url = url.replace('<%KEY%>', apiKey)

        return $http.get(url)
                    .then(getResults)
                    .then(shortenResults)
      }
      return {
        getTopRated: getTopRated,
      }
    })
    .factory("upcomingFactory", function($http){

    var apiKey = '93c5311362abee15fcceeeafefac9991'



      function getUpcoming(){
        var url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=<%KEY%>'
        url = url.replace('<%KEY%>', apiKey)

        return $http.get(url)
                    .then(getResults)
                    .then(shortenResults)

      }
      return {
        getUpcoming: getUpcoming,
      }
    })
    .factory("nowPlayingFactory", function($http) {

    var apiKey = '93c5311362abee15fcceeeafefac9991'



      function getNowPlaying(){
        var url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=<%KEY%>'
        url = url.replace('<%KEY%>', apiKey)

        return $http.get(url)
                    .then(getResults)
                    .then(shortenResults)
      }

      return {
        getNowPlaying: getNowPlaying,
      }
    })

  function getResults(response) {
    return response.data.results;
  }

  function shortenResults(movies) {
    return movies.map(function(movie) {
      var currentMovieShortened = {
        title: movie.title,
        poster_path: 'http://image.tmdb.org/t/p/w150/' + movie.poster_path
      }
      return currentMovieShortened;
    })
  }

})()
*/
