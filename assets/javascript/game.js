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
    "racing"
];

// variables for amount of wins, guesses, and empty arrays for storing wrong letters and hidden word.
var wins = 0;
var guesses = 10;
var answerWord = [];
var wrongLetter = [];
var randomWord = '';




//variables for grabbing elements in the DOM
var hangmanWord = document.getElementById("hangman-words");
var numberOfGuesses = document.getElementById("guesses");
var numberOfWins = document.getElementById('wins');
var lettersUsed = document.getElementById("letters-used");

// starts game
function launchGame() {
// resets variables to global value
var answerWord = [];
var wrongLetter = [];
var guesses = 10;

// generates random word from array
randomWord = words[Math.floor(Math.random() * words.length)];
splitWord = randomWord.split('');
console.log(randomWord);

// hidden answer array with blank underscores
for (var i = 0;  i < splitWord.length; i++) {
    answerWord.push(' _ ');
}
hangmanWord.innerHTML = answerWord.join('');

};

// registers user key
document.onkeyup = function(event) {    
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    letterCheck(userGuess);
}

// checks for right or wrong letters
function letterCheck (userGuess) {
    if (randomWord.indexOf(userGuess) > -1) {
        console.log(true);
        for( var k = 0; k < splitWord.length; k++) {
            if (splitWord[k] === userGuess){
                answerWord[k] = userGuess;
                hangmanWord.innerHTML = answerWord.join('');                 
            }
        }
    }

    if (answerWord.join('') == splitWord.join('')) { 
    wins++;
    numberOfWins.innerHTML = "Number of wins: " + wins;
    alert("You win!");
    launchGame();
    }
    else if (randomWord.indexOf(userGuess) === -1) {
        guesses--;
        numberOfGuesses.innerHTML = "Guesses remaining: " + guesses;
    }

    if (guesses == 0){
        alert("You lost! Click reset to play again");
    }
}

  


launchGame();



    // reset game 
    document.getElementById("reset").onclick = function() {
        location.reload();
    };
