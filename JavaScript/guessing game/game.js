//create secretNumber
var secretNumber = 4;

//ask user for guess
var stringGuess = prompt("guess a number between 1 and 10");
var guess = Number(stringGuess);

//check if guess is right
if (guess === secretNumber) {
    alert("you got it right");
} else if (guess > secretNumber) {
    alert("too high. guess again");
} else {
    alert("too low. guess again");
}
