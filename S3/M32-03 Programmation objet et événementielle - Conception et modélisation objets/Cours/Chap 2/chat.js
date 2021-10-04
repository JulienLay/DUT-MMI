class Chat {
    constructor(nom, poids) {
        this._nom=nom;
        this._poids=poids;
        this._cri;
    }

    crier() {
        return this._cri;
    }

    nommer() {
        return this._nom;
    }

    get cri() {
        return this._cri;
    }
    
    set cri(value) {
        this._cri = "miaouuu";
    }

    get nom() {
        return this._nom;
    }

}