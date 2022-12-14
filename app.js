// the game conditions are as follows
// every time the user input a valid number the number of guesses should increase by 1 and the number should be added to the guessed numbers
// if isNaN(num) display a message to the user that the input is not a number and change button text to  "Try again"
// if the number is correct display a message in result to the user 'You guessed the number! 😍😍' and change button text to play again and reset the game after 3 seconds and change the input value to empty
// if the number is too high or too low display a message to the user and change button text to guess again
// if the number already guessed display a alert message to the user that the number is already guessed😒😒 and change button text to guess again
// if the number is not correct after 10 guesses the user get an alert 'You lost the game😭😭' and loses the game and the game after the alert the user can play again if the user clicks the play again button new random number is generated and the game is reset
// on load the input should be focused and the button text should be 'Guess' ans the number of guesses should be 0 and the guessed numbers should be none and the result should be empty and the input value should be empty too

// create a random number between 1 and 100

const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

let randomNum = generateRandomNumber(1, 100);
console.log(randomNum);

// get the input value
const num = document.querySelector('input').value;
const button = document.querySelector('#btn');
const result = document.querySelector('#result');
const numberOfGuesses = document.querySelector('#numGuess');
const guessedNumbers = document.querySelector('#guessedNum');
const problem = document.querySelector('#problem');

let numGuess = 0;
let guessedNum = [];


// when the user clicks the button the number of guesses should increase by 1 and the number should be added to the guessed numbers
button.addEventListener('click', () => {
    const num = document.querySelector('input').value;
    if (isNaN(num)) {
        result.textContent = 'Please enter a valid number';
        button.textContent = 'Try again';
    } else if (num < 1 || num > 100) {
        result.textContent = 'Please enter a number between 1 and 100';
        button.textContent = 'Try again';
    } else {
        if (guessedNum.length === 10) {
            alert('You lost the game 😭😭');
            randomNum = generateRandomNumber(1, 100);
            result.textContent = `The answer was ${randomNum}`;
            setTimeout(() => {
                numGuess = 0;
                guessedNum = [];
                result.textContent = '';
                numberOfGuesses.textContent = numGuess;
                guessedNumbers.textContent = guessedNum;
                document.querySelector('input').value = '';
                button.textContent = 'play again';
            }, 4000);

        } else if (numGuess <= 10) {
            alreadyGuessed();
            numberOfGuesses.textContent = numGuess;
            guessedNumbers.textContent = guessedNum;
            document.querySelector('input').focus();
            document.querySelector('input').value = '';
            if (num == randomNum) {
                console.log('hello');
                result.textContent = 'You guessed the number! 😍😍';
                button.textContent = 'Play again';
                randomNum = generateRandomNumber(1, 100);
                setTimeout(() => {
                    numGuess = 0;
                    guessedNum = [];
                    result.textContent = '';
                    numberOfGuesses.textContent = numGuess;
                    guessedNumbers.textContent = guessedNum;
                    document.querySelector('input').value = '';
                }, 3000);
            } else if (num > randomNum) {
                result.textContent = 'Too high';
                button.textContent = 'Guess again';
            } else if (num < randomNum) {
                result.textContent = 'Too low';
                button.textContent = 'Guess again';
            }
        }

        function alreadyGuessed() {
            if (guessedNum.includes(num)) {
                alert('You already guessed this number 😒😒');
                button.textContent = 'Guess again';
            } else {
                numGuess++;
                guessedNum.push(num);
                guessedNumbers.textContent = guessedNum;
            }
        }

    }
});

// on load the input should be focused and the button text should be 'Guess' ans the number of guesses should be 0 and the guessed numbers should be none and the result should be empty and the input value should be empty too

window.addEventListener('load', () => {
    document.querySelector('input').focus();
    button.textContent = 'Guess';
    numberOfGuesses.textContent = numGuess;
    guessedNumbers.textContent = 'none';
    result.textContent = '';
    document.querySelector('input').value = '';
});

// image button
// create an array of images
let images = ['img/c.jpg', 'img/d.jpg', 'img/f.jpg', 'img/g.jpg'];
// create a variable to count the number of clicks
let clicks = 1;
// get the button
const btn1 = document.querySelector('#btn1');
// get the body
const body = document.querySelector('body');
// add an event listener to the button
btn1.addEventListener('click', () => {
    // increase the number of clicks by 1
    if (clicks >= 0 && clicks < 4) {
        clicks++;
    } else {
        clicks = 1;
    }
    // change the text of the button to the number of clicks
    btn1.textContent = clicks;
    // change the background image of the body to a random image from the array
    body.style.backgroundImage = `url(${images[Math.floor(Math.random() * images.length)]})`;
    // change the text of the button to number of clicks and reset the last image
    setTimeout(() => {
        btn1.textContent = 'Change background';
    }, 1000);


});