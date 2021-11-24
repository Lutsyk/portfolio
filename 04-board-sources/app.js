const board = document.querySelector('#board');
const SQUARES_NUMBER = 560;
const colors = ['#7FFFD4', '#FF7F50', '#DC143C', '#FF8C00', '#9932CC', '#FF1493', '#FFD700', '#ADFF2F','#FFFAFA']

for (let index = 0; index < SQUARES_NUMBER; index++) {
    const square = document.createElement('div');
    square.classList.add('square')

    square.addEventListener('mouseover', () =>
    setColor(square)
    )

    square.addEventListener('mouseleave', () =>
    removeColor(square)
    )

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor(){
   const index = Math.floor(Math.random() * colors.length)
   return colors[index]
}