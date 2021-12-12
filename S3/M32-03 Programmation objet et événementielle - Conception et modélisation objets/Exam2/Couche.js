class Couche{
    constructor(n){
        this._neurones=[];
        if (n && n>0)
            for (let i=0; i<n; i++) this._neurones.push(new Neurone(2));
    }

    get(i) { return this._neurones[i];
    }
}