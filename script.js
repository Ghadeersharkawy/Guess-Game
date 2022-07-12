'use strict';
//select Elements
let score0 = document.querySelector('#score--0');
let score1 = document.querySelector('#score--1');
let diceImg = document.querySelector('.dice');
const rollBtn = document.querySelector('.btn.btn--roll');
const holdBtn = document.querySelector('.btn.btn--hold');
const newBtn = document.querySelector('.btn.btn--new');
// let currentPlayer1 = document.querySelector('#current--0');
// let currentPlayer2 = document.querySelector('#current--1');
//player
let activePlayer = 0;

let currentScore = 0;
//Set Scores to 0 at start
score0.textContent = 0;
score1.textContent = 0;
//hide dice image
diceImg.classList.add('hidden');

// Roll Dice
const getDiceNumber = function () {
    let roll = Math.trunc(Math.random() * 6) + 1;
    return roll;
}
const rollDice = function () {
    let rolledNum = getDiceNumber();
    diceImg.classList.remove('hidden');
    diceImg.src = `dice-${rolledNum}.png`;
    if (rolledNum == 1)
    {
        currentScore = 0;
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
        //switch users

        document.querySelector(`.player.player--${activePlayer}`).classList.remove('player--active');
        activePlayer = activePlayer == 0 ? 1 : 0;
        console.log(document.querySelectorAll(`.player.player--${activePlayer}`));
        document.querySelector(`.player.player--${activePlayer}`).classList.add('player--active');
    } else
    {
        //add rolled num to current 
        currentScore += rolledNum;
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
        console.log(currentScore);
    }
}
rollBtn.addEventListener('click', rollDice);
