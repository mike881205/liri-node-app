# liri-node-app

### Overview

This app is designed to handle user inputs (commands & search terms), retrieve results from databases using the Spotify, BandsInTown & OMDB APIs, and output the results

## Instructions

The user will choose 1 of 4 commands from the list below to input after entering the first 2 arguments followed by the search term. 

Example: node liri.js movie-this the big lebowski

1. spotify-this-song
* Search Term: *Song Name*
    * If there is no user input, the default search term will be 'The Sign'
* Result: List of 10 results containing artist names, the song title, links to preview the song via Spotify, and album names

2. movie-this
* Search Term: *Movie Title*
    * If there is no user input, the default search term will be 'Mr. Nobody'
* Result: Information containing the movie title, the year the movie came out, IMDB & Rotten Tomatoes ratings, production company, language of the the film, plot info, list of actors

3. concert-this
* Search Term: *Band/Artist Name*
    * If there is no user input, the default search term with be 'Every Time I Die'
* Result: List of 5 upcoming tour dates for the searched band with information for the name of the venue, location of the venue, and the date of the concert

4. do-what-it-says
* Search Term: none
    * This function does not require a user input as it will read a text file and output results based on the strings found in the file
* Result: Depending on the first argument regcognized when the file is read, the output will be the same as one of the other 3 commands


## App Logic

# Main Liri switch statement

To retrieve the user input for the command (process.argv[2]), a variable is assigned to handle input - "command".

The command varibale is passed into a switch statement that runs as follows:

1. If the command is 'movie-this'
    * Require the movieThis.js file and call the function within the file
2. If the command is 'concert-this'
    * Require the concertThis.js file and call the function within the file
3. If the command is 'spotify-this-song'
    * Require the spotifyThis.js file and call the function within the file
4. If the command is 'do-what-it-says'
    * Require the doWhatItSays.js file and call the function within the file

# movieThis.js file function 

* See movieThis_Function.mp4 in screen-recordings folder for demonstration

The function within the movieThis.js file operates as follows:

* If the user enters a search term
    1. Loop through all of the words entered of the search term
    2. Push all of the words in the search term to an array as separate items and join them using "+" to output the search format required for the axios call
    3. Using axios to access the OMDB API, the joined array items are passed into the search URL, and the following results are printed to the terminal:
        * Movie title, year released, IMDB rating, Rotten Tomatoes rating, Production Language, Plot info, & Actors.
* If the user DOES NOT enter a search term
    1. The default search term is 'Mr. Nobody'
        * Using axios to access the OMDB API, the same results are printed for the movie 'Mr. Nobody'

# concertThis.js file function

* See concertThis_Function.mp4 in screen-recordings folder for demonstration

The function within the concertThis.js file operates as follows:

* If the user enters a search term
    1. Loop through all of the words entered of the search term
    2. Push all of the words in the search term to an array as separate items and join them using "%20" to output the search format required for the axios call
    3. Using axios to access the BandsInTown API, the joined array items are passed into the search URL, and the following results are printed to the terminal:
        * Venue Name, Venue Location, Date of concert at venue
* If the user DOES NOT enter a search term
    1. The default search term is 'Every Time I Die'
        * Using axios to access the BandsInTown API, the same results are printed for the band 'Every Time I Die'

# spotifyThis.js file function

* See spotifyThis_Function.mp4 in screen-recordings folder for demonstration

The function within the spotifyThis.js file operates as follows:

* If the user enters a search term
    1. Loop through all of the words entered of the search term
    2. Push all of the words in the search term to an array as separate items and join them using spaces between words to output the search format required for the Spotify API call
    3. Using the spotify node API to access the spotify API, the joined array items are passed into the search query, and the following results are printed to the terminal:
        * Artist(s), song name, preview link via spotify, album the song is on
* If the user DOES NOT enter a search term
    1. The default search term is 'The Sign'
        * Using the spotify node API to access the spotify API, the same results are printed for the song 'The Sign'

# doWhatItSays.js file function

* See doWhatItSays_Function.mp4 in screen-recordings folder for demonstration

1. The main switch statement for the doWhatItSays function operates in the same way that the main liri switch statement operates *except* the statement is within a call to the file system to read the contents of the 'random.txt' file
    * There are 3 different sets of text inside the 'random.txt' file and are formatted as follows:
        * spotify-this-song,I Want It That Way
        * concert-this,Tenacious Slipknot
        * movie-this,The Big Lebowski
    * The command and search term are split by "," and the command is passed into a variable - "command"

2. The functions called for each case of the swtich statemetn also operate in the same way that the other 3 command functions inside the main liri switch statement with the same exception that the logic is within a call to the file system to read the contents of the 'random.txt' file and pass the search term into the function


## GitHub Repo

[GitHUb Repo](https://github.com/mike881205/liri-node-app)

## Technologies used within the App

spotify-node-API
moment
axios
OMDB API
BandsInTown API
Spotify API

## Notes

I am responsbile for creating all logic within all files of this app


