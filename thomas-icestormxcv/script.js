

const element = {
  check: false,
  titre: "titre",
  txt: "tttttttttttt"
}

let list

function oui() {

let todo = document.createElement("ul")
const select = document.getElementById("zut")
select.appendChild(todo)



let mmm = document.createElement("li")
todo.appendChild(mmm)

mmm.innerHTML = '<div id="zaaaaa"><input type="checkbox"><h1>oh no</h1><p>izdnfabondoandoan</p></div>'  


console.log(select)

//select.innerHTML =  
}

const btn = document.getElementById("clickme")
window.addEventListener('load', oui);
btn.addEventListener('click', oui);