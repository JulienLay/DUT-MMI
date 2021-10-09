/**
 * @param n
 * @param s
 * @constructor Neurone
 */

class Neurone {
    constructor(n, s) {
        this._weights = Array();
        for (let i = 0; i < n; i++) {
            this._weights.push(Math.random());
        }
        this._s = s;
    }

    get s() {
        return this._s;
    }

    toString() {
        if (this._weights.length == 0) {
            return `aucun neurone`;
        } else if (this._weights.length >= 1) {
            let tr = `neurone de poids ${this._weights[0]}`;
            for (let j = 1; j < this._weights.length; j++) {
                tr += ` et ${this._weights[j]}`;
            }
            return tr;
        }
    }

    somme(inputs) {
        let somme = 0;
        if (inputs.length == this._weights.length) {
            for (let i = 0; i < inputs.length; i++) {
                somme += inputs[i] * this._weights[i];
            }
        }
        return somme;
    }

    activation(x) {
        return (x > 0.5 ? 1 : 0);
    }
}