// Updated script.js

// Initialize scores
let computerScore = 0;
let humanScore = 0;

// Reference to result and score divs
const resultDiv = document.getElementById("resultDiv");
const scoreDiv = document.getElementById("scoreDiv");

// Function to get the computer's choice
function getComputerChoice(min = 1, max = 3) {
    function numberToWords(number) {
        const words = ["Scissors", "Paper", "Rock"];
        if (number >= 1 && number <= words.length) {
            return words[number - 1];
        } else {
            let validNumber = (number % words.length + words.length) % words.length;
            return words[validNumber];
        }
    }

    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return numberToWords(randomNumber);
}

// Function to play a single round
function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    let roundOutcome = ""; // Store the outcome message

    if (computerChoice === humanChoice) {
        roundOutcome = "It's a tie!";
    } else if (
        (computerChoice === "Rock" && humanChoice === "Scissors") ||
        (computerChoice === "Scissors" && humanChoice === "Paper") ||
        (computerChoice === "Paper" && humanChoice === "Rock")
    ) {
        roundOutcome = `Computer wins this round! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
    } else {
        roundOutcome = `Human wins this round! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
    }

    // Update the result and score divs
    resultDiv.textContent = `Computer chose: ${computerChoice}. Human chose: ${humanChoice}. ${roundOutcome}`;
    scoreDiv.textContent = `Score: Human ${humanScore} | Computer ${computerScore}`;
}

// Add event listeners to buttons
document.getElementById("btn1").addEventListener("click", () => playRound("Rock"));
document.getElementById("btn2").addEventListener("click", () => playRound("Paper"));
document.getElementById("btn3").addEventListener("click", () => playRound("Scissors"));