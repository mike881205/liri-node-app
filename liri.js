require("dotenv").config();
const axios = require("axios")
const fs = require('fs')

// ================================================================
// Switch Statement to Handle user input
// ================================================================

let command = process.argv[2]

switch (command) {
    case "movie-this":
        const movieThisFile = require("./function-files/movieThis.js")
        movieThisFile.movieThis
        break;
    case "concert-this":
        const concertThisFile = require("./function-files/concertThis.js")
        concertThisFile.concertThis
        break
    case "spotify-this-song":
        const spotifyThisFile = require("./function-files/spotifyThis.js")
        spotifyThisFile.spotifyThis
        break;
    case "do-what-it-says":
        doWhatItSays()
        break;
}

// ================================================================
// "do-what-it-says"
// ================================================================

function doWhatItSays() {

    fs.readFile("random.txt", "utf8", function (err, data) {
        if (err) {
            return console.log(err);
        } else {

            data = data.split(",");

            command = data[0]
            let input = data[1]

            switch (command) {
                case "movie-this":
                    console.log(movieThisFile.movieThisText)
                    break;
                case "concert-this":
                    concertThisText();
                    break
                case "spotify-this-song":
                    console.log("under construction: songs")
                    break;
            }

            // function movieThisText() {

            //     let movieTitle = [];

            //     movieTitle.push(input)

            //     let joinedTitle = movieTitle.join("+")

            //     axios.get("http://www.omdbapi.com/?t=" + joinedTitle + "=&plot=short&apikey=f5d44a54").then(
            //         function (response) {

            //             console.log(" ")
            //             console.log(response.data.Title);
            //             console.log("Year Released: " + response.data.Year);
            //             console.log("IMDB Rating: " + response.data.Ratings[0].Value)
            //             console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value)
            //             console.log("Produced in: " + response.data.Country);
            //             console.log("Language: " + response.data.Language);
            //             console.log("Plot: " + response.data.Plot);
            //             console.log("Actors: " + response.data.Actors);

            //         })
            //         .catch(function (error) {
            //             if (error.response) {
            //                 // The request was made and the server responded with a status code
            //                 // that falls out of the range of 2xx
            //                 console.log("---------------Data---------------");
            //                 console.log(error.response.data);
            //                 console.log("---------------Status---------------");
            //                 console.log(error.response.status);
            //                 console.log("---------------Status---------------");
            //                 console.log(error.response.headers);
            //             } else if (error.request) {
            //                 // The request was made but no response was received
            //                 // `error.request` is an object that comes back with details pertaining to the error that occurred.
            //                 console.log(error.request);
            //             } else {
            //                 // Something happened in setting up the request that triggered an Error
            //                 console.log("Error", error.message);
            //             }
            //             console.log(error.config);
            //         });

            // }

            function concertThisText() {

                let bandInput = []

                bandInput.push(input)

                let joinedBand = bandInput.join("%20")

                axios.get("https://rest.bandsintown.com/artists/" + joinedBand + "/events?app_id=codingbootcamp").then(

                    function (response) {

                        console.log("Upcoming Concerts")

                        console.log(" ")

                        for (let i = 0; i < response.data.length; i++) {

                            console.log("Venue: " + response.data[i].venue.name);
                            console.log("Location: " + response.data[i].venue.city + ", " + response.data[i].venue.country);
                            console.log("Date: " + response.data[i].datetime);
                            console.log(" ")

                        }

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

            function spotifyThisSongText() {

                // Spotify API Code

            }

        }

    })

}