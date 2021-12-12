/**
 * @param n
 * @constructor Case
 */

class Case {
    constructor(n) {
        if ((10 < n && n < 100)) {
            this._numLigne = n;
            this._numColonne = n;
        }
    }

    get numLigne() {
        return this._numLigne;
    }

    set numLigne(value) {
        this._numLigne = value;
    }

    get numColonne() {
        return this._numColonne;
    }

    set numColonne(value) {
        this._numColonne = value;
    }
}