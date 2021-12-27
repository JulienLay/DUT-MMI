import React from "react";

function ToDoListItem(props) {
  return (
    <div>
      <li>
        {props.ch.pourAfficher()}
        <button onClick={(e) => props.handlerFai(props.ch)}>Faire</button>
        <button onClick={(e) => props.handlerDel(props.ch)}>Delete</button>
      </li>
    </div>
  );
}
export default ToDoListItem;
