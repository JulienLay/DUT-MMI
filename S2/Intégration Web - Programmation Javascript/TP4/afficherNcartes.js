
    // ----------------------------------  fonctions pour  l'affichage des cartes
    
    // role : afficher plusieurs cartes choisies au hasard et sans doublon
    // parametre : n, le nombre de cartes a afficher (number)
    //             tabCartes, le tableau contenant les noms de cartes (objet array)
    // retour : -
    function afficherNCartes(n, tabCartes) {
        for (let i = 0; i < n; i = i + 1)
            afficherCarte(tabCartes);
    }


    // role : afficher une carte non encore affichee
    // parametre : tabCartes, le tableau contenant les noms de cartes (objet array)
    // retour : -
    function afficherCarte(tabCartes) {
		let nom=carteHasard(tabCartes);
        if (!verifierCarteDejaChoisie(nom))  ajouterCarte(nom);
        else afficherCarte(tabCartes);
    }

    // role : ajouter dans le document un élément img  - dans la div d'id "cartes"
    // parametre : nom, le nom de la carte (string de la forme couleur_num)
    // retour : -
    function ajouterCarte(nom) {
        let carte = document.createElement("img");
        carte.id = nom;
        carte.src = "cartes/" + nom + ".gif";
        document.getElementById("cartes").appendChild(carte);
    }

    // role : choisir un nom de carte au hasard
    // parametre : tabCartes, le tableau contenant les noms de cartes (objet array)
    // retour : un nom de carte (string)
    function carteHasard(tabCartes) {
        let indice = Math.round(Math.random() * (tabCartes.length - 1));
        return tabCartes[indice];
    }

    // role : verifier si une carte est deja affichee
    // parametre: nom, le nom de la carte (string)
    // retour : true si la carte est deja affichee (false sinon)
    function verifierCarteDejaChoisie(nom) {
        return document.getElementById(nom) != null;
    }



