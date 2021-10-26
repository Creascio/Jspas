let btn = null;

const changeTheme = () => {
  if(document.body.className === 'dark') {
    document.body.className = 'light'
    btn.innerHTML = 'Dark Theme'
  }
  else {
    document.body.className = 'dark'
    btn.innerHTML = 'Light Theme'
  }
}

const pageLoaded = () => {
  btn = document.getElementById('btn')
  btn.addEventListener('click', changeTheme)
}

window.addEventListener('load', pageLoaded)