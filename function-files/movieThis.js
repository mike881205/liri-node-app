const axios = require("axios")


// movie-this INPUT =============================================
function movieThis() {

    // If the user enters a search term (process.argv[3])
    if (process.argv.length >= 4) {

        let movieTitle = [];

        // Loop through all words entered for process.argv[3]
        for (let j = 3; j < process.argv.length; j++) {

            let movie = process.argv[j]

            // Push all of the words in the search term to the array as separate items          
            movieTitle.push(movie)

        }

        // Join each item in the array with '+' to output the search format for the axios call
        let joinedTitle = movieTitle.join("+")

        axios.get("http://www.omdbapi.com/?t=" + joinedTitle + "=&plot=short&apikey=f5d44a54").then(
            function (response) {

                console.log(" ")

                // Movie Title
                console.log(response.data.Title);

                // Year Released
                console.log("Year Released: " + response.data.Year);

                // IMDB Rating
                console.log("IMDB Rating: " + response.data.Ratings[0].Value)

                // Rotten Tomatoes Rating
                console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value)

                // Production Country
                console.log("Produced in: " + response.data.Country);

                // Language
                console.log("Language: " + response.data.Language);

                // Plot Info
                console.log("Plot: " + response.data.Plot);

                //Actors
                console.log("Actors: " + response.data.Actors);

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

    // If the user DOES NOT input a search term (process.argv[3])
    else {
        axios.get("http://www.omdbapi.com/?t=mr+nobody=&plot=short&apikey=f5d44a54").then(
            function (response) {

                // Default search term is 'Mr. Nobody'
                console.log(" ")
                console.log("Default Movie Search: 'Mr. Nobody'")
                console.log(" ")
                console.log(response.data.Title);
                console.log("Year Released: " + response.data.Year);
                console.log("IMDB Rating: " + response.data.Ratings[0].Value)
                console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value)
                console.log("Produced in: " + response.data.Country);
                console.log("Language: " + response.data.Language);
                console.log("Plot: " + response.data.Plot);
                console.log("Actors: " + response.data.Actors);

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

}

// Export to main liri.js file
module.exports = {
    movieThis: movieThis(),
}