const fs = require('fs')
const keys = require("../../keys")
const Spotify = require("node-spotify-api")
const spotify = new Spotify(keys.spotify);

function spotifyThisText() {

    fs.readFile("random.txt", "utf8", function (err, data) {
        if (err) {
            return console.log(err);
        } else {

            data = data.split(",");

            let input = data[1]

            let songTitle = []
            let songResponse = []

            songTitle.push(input)

            for (let i = 0; i < songTitle.length; i++) {
                let song = songTitle[i].charAt(0).toUpperCase() + songTitle[i].slice(1)
                songResponse.push(song)

            }

            let joinedSong = songTitle.join(" ")
            let joinedSongResponse = songResponse.join(" ")

            spotify.search({ type: 'track', query: joinedSong, limit: 5 }, function (err, data) {
                if (err) {
                    return console.log('Error occurred: ' + err);
                }

                for (let i = 0; i < data.tracks.items.length; i++) {

                    console.log(" ")
                    for (let j = 0; j < data.tracks.items[i].artists.length; j++) {
                        console.log("Artist/Band: " + data.tracks.items[i].artists[j].name);
                    }
                    console.log("Song: " + '"' + joinedSongResponse + '"')
                    console.log("Album: " + data.tracks.items[i].album.name);
                    console.log(" ")
                    console.log("//======//")

                }

            });

        }

    })

}


module.exports = {
    spotifyThisTextFile: spotifyThisText()
}