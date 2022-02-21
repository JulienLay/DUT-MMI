const http = require('http');
const url = require('url');
const events = require('events');
const colors = require('colors');

const server = http.createServer(f);
server.listen(4000);


const obj=new events.EventEmitter();
obj.on('gameOver', ff);
// obj.emit('gameOver');

setTimeout(ciao, 2000);

function ciao() {
    obj.emit("gameOver");
}

function ff() {
    console.log(colors.red.inverse("ATTENTION"));
}


// fonction de callback
// paramètres : request, requete envoyee au serveur 
// response, réponse retournée

function f(request, response)
{
    const page = url.parse(request.url).pathname;
    if(page == "/index.html") {
        response.writeHead(200);
        response.write("Hello world !");

        console.log(url.parse(request.url));
        console.log(url.parse(request.url).query);
        console.log(url.parse(request.url).query.split());

        //Pour le GET c'est dans l'URL quand on clique sur le bouton

        //Pour le POST
        let body = '';
        request.on('data', function(data) {
            body+=data;
        });

        request.on('end', function(){
            console.log("c'est " + body);
        });

    } else {
        response.writeHead(404);
        response.write(response.statusMessage);
    }
    response.end();

}