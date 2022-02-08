//salvo in una costante l'elemento HTML che dovrò cliccare in seguito
const hamburgerIcon = document.querySelector('.header-right > a');
console.log(hamburgerIcon);

//salvo in una costante l'elemento che farò apparire aggiungendo la classe active tramite addEventListener
const hamburgerMenu = document.querySelector('.hamburger-menu');
console.log(hamburgerMenu);

hamburgerIcon.addEventListener('click', function(){
    console.log('prova');

});