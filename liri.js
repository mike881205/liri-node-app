const spotify = require('node-spotify-api')
const moment = require('moment')
const dotenv = require('dotenv')
const axios = require('axios')



let movies = ["Star Trek", "Clueless", "Big Hero 6"]

for (i = 0; i < movies.length; i++) {

    let movieTitle = movies[i].split(' ').join('+');

    console.log(movieTitle)

    axios.get("http://www.omdbapi.com/?t=" + movieTitle + "=&plot=short&apikey=f5d44a54").then(
        function (response) {
            console.log("The movie's rating is: " + response.data.imdbRating);
        })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
}