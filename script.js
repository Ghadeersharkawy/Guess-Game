'use strict';

// Add an Emoje --> windows + .

//generate random number between 1 to 20

let secretNumber = Math.floor(Math.random() * 20) + 1;
//console.log(secretNumber);

//Score  
//let score = Number(document.querySelector('.score').textContent);
let score = 20;
let highScore = 0;
const againBtn = document.querySelector('.again');
//High Score Calculate
const CalcHighScore = function (score) {
    if (score > highScore)
    {
        return highScore = score;
    } else
    {
        return highScore;
    }

}
//get Gussed Number
const getGussedNumber = function () {
    let guessedNumber = Number(document.querySelector('.guess').value);
    const message = document.querySelector('.message');
    //empty input
    if (!guessedNumber)
    {
        message.textContent = '⛔ No Number';
    } else if (guessedNumber === secretNumber)
    {
        message.textContent = '🎊🎉 Correct Number';
        //display generated numer on screen 
        document.querySelector('.number').textContent = secretNumber;
        //increase number background width
        document.querySelector('.number').style.width = '30rem';
        //change body color
        document.querySelector('body').style.backgroundColor = '#60b347';

        //highScore = score;
        CalcHighScore(score);
        document.querySelector('.highscore').textContent = highScore;

    } else if (guessedNumber > secretNumber)
    {
        message.textContent = 'Too Heigh';
        //score = score - 1;
        score--;
        if (score <= 0)
        {
            message.textContent = '😞 You Lost Try Again';
            document.querySelector('.score').textContent = 0;
        }
        else
        {
            document.querySelector('.score').textContent = score;
        }
    } else if (guessedNumber < secretNumber)
    {
        message.textContent = 'Too Low';
        // score = score - 1;
        score--;
        if (score <= 0)
        {
            message.textContent = '😞 You Lost Try Again';
            document.querySelector('.score').textContent = 0;
        } else
        {
            document.querySelector('.score').textContent = score;
        }
    }

    // Reset game
    // add event listener to again button click

    const gameReset = function () {
        //reset score value
        score = 20;
        //reset score div text
        document.querySelector('.score').textContent = score;
        secretNumber = Math.floor(Math.random() * 20) + 1;
        //console.log(secretNumber);

        document.querySelector('.number').textContent = '?';
        //reset message text
        message.textContent = 'Start guessing...';
        //reset Input Value
        document.querySelector('.guess').value = '';
        //reset body color
        document.querySelector('body').style.backgroundColor = '#222';
        //increase number background width
        document.querySelector('.number').style.width = '15rem';
    }
    againBtn.addEventListener('click', gameReset)

}

// lisiten to click event on check button
document.querySelector('.check').addEventListener('click', getGussedNumber)
