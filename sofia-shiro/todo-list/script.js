let listDiv = null;
let formDiv = null;
let seq = 3;
let todoList = [
  {
    id: 1,
    title: "Faire les courses",
    description: "steak, pates, pq",
    check: false
  },
  {
    id: 2,
    title: "Faire tes devoirs",
    description: "Ouai c'est chiant",
    check: true
  },
]

const remove = (id) => {
  todoList = todoList.filter((element) => element.id !== id)

  updateHTML()
}

const updateHTML = () => {
  let string = ""
  todoList.forEach((todo) => {
    string += `<div class=\"box\">`
    string += `<div class="title"> <span> ${todo.title} </span>  <button class="remove" onclick="remove(${todo.id})">X</button> </div>`
    string += `<div class="description"> ${todo.description} </div>`
    string += `<input type="checkbox" ${todo.check ? 'checked' : ''}> <label>Fait</label>`
    string += "</div>"
  })


  listDiv.innerHTML = string
}

const pageLoaded = () => {
  listDiv = document.getElementById('list')
  formDiv = document.getElementById('form')

  document.getElementById('add').addEventListener('click', () => {
    const title = document.getElementById('title')
    const description = document.getElementById('description')
    todoList.push({id: seq++, title: title.value, description: description.value, check: false})
    title.value = ""
    description.value = ""

    updateHTML()
  })

  updateHTML()
}

window.addEventListener("load", pageLoaded)