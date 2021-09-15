/**
 *
 * @param isbn
 * @param editeur
 * @param tabPages
 * @constructor
 */
 function Livre(isbn, editeur, tabPages) {
    this.isbn = isbn;
    this.editeur = editeur;
    this.tabPages = tabPages;
    this.page=-1; // livre fermé
}

/**
*
*/
Livre.prototype.ouvrir=function() {
    this.page=0;
}

/**
*
*/
Livre.prototype.lire=function() {
    if (this.page < this.tabPages.length-1) this.page++;
}

/**
*
* @param elt
*/
Livre.prototype.afficher=function(elt) {
    elt.textContent="page n°" + this.page+" : ";
    this.tabPages[this.page].tabMots.forEach(mot => elt.textContent+=mot.valeur+" ");
}