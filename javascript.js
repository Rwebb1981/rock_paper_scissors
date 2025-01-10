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
    console.log(`Current Score -> Human: ${humanScore} | Computer: ${computerScore}`);
}

// Initialize scores
let computerScore = 0;
let humanScore = 0;

//add event listeners to buttons
document.getElementById("btn1").addEventListener("click", () => playRound("Rock"));
document.getElementById("btn2").addEventListener("click", () => playRound("Paper"));
document.getElementById("btn3").addEventListener("click", () => playRound("Scissors"));


// Play 5 rounds and declare winner
function playGame() {
    console.log("🏁 Welcome to Rock, Paper, Scissors - Best of 1 Round! 🏁");
    for (let i = 1; i <= 1; i++) {
        console.log(`\n🎲 Round ${i}:`);
        playRound();
        console.log(`Current Score -> Human: ${humanScore} | Computer: ${computerScore}`);
    }

    //Declare final winner
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