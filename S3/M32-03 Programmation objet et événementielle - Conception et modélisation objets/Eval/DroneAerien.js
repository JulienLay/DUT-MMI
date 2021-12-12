/**
 * @param hauteur
 * @constructor DroneAerien
 */

class DroneAerien extends Drone {
    constructor(position, listeCasesParcourues) {
        super(position, listeCasesParcourues);
        this._hauteur = 2.5;
    } 

    get hauteur() {
        return this._hauteur;
    }

    set hauteur(value) {
        this._hauteur = value;
    }

    bouger() {
        // this._position[0] += 2;
        // this._position[1] += 2;
        // this._position[0] -= 2;
        // this._position[1] -= 2;
        this.listeCasesParcourues.push((this._position[0], this._position[1]));
    }
}