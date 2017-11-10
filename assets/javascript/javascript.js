var n = -1;
var wins = 0;
document.getElementById("start-game").innerHTML = "Start Game";

document.getElementById("start-game").onclick = function() {

    n++;
    newGame();


}

function newGame() {
    var guessesRemaining = 12;
    var answerPool = ["wizard", "jeep", "bottom", "beej", "haircut", "sassy", "inception", "bossy", "thunderbottom", "old"];
    var answer = answerPool[n];
    var gameOver = false;
    var blanks = [];
    blanks.length = answer.length;
    var guesses = [];
    var guess;
    blanks.fill(" _ ", 0, answer.length);
    document.getElementById("blanks-el").innerHTML = blanks;
    document.getElementById("guesses-remaining-el").innerHTML = guessesRemaining;
    document.getElementById("wins-el").innerHTML = wins;
    // console.log("answer " + answer);
    document.getElementById("start-game").innerHTML = "New Game";
    document.getElementById("guesses-el").innerHTML = guesses;




    document.onkeyup = function(event) {

        var guess = event.key;

        var found = false;

        for (var i = 0; i < answer.length; i++) {

            if (guessesRemaining > 0 && guess == answer.charAt(i)) {

                blanks.fill(guess, i, i + 1);
                document.getElementById("blanks-el").innerHTML = blanks;
                found = true;
            }

        }
        if (guessesRemaining > 0 && found == false && gameOver == false) {
            if (guesses.indexOf(guess) < 0) {
                guesses.push(guess);
                document.getElementById("guesses-el").innerHTML = guesses;
                guessesRemaining--;
                document.getElementById("guesses-remaining-el").innerHTML = guessesRemaining;
            }
        }
        if (blanks.indexOf(" _ ", 0) < 0) {
            alert("You win! Click New Game to start a new game.");
            if (gameOver == false) {
                wins++;
            };
            gameOver = true;


        }

        if (guessesRemaining == 0 && blanks.indexOf(" _ ", 0) > -1) {
            alert("You lose! The answer was '" + answer + "'! Click New Game to start a new game.");
            gameOver = true;

        }

    };

}