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


function launchGame() {
// generates random item from array
var answerWord = [];
var wrongLetter = [];
var randomWord = words[Math.floor(Math.random() * words.length)];
console.log(randomWord);
var guesses = 10;

// hidden answer array with blank underscores
for (var i = 0;  i < randomWord.length; i++) {
    answerWord.push('_');
}
};


function letterCheck (letter) {
    if (randomWord.indexOf(letter) !== -1) {
        for( var k = 0; k < randomWord.length; k++) {
            if (randomWord[k] === letter){
                answerWord[k] = letter;
                hangmanWord.innerHTML = answerWord.join(' '); 
            }
        }
    }
else {
    guesses--;
}
if (randomWord.indexOf(letter) === -1) {
     wrongLetter.push(letter);
     lettersUsed.innerHTML= "Letters used: " + wrongLetter.join('');
 }
};






// registers user's pressed key
launchGame();
document.onkeyup = function(event) {    
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    letterCheck(userGuess);
};
        //for (var j = 0; j < randomWord.length; j++) {
         //   if (randomWord[j] === userGuess){
               // answerWord[j] = userGuess;
                //lettersLeft--;                
               // hangmanWord.innerHTML = answerWord.join(' ');                
           // }
      // }

      //  if(lettersLeft == 0){
       //     alert("you won!");
     //   }
  //  };  

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
        location.reload();
    };


