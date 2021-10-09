let fruitsList = null
let input = null
let fruits = ['fraise', 'framboise', 'citron' ,'banane', 'poire']

const filter = () => {
  fruits = fruits.sort((a, b) => {
    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1;
    }
    console.log(0)
    return 0;
  })

  updateHTML()
}

const add = () => {
  fruits.push(input.value)

  updateHTML()
}

const remove = (element) => {
  fruits = fruits.filter((fruit) => fruit !== element)

  updateHTML()
}

const updateHTML = () => {
  let stringFruits = "<ul>"
  fruits.forEach((fruit) => {
    stringFruits += "<li> "+ fruit +" <button class='red' onClick=\"remove('"+ fruit +"')\">X</button> </li>"
  })
  stringFruits += "</ul>"

  fruitsList.innerHTML = stringFruits
}

const load = () => {
  fruitsList = document.getElementById('list')
  input = document.getElementById('input')

  document.getElementById('add').addEventListener('click', add)
  document.getElementById('filter').addEventListener('click', filter)

  updateHTML()
}

window.addEventListener("load", load)