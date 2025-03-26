let userScore = 0;
let computerScore = 0;

const hands = document.querySelectorAll(".main__hands img");
const userScoreDisplay = document.querySelector('.user_score');
const computerScoreDisplay = document.querySelector('.computer_score');
const mainMessage = document.querySelector('.main__message');

// Get computer choice
const getComputerChoice = () => {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Determine the winner
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'draw';
    }
    if (
        (userChoice === 'Rock' && computerChoice === 'Scissors') ||
        (userChoice === 'Paper' && computerChoice === 'Rock') ||
        (userChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
        return 'user';
    }
    return 'computer';
}

// Play the game
const play = (e) => {
    const userChoice = e.target.id;
    const computerChoice = getComputerChoice();

    const winner = determineWinner(userChoice, computerChoice);

    if (winner === 'user') {
        userScore++;
        mainMessage.textContent = `You Win! ${userChoice} beats ${computerChoice}`;
    } else if (winner === 'computer') {
        computerScore++;
        mainMessage.textContent = `You Lose! ${computerChoice} beats ${userChoice}`;
    } else {
        mainMessage.textContent = `It's a Draw! Both chose ${userChoice}`;
    }

    userScoreDisplay.textContent = userScore;
    computerScoreDisplay.textContent = computerScore;
}

// Add event listeners to each hand image
hands.forEach(hand => {
    hand.addEventListener('click', play);
});

// Initialize scores on page load
window.addEventListener('load', () => {
    userScoreDisplay.textContent = userScore;
    computerScoreDisplay.textContent = computerScore;
});
