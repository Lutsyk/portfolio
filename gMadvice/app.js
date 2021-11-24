const url = 'https://api.adviceslip.com/advice/'
const adviceArea = document.querySelector('.advice-slip');
const submitBtn = document.querySelector('#btn')
const input = document.querySelector('#numberOfAdvice')
const screen1 = document.querySelector('.screen1')
let countAdvice = 0
let adviceArray = []

input.addEventListener('change', event => {
    
    if(input.value > 4 && input.value < 21 ){
        console.log(parseInt(input.value))
        input.classList.remove('invalid');
        input.classList.add('valid');
        countAdvice = parseInt(input.value)
        submitBtn.disabled = false; 
    } else {
        submitBtn.disabled = true;
        console.log(input.value)
        input.classList.add('invalid');
    }
    
});

submitBtn.addEventListener('click', event => {
    event.preventDefault()
    screen1.classList.add('up');
    getSeveralAdvice(countAdvice)
})

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getAdvice(){
    fetch(`${url}`+`${getRandomInt(0,200)}`).then(res => res.json()).then(data => {
        console.log(data)
        adviceArray.push(data)
        let div = document.createElement("div");
        div.innerHTML = `<p>${data.slip.advice}</p>` 
        div.classList.add('advice')
        adviceArea.appendChild(div);
    });
}

function getSeveralAdvice(val){
    for (let index = 0; index < val; index++) {
        getAdvice()
    }
}

