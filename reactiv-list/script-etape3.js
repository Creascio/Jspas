let fruitsList = null
let input = null
let fruits = ['fraise', 'framboise', 'citron' ,'banane', 'poire']

const updateHTML = () => {
  let stringFruits = "<ul>"

  fruits.forEach((fruit) => {
    // Etape 4
    stringFruits += "<li> "+ fruit + "<button class='red' onClick=\"remove('"+ fruit +"')\">X</button> </li>"
  })
  stringFruits += "</ul>"

  fruitsList.innerHTML = stringFruits
}

// Etape 1
const remove = (element) => {
  // Etape 2
  fruits = fruits.filter((fruit) => fruit !== element)

  updateHTML() // Etape 3
}

const add = () => {
  fruits.push(input.value) 
  input.value = ""
  
  updateHTML() 
}

const pageLoaded = () => {
  fruitsList = document.getElementById('list') 
  input = document.getElementById('input') 

  document.getElementById('add').addEventListener('click', add) 

  updateHTML() 
}

window.addEventListener("load", pageLoaded)