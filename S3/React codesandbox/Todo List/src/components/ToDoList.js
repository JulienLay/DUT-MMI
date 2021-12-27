import React from "react";
import ToDoListItem from "./ToDoListItem";

function ToDoList(props) {
  // recup de la liste des choses à afficher
  let liste = props.choses;

  return (
    <div>
      <h3>Liste des choses à faire</h3>
      <ul>
        {liste.map((chose) => {
          return (
            <ToDoListItem
              handlerDel={props.handlerD}
              handlerFai={props.handlerF}
              ch={chose}
              key={chose.id}
            ></ToDoListItem>
          );
        })}
      </ul>
    </div>
  );
}

export default ToDoList;
