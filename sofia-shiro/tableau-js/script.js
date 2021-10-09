// Etape 1.4
let fruitsList = null
let input = null
// Etape 1.3
let fruits = ['fraise', 'framboise', 'citron' ,'banane', 'poire']

// Etape 1.7
const updateHTML = () => {
  // Etape 1.8 - 9
  let stringFruits = "<ul>"

  fruits.forEach((fruit) => {
    // Etape 1.9 -> stringFruits += "<li> "+ fruit + "</li>"
    // Etape 3.4
    stringFruits += "<li> "+ fruit + "<button class='red' onClick=\"remove('"+ fruit +"')\">X</button> </li>"
  })
  stringFruits += "</ul>"

  // Etape 1.10
  fruitsList.innerHTML = stringFruits
}

// Etape 4.1
const filter = () => {
  // Etape 4.2
  fruits = fruits.sort((a, b) => {
    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1;
    }
    return 0;
  })

  updateHTML() // Etape 4.3
}

// Etape 3.1
const remove = (element) => {
  // Etape 3.2
  fruits = fruits.filter((fruit) => fruit !== element)

  updateHTML() // Etape 3.3
}

// Etape 2.1
const add = () => {
  fruits.push(input.value) // Etape 2.2

  updateHTML() // Etape 2.3
}

// Etape 1.1
const pageLoaded = () => {
  fruitsList = document.getElementById('list') // Etape 1.5
  input = document.getElementById('input') // Etape 1.6

  document.getElementById('add').addEventListener('click', add) // Etape 2.4
  document.getElementById('filter').addEventListener('click', filter)

  updateHTML() // Etape 1.11
}

// Etape 1.2
window.addEventListener("load", pageLoaded)