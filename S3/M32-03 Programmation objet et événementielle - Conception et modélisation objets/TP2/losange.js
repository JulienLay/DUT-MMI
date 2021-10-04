/**
 * @param tPt
 * @constructor Losange
 */

class Losange extends Polygone {
    constructor(tabPoint) {
        super(tabPoint); //APPEL du constructeur de la super-classe
    }

    toString() {
        return `${super.toString()} - je suis aussi un losange`;
        // console.log(`Je suis un polygone à ${this.nombreDeCotes()} côtés - je suis un parallélogramme - je suis un losange`)
    }
}