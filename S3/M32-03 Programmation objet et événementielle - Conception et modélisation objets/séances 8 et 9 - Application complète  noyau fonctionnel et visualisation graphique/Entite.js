/**
 * @param x
 * @param y
 * @param largeur
 * @param hauteur
 * @constructor Entite
 */

class Entite {
    constructor(x, y, largeur, hauteur, direction, pas, dimTerrain) {
        this._x = x;
        this._y = y;
        this._largeur = largeur;
        this._hauteur = hauteur;
        this._direction = direction;
        this._pas = pas;
        this._dimTerrain = dimTerrain;
    }

    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    get largeur() {
        return this._largeur;
    }
    get hauteur() {
        return this._hauteur;
    }
    get direction() {
        return this._direction;
    }
    get pas() {
        return this._pas;
    }
    get dimTerrain() {
        return this._dimTerrain;
    }

    toucher(e) {
        return (e.x <= this.x && this.x <= e.x+e.largeur) && (e.y <= this.y && this.y <= e.y+e.hauteur);
    }

    toString() {
        return `entite(${this.x},${this.y})`;
    }

    avancer() {
        
    }
}