/**
 * @param centre
 * @param rayon
 * @constructor Cercle
 */

class Cercle extends Figure {
    constructor(centre, rayon) {
        super(new Array(centre)); //APPEL du constructeur de la super-classe
        this._rayon = rayon;
    }

    get rayon() {
        return this._rayon;
    }

    get centre() {
        return this.tabPoint[0];
    }

    toString() {
        console.log(`Je suis un cercle de coordonnées de centre x = ${this.centre[0].x} et y = ${this.centre[0].y} et de rayon ${this.rayon} `)
    }

    perimetre() {
        let p = 0;
        p = 2 * Math.PI * this._rayon;
        return p;

    }
}