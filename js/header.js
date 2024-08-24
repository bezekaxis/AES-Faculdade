//Scripts para o header de todas as paginas

//Script para o menu hamburgue abre e fecha

const hamburguerButton = document.querySelector('#hamburguer-menu');
const closeMenu = document.querySelector('#close-nav-bar-button');
const lateralMenu = document.querySelector('#nav-bar');
const body = document.body;

hamburguerButton.addEventListener('click', function(){
    lateralMenu.classList.remove('display-none');
});

closeMenu.addEventListener('click', function(){
    lateralMenu.classList.add('display-none');
});

