// exo 1

/** 
 * 
 * @constructor LeCompteEstBon
 */
function LeCompteEstBon(leNombre) {
    this.nombre = new Array(7);    
    for(let i=0; i<this.nombre.length;i++){
        this.nombre[i] = Math.round(Math.random()*100);
    }
    this.leNombre = leNombre;
}

/**
 * 
 * @returns
 */
LeCompteEstBon.prototype.additionner = function() {
        let somme = 0;
        for(let i=0; i<this.longeur;i++) {
            somme += this.leNombre[i];
        }
        return somme == this.leNombre;
}