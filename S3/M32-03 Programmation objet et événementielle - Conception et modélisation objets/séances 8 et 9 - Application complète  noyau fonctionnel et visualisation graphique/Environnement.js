/**
 * @param largeur
 * @param hauteur
 * @param listeEntites
 * @constructor Environnement
 */

 class Environnement {
    constructor(largeur, hauteur, listeEntites) {
        this._largeur = largeur;
        this._hauteur = hauteur;
        this._listeEntites = listeEntites;
    }

    get largeur() {
        return this._largeur;
    }
    get hauteur() {
        return this._hauteur;
    }

    get listeEntites() {
        return this._listeEntites;
    }

    ajouter(e) {
        this.listeEntites.push(e);
    }

    supprimer(e) {
        for (let i=0; i<this.listeEntites.length; i++) {
            if(e == this.listeEntites[i]) {
                this.listeEntites.splice(i, 1);
            }
        }
    }
}
