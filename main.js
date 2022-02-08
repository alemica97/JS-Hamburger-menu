//salvo in una costante l'elemento HTML che dovrò cliccare in seguito per far apparire il menu
const hamburgerIcon = document.querySelector('.header-right > a');
console.log(hamburgerIcon);

//salvo in una costante l'elemento che farò apparire aggiungendo la classe active tramite addEventListener
const hamburgerMenu = document.querySelector('.hamburger-menu');
console.log(hamburgerMenu);

//uso la funzione addEventListener per scatenare un evento a seguito di un click su HamburgerIcon
hamburgerIcon.addEventListener('click', function(){
    console.log('prova');
    hamburgerMenu.classList.add('active');
});

//salvo l'elemento HTML che rappresenta la x che chiude il menù
const closeIcon = document.querySelector('.hamburger-menu .close');
console.log(closeIcon);

