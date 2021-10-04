function getPokemons() {
    const url = "https://pokeapi.co/api/v2/pokemon/" // l’url de la ressource
    let fetchOptions = { method: 'GET' } // les options de l'API fetch
    // executer la req AJAX
    fetch(url, fetchOptions)
        .then((response) => { return response.json() })
        .then((dataJSON) => { // dataJSON = les données renvoyées
            console.log(dataJSON) // ici le traitement des données …
            // pour affichage dans le navigateur

            let results = dataJSON.results;

            let texteHTML = "";

            results.sort((v1, v2)=> v1.name < v2.name ? -1 : 1);
        
            for (let v of results) {
                texteHTML += `<option value=${v.url}>${v.name}</option>`;
            }

            document.getElementById("liste").innerHTML = texteHTML;

        })
        .catch((error) => { // gestion des erreurs
            console.log(error)
        })
}

getPokemons();

const liste = document.getElementById("liste");
liste.addEventListener("click", getPokemon);

function getPokemon(event) {
    const url = event.target.value // l’url de la ressource
    let fetchOptions = { method: 'GET' } // les options de l'API fetch
    // executer la req AJAX
    fetch(url, fetchOptions)
        .then((response) => { return response.json() })
        .then((dataJSON) => { // dataJSON = les données renvoyées
            console.log(dataJSON) // ici le traitement des données …
            // pour affichage dans le navigateur
            let textHTML = `<p>le pokemon ${dataJSON.name} mesure ${dataJSON.height} cm et pèse ${dataJSON.weight} kg</p>`
            textHTML += `<img src= "${dataJSON.sprites.front_default}">`;
            document.getElementById("details").innerHTML = textHTML;
        })
        .catch((error) => { // gestion des erreurs
            console.log(error)
        })
}

