require("dotenv").config();
const fs = require('fs')

function doWhatItSays() {

    // Read the text file
    fs.readFile("random.txt", "utf8", function (err, data) {
        if (err) {
            return console.log(err);
        } else {

            //Split the strings in the file at the ","
            data = data.split(",");

            // Set first string to the command variable
            let command = data[0]

            // This switch statement follows the same logic as the main liri switch statement except it calls the functions in the 'doWhatItSaysFiles' folder
            switch (command) {
                case "movie-this":
                    const movieThisTextFile = require("./doWhatItSaysFiles/movieThisText.js")
                    movieThisTextFile.movieThisText
                    break;
                case "concert-this":
                    const concertThisTextFile = require("./doWhatItSaysFiles/concertThisText.js")
                    concertThisTextFile.concertThisText
                    break
                case "spotify-this-song":
                    const spotifyThisTextFile = require("./doWhatItSaysFiles/spotifyThisText.js")
                    spotifyThisTextFile.spotifyThisText
                    break;
            }
        }
    })

}

module.exports = {
    doWhatItSays: doWhatItSays()
}