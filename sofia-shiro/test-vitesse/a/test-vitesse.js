const words = ['quand', 'je', 'pense', 'à', 'toi', 'je', 'suis', 'patate']
let boardDiv = null
let input = null
let timerPanel = null

let timer = null
let secondes = 0

const updateBoard = () => {
  boardDiv.innerHTML = ""
  words.forEach((word) => {
    boardDiv.innerHTML += `<div>${word}</div>`
  })
}

const userTyping = (event) => {
  const word = event.target.value

  if(word === words[0]) {
    words.shift()
    updateBoard()
    input.value = ""
  }

}

const everySecond = () => {
  secondes++;
  timerPanel.innerHTML = `${secondes} secondes`
}

const start = () => {
  timer = setInterval(everySecond, 1000);
}

const stop = () => {}

const load = () => {
  boardDiv = document.getElementById('board')
  input = document.getElementById('input')
  timerPanel = document.getElementById('timer')
  let startButton = document.getElementById('start')
  let stopButton = document.getElementById('stop')

  input.addEventListener('input', userTyping)
  startButton.addEventListener('click', start)
  stopButton.addEventListener('click', stop)
  
  updateBoard()
}

window.addEventListener("load", load)