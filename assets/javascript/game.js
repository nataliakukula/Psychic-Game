//Define the variables:
var wins = 0;
var losses = 0;
var guesses = 9;

//Crate varaiables that hold references in HTML:
var directions = document.getElementById("directions");
var winsSoFar = document.getElementById("wins");
var lossesSoFar = document.getElementById("losses");
var guessesLeft = document.getElementById("guesses-left");
var guessesSoFar = document.getElementById("guesses-so-far");

//Create computer choices in the form of an array:
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Have the computer randomly pick a letter from an array:
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//Run function whenever the user presses a key and will log the letters:
document.onkeyup = function(event) {

//Determine which key is pressed:
var userGuess = event.key;
console.log("Computer guess:", computerGuess);
console.log("User key choice: ", event.key);

//When the user guess' computer's guess:
if (computerGuess === userGuess){
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    guessesSoFar.textContent = "";
    guesses = 9;
    wins++;
    alert("You won! It's: " + userGuess + ". Now, guess again.");
}

//When the user doesn't guess computer's guess:
else if (guesses === 0){
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    guessesSoFar.textContent = "";
    guesses = 9;
    losses++;
    alert("You lost! New letter, guess again.");
}

//When the user doesn't guess correctly update the number of guesses left:
else if(computerGuess !== userGuess){
    guessesSoFar.textContent += event.key + (", ");
    guessesLeft.textContent = guesses--;
    console.log("Guesses so far: ", guesses);
};

//Display wins, losses, guesses left and user guesses:
winsSoFar.textContent = wins;
lossesSoFar.textContent = losses;
guessesLeft.textContent = guesses;

};  