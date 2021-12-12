/**
 * @param roues
 * @param position
 * @param listeCasesParcourues
 * @constructor DroneTerrestre
 */

class DroneTerrestre extends Drone {
    constructor(roues, position, listeCasesParcourues) {
        super(position, listeCasesParcourues);
        this._roues = roues;
    }

    get roues() {
        return this._roues;
    }

    set roues(value) {
        this._roues = value;
    }

    bouger() {
        // this._position[0] += 1;
        // this._position[1] += 1;
        // this._position[0] -= 1;
        // this._position[1] -= 1;
        // et diagonale
        this.listeCasesParcourues.push((this._position[0], this._position[1]));
    }
}