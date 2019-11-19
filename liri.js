const movieScript = require('./movies.js')
const spotify = require('node-spotify-api')
const moment = require('moment')
const dotenv = require("dotenv").config();
const keys = require("./keys.js");
const axios = require('axios')
const inquirer = require('inquirer')

// let spotifyKey = new Spotify(keys.spotify);




inquirer.prompt([

    {
        type: "list",
        name: "selectTask",
        message: "What can I help you with?",
        choices: [{ name: "Search Movies", value: 1 }, { name: "Search Music", value: 2 }, { name: "Search Bands in Town", value: 3 }]
    }

]).then(function (responses) {

    // ============================================================================================================================================
    // Movies (OMDB)
    // ============================================================================================================================================

    if (responses.selectTask === 1) {

        console.log("You have chosen movies")

        inquirer.prompt(
            {
                type: "input",
                name: "movie",
                message: "Please enter a movie:"
            }
        ).then(function (movieChoice) {

            let movieTitle = movieChoice.movie.split(' ').join('+');

            axios.get("http://www.omdbapi.com/?t=" + movieTitle + "=&plot=short&apikey=f5d44a54").then(
                function (response) {

                    // console.log(response.data)

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

        })

        // fs.readFile(movieScript, function(error) {

        //     // If the code experiences any errors it will log the error to the console.
        //     if (error) {
        //         return console.log(error);
        //     }

        //     // We will then print the contents of data

        // });

    }
    // ============================================================================================================================================
    // End of Movies
    // ============================================================================================================================================
    else if (responses.selectTask === 2) {
        console.log("Under contruction: music")
    }
    else {
        console.log("Under contruction: bands")
    }
























})