function breakFunk() {
    alert('You did not become a billionaire, but can.')
}

function winBank() {
    switch (attempts) {
        case switchThird: 
            bank+=maxPrize
            break;
        case switchSecond:
            bank+=mediumPrize
            break;
        case switchFirst:
            bank+=minPrize
            break;
        default:
            break;
    }
}

function startValueAll() {
    maxRandomNumber = startRandomNumber;
    maxPrize = maxPrizeStart;
    mediumPrize = mediumPrizeStart;
    minPrize = minPrizeStart;
    attempts = attemptsStart;
}

function possiblePrize() {
    switch (attempts) {
        case switchThird: 
            possiblePrizeWin = maxPrize
            break;
        case switchSecond:
            possiblePrizeWin = mediumPrize
            break;
        case switchFirst:
            possiblePrizeWin = minPrize
            break;
        default:
            break;
    }
}

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

function regretConfirm() {
    if(again===false){
        regret = confirm('Do you want to play a game?');
        startValueAll()
    }
    if (regret === true) {
        randomNumberValue = randomNumber(0,maxRandomNumber)
        possiblePrize()
        number = parseInt(prompt('Choose a roulette pocket number from 0 to '+maxRandomNumber
        +'\nAttemps left: '+attempts+'\nTotal prize: '+bank+'$\nPossible prize on current attempt:'
        +possiblePrizeWin+'$'))
        playGame()
    } else {
        breakFunk() 
    }
}

function userNumber() {
    possiblePrize()
    if (regret===true) {
        number = parseInt(prompt('Choose a roulette pocket number from 0 to '+maxRandomNumber
        +'\nAttemps left: '+attempts+'\nTotal prize: '+bank+'$\nPossible prize on current attempt:'
        +possiblePrizeWin+'$'))
    } else {
        return 0
    }
    
}

function playGame() {
    for (let index = 0; index < forNumber; index++) {
        if (number===randomNumberValue) {
            winBank()
            again = confirm('Congratulation, you won!\nYour prize is: '+bank+'$.\nDo you want to continue?')
            if (again===true) {
                maxRandomNumber += upRandomRange;
                maxPrize *= upRange;
                mediumPrize *= upRange;
                minPrize *= upRange;
                attempts = attemptsStart;
                regretConfirm()
            } else {
                alert('Thank you for your participation. Your prizeis: '+bank+'$');
                startValueAll()
                regretConfirm()
            }
            break
        } else {
            alert('Wrong number, try again')
            attempts--
            if (attempts===0){
                alert('Thank you for your participation. Your prizeis: '+bank+'$');
                attempts = attemptsStart;
                again = false;
                regretConfirm()
            }
            userNumber()
            
        }
        
    }
}



let again = false;
let regret;
let gameStatus = 1;
let number;
let maxRandomNumber = 8;
let randomNumberValue = randomNumber(0,maxRandomNumber);
let attempts = 3;
let maxPrize = 100;
let mediumPrize = 50;
let minPrize = 25;
let bank = 0;
let possiblePrizeWin = 0;
const upRandomRange = 4;
const maxPrizeStart = 100;
const mediumPrizeStart = 50;
const minPrizeStart = 25;
const attemptsStart = 3;
const switchFirst = 1;
const switchSecond = 2;
const switchThird = 3;
const upRange = 2;
const startRandomNumber = 8;
const forNumber = 3;

regretConfirm()




