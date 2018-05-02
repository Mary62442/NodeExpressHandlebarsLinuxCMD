app.controller('mainController', ['$scope', 'tmdb', function($scope, tmdb) {
  
    $scope.title = 'This is the title string'; 
    tmdb.defaultMovie().then(function(data) {       
      $scope.movie = data.data.results[0];
    })

    $scope.searchMovie = () => {
        $scope.movieSearched = document.getElementById('movie-search').value; 
        tmdb.searchMovie($scope.movieSearched).then(function(data) {       
            $scope.movie = data.data.results[0];
        })
    }   
    
  }]);