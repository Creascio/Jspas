let solution = null
let mineSweeper = null
let mineSweeperHTML = null

const height = 15;
const width = 10;
const nbMines = 22;

const createSolution = () => {
  solution = new Array(height);

  for (var i = 0; i < height; i++) {
    solution[i] = new Array(width);
  }

  // init
  for(var i = 0; i < height;i++){
    for(var j = 0; j < width;j++){
      solution[i][j] = '-'
    }
  }

  // put mines
  for(var i = 0; i < nbMines; i++){
    let l = Math.floor(Math.random() * height);
    let c = Math.floor(Math.random() * width);
    if(solution[l][c] === '-'){
      solution[l][c] = 'b';
    }
  }
   
  // put numbers
  for(var i = 0; i < height;i++){
    for(var j = 0; j < width;j++){
      let cpt = 0;
      if(i>0 && j>0){

        if(solution[i-1][j-1] === 'b') {
          cpt++
        }
      }

      if(i>0){
        if(solution[i-1][j] === 'b') {
          cpt++
        }
      }
                
      if(i>0 && j < width ){
        if(solution[i-1][j+1] === 'b') {
          cpt++
        }
      }
                
      if(j < width ){
        if(solution[i][j+1] === 'b'){
          cpt++
        }
      }
                
      if(i < height - 1  && j < width ){        
        if(solution[i + 1][j+1] === 'b'){
          cpt++
        }
      }
                
      if(i < height - 1){
        if(solution[i + 1][j] === 'b'){
          cpt++
        }
      }
                
      if(i < height - 1 && j > 0) {
        if(solution[i + 1][j - 1] === 'b'){
          cpt++
        }
      }
                
      if(j > 0){
        if(solution[i][j - 1] === 'b'){
          cpt++
        }
      }
      if(solution[i][j] !== 'b' ) {
        solution[i][j] = cpt.toString()  
      }
      
    }
  }
 
}

const initMineSweeper = () => {
  mineSweeper = new Array(height);
  for (var i = 0; i < height; i++) {
    mineSweeper[i] = new Array(width);
  }

  for(var i = 0; i < height;i++){
    for(var j = 0; j < width;j++){
      mineSweeper[i][j] = '-'
    }
  }
}

const translate = (string) => {
  switch(string) {
    case '0': 
      return "0️⃣"
    case '1': 
      return "1️⃣" 
    case '2': 
      return "2️⃣"
    case '3': 
      return "3️⃣"
    case '4': 
      return "4️⃣"
    case '5': 
      return "5️⃣"
    case '6': 
      return "6️⃣"
    case '7': 
      return "7️⃣"
    case '8': 
      return "8️⃣"
    case 'b': 
      return "💣"
    case '-': 
      return "⬛"
  }
}

const discover = (h, w) => {
  if(mineSweeper[h][w] == 0) {

    // top left
    if(h>0 && w>0){
      if(mineSweeper[h-1][w - 1] == '-') {
        mineSweeper[h-1][w - 1] = solution[h-1][w - 1]
        discover(h-1, w-1)
      }
    }

    // top 
    if(h>0){
      if(mineSweeper[h-1][w] == '-') {
        mineSweeper[h-1][w] = solution[h-1][w]
        discover(h-1, w)
      }
    }
         
    // top right
    if(h >0 && w < width ){
      if(mineSweeper[h-1][w + 1] == '-') {
        mineSweeper[h-1][w + 1] = solution[h-1][w + 1]
        discover(h-1, w+1)
      }
    }
         
    // right
    if(w < width ){
      if(mineSweeper[h][w + 1] == '-') {
        mineSweeper[h][w + 1] = solution[h][w + 1]
        discover(h, w+1)
      }
    }
        
    // bottom right
    if(h < height - 1 && w < width ){
      if(mineSweeper[h+1][w + 1] == '-') {
        mineSweeper[h + 1][w + 1] = solution[h + 1][w + 1]
        discover(h+1, w+1)
      }
    }
         
    // bottom
    if(h < height - 1){
      if(mineSweeper[h+1][w] == '-') {
        mineSweeper[h + 1][w] = solution[h + 1][w]
        discover(h+1, w)
      }
    }
         
    // bottom left
    if(h < height - 1 && w > 0) {
      if(mineSweeper[h+1][w - 1] == '-') {
        mineSweeper[h + 1][w - 1] = solution[h + 1][w - 1]
        discover(h+1, w-1)
      }
    }
          
    // left
    if(w > 0){
      if(mineSweeper[h][w - 1] == '-') {
        mineSweeper[h][w - 1] = solution[h][w - 1]
        discover(h, w-1)
      }
    }
  }
}

const touch = (element,height, width) => {
  mineSweeper[height][width] = solution[height][width]
  discover(height,width)
  updateHTML()
}

const updateHTML = () => {
  let html = "<table>"
  mineSweeper.forEach((items, height) => {
    html += "<tr>"
    items.forEach((item, width) => {
      html += `<td> <button onclick="touch(this, ${height}, ${width})"> ${translate(item)} </button> </td>`
    })
    html += "</tr>"
  })
  html += "</table>"

  mineSweeperHTML.innerHTML = html
}

const load = () => {
  mineSweeperHTML = document.getElementById('demineur');
  createSolution();
  initMineSweeper();

  updateHTML()
}
window.addEventListener("load", load)