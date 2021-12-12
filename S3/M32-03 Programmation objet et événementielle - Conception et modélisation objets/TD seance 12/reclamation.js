/**
 * @param texte
 * @param nbPhrase
 * @constructor Reclamation
 */

class Reclamation {

    constructor(texte, nbPhrase) {
        if ((/tamere/).test(texte.toLowerCase())) {
            throw new Error("ATTENTION");
        }
        this._texte = texte;
        this._nbPhrase = nbPhrase || 0;
    }

    get texte() {
        return this._texte;
    }

    get nbPhrase() {
        return this._nbPhrase;
    }

    nombreDePhrase() {
        const reg = /\./g;
        let res = reg.exec(this._texte);
        while (res !== null) {
            this._nbPhrase++;
            res = reg.exec(this._texte);
        }
        return this._nbPhrase
    }

    retournePhraseNumero(num) {
        const reg = /\./g;
        let res = reg.exec(this._texte);
        let tabIndice = [0];
        while (res !== null) {
            this._nbPhrase++;
            tabIndice.push(reg.lastIndex - 1);
            res = reg.exec(this._texte);
        }

        if (num == 1) {
            return this._texte.substring(0, tabIndice[1] + 1);
        }

        return this._texte.substring(tabIndice[num - 1] + 1, tabIndice[num] + 1);
    }
}