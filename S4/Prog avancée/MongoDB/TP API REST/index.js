//application express
const express = require("express");
const app = express();
app.use(express.json());

//lancer le serveur pour qu'il écoute sur le port 5000
let port = 5000;
app.listen(port);
console.log("le serveur REST est lancé sur le port " + port);

// la liste des livres
let biblio = [
    {
        numero: 10,
        titre : "le rouge et le noir",
        pages : [ "La petite ville de Verrières peut passer pour l’une des plus jolies", "Ses maisons blanches s’étendent sur la pente d’une colline"]
    },
    {
        numero : 11,
        titre : "candide ou l'optimisme",
        pages : [ "Comment Candide fut élevé dans un château, et comment il fut chassé d’icelui.", "Ce que devint Candide parmi les Bulgares"]
    }
];

app.get("/", (req, res) => {
    res.json("API de gestion des livres");
})

app.get("/livres", (req, res) => {
    if (req.query.titre == null || req.query.titre == "") {
        res.json(biblio);
    } else {
        const result = biblio.filter(livre => livre.titre.includes(req.query.titre));
        if (result.length == 0) {
            res.json(`le titre du livre que vous avez entré n'existe pas`)
        } else {
            filtre = { titre : new RegExp(req.query.titre) }
            const tr = biblio.filter((livre) => livre.titre.match(filtre.titre));
            res.json(tr);
        }
    }
    
})

app.get("/livres/:idlivre", (req, res) => {

    if(req.params.idlivre) {
        
        let resultat = biblio.filter( (objet) => objet.numero == req.params.idlivre);

        if (resultat.length == 0) {
            res.json(`le livre numéro ${req.params.idlivre} n'existe pas`);
        } else {
            res.json(resultat);
        }
    } else {
        res.json(`le livre numéro ${req.params.idlivre}`);
    }
})

app.get("/livres/:idlivre/pages", (req, res) => {

    if(req.params.idlivre) {
        
        let resultat = biblio.filter( (objet) => objet.numero == req.params.idlivre);

        if (resultat.length == 0) {
            res.json(`le livre numéro ${req.params.idlivre} n'existe pas`);
        } else {
            res.json(resultat[0].pages);
        }
    } else {
        res.json(`liste des pages du livre ${req.params.idlivre}`);
    }
})

app.get("/livres/:idlivre/pages/:idpage", (req, res) => {
    let resultat = biblio.filter( (objet) => objet.numero == req.params.idlivre);

    if (req.params.idpage > resultat[0].pages.length || req.params.idpage <= 0) {
        res.json(`la page ${req.params.idpage} du livre numéro ${req.params.idlivre} n'existe pas`);
    } else {
        res.json(resultat[0].pages[req.params.idpage-1]);
    }
})

app.post("/livres", (req, res) => {
    let tab = biblio.filter( (livre) => livre.numero == req.body.numero);

    if (tab.length == 0) {
        biblio.push(req.body);
        res.json(`Ajout d'un nouveau livre de titre : ${req.body.titre}`);
    } else {
        res.json(`Le livre de numéro : ${req.body.numero} existe déjà !`); 
    }
})

app.delete("/livres/:idlivre", (req, res) => {
    let tab = biblio.filter( (livre) => livre.numero == req.params.idlivre);
        
    if (tab.length == 0) {
        res.json(`Impossible de supprimer le livre numéro ${req.params.idlivre} car il n'existe pas !`); 
    } else {
        biblio.pop(req.body);
        res.json(`Suppression du livre ${req.params.idlivre}`);
    }
})

app.put("/livres", (req, res) => {
    let index = biblio.findIndex( (livre) => livre.numero == req.body.numero);

    if (index == -1) {
        res.json(`Le livre de numéro : ${req.body.numero} n'existe pas !`); 
    } else {
        biblio[index] = req.body;
        res.json(`Modification du livre de titre : ${req.body.titre}`);
    }
})