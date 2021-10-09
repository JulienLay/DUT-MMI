/** 
 * @param numIma
 * @param marque
 * @param vitCour
 * @constructor Voiture
 */

class Vehicule {
    constructor(numIma, marque) {
        this._numIma = numIma;
        this._marque = marque;
        this._vitCour = 0;
    }
    accelerer(plus) {
        this._vitCour += plus;
    }
    freiner(moins) {
        this._vitCour = (this._vitCour - moins >= 0) ? this._vitCour - moins : 0;
        console.log("ralentir de véhicule");
    }

    get numIma() {
        return this._numIma;
    }
    get marque() {
        return this._marque;
    }
    get vitCour() {
        return this._vitCour;
    }

    set numIma(value) {
        this._numIma = value;
    }
    set marque(value) {
        this._marque = value;
    }
    set vitCour(value) {
        this._vitCour = value;
    }

}



class Voiture extends Vehicule {
    constructor(numIma, marque, type) {
        // APPEL DU CONSTRUCTEUR DE LA SUPERCLASSE
        super(numIma, marque);
        // + vitesse de la superclasse pris en compte
        this._type = type;
    }

    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }

}

class Camion extends Vehicule {
    constructor(numIma, marque, poidsMax) {
        // APPEL DU CONSTRUCTEUR DE LA SUPERCLASSE
        super(numIma, marque);
        // + vitesse de la superclasse pris en compte
        this._poidsCour = 0;
        this._poidsMax = poidsMax;
    }
    charger(poids) {
        if (this.poidsCour + poids <= this.poidsMax) this.poidsCour += poids;
    }
    decharger(poids) {
        if (this.poidsCour > poids) this.poidsCour -= poids;
    }

    freiner(moins) {
        super.freiner(moins); // APPEL DE LA METHODE DE LA SUPERCLASSE
        this._vitCour -= 6; // On freine de 6 // Permet d'ajouter une fonction a une méthode déja existante + éviter de le recopier.
        console.log("ralentir de camion");
    }
    allerAFond() {
        super.accelerer(plus); // reprend l'accélération du véhicule
        this._vitCour = 100;
    }

    get poidsCour() {
        return this._poidsCour;
    }
    get poidsMax() {
        return this._poidsMax;
    }
    set poidsCour(value) {
        this._poidsCour = value;
    }
    set poidsMax(value) {
        this._poidsMax = value;
    }
}