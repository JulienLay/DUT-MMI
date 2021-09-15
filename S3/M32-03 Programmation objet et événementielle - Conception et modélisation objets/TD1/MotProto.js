/**
 *
 * @param valeur
 * @param type
 * @constructor
 */
function Mot(valeur, type) {
        this.valeur=valeur;
        this.longueur=this.valeur.length;
        this.type=type;
    }

/**
 *
 */
Mot.prototype.minuscule=function() {
        this.valeur=this.valeur.toLowerCase();
    }

/**
 *
 */
Mot.prototype.majEnDebut=function() { {
        this.valeur=this.valeur.charAt(0).toUpperCase()+this.valeur.substring(1);
    }
}
