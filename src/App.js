import React, { Component } from "react";
import TitreH1 from "./components/Titres/TitreH1";

class App extends Component {
  render() {
    return (
      <div className="container">
        <TitreH1>Page lisant les Livres</TitreH1>
        <p>Livres</p>
        <button>Ajouter</button>
      </div>
    );
  }
}

