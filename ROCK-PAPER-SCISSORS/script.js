document.addEventListener('DOMContentLoaded', () => {
    const options = document.querySelectorAll('.option');
    const playerChoiceDiv = document.getElementById('player-choice');
    const computerChoiceDiv = document.getElementById('computer-choice');
    const result = document.getElementById('result');

    options.forEach(option => {
        option.addEventListener('click', () => {
            // Generate computer's choice
            const computerSelection = getComputerChoice();
            const computerIcon = document.getElementById(computerSelection);

            // Display player's and computer's choices as images
            // Inside your click event listener, after determining the player's and computer's choices
            playerChoiceDiv.innerHTML = `<img src="${option.src}" alt="${option.alt}" style="width: 100px; height: auto;">`;
            computerChoiceDiv.innerHTML = `<img src="${computerIcon.src}" alt="${computerIcon.alt}" style="width: 100px; height: auto;">`;

            // Determine the winner
            const winner = determineWinner(option.id, computerSelection);
            result.textContent = `Result: ${winner}`;
        });
    });
});

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(player, computer) {
    if (player === computer) {
        return 'It\'s a tie!';
    }
    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'Computer wins!';
    }
}
