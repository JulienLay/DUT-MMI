class Reseau {
    constructor() {
        this.couche1 = new Couche(2);
        this.couche2 = new Couche(1);
    }

    calculerSortie(inputs) {
        if (inputs.length !=4) throw new Error("pb de nombre d'inputs")
        let n1=this.couche1.get(0);
        let e1=n1.activation(n1.somme(inputs))

        let n2=this.couche1.get(1);
        let e2 = n2.activation(n2.somme(inputs))
        
        let s = this.couche2.get(0).calculerSortie([e1, e2]);
        return s
    }
}