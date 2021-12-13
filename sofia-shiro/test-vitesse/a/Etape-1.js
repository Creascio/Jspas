const words = ['Quand', 'je', 'pense', 'à', 'toi', 'je', 'suis', 'patate']

const load = () => {
  const boardDiv = document.getElementById('board');

  words.forEach((word) => {
    boardDiv.innerHTML += `<div>${word}</div>`
  })
}

window.addEventListener("load", load)