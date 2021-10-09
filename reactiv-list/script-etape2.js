let fruitsList = null
let input = null
let fruits = ['fraise', 'framboise', 'citron' ,'banane', 'poire']

const updateHTML = () => {
  let stringFruits = "<ul>"

  fruits.forEach((fruit) => {
    stringFruits += "<li> "+ fruit + "</li>"
  })
  stringFruits += "</ul>"

  fruitsList.innerHTML = stringFruits
}

// Etape 1
const add = () => {
  fruits.push(input.value) // Etape 2
  input.value = "" // Etape 3
  
  updateHTML() // Etape 4
}

const pageLoaded = () => {
  fruitsList = document.getElementById('list') 
  input = document.getElementById('input') 

  document.getElementById('add').addEventListener('click', add) // Etape 5

  updateHTML() 
}

window.addEventListener("load", pageLoaded)