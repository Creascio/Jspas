const changeTheme = () => {
  if(document.body.className === 'dark') {
    console.log('light')
    document.body.className = 'light'
  }
  else {
    console.log('dark')
    document.body.className = 'dark'
  }
}