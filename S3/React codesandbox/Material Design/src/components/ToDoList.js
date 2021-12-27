import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Button
} from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

function ToDoList(props) {
  // recup de la liste des choses à afficher
  let liste = props.choses;

  return (
    <div>
      <List>
        {liste.map((v) => {
          console.log(v);
          return (
            <ListItem
              button
              key={v.id}
              handlerDel={props.handlerD}
              handlerFai={props.handlerF}
              ch={v}
            >
              <ListItemText primary={v.texte}></ListItemText>
              <ListItemIcon>
                <Button variant="contained" onClick={(e) => props.handlerF(v)}>
                  <CheckCircleOutlineIcon
                    style={v.fait ? { color: "green" } : { color: "red" }}
                  />
                </Button>

                <Button variant="contained" onClick={(e) => props.handlerD(v)}>
                  <DeleteOutlineIcon></DeleteOutlineIcon>
                </Button>
              </ListItemIcon>
            </ListItem>
          );
        })}
        ;
      </List>
    </div>
  );
}

export default ToDoList;
