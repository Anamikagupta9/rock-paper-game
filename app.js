document.addEventListener('DOMContentLoaded', () => {
    // Function to get a random choice for the computer
    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    // Function to determine the winner of a round
    function determineWinner(userChoice, computerChoice) {
        if (userChoice === computerChoice) return 'draw';
        if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'scissors' && computerChoice === 'paper') ||
            (userChoice === 'paper' && computerChoice === 'rock')
        ) {
            return 'user';
        }
        return 'computer';
    }

    // Function to get the detailed result message
    function getDetailedMessage(userChoice, computerChoice, result) {
        const choicesMap = {
            rock: 'Rock',
            paper: 'Paper',
            scissors: 'Scissors'
        };
        if (result === 'user') {
            return `You won! ${choicesMap[userChoice]} beats ${choicesMap[computerChoice]}.`;
        } else if (result === 'computer') {
            return `You lost! ${choicesMap[computerChoice]} beats ${choicesMap[userChoice]}.`;
        } else {
            return `It's a draw! Both chose ${choicesMap[userChoice]}.`;
        }
    }

    // Function to update the score and display messages
    function updateGameResults(userChoice, computerChoice, result) {
        const userScoreElement = document.querySelector('.user-score .score-value');
        const computerScoreElement = document.querySelector('.computer-score .score-value');
        const userScoreBody = document.querySelector('.user-score-body');
        const computerScoreBody = document.querySelector('.computer-score-body');
        const messageElement = document.querySelector('.message');
        const messageBox = document.querySelector('.message-box');

        // Retrieve current scores
        let userScore = parseInt(userScoreElement.textContent, 10);
        let computerScore = parseInt(computerScoreElement.textContent, 10);

        // Update scores based on the result
        if (result === 'user') {
            userScore += 1;
            messageElement.textContent = getDetailedMessage(userChoice, computerChoice, result);
            messageBox.style.borderColor = 'green'; // Border color for win
            messageBox.style.backgroundColor = '#d4edda'; // Background color for win
        } else if (result === 'computer') {
            computerScore += 1;
            messageElement.textContent = getDetailedMessage(userChoice, computerChoice, result);
            messageBox.style.borderColor = 'red'; // Border color for loss
            messageBox.style.backgroundColor = '#f8d7da'; // Background color for loss
        } else {
            messageElement.textContent = getDetailedMessage(userChoice, computerChoice, result);
            messageBox.style.borderColor = 'gray'; // Border color for draw
            messageBox.style.backgroundColor = '#e2e3e5'; // Background color for draw
        }

        // Update the score elements
        userScoreElement.textContent = userScore;
        computerScoreElement.textContent = computerScore;

        // Update the score display on the body
        userScoreBody.textContent = userScore;
        computerScoreBody.textContent = computerScore;

        // Show the message box
        messageBox.style.display = 'block';
    }

    // Function to handle the user's choice
    function handleUserChoice(userChoice) {
        const computerChoice = getComputerChoice();
        const result = determineWinner(userChoice, computerChoice);
        updateGameResults(userChoice, computerChoice, result);
    }

    // Initialize the game with the initial message
    function initializeGame() {
        const messageElement = document.querySelector('.message');
        const messageBox = document.querySelector('.message-box');

        // Set the initial message
        messageElement.textContent = 'Play your move';
        messageBox.style.borderColor = 'gray'; // Neutral border color
        messageBox.style.backgroundColor = '#e2e3e5'; // Neutral background color
    }

    // Setup event listeners for user choices
    function setupEventListeners() {
        document.querySelector('.game-image[alt="paper"]').addEventListener('click', () => handleUserChoice('paper'));
        document.querySelector('.game-image[alt="rock"]').addEventListener('click', () => handleUserChoice('rock'));
        document.querySelector('.game-image[alt="Scissors"]').addEventListener('click', () => handleUserChoice('scissors'));
    }

    // Run initialization and setup
    initializeGame();
    setupEventListeners();
});
