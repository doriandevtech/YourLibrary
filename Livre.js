// Import des différentes dépendances requises
import React from "react";
import Bouton from "../../../components/Buttons/Button";

// Component stateless (utilisation de props au lieu de state)
const livre = (props) => (
    <>
        <td>{props.titre}</td>
        <td>{props.auteur}</td>
        <td>{props.nbPages}</td>
        <td><Bouton typeBtn="btn-warning" clic={() => console.log("modification")}>Modifier</Bouton></td>
        <td><Bouton typeBtn="btn-danger" clic={props.suppression}>Supprimer</Bouton></td>
    </>
);

export default livre;