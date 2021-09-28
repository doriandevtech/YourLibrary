import React from "react";
import Bouton from "../../../components/Buttons/Button";

const livre = (props) => (
    <>
        <td>{props.titre}</td>
        <td>{props.auteur}</td>
        <td>{props.nbPages}</td>
        <td><Bouton texte="Modifier" typeBtn="btn-warning" clic={() => console.log("modification")}></Bouton></td>
        <td><Bouton texte="Supprimer" typeBtn="btn-danger" clic={props.suppression}></Bouton></td>
    </>
);

export default livre;