/**
 * @param adresse
 * @param nom
 * @constructor Drone
 */


class Drone {
    constructor(adresse, nom) {

        let random1 = Math.floor(Math.random() * 10);
        let random2 = Math.floor(Math.random() * 10);
        let positionInitiale = (random1,random2);
        this._position = positionInitiale;
        this._listeCasesParcourues = [positionInitiale];

        if (0 <= adresse && adresse <= 10000) {
            this._adresse = adresse;
        }

        this._nom = nom;
    }

    get position() {
        return this._position;
    }

    get adresse() {
        return this._adresse;
    }

    get nom() {
        return this._nom;
    }

    set position(value) {
        this._position = value;
    }

    set adresse(value) {
        this._adresse = value;
    }

    set nom(value) {
        this._nom = value;
    }

    bouger(cellule) {
        
    }
}