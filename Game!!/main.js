let playButton = document.querySelector('#play')
let rulesSection = document.querySelector('.game-rules')
let resetBtn = document.querySelector('#resetBtn')
let resultBlock =document.querySelector('#result')
let rockBtn = document.querySelector('#rock')
let papertBtn = document.querySelector('#paper')
let scissorsBtn = document.querySelector('#scissors')
let win = 0;
let lose = 0;

const randomSymbol = () => {
    let arrOfSymbol = ['rock', 'paper', 'scissors']
    let randomNum = Math.floor(Math.random() * 3);
    return arrOfSymbol[randomNum]
}

const hideBtn = () => {
    papertBtn.style.display = "none"
    rockBtn.style.display = "none"
    scissorsBtn.style.display = "none"
}

const riseBtn = () => {
    papertBtn.style.display = "inline"
    rockBtn.style.display = "inline"
    scissorsBtn.style.display = "inline"
}

const displResult = (log) => {
    resultBlock.innerHTML +=`<p>${log}</p>`
    resultBlock.lastChild.scrollIntoView()
}

const displayResult = (my, comp, rez) =>{
    let battleLog = (my+' vs '+comp+' = '+rez)
    displResult(battleLog)
    if (win === 3){
        hideBtn()
        resultBlock.innerHTML = `<h1>You Win: ${win} VS ${lose}!</h1>`;
        win = 0, lose = 0
    } else if (lose === 3){
        hideBtn()
        resultBlock.innerHTML = `<h1>You Lose: ${win} VS ${lose}!</h1>`;
        win = 0, lose = 0
    }
}

const startGame = (myChoice) => {
    let computerChoice = randomSymbol()
    if(myChoice === computerChoice){
        switch (myChoice) {
            case 'rock':
                displayResult('&#9996;', '&#9996;', 'draw')
                break;
            case 'paper':
                displayResult('&#9995;', '&#9995;', 'draw')
                break
            case 'scissors':
                displayResult('&#129308;', '&#129308;', 'draw')
                break;
            default:
                break
        }
    } else if (myChoice === 'rock' && computerChoice === 'paper'){
        win++
        displayResult('&#9996;', '&#9995;', 'win')

    } else if (myChoice === 'rock' && computerChoice === 'scissors'){
        lose++
        displayResult('&#9996;', '&#129308;', 'lose')

    } else if (myChoice === 'paper' && computerChoice === 'rock'){
        win++
        displayResult('&#9995;', '&#9996;', 'win')

    } else if (myChoice === 'paper' && computerChoice === 'scissors'){
        lose++
        displayResult('&#9995;', '&#129308;', 'lose')

    }else if (myChoice === 'scissors' && computerChoice === 'paper'){
        win++
        displayResult('&#129308;', '&#9995;', 'win')

    } else if (myChoice === 'scissors' && computerChoice === 'rock'){
        lose++
        displayResult('&#129308;', '&#9996;', 'lose')

    }
}

const restGame = () => {
    rulesSection.style.marginTop = '0'
    win = 0, lose = 0
    resultBlock.innerHTML = "";
    riseBtn()
} 

playButton.addEventListener('click', () => {
    rulesSection.style.marginTop = '-100vh'
});

resetBtn.addEventListener('click', () => {
    restGame()
});

rockBtn.addEventListener('click', (e) => {
    startGame(e.target.value)
});

papertBtn.addEventListener('click', (e) => {
    startGame(e.target.value)
});

scissorsBtn.addEventListener('click', (e) => {
    startGame(e.target.value)
});

