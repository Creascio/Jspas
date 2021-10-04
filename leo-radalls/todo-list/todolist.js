const checkTodo = (todo) => {
  todo.isChecked = !todo.isChecked
  console.log(todo)
}

const showToDoList = () => {
  let todolist = [
    { title: 'Course', desc: 'Faire les courses.', isChecked: false },
    { title: 'Piscine', desc: 'Mon petit Wrighty !', isChecked: false },
    { title: 'Aquaponey', desc: 'oui.', isChecked: false }
  ]

  const mainElement = document.getElementById('todolist')
  const todolistElement = document.createElement('ul')
  mainElement.appendChild(todolistElement)
  todolist.forEach((todo) => {
    const newTodoElement = document.createElement('li')
    newTodoElement.innerHTML = 'Titre : ' + todo.title + 
                               '<br />Description : ' + todo.desc + 
                               '<br /><input onclick="checkTodo(' + todo + ')" type="checkbox" value="' + todo.isChecked + '"/>'
    todolistElement.appendChild(newTodoElement)
  })
}

window.addEventListener('load', showToDoList)