/**
 * @param nom
 * @param habitants
 * @constructor Ville
 */

function Ville(nom, habitants) {
    this._nom = nom;
    this._habitants = habitants;
}

/**
 * @param nom
 * @param habitants
 * @param pays
 * @constructor Capitale
 */

function Capitale(nom, habitants, pays) {
    this._pays = pays;
    Ville.call(this, nom, habitants);
}

Capitale.prototype = Object.create(Ville.prototype);
Capitale.prototype.constructor = Capitale;





/**
 * @param nom
 * @param habitants
 * @constructor Ville
 */

class Ville {
    constructor(nom, habitants) {
        this._nom = nom;
        this._habitants = habitants;
    }
}

/**
 * @param nom
 * @param habitants
 * @param pays
 * @constructor Capitale
 */

class Capitale extends Ville {
    constructor(nom, habitants, pays) {
        super(nom, habitants);
        this._pays = pays;
    }
}