/**
 * @param nom
 * @param prenom
 * @param age
 * @param mail
 * @param mdp
 * @constructor Etudiant
 */

class Etudiant {

    static generateur = 1;
    constructor(nom, prenom, age, mail,mdp) {
        this._identifiant = Etudiant.generateur++;
        this._nom = nom;
        this._prenom = prenom;
        this._age = age;
        this._mail = mail;
        this._mdp = mdp;
    }

    get identifiant() {
        return this._identifiant;
    }

    get nom() {
        return this._nom;
    }

    get prenom() {
        return this._prenom;
    }

    get age() {
        return this._age;
    }

    get mail() {
        return this._mail;
    }

    get mdp() {
        return this._mdp;
    }
}