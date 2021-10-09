/**
 * @param nom
 * @param dx
 * @param dy
 * @constructor Direction
 */


class Direction {
    constructor(nom, dx, dy) {
        this._nom = nom;
        this._dx = dx;
        this._dy = dy;
    }

    // ou Direction.direction = [...];
    static direction = [
        new Direction("Nord", 0, 1),
        new Direction("NE", 1, 1),
        new Direction("Est", 1, 0),
        new Direction("SE", 1, -1),
        new Direction("Sud", 0, -1),
        new Direction("SO", -1, -1),
        new Direction("Ouest", -1, 0),
        new Direction("NO", -1, 1),
    ];
}