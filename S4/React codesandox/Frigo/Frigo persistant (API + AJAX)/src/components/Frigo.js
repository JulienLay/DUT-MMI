import React, { useState, useEffect } from "react";
import Produit from "/src/Produit.js";
import { ListItem, ListItemText, ListItemIcon } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import FrigoForm from "./FrigoForm";

function Frigo() {
  const [frigo, setFrigo] = useState([]);

  useEffect(() => {
    getFrigo();
  }, []);

  const handlerProduit = (produit) => {
    postFrigo(produit);
  };

  const handlerDelete = (id) => {
    deleteFrigo(id);
  };

  const handlerPlusUn = (produit) => {
    produit.qte++;
    putFrigo(produit);
  };

  const handlerMoinsUn = (produit) => {
    produit.qte--;
    if (produit.qte < 1) {
      deleteFrigo(produit);
    } else {
      putFrigo(produit);
    }
  };

  // GET les produits
  const getFrigo = () => {
    const url = `https://webmmi.iut-tlse3.fr/~pecatte/frigo/public/24/produits`; // l’url de la ressource
    let fetchOptions = { method: "GET" }; // les options de l'API fetch
    // executer la req AJAX
    fetch(url, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        // dataJSON = les données renvoyées
        console.log(dataJSON); // ici le traitement des données …

        // pour affichage dans le navigateur
        const tabProduit = dataJSON.map((p) => new Produit(p.id, p.nom, p.qte));
        setFrigo(tabProduit);
      })
      .catch((error) => {
        // gestion des erreurs
        console.log(error);
      });
  };

  // DELETE
  const deleteFrigo = (id) => {
    const url = `https://webmmi.iut-tlse3.fr/~pecatte/frigo/public/24/produits`; // l’url de la ressource
    let fetchOptions = { method: "DELETE" }; // les options de l'API fetch
    // executer la req AJAX
    fetch(url + "/" + id, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        getFrigo();
      })
      .catch((error) => console.log(error));
  };

  // POST
  const postFrigo = (produit) => {
    const url = `https://webmmi.iut-tlse3.fr/~pecatte/frigo/public/24/produits`; // l’url de la ressource
    let fetchOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(produit)
    }; // les options de l'API fetch
    // executer la req AJAX
    fetch(url, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        // dataJSON = les données renvoyées
        console.log(dataJSON); // ici le traitement des données …

        // pour affichage dans le navigateur
        getFrigo();
      })
      .catch((error) => {
        // gestion des erreurs
        console.log(error);
      });
  };

  // PUT
  const putFrigo = (produit) => {
    const url = `https://webmmi.iut-tlse3.fr/~pecatte/frigo/public/24/produits`; // l’url de la ressource
    let fetchOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(produit)
    }; // les options de l'API fetch
    // executer la req AJAX
    fetch(url, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        // dataJSON = les données renvoyées
        console.log(dataJSON); // ici le traitement des données …

        // pour affichage dans le navigateur
        getFrigo();
      })
      .catch((error) => {
        // gestion des erreurs
        console.log(error);
      });
  };

  return (
    <div>
      <ul>
        {frigo.map((produit) => {
          return (
            <ListItem>
              <ListItemIcon>
                <button onClick={(e) => handlerDelete(produit.id)}>
                  <DeleteIcon handlerD={handlerDelete}></DeleteIcon>
                </button>
                <button onClick={(e) => handlerPlusUn(produit)}>
                  <AddCircleOutlineIcon></AddCircleOutlineIcon>
                </button>
                <button onClick={(e) => handlerMoinsUn(produit)}>
                  <RemoveCircleOutlineIcon></RemoveCircleOutlineIcon>
                </button>
              </ListItemIcon>
              <ListItemText>
                {produit.nom} ({produit.qte})
              </ListItemText>
            </ListItem>
          );
        })}
      </ul>
      <FrigoForm handlerP={handlerProduit}></FrigoForm>
    </div>
  );
}

export default Frigo;
