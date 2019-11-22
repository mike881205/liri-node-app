require("dotenv").config();


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
        const doWhatItSaysFile = require("./function-files/doWhatItSays.js")
        doWhatItSaysFile.doWhatItSays
        break;
}

// ================================================================
// "do-what-it-says"
// ================================================================

