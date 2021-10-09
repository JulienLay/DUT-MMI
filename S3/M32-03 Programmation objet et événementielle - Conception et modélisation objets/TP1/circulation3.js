/** 
 * @param numIma
 * @param marque
 * @param vitCour
 * @constructor Voiture
 */

 class Voiture {
    constructor(numIma, marque, type) {
        this._numIma = numIma;
        this._marque = marque;
        this._type = type;
        this._vitCour = 0;
    }

    accelerer(plus) {
        this._vitCour += plus;
    }

    freiner(moins) {
        this._vitCour = (this._vitCour - moins >= 0) ? this._vitCour - moins : 0;
        console.log("ralentir de Voiture");
    }

    get numIma() {
        return this._numIma;
    }
    get marque() {
        return this._marque;
    }
    get type() {
        return this._type;
    }
    get vitCour() {
        return this._vitCour;
    }

    set numIma(value) {
        this._numIma = value;
    }
    set marque(value) {
        this._marque = value;
    }
    set type(value) {
        this._type = value;
    }
    set vitCour(value) {
        this._vitCour = value;
    }
}


class Camion extends Voiture {
    constructor(numIma, marque, poidsMax) {
        //APPEL de la super-classe Voiture
        super(numIma, marque, vitCour)
        this._poidsCour = 0;
        this._poidsMax = poidsMax;
    }

    freiner(moins) {
        super.freiner(moins)
        this._vitCour -= 6;
        console.log("ralentir de Camion");
    }

    charger(poids) {
        if (this.poidsCour + poids <= this.poidsMax) this.poidsCour += poids;
    }

    decharger(poids) {
        if (this.poidsCour > poids) this.poidsCour -= poids;
    }

    get poidsCour() {
        return this._poidsCour;
    }
    get poidsMax() {
        return this._poidsMax;
    }

    set poidsCour(value) {
        this._poidsCour = value;
    }
    set poidsMax(value) {
        this._poidsMax = value;
    }
}


class Route {
    constructor(vMax, nbMax) {
        this._vMax = vMax;
        this._lv = [];
        this._nb = 0;
        this._nbMax = nbMax;
    }

    ajouter(y) {
        if (y != null && this.nb < this.nbMax) this.lv[this.nb++] = y;
    }

    controlerRadar() {
        let voit = [];
        for (let i = 0; i < this.nb; i++) {
            if (this.lv[i].vitCour > this.vMax) {
                voit.push(this.lv[i]);
            }
        }
        return voit;
    }

    get vMax() {
        return this._vMax;
    }
    get lv() {
        return this._lv;
    }
    get nb() {
        return this._nb;
    }
    get nbMax() {
        return this._nbMax;
    }

    set vMax(value) {
        this._vMax = value;
    }
    set lv(value) {
        this._lv = value;
    }
    set nb(value) {
        this._nb = value;
    }
    set nbMax(value) {
        this._nbMax = value;
    }
}