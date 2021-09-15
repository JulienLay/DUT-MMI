/*

Inventaire :

- voiture
    - numéro d'immatriculation
    - marque
    - vitesse courante (km/h)

    methodes :
        - accélerer
        - freiner


- camion
    - numéro d'immatriculation
    - marque
    - vitesse courante (km/h)
    - poids de chargement courant
    - poids de chargement max
    
    methodes :
        - accélerer
        - freiner 
        - charger
        - décharger

- route
    - nombre maximal de voiture/camions
    - vitesse de circulation à ne pas dépasser
    - tableau de voiture
    - tableau de camion

    méthodes :
        - contrôler vitesse
        - verbaliser



*/


/** 
 * @param numIma
 * @param marque
 * @param vitCour
 * @constructor Voiture
 */

function Voiture(numIma, marque, type) {
    this.numIma = numIma;
    this.marque = marque;
    this.type = type;
    this.vitCour = 0;
}

/**
 * accelerer
 * @param plus valeur d'acceleration
 */
Voiture.prototype.accelerer = function(plus) {
    this.vitCour += plus;
};

/**
 * freiner
 * @param moins valeur de deceleration 
 */
Voiture.prototype.freiner = function(moins) {
    this.vitCour = (this.vitCour - moins >= 0) ? this.vitCour - moins : 0;
};







/** 
 * @param numIma
 * @param marque
 * @param vitCour
 * @param poidsCour
 * @param poidsMax
 * @constructor Camion
 */

function Camion(numIma, marque, poidsMax) {
    this.numIma = numIma;
    this.marque = marque;
    this.vitCour = 0;
    this.poidsCour = 0;
    this.poidsMax = poidsMax;
}

/**
 * accelerer
 * @param plus valeur d'acceleration
 */
Camion.prototype.accelerer = function(plus) {
    this.vitCour += plus;
};

/**
 * freiner
 * @param moins valeur de deceleration 
 */
Camion.prototype.freiner = function(moins) {
    this.vitCour = (this.vitCour - moins >= 0) ? this.vitCour - moins : 0;
};

/**
 * charger
 * @param poids poids à ajouter
 */
Camion.prototype.charger = function(poids) {
    if (this.poidsCour + poids <= this.poidsMax) this.poidsCour += poids;
};

/**
 * decharger
 * @param poids poids à enlever
 */
Camion.prototype.decharger = function(poids) {
    if (this.poidsCour > poids) this.poidsCour -= poids;
};





/** 
 * @param nbMax
 * @param vMax
 * @constructor Route
 */

function Route(vMax, nbMax) {
    this.vMax = vMax;
    this.lv = [];
    this.nb = 0;
    this.nbMax = nbMax;
}

/**
 * ajouter
 * @param y
 */
Route.prototype.ajouter = function(y) {
    if (y != null && this.nb < this.nbMax) this.lv[this.nb++] = y;
};

/**
 * controlerRadar
 * @param
 */
Route.prototype.controlerRadar = function() {
    let voit = [];
    for (let i = 0; i < this.nb; i++) {
        if (this.lv[i].vitCour > this.vMax) {
            voit.push(this.lv[i]);
        }
    }
    return voit;
};