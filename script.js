'use strict';
//select Elements
let score0El = document.querySelector('#score--0');
let score1El = document.querySelector('#score--1');
let diceImg = document.querySelector('.dice');
const rollBtn = document.querySelector('.btn.btn--roll');
const holdBtn = document.querySelector('.btn.btn--hold');
const newBtn = document.querySelector('.btn.btn--new');
//player
let activePlayer = 0;

let currentScore = 0;
let score0 = 0;
let score1 = 0;

//Set Scores to 0 at start
score0El.textContent = score0;
score1El.textContent = score1;
//check player win
const checkPlayerWin = function (score0, score1) {
    if (score0 >= 100)
    {
        document.querySelector(`.player.player--${activePlayer}`).classList.add('player--winner');
    } else if (score1 >= 100)
    {
        document.querySelector(`.player.player--${activePlayer}`).classList.add('player--winner');
    }
}
//hide dice image
diceImg.classList.add('hidden');
//Switch Player
const switchPlayer = function () {
    document.querySelector(`.player.player--${activePlayer}`).classList.remove('player--active');
    activePlayer = activePlayer == 0 ? 1 : 0;
    console.log(document.querySelectorAll(`.player.player--${activePlayer}`));
    document.querySelector(`.player.player--${activePlayer}`).classList.add('player--active');
}
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
        switchPlayer();
    } else
    {
        //add rolled num to current 
        currentScore += rolledNum;
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
        console.log(currentScore);
    }
}
rollBtn.addEventListener('click', rollDice);

// listen to hold btn click
const holdScore = function () {
    console.log('hold', currentScore);
    console.log('player', activePlayer);

    if (activePlayer == 0)
    {
        score0 += currentScore;
        score0El.textContent = score0;
    } else
    {
        score1 += currentScore;
        score1El.textContent = score1;
    }
    checkPlayerWin(score0, score1);
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    switchPlayer();

    console.log(score0, score1);


}
holdBtn.addEventListener('click', holdScore);