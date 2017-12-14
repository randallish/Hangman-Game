// create array of words 
var words = [
    "baseball",
    "basketball",
    "football",
    "soccer",
    "golf",
    "volleyball",
    "tennis",
    "hockey",
    "cycling",
    "racing",
    "boxing",
    "surfing"
];

// variables for amount of wins, guesses, and empty arrays for storing wrong letters and hidden word.
var wins = 0;
var losses = 0;
var guesses = 10;
var underScores = [];
var wrongLetter = [];
var randomWord = '';




//variables for grabbing elements in the DOM
var hangmanWord = document.getElementById("hangman-words");
var numberOfGuesses = document.getElementById("guesses");
var numberOfWins = document.getElementById('wins');
var lettersUsed = document.getElementById("letters-used");
var numberOfLosses = document.getElementById("losses");
var display = document.getElementById("display");

// starts game
function launchGame() {
    
// resets variables to global value
guesses = 10;
numberOfGuesses.innerHTML = " Guesses remaining: " + guesses;

// generates random word from array
randomWord = words[Math.floor(Math.random() * words.length)];

// splitting randomWord into an array with separate strings
splitWord = randomWord.split('');
console.log(randomWord);

// resets to empty array
underScores = [];
wrongLetter = [];

// hidden answer array with blank underscores
for (var i = 0;  i < splitWord.length; i++) {
    underScores.push(' _ ');
}
hangmanWord.innerHTML = underScores.join('');

}

// registers user key and calls both our letterCheck function
// and checkWinOrLoss function
document.onkeyup = function(event) {    
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    letterCheck(userGuess);
    checkWinOrLoss(userGuess);
}

// checks for right or wrong letters
function letterCheck (userGuess) {

    // looping through the array and if the letter IS found
    if (randomWord.indexOf(userGuess) > -1) {
        for( var k = 0; k < splitWord.length; k++) {
            if (splitWord[k] === userGuess){
                underScores[k] = userGuess;
                hangmanWord.innerHTML = underScores.join('');                 
            }
        }
    } // if word is NOT in array then do this
    else if (randomWord.indexOf(userGuess) === -1) {
        guesses--;
        wrongLetter.push(userGuess);
        lettersUsed.innerHTML = "Letters used: " + wrongLetter.join('');
        numberOfGuesses.innerHTML = "Guesses remaining: " + guesses;
        console.log(wrongLetter);
    }
}

// checking the result of game and adjusting wins/losses
function checkWinOrLoss(userGuess) {

    // if both words are matched, adjust win counter, write to html
    // and call our launchGame function
    if (underScores.join('') == splitWord.join('')) { 
    wins++;
    numberOfWins.innerHTML = "Number of wins: " + wins;
    lettersUsed.innerHTML = "Letters used: ";
    display.innerHTML = "Good job you won!";
    launchGame();
    }


    // if amount of guesses equal 0, update losses and display to html,relaunch game
    if (guesses == 0){
    losses++;
    numberOfLosses.innerHTML = "Number of losses: " + losses;
    lettersUsed.innerHTML = "Letters used: ";
    display.innerHTML = "Sorry you lost! " + "The answer was " + randomWord;
    launchGame();

    }
};


// launch game
launchGame();




    // reset game button 
    document.getElementById("reset").onclick = function() {
        launchGame();
    };
