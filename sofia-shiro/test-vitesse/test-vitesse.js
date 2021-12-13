const words = ['Quand', 'je', 'pense', 'à', 'toi', 'je', 'suis', 'patate']

let word = "";
let time = 0
let timer = null
let board = null;

let boardDiv = null;
let input = null;
let timerDiv = null
let startButton = null
let stopButton = null
let winDiv = null

const updateBoard = () => {
  boardDiv.innerHTML = ""
  board.forEach((word) => {
    boardDiv.innerHTML += `<div>${word}</div>`
  })
}

const everySecond = () => {
  time++
  timerDiv.innerHTML = `${time} secondes`;
}

const start = () => {
  startButton.disabled = true
  stopButton.disabled = false
  winDiv.innerHTML = ""
  input.disabled = false

  timer = setInterval(everySecond, 1000);
}

const stop = () => {
  clearInterval(timer)
  init()
}

const win = () => {
  winDiv.innerHTML = `<div class='win-text'>Tu as gagné en ${time} secondes !</div>`
  winDiv.innerHTML += "<div class='win-img'> <img src='https://media0.giphy.com/media/ytTYwIlbD1FBu/200.gif'> </div>"
  stop()
  init()
}

const search = (event) => {
  let toRemove = null;
  word = event.target.value.trim();
  
  board.forEach((element) => {
    if(element === word) {
      input.value = ""
      toRemove = element
    } 
  })

  if(toRemove) {
    board.splice(board.indexOf(toRemove), 1)
    updateBoard()
  }

  if(board.length === 0) {
    win()
  }
}

const init = () => {
  board = [...words]
  updateBoard();

  time = 0
  timerDiv.innerHTML = '0 secondes';
  input.disabled = true
  startButton.disabled = false
  stopButton.disabled = true
}

const load = () => {
  boardDiv = document.getElementById('board');
  input = document.getElementById('input');
  timerDiv = document.getElementById("timer");
  startButton = document.getElementById('start');
  stopButton = document.getElementById('stop');
  winDiv = document.getElementById('win');

  input.addEventListener("input", search)
  startButton.addEventListener("click", start)
  stopButton.addEventListener("click", stop)

  init()
}

window.addEventListener("load", load)











