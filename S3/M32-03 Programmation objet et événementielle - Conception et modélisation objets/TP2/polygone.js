/**
 * @param tabPoint
 * @constructor Polygone
 */

class Polygone extends Figure {
    constructor(tabPoint) {
        super(tabPoint); //APPEL du constructeur de la super-classe
    }

    nombreDeCotes() {
        return this.tabPoint.length;
    }

    perimetre() {
        let p = 0;
        for (let i = 0; i < this._tabPoint.length - 1; i++) {
            p += this._tabPoint[i].distance(this._tabPoint[i + 1]);
        }
        p += this._tabPoint[this._tabPoint.length - 1].distance(this._tabPoint[0]);
        return p;
    }

    toString() {
        console.log(`Je suis un polygone à ${this.nombreDeCotes()} côtés`)
    }
}