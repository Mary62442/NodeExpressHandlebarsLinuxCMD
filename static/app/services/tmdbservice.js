app.service('tmdb', ['$http', function($http)  { 

    var defaultMovie_ = function() {

        return $http({
            url: 'https://api.themoviedb.org/3/search/movie?', 
            method: "GET",
            params: {
                api_key: '37267a52fc129ad7d6ddb14573fb0009',
                query: 'what dreams may come'
            }
        })        
        .then((data) => { 
        return data; 
        }) 
        .catch((err) => { 
        return err; 
        }); 

    }

    var searchMovie_ = function(movie) {
        return $http({
            url: 'https://api.themoviedb.org/3/search/movie?', 
            method: "GET",
            params: {
                api_key: '37267a52fc129ad7d6ddb14573fb0009',
                query: movie
            }
        })        
        .then((data) => { 
        return data; 
        }) 
        .catch((err) => { 
        return err; 
        }); 
    }

    return {
        defaultMovie: defaultMovie_,
        searchMovie: searchMovie_
    }
    
  }]);

  