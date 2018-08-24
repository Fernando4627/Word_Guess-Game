var words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake"
];
var allowedGuesses;
var correctGuesses;
var wrongGuesses;
var win;
var lose;

var wordElement = document.getElementById('word');
var letterCountElement = document.getElementById('letterCount');
var lettersGuessedElement = document.getElementById('lettersGuessed');
var word = words[Math.floor(Math.random() * words.length)];
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
var remainingLetters = word.length;
console.log(word);
function initializeGame() {
    word = words[Math.floor(Math.random() * words.length)];
    allowedGuesses = 13;
    wrongGuesses = [];
    correctGuesses = [];

    // initialize correctGuesses array with underscores
    for (var i = 0; i < word.length; i++) {
        correctGuesses.push('_');
    }

    wordElement.innerHTML = correctGuesses.join(' ');
    letterCountElement.innerHTML = allowedGuesses;
}

function updateGuesses(letter) {
    allowedGuesses--; // decrement guesses left
    letterCountElement.innerHTML = allowedGuesses;

    if (word.indexOf(letter) === -1) { // letter is NOT in the word
        wrongGuesses.push(letter); // update letters guessed
        lettersGuessedElement.innerHTML = wrongGuesses.join(', ');
    } else { // letter IS in the word
        // replace underscore with the letter
        for (var i = 0; i < word.length; i++) {
            if (word[i] === letter) {
                correctGuesses[i] = letter;
            }
        }

        wordElement.innerHTML = correctGuesses.join(' ');
    }
}

function checkWin() {
    if (correctGuesses.indexOf('_') === -1) {
        alert('You Won!');
        win++;
        initializeGame();
    } else if (allowedGuesses === 0) {
        alert('You Lost!');
        lose++;
        initializeGame();
    }
}

document.onkeyup = function (event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    updateGuesses(letterGuessed);
    checkWin();
};

initializeGame();