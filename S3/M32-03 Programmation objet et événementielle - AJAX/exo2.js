let liste1 = ['Suisse', 'Italie', 'Espagne', 'Portugal'];
let liste2 = ['Suède', 'Danemark', 'Pays-Bas' ,'Belgique'];
let tPays = [] ;

// important à retenir pour le cours : sort, reduce, filter, map -> voir def dans le cours

tPays = liste1;
tPays.push("Grèce");
tPays.pop();
tPays.unshift("Grèce", "France");
tPays = tPays.concat(liste2);
tPays.sort();
tPays.sort((v1,v2) => v1 < v2 ? 1 : -1);
tPays.sort((v1,v2) => v1.length > v2.length ? 1 : -1);
let nouvTab = tPays.map((v) => v.length);
let uniquementLettre = tPays.filter( (v) => v[0] == "P" || v[0] == "F");
let somme = tPays.reduce( (res, v) => res + v.length, 0); 
tPays = tPays.map((v) => v.toUpperCase());
let message = `Le tableau tPays : ${ tPays }. Son nombre d'éléments : ${ tPays.length }. nouvTab : ${ nouvTab }. uniquementLettre : ${ uniquementLettre }. Somme :  ${ somme }`;
console.log(message);
tPays.indexOf("France") == -1 ? console.log("pas trouvé") : console.log("trouvé");
tPays.indexOf("Espagne") == -1 ? console.log("pas trouvé") : console.log("trouvé");

let liste3 = liste1;
let liste4 = [...liste1];
liste1.push("Grèce");
console.log(`liste 1 : ${ liste1 } et nb elts : ${ liste1.length }, liste 3 : ${ liste3 } et nb elts : ${ liste3.length }, liste 4 : ${ liste4 } et nb elts : ${ liste4.length }`);
// liste1 et liste3 sont 2 noms pour le même tâbleaux, si on modifie liste1 ou liste3, on modifie le même tableau
// liste4 reste inchangé