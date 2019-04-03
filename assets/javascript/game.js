// Psychic Game
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var losses = 0;
var guessesLeft = 5;
var psychicGuess = psychicGuess = letters[Math.floor(Math.random() * letters.length)];
var userInputText = document.getElementById("userInput");
var winsText = document.getElementById("winsText");
var lossesText = document.getElementById("lossesText");

console.log(userInputText)
document.onkeyup = function(event) {
    var userGuess = event.key;
    // var check = return (event.charCode > 64 && 
        // event.charCode < 91) || (event.charCode > 96 && event.charCode < 123);
    

    if ((userGuess === "a") ||(userGuess === "b") ||(userGuess === "c") ||(userGuess === "d") ||(userGuess === "e") ||(userGuess === "f") ||(userGuess === "g") ||(userGuess === "h") ||(userGuess === "i") ||(userGuess === "j") ||(userGuess === "k") ||(userGuess === "l") ||(userGuess === "m") ||(userGuess === "n") ||(userGuess === "o") ||(userGuess === "p") ||(userGuess === "q") ||(userGuess === "r") ||(userGuess === "s") ||(userGuess === "t") ||(userGuess === "u") ||(userGuess === "v") ||(userGuess === "w") ||(userGuess === "x") ||(userGuess === "y") ||(userGuess === "z")) {
        if (userGuess === psychicGuess) { wins++; }
        guessesLeft--;
        if (guessesLeft == 0){ losses++ }

        userInputText.textContent = "You chose: " + userGuess;
        winsText.textContent = "Wins: " + wins; 
        lossesText.textContent = "losses: " + losses; 
        
    }
   function gameReset() {
       guessesLeft = 5;
        psychicGuess = 
   }
}