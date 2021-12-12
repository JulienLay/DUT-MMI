/**
 * @param largeur
 * @param hauteur
 * @param tabDrones
 * @constructor Colonie
 */

class Colonie {
    constructor(largeur, hauteur, tabDrones) {
        this._largeur = largeur;
        this._hauteur = hauteur;
        this._tabDrones = new Map();
        for(let i=0; i<tabDrones.length; i++) {
            this.tabDrones.set(tabDrones[i]._nom, tabDrones[i]);
        }
    }

    get largeur() {
        return this._largeur;
    }

    get hauteur() {
        return this._hauteur;
    }

    get tabDrones() {
        return this._tabDrones;
    }

    set largeur(value) {
        this._largeur = value;
    }

    set hauteur(value) {
        this._hauteur = value;
    }

    set tabDrones(value) {
        this._tabDrones = value;
    }

    supprimerDrone(nom) {
        if(this.tabDrones.find(element => element == nom)) {
            this.tabDrones.pop(element);
        }
    }

    ajouterDrone(d) {
        // est equivalent à :
        if (d instanceof Drone) {
            // if (this._tabDrones.find(e2 => e2._nom == d._nom) == undefined) {
            //     this._tabDrones.push(d);
            // }
            this._tabDrones.set(d._nom, d);
        }
    }

    listeNom() {
        let noms=[];
        for(const value of this._tabDrones.key()) {
            noms.push(value);
        }
        nom.sort(function(a,b) {
            return (a<b) ? -1:1;
        });
        return nom.join(" ");
    }

    getDeplacements(nom) {
        let rep;
        rep = this._tabDrones.get(nom)._dep;
        // for (let i=0; i<this.tabDrones.length; i++) {
        //     if (this.tabDrones[i].nom == nom) {
        //        rep = this_tabDrones[i].dep;
        //     }
        // }
        return rep;
    }

    getOccupation() {
        
    }
}