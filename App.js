import React, { Component } from "react";
import TitreH1 from "./components/Titres/TitreH1";
import Button from "./components/Buttons/Button";

class App extends Component {
  render() {
    return (
      <div className="container">
        <TitreH1>Page lisant les livres</TitreH1>
        <p>Livres</p>
        <Button texte="AJOUTER" typeBtn="btn-success" clic={() => console.log("Ajout")}></Button>
        <Button texte="MODIFICATION" typeBtn="btn-warning" clic={() => console.log("Ajout")}></Button>
        <Button texte="SUPPRESSION" typeBtn="btn-danger" clic={() => console.log("Ajout")}></Button>
      </div>
    );
  }
}

export default App;
