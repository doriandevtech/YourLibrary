import React from "react";
import classes from "./TitreH1.module.css";

const titreH1 = (props) => {
    const monCss = `${classes.policeTitre} border border-dark p-2 mt-2 text-white text-center bg-primary rounded`;
    return <h1 className={monCss}>{props.children}</h1>
};

export default titreH1;

// import React from "react";

// const titreH1 = (props) => (
//     //  Écrire le code ici
// );

// export default titreH1;