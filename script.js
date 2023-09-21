let userScore = 0;
let computerScore = 0;
const hand = ["rock", "paper", "scissors"]
const radio = document.getElementById("selection");
const result = document.getElementById("outcome-text");

function getComputerChoice() {
    return hand[Math.floor(Math.random() * hand.length)];
}

function playRound(playerSelection, computerSelection) {

    switch (playerSelection) {
        case "rock":
            switch (computerSelection) {
                case "rock": result.textContent = "It's a tie! You both chose rock."; return;

                case "paper": result.textContent = "You lose! You chose rock and the computer chose paper."; computerScore++; return;

                case "scissors": result.textContent = "You win! You chose rock and the computer chose scissors."; userScore++; return;
            } 

        case "paper":
            switch (computerSelection) {
                case "rock": result.textContent = "You win! You chose paper and the computer chose rock."; userScore++; return;

                case "paper": result.textContent = "It's a tie! You both chose paper."; return;

                case "scissors": result.textContent = "You lose! You chose paper and the computer chose scissors."; computerScore++; return;
            } 

        case "scissors":
            switch (computerSelection) {
                case "rock": result.textContent = "You lose! You chose scissors and the computer chose rock."; computerScore++; return;

                case "paper": result.textContent = "You win! You chose scissors and the computer chose paper."; userScore++; return;

                case "scissors": result.textContent = "It's a tie! You both chose scissors."; return;
            } 
    }
}

function changeScoreboard() {
    const userScoreDisplay = document.querySelector(".human-score");
    const computerScoreDisplay = document.querySelector(".computer-score");
    
    userScoreDisplay.textContent = userScore;
    computerScoreDisplay.textContent = computerScore;
}

function game() {
    let computerHand = getComputerChoice();
    const userHand = radio.querySelector('input[name="userHand"]:checked');

    if (userHand) {
        playRound(userHand.value, computerHand);
        changeScoreboard();

    } else {
        alert("Please select Rock, Paper, or Scissors.");
    }

    if (userScore > computerScore && userScore == 5) {
        result.textContent = "You beat the computer!";
        radio.querySelectorAll("input").forEach(input => input.disabled = true);
        document.querySelector(".play-button").disabled = true;

    } else if (computerScore > userScore && computerScore == 5) {
        result.textContent = "The computer wins!";
        radio.querySelectorAll("input").forEach(input => input.disabled = true);
        document.querySelector(".play-button").disabled = true;

    } else if (computerScore < 5 && userScore < 5) {
        return;
    }
}

document.querySelector(".play-button").addEventListener("click", game);