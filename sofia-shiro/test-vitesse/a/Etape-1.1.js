const words = ['Quand', 'je', 'pense', 'à', 'toi', 'je', 'suis', 'patate']
let boardDiv = null

const updateBoard = () => {
  words.forEach((word) => {
    boardDiv.innerHTML += `<div>${word}</div>`
  })
}

const load = () => {
  boardDiv = document.getElementById('board');

  updateBoard()
}

window.addEventListener("load", load)