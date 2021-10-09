// Etape 4
let fruitsList = null
let input = null
// Etape 3
let fruits = ['fraise', 'framboise', 'citron' ,'banane', 'poire']

// Etape 7
const updateHTML = () => {
  // Etape 8
  let stringFruits = "<ul>"

  fruits.forEach((fruit) => {
    // Etape 9
     stringFruits += "<li> "+ fruit + "</li>"
  })
  stringFruits += "</ul>"

  // Etape 10
  fruitsList.innerHTML = stringFruits
}

// Etape 1
const pageLoaded = () => {
  fruitsList = document.getElementById('list') // Etape 5
  input = document.getElementById('input') // Etape 6

  updateHTML() // Etape 11
}

// Etape 2
window.addEventListener("load", pageLoaded)