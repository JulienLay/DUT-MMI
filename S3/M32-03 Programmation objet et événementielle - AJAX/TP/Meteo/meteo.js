const bouton = document.getElementById("formulaire");
bouton.addEventListener("submit", meteo);

function meteo(event) {
    event.preventDefault();
    let ville = document.getElementById("ville").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ville},France&units=metric&lang=fr&appid=c4465eeee9e55d1a1a3bd7a4fac0e101` // l’url de la ressource
    let fetchOptions = { method: 'GET' } // les options de l'API fetch
        // executer la req AJAX
    fetch(url, fetchOptions)
        .then((response) => { return response.json() })
        .then((dataJSON) => { // dataJSON = les données renvoyées
            console.log(dataJSON) // ici le traitement des données …
                // pour affichage dans le navigateur
            let meteoData = `A ${ville}, la température est de ${dataJSON.main.temp} degrès avec ${dataJSON.weather[0].description}`;
            // alert(meteoData);
            document.getElementById("laville").textContent = dataJSON.name;
            document.getElementById("temperature").textContent = dataJSON.main.temp;
            document.getElementById("pression").textContent = dataJSON.main.pressure;
            document.getElementById("humidite").textContent = dataJSON.main.humidity;
            document.getElementById("vitesse").textContent = dataJSON.wind.speed;
            document.getElementById("description").textContent = dataJSON.weather[0].description;

            document.getElementById("image").innerHTML = `<img src="http://openweathermap.org/img/wn/${dataJSON.weather[0].icon}@2x.png">`
        })
        .catch((error) => { // gestion des erreurs
            console.log(error)
        })
}