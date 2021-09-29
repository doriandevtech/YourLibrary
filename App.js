import React, { Component } from "react";
import TitreH1 from "./components/Titres/TitreH1";
import Button from "./components/Buttons/Button";
import Livres from "./containers/Livres/Livres";

class App extends Component {

  state = {
    ajoutLivre : false
  }

  handleClicAjoutLivre = () => {
    this.setState((oldState, props) => {
      return {ajoutLivre: !oldState.ajoutLivre}
    })
  }

  render() {
    return (
      <div className="container">
        <TitreH1>Page lisant les livres</TitreH1>
        <Livres ajoutLivre={this.state.ajoutLivre}/>
        <Button 
        typeBtn="btn-success" 
        css="w-100" 
        clic={this.handleClicAjoutLivre}>
        { !this.state.ajoutLivre ? "Ajouter" : "Fermer l'ajout"}

        </Button>
      </div>
    );
  }
}

export default App;
