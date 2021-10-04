/** 
 * @param tabPoint
 * @constructor Figure
 */

class Figure {
    constructor(tabPoint) {
        if (tabPoint != undefined) {
            this._tabPoint = tabPoint;
        } else {
            this._tabPoint = [];
        } 
    }

    get tabPoint() {
        return this._tabPoint;
    }

    ajouterPoint(p) {
        if (p instanceof Point) {
            this._tabPoint.push(p);
        }
    }

    dimension() {
        return 2;
    }
    
    toString() {
        console.log(`Je suis une figure contenant les points ${this.tabPoint()}`);
    }
}