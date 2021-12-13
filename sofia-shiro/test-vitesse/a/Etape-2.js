const words = ['quand', 'je', 'pense', 'à', 'toi', 'je', 'suis', 'patate']
let boardDiv = null
let input = null

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

const load = () => {
  boardDiv = document.getElementById('board');
  input = document.getElementById('input')

  input.addEventListener('input', userTyping)

  updateBoard()
}

window.addEventListener("load", load)