// Import des différentes dépendances requises
import React from "react";
import Button from "../../../components/Buttons/Button";

// Component stateless (utilisation de props au lieu de state)
const livre = (props) => (
    <>
        <td>{props.titre}</td>
        <td>{props.auteur}</td>
        <td>{props.nbPages}</td>
        <td><Button typeBtn="btn-warning" clic={props.modification}>Modifier</Button></td>
        <td><Button typeBtn="btn-danger" clic={props.suppression}>Supprimer</Button></td>
    </>
);

export default livre;