class Neurone {

    constructor(n) {
        this._weights = [];
        for (let i = 0; i < n; i++)
            this._weights.push(Math.random());
    }

    get s() {
        return this._s;
    }

    toString() {
        return "neurone de poids " + this._weights.join("et");
    }

    activation(x) {
        this._s = x > 0.5 ? 1 : 0;
        return this.s; // ou this._ss
    }

    somme(inputs) {
        let sum = 0;
        for (let i = 0; i < this._weights.length; i++) sum += inputs[i] * this._weights[i];
        return sum;
    }

    calculerSortie(inputs) {
        return this.activation(this.somme(inputs));
    }

}