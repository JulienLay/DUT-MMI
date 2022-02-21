/**
 * Indique si la première valeur est plus petite que la seconde
 * @param {*} v1 
 * @param {*} v2 
 * @returns '-' si v1 est plus petit, '+' si plus grand et '=' si identique
 */
function estPlusPetit(v1, v2)
{
    let rep;
    if(v1<v2) rep='-';
    else if(v1>v2) rep='+';
    else rep='=';
    return rep;
}


/**
 * Indique qui gagne entre joueur 1 (p1 = proposition 1) et joueur 2 (p2 = proposition 2)
 * @param {*} p1 
 * @param {*} p2 
 * @returns 1 si 1er joueur qui gagne, 2 si 2nd joueur qui gagne et 0 si égalité
 */
function winner(p1, p2) {
    if (p1 == "pierre"){
        if (p2 == "pierre") {
            return 0
        } else if (p2 == "feuille") {
            return 2
        } else if (p2 == "ciseaux") {
            return 1
        }
    } else if (p1 == "feuille") {
        if (p2 == "pierre") {
            return 1
        } else if (p2 == "feuille") {
            return 0
        } else if (p2 == "ciseaux") {
            return 2
        }
    } else if (p1 == "ciseaux") {
        if (p2 == "pierre") {
            return 2
        } else if (p2 == "feuille") {
            return 1
        } else if (p2 == "ciseaux") {
            return 0
        }
    }
}

module.exports.estPlusPetit = estPlusPetit;
module.exports.winner = winner;