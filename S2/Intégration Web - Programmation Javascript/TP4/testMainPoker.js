/************* méthodes pour tester une main au poker *********************/

// role : verifier si la main comporte quatre cartes de la meme couleur
// parametre : -
// retour : true ou false
function mainIsCouleur() {

	// ATTENTION : Implementer cette fonction avec votre propre algorithme
	return true;
}

// role : vérifier si les cartes forment une quinte de même couleur
// parametre : -
// retour : true si les cartes sont ordonnées
function mainIsQuinteFlush() {
	return mainIsCouleur() && mainIsQuinte();
}

// role : indiquer s'il y a 4 cartes identiques
// parametres : -
// retour : true s'il y a un carré false sinon
function mainIsCarre() {
	return mainIsQuoi(4);
}

// role : indiquer s'il y a un brelan et une paire
// parametres : -
// retour : true s'il y a 1 brelan + 1 paire false sinon
function mainIsFull() {
	return mainIsPaire() && mainIsBrelan();
}

// role : vérifier si les cartes forment une suite ordonnée
// parametre : -
// retour : true si les cartes sont ordonnées
function mainIsQuinte() {
	let tNb = [];
	let tabCartes = document.getElementById("cartes").childNodes;
	let lg = tabCartes.length;
	let i;
	let ordonne;

	for (i = 0; i < lg; i = i + 1) tNb[i] = tabCartes[i].id.substring(0, 2);
	tNb.sort();
	depart = tNb[0];
	i = 1;
	ordonne = true;
	while (i < lg && ordonne)
		if (Number(depart) + 1 == Number(tNb[i])) { depart = tNb[i]; i = i + 1; }
		else { ordonne = false; }
	return ordonne;
}

// role : indiquer s'il y a 3 cartes identiques
// parametres : -
// retour : true s'il y a un brelan false sinon
function mainIsBrelan() {
	return mainIsQuoi(3);
}

// role : indiquer s'il y a 2 paires de cartes
// parametres : -
// retour : true s'il y a 2 paires false sinon
// Attention : les paires doivent être différentes
function mainIsDoublePaire() {
	let t = compterCartes();
	let test = false;
	let nbPaire = 0;
	for (let i = 0; i < t.length; i++)
		if (t[i] == 2) { nbPaire = nbPaire + 1; }

	return nbPaire >= 2;
}

// role : indiquer s'il y a 2 cartes identiques
// parametres : -
// retour : true s'il y a une paire false sinon
function mainIsPaire() {
	return mainIsQuoi(2);
}

// role : compter le nombre de cartes par numéros (nombre d'as, nombre de 1, ...)
// parametre : -
// retour : un tableau indiquant le nombre de cartes par numéros
function compterCartes() {
	let tNb = [];
	let tabCartes = document.getElementById("cartes").childNodes;
	let lg = tabCartes.length;
	let i, j;
	for (j = 0; j < 13; j = j + 1) tNb[j] = 0;
	for (i = 0; i < lg; i = i + 1)
		for (j = 0; j < 13; j = j + 1) if (tabCartes[i].id.substring(0, 2) == j + 1) tNb[j] = tNb[j] + 1;
	return tNb;
}

// role : indiquer s'il y a nb cartes identiques
// parametres : nb, le nombre de cartes identiques que l'on recherche (number)
// retour : true s'il y a nb cartes identiques 
function mainIsQuoi(nb) {
	let t = compterCartes();
	let test = false;
	let i = 0;
	while (i < t.length && !test)
		if (t[i] == nb) test = true;
		else i = i + 1;
	return test;
}


