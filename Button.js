import React from "react";

const button = (props) => {
    const btnCss = `btn ${props.typeBtn} ${props.css}`;
    return <button className={btnCss} onClick={props.clic}>{props.texte}</button>
};

export default button;