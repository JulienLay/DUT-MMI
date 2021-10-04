let tab = [1,2,3];

/**
* role de la fonction : somme des valeurs d'un tableau
* @param t tableau de nb entiers
* @return la somme
*/
function sommeT(t) {
    let somme = 0
    for (let i = 0; i<t.length;i++) {
        somme += t[i]
    }
    return somme
}

function sommeT2(t) {
    let somme = 0
    for (let val of t) {
        somme += val
    }
    return somme
}

/**
* role de la fonction : moyennes des valeurs d'un tableau
* @param t tableau de nb entiers
* @return la moyenne
*/
function moyenneT(t) {
    return sommeT(t)/t.length
}

function moyenneT2(t) {
    let somme = 0
    for (let val of t) {
        somme += val
    }
    return somme/t.length
}

/**
* role de la fonction : trouver le minimum des valeurs d'un tableau
* @param t tableau de nb entiers
* @return le minimum
*/
function minimumT(t) {
    let minimum = t[0];
    for (let i = 1; i<t.length;i++) {
        if (t[i]<minimum) {
            minimum = t[i];
        }
    }
    return minimum
}

function minimumT2(t) {
    let minimum = t[0];
    for (let val of t) {
        if (val<minimum) {
            minimum = val;
        }
    }
    return minimum
}

console.log(sommeT(tab));
console.log(moyenneT(tab));
console.log(minimumT(tab));

console.log(sommeT2(tab));
console.log(moyenneT2(tab));
console.log(minimumT2(tab));