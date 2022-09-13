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

// display
function displayGuess() {
    results.classList.add('hidden');
    playAgainButton.classList.add('hidden');
}

// event listeners

/* Run page load code */
loadPage();
