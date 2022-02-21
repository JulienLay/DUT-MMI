const express = require('express');
const app = express();
app.set('view engine', 'ejs');
const path = require('path');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const http = require('http');
const fs = require('fs');
const server = http.createServer(app);

let booleen = require("./utils.js");


// fs.readFile('./index.html', 'utf-8', function (error, content) {
//     response.writeHead(200, { "Content-Type": "text/html" });
//     response.write(content);
//     response.end();
// });



// app.listen(3000, () => { console.log('ok'); });

app.get('/', function (req, res) {
    res.send("Tout va bien");
});

app.get('/index.html', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/verification.html', function (req, res) {
    res.sendFile(path.join(__dirname, '/verification.html'));
});

app.get('*', function (req, res) {
    res.send("404 not found");
});

const io = require("socket.io")(server);

// client vers serveur
io.sockets.on("connection", function (socket) {
    // console.log("un client s'est connecté");
    socket.on("event1", function (data) {
        console.log(data.nom)
    });

    socket.on("proposition", function (data) {
        // console.log(data.proposition)
        // serveur vers tous les clients
        socket.broadcast.emit("reponse", data.proposition)

    });

    // serveur vers client
    socket.emit("test", "Un message du serveur vers le client");


    socket.on("demande", function (data) {
        console.log(data.retour);
        socket.broadcast.emit("reponse2", data.retour);
        console.log(data.retour);
        console.log(booleen.palindrome(data.retour));
    });

    
});

server.listen(3000)