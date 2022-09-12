/* Imports */
import { getRandomItem } from './utils.js';

/* State */
let gameState = 'guess'; // 'guess' or 'results'
let guess = ''; // 'left', 'center' or 'right'
let pearl = ''; // 'left', 'center' or 'right'
let result = ''; // 'win' or 'lose'

let total = 0;
let wins = 0;

// probability array
const shell = ['left', 'center', 'right'];

/* Actions */
function loadPage() {
    displayGuess();
    displayResults();
    displayScoreboard();
}

function liftShell(userGuess) {
    gameState = 'results';
    guess = userGuess;
    pearl = getRandomItem(shell);
    total++;

    if (guess === pearl) {
        result = 'win';
        wins++;
    } else {
        result = 'lose';
    }

    loadPage();
}

function playAgain() {
    gameState = 'guess';
    loadPage();
}

/* Components */

/* Scoreboard */
const totalDisplay = document.getElementById('total-display');
const winsDisplay = document.getElementById('wins-display');
const lossesDisplay = document.getElementById('losses-display');

function displayScoreboard() {
    totalDisplay.textContent = total;
    winsDisplay.textContent = wins;
    lossesDisplay.textContent = total - wins;
}

/* Guess */
// get DOM
const guessLeft = document.getElementById('guess-1');
const guessCenter = document.getElementById('guess-2');
const guessRight = document.getElementById('guess-3');

// display
function displayGuess() {
    guessLeft.classList.remove('win', 'lose', 'fade-out');
    guessCenter.classList.remove('win', 'lose', 'fade-out');
    guessRight.classList.remove('win', 'lose', 'fade-out');
}
// event listeners

/* Run page load code */
loadPage();
