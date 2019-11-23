require("dotenv").config();

// ================================================================
// Switch Statement to Handle user input
// ================================================================

// Assign a variable for user input command
let command = process.argv[2]

switch (command) {
    // If the command is 'movie-this'
    case "movie-this":
        // Require the movieThis.js file and call the function
        const movieThisFile = require("./function-files/movieThis.js")
        movieThisFile.movieThis
        break;
    // If the command is 'concert-this'
    case "concert-this":
        // Require the concertThis.js file and call the function
        const concertThisFile = require("./function-files/concertThis.js")
        concertThisFile.concertThis
        break
    // If the command is 'spotify-this-song'
    case "spotify-this-song":
        // Require the spotifyThis.js file and call the function        
        const spotifyThisFile = require("./function-files/spotifyThis.js")
        spotifyThisFile.spotifyThis
        break;
    // If the command is 'do-what-it-says'
    case "do-what-it-says":
        // Require the doWhatItSays.js file and call the function
        const doWhatItSaysFile = require("./function-files/doWhatItSays.js")
        doWhatItSaysFile.doWhatItSays
        break;
}

