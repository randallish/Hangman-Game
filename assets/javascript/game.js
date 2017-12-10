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




//variables for grabbing elements in the DOM
var hangmanWord = document.getElementById("hangman-words");
var numberOfGuesses = document.getElementById("guesses");
var numberOfWins = document.getElementById('wins');
var lettersUsed = document.getElementById("letters-used");



// generates random item from array
var randomWord = words[Math.floor(Math.random() * words.length)];
console.log(randomWord);

// hidden answer array with blank underscores
for (var i = 0;  i < randomWord.length; i++) {
    answerWord.push('_');
    console.log(answerWord)
};

// registers user's pressed key
document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    // checks if user key is in array
        // if (randomWord.indexOf(userGuess) > -1) {
        // answerWord[randomWord.indexOf(userGuess)] = userGuess;
        // hangmanWord.innerHTML = answerWord.join(' ');

        for (var j = 0; j < randomWord.length; j++) {
            if (randomWord[j] === userGuess){
                answerWord[j] = userGuess;
                hangmanWord.innerHTML = answerWord.join(' ')
            }
        }

        if(answerWord.join(" ") == randomWord) {
            wins++;
            alert("you win");
        }
    };


//         else {
//         guesses--;
//         wrongLetter.push(userGuess);
//         lettersUsed.innerHTML = "Letters used:" +  wrongLetter.join(' ');
//         numberofGuesses.innerHTML = "Guesses remaining:" + guesses;
//         }

//         if( guesses ===  0) {
//             alert("Sorry you lost!")
//         }
//     }
// }
    

    // reset game 
    document.getElementById("reset").onclick = function() {
            document.getElementById("hangman-words").innerHTML = " ";
            document.getElementById("guesses").innerHTML = "Guesses remaining: ";
            document.getElementById("letters-used").innerHTML = "Letters used: ";
    }



