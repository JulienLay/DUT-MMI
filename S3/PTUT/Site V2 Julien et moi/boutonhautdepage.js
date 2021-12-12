// Récupérer le bouton
let bouton = document.getElementById("btn-back-to-top");

// Quand l'utilisateur descend de 20px à partir du haut de la page, ça montre le bouton
window.onscroll = function () {
  scroll();
};

function scroll() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    bouton.style.display = "block";
  } else {
    bouton.style.display = "none";
  }
}

// Quand l'utilisateur clique sur le bouton, on remonte en haut du document
bouton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}