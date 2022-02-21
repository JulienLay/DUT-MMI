//application express
const express = require("express");
const app = express();
app.use(express.json());

//lancer le serveur pour qu'il écoute sur le port 5000
let port = 5000;
app.listen(port);
console.log("le serveur REST est lancé sur le port " + port);

let mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/test", { useNewUrlParser: true });

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erreur de connexion:'));
db.once('open', function () {
    console.log("connecté")
});

let Schema = mongoose.Schema;
let livreSchema = new Schema({
    numero: { type: Number, required: true, unique: true },
    titre: { type: String, required: true },
    pages: [
        { type: String, required: true }
    ]
});

var Livre = mongoose.model("livre", livreSchema);

app.get("/", (req, res) => {
    res.json("API de gestion des livres");
})

app.get("/livres", (req, res) => {
    if (req.query.titre == null || req.query.titre == "") {
        Livre.find({}, { _id: 0, numero: 1, titre: 1, pages: 1 })
            .then((livres) => res.json(livres))
            .catch((err) => console.error(err.message))
    } else {
        const filtre = new RegExp(req.query.titre);
        Livre.find({ titre: filtre }, { _id: 0, numero: 1, titre: 1, pages: 1 })
            .then((livres) => {
                if (livres.length == 0) {
                    res.json(`le titre du livre que vous avez entré n'existe pas`)
                } else {
                    res.json(livres);
                }
            })
            .catch((err) => console.error(err.message))
    }
})

app.get("/livres/:idlivre", (req, res) => {
    if (req.params.idlivre) {
        Livre.find({ numero: req.params.idlivre }, { _id: 0, numero: 1, titre: 1, pages: 1 })
            .then((livres) => {
                if (livres.length == 0) {
                    res.json(`le livre numéro ${req.params.idlivre} n'existe pas`);
                } else {
                    res.json(livres);
                }
            })
            .catch((err) => console.error(err.message))
    } else {
        res.json(`le livre numéro ${req.params.idlivre}`);
    }
})

app.get("/livres/:idlivre/pages", (req, res) => {
    if (req.params.idlivre) {
        Livre.find({ numero: req.params.idlivre }, { _id: 0, numero: 1, titre: 1, pages: 1 })
            .then((livres) => {
                if (livres.length == 0) {
                    res.json(`le livre numéro ${req.params.idlivre} n'existe pas`);
                } else {
                    res.json(livres);
                }
            })
            .catch((err) => console.error(err.message))
    } else {
        res.json(`liste des pages du livre ${req.params.idlivre}`);
    }
})

app.get("/livres/:idlivre/pages/:idpage", (req, res) => {
    Livre.find({ numero: req.params.idlivre }, { _id: 0, numero: 1, titre: 1, pages: 1 })
        .then((livres) => {
            if (req.params.idpage > livres[0].pages.length || req.params.idpage <= 0) {
                res.json(`la page ${req.params.idpage} du livre numéro ${req.params.idlivre} n'existe pas`);
            } else {
                res.json(livres[0].pages[req.params.idpage - 1]);
            }
        })
        .catch((err) => console.error(err.message))
})

app.post("/livres", (req, res) => {
    Livre.find({ numero: req.body.numero }, { _id: 0, numero: 1, titre: 1, pages: 1 })
        .then((livre) => {
            if (livre.length == 0) {
                let liv = new Livre({
                    numero: req.body.numero,
                    titre: req.body.titre,
                    pages: req.body.pages
                })
                liv.validate()
                    .then(() => {
                        liv.save()
                            .then(() => res.json("1 livre ajouté"))
                            .catch((err) => res.json("Livre pas ajouté : " + err.message))
                    })
                    .catch((err) => res.json({ message: "Livre pas ajouté : " + err.message }))
                console.log(`Ajout d'un nouveau livre de titre : ${req.body.titre}`);
            } else {
                res.json(`Le livre de numéro : ${req.body.numero} existe déjà !`);
            }
        })
        .catch((err) => res.json({ message: "Livre pas ajouté : " + err.message }))
})

app.delete("/livres/:idlivre", (req, res) => {
    Livre.find({ numero: req.params.idlivre }, { _id: 0, numero: 1, titre: 1, pages: 1 })
        .then((livre) => {
            // console.log(livre)
            if (livre.length == 0) {
                res.json(`Impossible de supprimer le livre numéro ${req.params.idlivre} car il n'existe pas !`);
            } else {
                Livre.deleteOne({ numero: req.params.idlivre })
                    .then((status) =>
                        console.log(status.deletedCount + " livre(s) supprimé(s)"))
                    .catch((err) => console.error(err.message))
                res.json(`Suppression du livre ${req.params.idlivre}`);
            }
        })
        .catch((err) => res.json(err.message))
})

app.put("/livres", (req, res) => {
    Livre.find({ numero: req.body.numero }, { _id: 0, numero: 1, titre: 1, pages: 1 })
        .then((livre) => {
            if (livre.length == 0) {
                res.json(`Le livre de numéro : ${req.body.numero} n'existe pas !`);
            } else {
                let liv = new Livre({
                    numero: req.body.numero,
                    titre: req.body.titre,
                    pages: req.body.pages
                })
                liv.validate()
                    .then(() => {
                        Livre.updateOne({ numero: req.body.numero }, { numero: req.body.numero, titre: req.body.titre, pages: req.body.pages })
                            .then((status) => res.json(status.modifiedCount + " livre(s) modifié(s)"))
                            .catch((err) => res.json("Livre pas modifié : " + err.message))
                    })
                    .catch((err) => res.json({ message: "Livre pas modifié : " + err.message }))
            }
        })
        .catch((err) => res.json({ message: "Livre pas modifié : " + err.message }))
})