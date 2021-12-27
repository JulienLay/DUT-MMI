// une chose
class Chose {
  constructor(texte, fait = false) {
    this._texte = texte;
    this._fait = fait;
    this._id = Date.now() + Math.floor(Math.random() * 10); // génération d'un id unique
  }

  get texte() {
    return this._texte;
  }

  get id() {
    return this._id;
  }

  get fait() {
    return this._fait;
  }

  // modifier fait / pas fait
  faire() {
    this._fait = !this._fait;
  }
  // modifier le texte
  set texte(texte) {
    this._texte = texte;
  }

  pourAfficher() {
    return `--> ${this._texte} (${this._fait ? "fait" : "à faire"})`;
  }
}

export default Chose;
