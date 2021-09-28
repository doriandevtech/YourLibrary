import React, { Component } from "react";
import TitreH1 from "./components/Titres/TitreH1";
import Button from "./components/Buttons/Button";
import Livres from "./containers/Livres/Livres";

class App extends Component {
  render() {
    return (
      <div className="container">
        <TitreH1>Page lisant les livres</TitreH1>
        <Livres/>
        <Button 
        texte="AJOUTER" 
        typeBtn="btn-success" 
        css="w-100" 
        clic={() => console.log("Ajout")}></Button>
      </div>
    );
  }
}

export default App;
