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
    this.vitCour+=plus;
};

/**
 * freiner
 * @param moins valeur de deceleration 
 */
Voiture.prototype.freiner = function(moins) {
    this.vitesse=(this.vitesse-moins>=0)?this.vitesse-moins:0;
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
Camion.prototype.accelerer = function() {
    this.vitCour+=plus;
};

/**
 * freiner
 * @param moins valeur de deceleration 
 */
Camion.prototype.freiner = function() {
    this.vitesse=(this.vitesse-moins>=0)?this.vitesse-moins:0;
};

/**
 * charger
 * @param
 */
Camion.prototype.charger = function() {
    if (this.charge+poids<=this.poidsMax) this.charge = this.charge + poids;
};

/**
 * decharger
 * @param
 */
Camion.prototype.decharger = function() {
    
};





/** 
 * @param nbMax
 * @param vitesse
 * @param tabVoitures
 * @param tabCamions
 * @constructor Route
 */

 function Route(nbMax, vitesse, tabVoitures, tabCamions) {
    this.nbMax = nbMax;
    this.vitesse = vitesse;
    this.tabVoitures = tabVoitures;
    this.tabCamions = tabCamions;
}

/**
 * controler
 * @param
 */
Route.prototype.controler() = function (){

};

/**
 * verbaliser
 * @param
 */
Route.prototype.verbaliser() = function (){
    
};