let fruitsList = null
let input = null
let fruits = ['fraise', 'framboise', 'citron' ,'banane', 'poire']

const updateHTML = () => {
  let stringFruits = "<ul>"

  fruits.forEach((fruit) => {
    stringFruits += "<li> "+ fruit + "<button class='red' onClick=\"remove('"+ fruit +"')\">X</button> </li>"
  })
  stringFruits += "</ul>"

  fruitsList.innerHTML = stringFruits
}

// Etape 1
const filter = () => {
  // Etape 2
  fruits = fruits.sort((a, b) => {
    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1;
    }
    return 0;
  })

  updateHTML() // Etape 3
}

const remove = (element) => {
  fruits = fruits.filter((fruit) => fruit !== element)

  updateHTML() 
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
  document.getElementById('filter').addEventListener('click', filter) // Etape 4

  updateHTML() 
}

window.addEventListener("load", pageLoaded)