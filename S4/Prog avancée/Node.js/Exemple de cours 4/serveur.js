const http = require('http');
const fs = require('fs');
const colors = require('colors');
const server = http.createServer
    (
        function (request, response) {
            fs.readFile('./index.html', 'utf-8', function (error, content) {
                response.writeHead(200, { "Content-Type": "text/html" });
                response.write(content);
                response.end();
            });
        });
const io = require("socket.io")(server);

// client vers serveur
io.sockets.on("connection", function (socket) {
    // console.log("un client s'est connecté");
    socket.on("event1", function (data) {
        console.log(data.nom)
    });

    // serveur vers client
    socket.emit("test", "Un message du serveur vers le client".rainbow);
});




server.listen(4000);