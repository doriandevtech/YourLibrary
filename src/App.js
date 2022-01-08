// Import des différentes dépendances requises
import React, { Component } from "react";
import TitreH1 from "./components/Titres/TitreH1";
import Button from "./components/Buttons/Button";
import Livres from "./containers/Livres/Livres";

class App extends Component {

  state = {
    ajoutLivre : false // Boolean qui gère la fermeture ou l'ouverture du formulaire
  }

  // Méthode déclanchant l'ajout d'un livre
  handleClicAjoutLivre = () => {
    this.setState((oldState, props) => {
      return {ajoutLivre: !oldState.ajoutLivre}
    })
  }

  render() {
    return (
      <div className="container">
      {/* Component titre h1 */}
        <TitreH1>Page lisant les livres</TitreH1>
      {/* Component livre */}
        <Livres ajoutLivre={this.state.ajoutLivre} fermerAjoutLivre={() => this.setState({ajoutLivre:false})}/>
      {/* Component bouton */}
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