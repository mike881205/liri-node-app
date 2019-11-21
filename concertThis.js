const axios = require("axios")
// const fs = require('fs')

function concertThis() {

    let bandInput = [];

    for (let i = 3; i < process.argv.length; i++) {

        let band = process.argv[i]

        bandInput.push(band)

    }

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

module.exports = {
    concertThisMain: concertThis()
}



