const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const words = ['apple','office','water','javascript','html','green'];
let chosenWord = '';
let guessedWord = '';
let attemptsLeft = 0;

function selectRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

function initializeGame(attempts) {
    chosenWord = selectRandomWord();
    guessedWord = '-'.repeat(chosenWord.length);
    attemptsLeft = attempts;
    console.log('welcome to Hangeman');
    console.log('Guess the word:' + guessedWord);
    //run the game
    turn();
}

function checkLetter(letter) {
    let found = false;
    for (let i = 0; i < chosenWord.length; i++) {
        if (chosenWord[i] === letter) {
            guessedWord = guessedWord.substring(0, i) + letter + guessedWord.substring(i + 1);
            found = true;
        }
    }
    return found;
}

function turn() {

    rl.question('Guess the word:', (input) => {
        let letter = input.toLowerCase();
        let letterIsCorrect = checkLetter(letter);

        if (letterIsCorrect) {
            console.log(`good guess! ${guessedWord}`);
        } else {
            attemptsLeft--;
            console.log(`Wrong! You have ${attemptsLeft} attempts left.`);
            if (attemptsLeft === 0) {
                console.log('You Lost!');
                rl.close();
                return;
            }
        }

        if  (guessedWord === chosenWord) {
            console.log('Congratz you guesssed the word, it was' + chosenWord);
        }else{
            turn();
        }
    });
}

initializeGame(10);
// `