/* Imports */
// import { getRandomItem } from './utils.js';

/* State */
let gameState = 'guess'; // 'guess' or 'results'

/* Actions */
function loadPage() {
    displayShells(gameState);
}
function displayShells(gameState) {
    if (gameState === 'guess') {
        results.classList.add('hidden');
        playAgainButton.classList.add('hidden');
    }
}

/* Components */

/* Component */

// get DOM
const results = document.getElementById('results');
const playAgainButton = document.getElementById('play-again-button');
const guessLeft = document.getElementById('guess-1');
const guessCenter = document.getElementById('guess-2');
const guessRight = document.getElementById('guess-3');

// display
function displayGuess() {
    results.classList.add('hidden');
    playAgainButton.classList.add('hidden');
}

// event listeners
guessLeft.addEventListener('click', () => {
    liftShell('left');
});
guessCenter.addEventListener('click', () => {
    liftShell('Center');
});
guessRight.addEventListener('click', () => {
    liftShell('Right');
});

/* Run page load code */
loadPage();
