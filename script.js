let body = document.querySelector('body')

function changeTheme(string) {
  let theme = string

  if (theme == 'blue') {
    body.classList.remove('dark-blue', 'dark-pink', 'pink')
    body.classList.add('blue')
  } else if (theme == 'dark-blue') {
    body.classList.remove('blue', 'dark-pink', 'pink')
    body.classList.add('dark-blue')
  } else if (theme == 'pink') {
    body.classList.remove('blue', 'dark-blue', 'dark-pink')
    body.classList.add('pink')
  } else {
    body.classList.remove('blue', 'dark-blue', 'pink')
    body.classList.add('dark-pink')
  }
}
