/** 
 * @param x
 * @param y
 * @constructor Point
 */

class Point {
    constructor(x = 0, y = 0) {
        this._x = x;
        this._y = y;
    }

    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }

    distance(p) {
        return Math.sqrt((p.x - this.x) ** 2 + (p.y - this.y) ** 2);
    }

    toString() {
        console.log(`Je suis un point de coordonnées x = ${this.x()} et y = ${this.y()}`);
    }
}