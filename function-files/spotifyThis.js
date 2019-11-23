require("dotenv").config();
const keys = require("../keys")
const Spotify = require("node-spotify-api")
const spotify = new Spotify(keys.spotify);

function spotifyThis() {

  // If the user enters a search term (process.argv[3])
  if (process.argv.length >= 4) {

    let songTitle = []
    let songResponse = []

    // Loop through all words entered for process.argv[3]
    for (let i = 3; i < process.argv.length; i++) {

      let song = process.argv[i]

      // Push all of the words in the search term to the array as separate items 
      songTitle.push(song)

    }

    // Uppercase the first letter of each string in the array
    for (let i = 0; i < songTitle.length; i++) {
      let song = songTitle[i].charAt(0).toUpperCase() + songTitle[i].slice(1)

      // Push the capitalized strings to a new array
      songResponse.push(song)

    }

    // Join each item in both arrays with spaces to output the search format for the spotify search
    let joinedSong = songTitle.join(" ")
    let joinedSongResponse = songResponse.join(" ")

    spotify.search({ type: 'track', query: joinedSong, limit: 10 }, function (err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }

      // loop through the response info
      for (let i = 0; i < data.tracks.items.length; i++) {

        console.log(" ")

        // loop through the artists array to locate the artist name
        for (let j = 0; j < data.tracks.items[i].artists.length; j++) {
          // Artist Name
          console.log("Artist/Band: " + data.tracks.items[i].artists[j].name);
        }

        // Song Name
        console.log("Song: " + '"' + joinedSongResponse + '"')

        // Preview link
        console.log("Song Preview: " + data.tracks.items[i].external_urls.spotify)

        // Album
        console.log("Album: " + data.tracks.items[i].album.name);

        console.log(" ")
        console.log("//======//")

      }

    });

  }

  // If the user DOES NOT input a search term (process.argv[3])
  else {

    spotify.search({ type: 'track', query: 'The Sign', limit: 10 }, function (err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }

      // Default search term is 'The Sign'
      console.log(" ")
      console.log("Default Song Search: 'The Sign'")

      for (let i = 0; i < data.tracks.items.length; i++) {
        console.log(" ")
        for (let j = 0; j < data.tracks.items[i].artists.length; j++) {
          console.log("Artist/Band: " + data.tracks.items[i].artists[j].name);
        }
        console.log("Song: " + '"The Sign"')
        console.log("Song Preview: " + data.tracks.items[i].external_urls.spotify)
        console.log("Album: " + data.tracks.items[i].album.name);
        console.log(" ")
        console.log("//======//")

      }

    });

  }

}

// Export to main liri.js file
module.exports = {
  spotifyThis: spotifyThis(),
}
