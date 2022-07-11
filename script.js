'use strict';
//select Elements
let score0 = document.querySelector('#score--0');
let score1 = document.querySelector('#score--1');
let diceImg = document.querySelector('.dice');
const rollBtn = document.querySelector('.btn.btn--roll');
const holdBtn = document.querySelector('.btn.btn--hold');
const newBtn = document.querySelector('.btn.btn--new');

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
}
rollBtn.addEventListener('click', rollDice);
