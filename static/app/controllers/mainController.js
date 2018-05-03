app.controller('mainController', ['$scope', 'tmdb', function($scope, tmdb) {
  
    $scope.title = 'This is the title string'; 
    tmdb.defaultMovie().then(function(data) {       
      $scope.movies = data.data.results;
    })

    $scope.searchMovie = () => {
        $scope.movieSearched = document.getElementById('movie-search').value; 
        tmdb.searchMovie($scope.movieSearched).then(function(data) {       
            $scope.movies = data.data.results;
        })
    }   
    
  }]);