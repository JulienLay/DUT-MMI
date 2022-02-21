const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.listen(4000, () => { console.log('ok'); });

app.use(function (req, res, next) {
    console.log('Jour : ', new Date().getDate());
    next();
});

app.use('/fr.html', function (req, res) {
    res.send('Salut MMI');
});
app.use('/gb.html', function (req, res) {
    res.send('Hello World');
});

app.get('/index.html', construireVue);
function construireVue(request, response) {
    response.render('reponse.ejs', { nom: 'Joueur 1', proposition: 10 });
}

app.post('/index.html', (req, res) => {
    console.log(req.body.nom);
    res.send("Formulaire rempli");
})