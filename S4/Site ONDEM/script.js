/* -------- Fonction d'ouverture d'une rubrique SERVICE -------- */

let service = document.getElementsByClassName("service");
// let serviceBtn = document.getElementsByClassName("btn-serv");

for (let i = 0; i < service.length; i++) {
  let idElt = service[i].getAttribute("id");

  service[i].onclick = function () {
    let servDetails = document.getElementsByClassName("serv-details");
    for (let i = 0; i < servDetails.length; i++) {
      servDetails[i].style.display = "none";
    }

    let servName = document.getElementById(idElt);
    let servDetail = servName.nextElementSibling;

    servDetail.style.display = "block";
  };
}

/* -------- Fonction d'ouverture d'une rubrique MEMBRE -------- */

let profil = document.getElementsByClassName("profil");

for (let i = 0; i < profil.length; i++) {
  let idElt = profil[i].getAttribute("id");

  profil[i].onclick = function () {
    let membDetails = document.getElementsByClassName("memb-details");
    for (let i = 0; i < membDetails.length; i++) {
      membDetails[i].style.display = "none";
    }

    let membName = document.getElementById(idElt);
    let membDetail = membName.nextElementSibling;

    membDetail.style.display = "block";
  };
}

/* -------- Fonction fermeture des rubriques  -------- */

let closeBtn = document.getElementsByClassName("close-btn");

for (let i = 0; i < closeBtn.length; i++) {
  closeBtn[i].onclick = function () {
    let servDetails = document.getElementsByClassName("serv-details");
    for (let i = 0; i < servDetails.length; i++) {
      servDetails[i].style.display = "none";
    }

    let membDetails = document.getElementsByClassName("memb-details");
    for (let i = 0; i < membDetails.length; i++) {
      membDetails[i].style.display = "none";
    }
  };
}
