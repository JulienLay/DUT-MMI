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

//exo 2

/** 
 * 
 * @constructor Mot
 */
 function Mot(valeur, type) {
    this.valeur=valeur;
    this.longueur= valeur.length;
    this.type=type;
}
    
/**
 * 
 * @returns
 */
Mot.prototype.convertirMin = function() {
    return this.valeur.toLowerCase();
    
}

Mot.prototype.convertirMajPremier = function() { 
    return this.valeur[0].toUpperCase() + this.valeur.substring(1, this.valeur.length);
}

/** 
 * 
 * @constructor Page
 */
 function Page(num, tabNum) {
    this.num=num;
    this.tabNum=tabNum;
}

/** 
 * 
 * @constructor Livre
 */
 function Livre(isbn, editeur, tabPages) {
    
}