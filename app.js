const game = () => {
    let playerScore = 0;
    let computerScore = 0;

    // Start game function
    const startGame = () => {
        const playButton = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playButton.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        })
    };

    // Play match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');
        hands.forEach(hand => {
            hand.addEventListener('animationend', function() {
                this.style.animation = '';
            })
        });

        // Computer options
        const computerOptions = ['rock', 'paper', 'scissors'];
        options.forEach(option => {
            option.addEventListener('click', function () {
                // Computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerSelection = computerOptions[computerNumber];
                setTimeout(() => {
                    // Call compare hands
                    compareHands(this.textContent, computerSelection);
                    // Update images
                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerSelection}.png`;
                },2050);
                // Animation of hands
                playerHand.style.animation = 'shakePlayer 2s ease';
                computerHand.style.animation = 'shakeComputer 2s ease';
            });
        });
    };

    const updateScore = () => {
        const playerScoreText = document.querySelector('.player-score p');
        const computerScoreText = document.querySelector('.computer-score p');
        playerScoreText.textContent = playerScore;
        computerScoreText.textContent = computerScore;
    };

    const compareHands = (playerChoice, computerChoice) => {
        // Update text
        const winner = document.querySelector('.winner');
        // Check for a tie
        if (playerChoice === computerChoice) {
            winner.textContent = 'It is a tie!';
            return;
        }
        // Check for rock
        if (playerChoice === 'rock') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'Player Wins!';
                playerScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'You lose.. PC master race!';
                computerScore++;
                updateScore();
                return;
            }
        }
        if (playerChoice === 'paper') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'You lose.. PC master race!';
                computerScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Player Wins!';
                playerScore++;
                updateScore();
                return;
            }
        }
        if (playerChoice === 'scissors') {
            if (computerChoice === 'rock') {
                winner.textContent = 'You lose.. PC master race!';
                computerScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Player Wins!';
                playerScore++;
                updateScore();
                return;
            }
        }
    };


    // Call inner functions for game play
    startGame();
    playMatch();
};

// Start game
game();
