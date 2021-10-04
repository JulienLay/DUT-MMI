window.addEventListener("scroll", avancer);

function avancer() {
    // Calcul de la hauteur "utile" du document
    // document.documentElement.scrollHeight récupère la hauteur de l'écran
    // window.innerHeight récupère la hauteur (en pixels) de la partie visible de la fenêtre
    let hauteur = document.documentElement.scrollHeight - window.innerHeight

    // Récupération de la position verticale
    let position = window.scrollY

    // Récupération de la largeur de la fenêtre
    let largeur = document.documentElement.clientWidth

    // Calcul de la largeur de la barre
    let barre = position / hauteur * largeur

    // Modification du CSS de la barre
    document.getElementById("progress").style.width = barre + "px"
}