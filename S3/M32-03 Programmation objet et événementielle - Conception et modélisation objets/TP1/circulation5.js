/** 
 * @param numIma
 * @param marque
 * @param vitCour
 * @constructor Voiture
 */

Vehicule = function(numIma, marque) {
    this._numIma = numIma;
    this._marque = marque;
    this._vitCour = 0;
}

Vehicule.prototype.accelerer = function(plus) {
    this._vitCour += plus;
}

Vehicule.prototype.freiner = function(moins) {
    this._vitCour = (this._vitCour - moins >= 0) ? this._vitCour - moins : 0;
    console.log("ralentir de véhicule");
}

// get numIma() {
//     return this._numIma;
// }
// get marque() {
//     return this._marque;
// }
// get vitCour() {
//     return this._vitCour;
// }

// set numIma(value) {
//     this._numIma = value;
// }
// set marque(value) {
//     this._marque = value;
// }
// set vitCour(value) {
//     this._vitCour = value;
// }

Voiture = function(numIma, marque, type){

        // APPEL DU CONSTRUCTEUR DE LA SUPERCLASSE
        Vehicule.call(numIma, marque);
        // + vitesse de la superclasse pris en compte
        this._type = type;

    // get type() {
    //     return this._type;
    // }
    // set type(value) {
    //     this._type = value;
    // }

}

Voiture.prototype = Object.create(Vehicule.prototype);
Voiture.prototype.constructor=Voiture;

// Voiture.prototype.accelerer = function(plus) {
//     Vehicule.call(accelerer(plus));
// }

// Voiture.prototype.freiner = function(moins) {
//     Vehicule.call(freiner(moins));
// }


Camion = function(numIma, marque, poidsMax) {
        // APPEL DU CONSTRUCTEUR DE LA SUPERCLASSE
        Vehicule.call(numIma, marque);
        // + vitesse de la superclasse pris en compte
        this._poidsCour = 0;
        this._poidsMax = poidsMax;

    // get poidsCour() {
    //     return this._poidsCour;
    // }
    // get poidsMax() {
    //     return this._poidsMax;
    // }
    // set poidsCour(value) {
    //     this._poidsCour = value;
    // }
    // set poidsMax(value) {
    //     this._poidsMax = value;
    // }
}

Camion.prototype = Object.create(Vehicule.prototype);
Camion.prototype.constructor=Camion;

// Camion.prototype.accelerer = function(plus) {
//     Vehicule.call(accelerer(plus));
// }

// Camion.prototype.freiner = function(moins) {
//     Vehicule.call(freiner(moins));
// }

Camion.prototype.charger = function(poids) {
    if (this.poidsCour + poids <= this.poidsMax) this.poidsCour += poids;
}
Camion.prototype.decharger = function(poids) {
    if (this.poidsCour > poids) this.poidsCour -= poids;
}

Camion.prototype.freiner = function(moins) {
    Vehicule.prototype.freiner.call(this, moins); // APPEL DE LA METHODE DE LA SUPERCLASSE
    this._vitCour -= 6; // On freine de 6 // Permet d'ajouter une fonction a une méthode déja existante + éviter de le recopier.
    console.log("ralentir de camion");
}
Camion.prototype.allerAFond = function() {
    Vehicule.prototype.accelerer.call(this, plus); // reprend l'accélération du véhicule
    this._vitCour = 100;
}