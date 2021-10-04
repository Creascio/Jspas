window.addEventListener('load', displayTodo);
// J'ai copier coller ton truc mais au cas ou si ça marche pas ce
// code essaie de mettre le window.addEventListener('load', displayTodo); 
// tout en bas :p

function displayTodo() {
    let toDoList = document.getElementById("main");
    const toDo = {
        titre: "bite",
        description: "j'ai pas d'inspi et ca se voir c cho",
        check: false
    }
    toDoList.innerHTML = "<h3>" + toDo.titre + "</h3><input type='checkbox' id='check' name='check'" + toDo.check + "><label for = check>" + toDo.description + "</label>"
}