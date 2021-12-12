/**
 * @param representation
 * @param taille
 * @constructor Personnage
 */

class Personnage extends Entite {
    constructor(id, x, y, largeur, hauteur, direction, pas, representation, taille) {
        super(x, y, largeur, hauteur, direction, pas);
        this._representation = representation;
        this._taille = taille;
        this.setRepresentation(id, "red");                                         
    }

    get representation() {
        return this._representation;
    }

    get taille() {
        return this._taille;
    }

    setRepresentation(id, couleur, position) {
        let elt = window.document.createElement("p");
        elt.id = id;
        elt.style.left = this.x + "px";
        elt.style.top = this.y + "px";
        elt.style.width = this.hauteur+ "px";
        elt.style.height = this.largeur + "px";
        elt.style.webkitMarginAfter = "0em";
        elt.style.webkitMarginBefore = "0em";
        elt.style.backgroundColor = couleur || "red";
        elt.style.position = position|| "absolute";
        elt.className = "personnage";
        
        this._representation = elt;
    }

    refreshRepresentation(){
        this._representation.style.left = this._x + "px";
        this._representation.style.top = this._y + "px";
        console.log("oui");
    }

    ajouterRepresentation(conteneur){
       conteneur.appendChild(this._representation); 
    }

    promener() {
        let that = this;
        setInterval(() => {
            that.avancer();
            that.refreshRepresentation();
        }, 1000);
    }
}