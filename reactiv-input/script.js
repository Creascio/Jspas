// Etape 1
const load = () => {
  const input = document.getElementById('randomInput'); // Etape 3
  const reactivText = document.getElementById('reactivText') // Etape 4
  
  // Etape 5
  input.addEventListener('input', (event) => {
    reactivText.innerHTML = event.target.value // Etape 6
  })
}

// Etape 2
window.addEventListener("load", load)