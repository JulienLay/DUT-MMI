// MENU HAMBURGER --------------------------------------------
// Cas simple et pratique de gestion d'événement
//ouvrir le menu
const menu = document.getElementById('menuIcon');
menu.addEventListener('click', afficherMenu);

function afficherMenu() {
    let menuBurger = document.querySelector('nav');
    menuBurger.classList.add('responsive');
}

//fermer le menu
const fermeMenu = document.getElementById('closeIcon');
fermeMenu.addEventListener('click', fermerMenu);

function fermerMenu() {
    let menuBurger = document.querySelector('nav');
    menuBurger.classList.remove('responsive');
}

// MENU --------------------------------------------------------
// Utiliser une boucle for pour greffer des gestionnaires d'événement
// Utiliser e.target pour connaître la cible de l'événement
// Utiliser querySelector() sur un element Html pour chercher un element parmi ses descendants

const rubriques = document.querySelectorAll('ul.level-1 > li > a');

for (let i = 0; i < rubriques.length; i++) {
    rubriques[i].addEventListener('click', toggleMenu);
}

function toggleMenu(event) {

    let rubrique = event.target;
    let menu = rubrique.parentElement.querySelector('ul.level-2');

    // Masquer les autres menus déjà ouvert
    let menus = document.querySelectorAll('ul.level-2');
    for (let j = 0; j < menus.length; j++) {
        // Exclure le menu "courant" qui pourrait être déjà ouvert
        if (menus[j] != menu) {
            menus[j].classList.remove('visible');
        }
    }

    if (menu.classList.contains('visible')) {
        menu.classList.remove('visible');
    } else {
        menu.classList.add('visible');
    }
}

// SCROLL  --------------------------------------------------------
// Découvrir de nouvelles propriétés et méthodes de l'objet window.
document.getElementById('scrollDown').addEventListener('click', descendre);

function descendre() {
    window.scroll(0, window.innerHeight);
}

document.getElementById('scrollUp').addEventListener('click', monter);

function monter() {
    window.scroll(0, 0);
}

// BOUTON --------------------------------------------------------
// Utiliser les méthodes de classList
document.getElementById('toggle').addEventListener("click", toggleImage);

function toggleImage() {
    if (document.querySelector('div.liste-2').classList.contains('visible')) {
        document.querySelector('div.liste-2').classList.remove('visible');
        document.getElementById('toggle').textContent = "Afficher la liste";
    } else {
        document.querySelector('div.liste-2').classList.add('visible');
        document.getElementById('toggle').textContent = "Réduire la liste";
    }
}