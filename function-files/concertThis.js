const axios = require("axios")
const moment = require("moment")

function concertThis() {

    // If the user enters a search term (process.argv[3])
    if (process.argv.length >= 4) {

        let bandInput = [];

        // Loop through all words entered for process.argv[3]
        for (let i = 3; i < process.argv.length; i++) {

            let band = process.argv[i]

            // Push all of the words in the search term to the array as separate items 
            bandInput.push(band)

        }

        // Join each item in the array with %20 to output the search format for the axios call
        let joinedBand = bandInput.join("%20")

        axios.get("https://rest.bandsintown.com/artists/" + joinedBand + "/events?app_id=codingbootcamp").then(

            function (response) {

                console.log(" ")
                console.log("Upcoming Tour Dates")

                // loop through the response info
                for (let i = 0; i < 5; i++) {

                    console.log(" ")

                    // Venue Name
                    console.log("Venue: " + response.data[i].venue.name);

                    // Venue Location
                    console.log("Location: " + response.data[i].venue.city + ", " + response.data[i].venue.country);

                    // Date Information
                    console.log("Date: " + moment(response.data[i].datetime).format("MM/DD/YYYY"));

                    console.log(" ")
                    console.log("//======//")
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

    // If the user DOES NOT input a search term (process.argv[3])
    else {

        axios.get("https://rest.bandsintown.com/artists/every%20time%20i%20die/events?app_id=codingbootcamp").then(function (response) {

                // Default search term is 'every time i die'
                console.log(" ")
                console.log("Default band search: Every Time I Die")
                console.log(" ")
                console.log("Upcoming Tour Dates")

                for (let i = 0; i < 5; i++) {

                    console.log(" ")
                    console.log("Venue: " + response.data[i].venue.name);
                    console.log("Location: " + response.data[i].venue.city + ", " + response.data[i].venue.country);
                    console.log("Date: " + moment(response.data[i].datetime).format("MM/DD/YYYY"));
                    console.log(" ")
                    console.log("//======//")
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


}

// Export to main liri.js file
module.exports = {
    concertThis: concertThis()
}



