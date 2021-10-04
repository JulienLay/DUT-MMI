// cordonnées des trous
const tTrous=[ {x:200 , y:110 },{x:480 , y:50 }, {x:400 , y:210 }, {x:650 , y:160 }, {x:100 , y:260 }, {x:680 , y:290 }, {x: 430 , y:350}];

// les 2 taupes
let taupe = document.getElementById("taupe")
let taupeCache = document.getElementById("taupecachee")

// cacher les taupes
taupe.style.visibility = "hidden"
taupeCache.style.visibility = "hidden"

// afficher une taupe dans un trou quand l'utilisateur clique sur le bouton commencer
let boutonCommencer = document.getElementById("commencer");
boutonCommencer.addEventListener("click", (event) => {
    taupe.style.left = 200 + "px";
    taupe.style.top = 110 + "px";
    taupe.style.visibility = "visible";
})

// faire disparaitre la taupe quand on clique dessus
taupe.addEventListener("click", (event) => {
    taupe.style.visibility = "hidden";
    taupeCache.style.visibility = "hidden"; // enlever la première taupe
    taupeCache.style.left = 200 + "px";
    taupeCache.style.top = 110 + "px";
    let score = document.getElementById("score");
    score.value = parseInt(score.value)+1;
})

/**
 * nombre au hasard dans l'intervalle [0,n[
 * param n la borne supérieure
 */
 function aleatoire(n) {
    var nb = Math.round(Math.random()*(n-1));
    return nb;
  }

// fait bouger aléatoirement la taupe toute les 2 secondes
setInterval(function(){ 
    const chiffreRandom = aleatoire(tTrous.length);
    taupe.style.left = tTrous[chiffreRandom].x + "px";
    taupe.style.top = tTrous[chiffreRandom].y + "px";
    taupe.style.visibility = "visible";
}, 2000);

// fait disparaitre le bouton commencer 
document.getElementById("commencer").style.display = "none";