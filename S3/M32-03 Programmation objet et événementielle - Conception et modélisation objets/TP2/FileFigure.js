/**
 * @param 
 * @constructor FileFigure
 */

class FileFigure {
    constructor(file) {
        this._file = file;
    }

    get file() {
        return this._file;
    }

    ajouter(f) {
        this.file.push(f);
    }

    sortirCercle() {
        for (let i = 0; i < maFile.file.length; i++) {
            if (maFile.file[i] instanceof Cercle) {
                maFile.file.pop(i, 1, maFile.file[i]);
            }
        }
    }

    composition() {
        for (let i = 0; i < maFile.file.length; i++) {
            console.log(i);
            console.log(maFile.file[i].toString());
        }
    }
}