'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
function getPlayerMove(move) {
    console.log("player move: ", move);
    return move || getInput();
}

function getComputerMove(move) {
   
    return randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === "paper") {
        if (computerMove === "rock") {
            winner = "Player";
        } else if (computerMove === "scissors") {
            winner = "Computer";
        } else {
            // It's a tie do nothing
        }
    } else if (playerMove === "rock") {
       if (computerMove === "paper") {
            winner = "Computer";
        } else if (computerMove === "scissors") {
            winner = "Player";
        } else {
            // It's a tie do nothing
        }
    } else if (playerMove === "scissors") {
       if (computerMove === "rock") {
            winner = "Computer";
        } else if (computerMove === "paper") {
            winner = "Player";
        } else {
            // It's a tie do nothing
        }
    }
    console.log (playerMove, computerMove);
        
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var playerMove;
    var computerMove;
    while (computerWins !== 5 && playerWins !== 5) {
        playerMove = getPlayerMove();
        computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);
        
        if (winner === "Player") {
            playerWins++;
        } else if (winner === "Computer") {
            computerWins++;
        }
    }   
    
    return [playerWins, computerWins];
} 

var score = playToFive();
console.log("Score is: ", "Player:", score[0], " Computer:", score[1]);
