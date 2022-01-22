import React, { useState } from "react";
import Produit from "/src/Produit.js";
import { ListItem, ListItemText, ListItemIcon } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import FrigoForm from "./FrigoForm";

function Frigo() {
  const [frigo, setFrigo] = useState([
    new Produit("Carottes", 3),
    new Produit("Steack hache", 2)
  ]);

  const handlerProduit = (produit) => {
    let f = [...frigo];
    let p = f.find((v) => {
      return v.nom === produit.nom;
    });
    if (p) {
      p.qte = Number(p.qte) + Number(produit.qte);
    } else {
      f.push(produit);
    }
    setFrigo(f);
  };

  const handlerDelete = (produit) => {
    let f = [...frigo.filter((p) => p !== produit)];
    setFrigo(f);
  };

  const handlerPlusUn = (index) => {
    let f = [...frigo];
    f[index].qte++;
    setFrigo(f);
  };

  const handlerMoinsUn = (produit, index) => {
    let f = [...frigo];
    if (f[index].qte >= 1) {
      f[index].qte--;
    }
    if (f[index].qte < 1) {
      handlerDelete(produit);
    } else {
      setFrigo(f);
    }
  };

  return (
    <div>
      <ul>
        {frigo.map((produit, index) => {
          return (
            <ListItem>
              <ListItemIcon>
                <button onClick={(e) => handlerDelete(produit)}>
                  <DeleteIcon handlerD={handlerDelete}></DeleteIcon>
                </button>
                <button onClick={(e) => handlerPlusUn(index)}>
                  <AddCircleOutlineIcon></AddCircleOutlineIcon>
                </button>
                <button onClick={(e) => handlerMoinsUn(produit, index)}>
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
