require("dotenv").config();
const fs = require('fs')

function doWhatItSays() {

    fs.readFile("random.txt", "utf8", function (err, data) {
        if (err) {
            return console.log(err);
        } else {

            data = data.split(",");

            command = data[0]

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