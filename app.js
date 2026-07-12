/* Selecciona un elemento por su id*/
const titulo = document.getElementById('titulo');
console.log (titulo.innerText);

const animes = document.getElementsByClassName('animes');
console.log(animes[2].id);

const misAnimes = document.getElementsByTagName('li')
console.log(misAnimes)