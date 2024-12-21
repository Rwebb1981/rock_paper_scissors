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

function playRound() {
    let getHumanChoice = prompt("Choose Rock, Paper, or Scissors");
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice.trim().toLowerCase();

    // Normalize humanChoice
    if (humanChoice === "rock") humanChoice = "Rock";
    else if (humanChoice === "paper") humanChoice = "Paper";
    else if (humanChoice === "scissors") humanChoice = "Scissors";
    else {
        console.log("Invalid choice! Please choose Rock, Paper, or Scissors.");
        return; // Exit the round if input is invalid
    }

    console.log(`Computer chose: ${computerChoice}`);
    console.log(`Human chose: ${humanChoice}`);

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

    console.log(roundOutcome);
}

// Initialize scores
let computerScore = 0;
let humanScore = 0;

// Play 5 rounds and declare winner
function playGame() {
    console.log("🏁 Welcome to Rock, Paper, Scissors - Best of 5 Rounds! 🏁");

    for (let i = 1; i <= 5; i++) {
        console.log(`\n🎲 Round ${i}:`);
        playRound();
        console.log(`Current Score -> Human: ${humanScore} | Computer: ${computerScore}`);
    }

    console.log("\n🏆 Final Results 🏆");
    if (humanScore > computerScore) {
        console.log("🎉 Human wins the game! Congratulations! 🎉");
    } else if (computerScore > humanScore) {
        console.log("🤖 Computer wins the game! Better luck next time! 🤖");
    } else {
        console.log("😐 It's a tie overall! What a close match! 😐");
    }
}

// Start the game
playGame();