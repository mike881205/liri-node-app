const axios = require("axios")


// movie-this INPUT =============================================
function movieThis() {

    let movieTitle = [];

    for (let i = 3; i < process.argv.length; i++) {

        let movie = process.argv[i]

        movieTitle.push(movie)

    }

    let joinedTitle = movieTitle.join("+")

    axios.get("http://www.omdbapi.com/?t=" + joinedTitle + "=&plot=short&apikey=f5d44a54").then(
        function (response) {

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

// // movie-this TEXT COMMAND

// function doWhatItSaysMovie() {

//     fs.readFile("random.txt", "utf8", function (err, data) {
//         if (err) {
//             return console.log(err);
//         }
//         else {

//             data = data.split(",");

//             command = data[0]
//             let input = data[1]

//             movieThisText();

//             function movieThisText() {

//                 let movieTitle = [];

//                 movieTitle.push(input)

//                 let joinedTitle = movieTitle.join("+")

//                 axios.get("http://www.omdbapi.com/?t=" + joinedTitle + "=&plot=short&apikey=f5d44a54").then(
//                     function (response) {

//                         console.log(" ")
//                         console.log(response.data.Title);
//                         console.log("Year Released: " + response.data.Year);
//                         console.log("IMDB Rating: " + response.data.Ratings[0].Value)
//                         console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value)
//                         console.log("Produced in: " + response.data.Country);
//                         console.log("Language: " + response.data.Language);
//                         console.log("Plot: " + response.data.Plot);
//                         console.log("Actors: " + response.data.Actors);

//                     })
//                     .catch(function (error) {
//                         if (error.response) {
//                             // The request was made and the server responded with a status code
//                             // that falls out of the range of 2xx
//                             console.log("---------------Data---------------");
//                             console.log(error.response.data);
//                             console.log("---------------Status---------------");
//                             console.log(error.response.status);
//                             console.log("---------------Status---------------");
//                             console.log(error.response.headers);
//                         } else if (error.request) {
//                             // The request was made but no response was received
//                             // `error.request` is an object that comes back with details pertaining to the error that occurred.
//                             console.log(error.request);
//                         } else {
//                             // Something happened in setting up the request that triggered an Error
//                             console.log("Error", error.message);
//                         }
//                         console.log(error.config);
//                     });

//             }

//         }
//     })
// }


module.exports = {
    movieThisMain: movieThis(),
    // movieThisText: doWhatItSaysMovie()
}