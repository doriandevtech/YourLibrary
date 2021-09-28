import React, { Component } from 'react';
import Livre from "./Livre/Livre";

class Livres extends Component {
    state = {
        livres : [
            {id:1, titre: "L'algorithmique pour les nuls", auteur:"Les Nuls", nbPages:"234"},
            {id:2, titre: "L'algorithmique pour les nuls", auteur:"Les Nuls", nbPages:"234"},
            {id:3, titre: "L'algorithmique pour les nuls", auteur:"Les Nuls", nbPages:"234"},
            {id:4, titre: "L'algorithmique pour les nuls", auteur:"Les Nuls", nbPages:"234"},
        ]
    }

    handleSuppressionLivre = (id) => {
        // COmparaison de l'idée choisi avec l'id du livre
        const livreIndexTab = this.state.livres.findIndex(l => {
            return l.id === id
        })

        // Duplication du tableau de livre afin de supprimer la ligne sélectionnée
        const newLivre = [...this.state.livres];
        newLivre.splice(livreIndexTab,1); // Suppression de la ligne liée à l'id du livre choisit

        this.setState({livres:newLivre}); // Mise à jour du tableau de livres
    }


    render() {
        return (
            <table className="table text-center">
                <thead>
                    <tr className="table-dark">
                        <th>Titre</th>
                        <th>Auteur</th>
                        <th>Nombre de pages</th>
                        <th colSpan="2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.livres.map(livre => {
                            return (
                                <tr key={livre.id}>
                                <Livre
                                    titre={livre.titre}
                                    auteur={livre.auteur}
                                    nbPages={livre.nbPages}
                                    suppression={() => this.handleSuppressionLivre(livre.id)}
                                />
                                </tr>
                            )
                            
                        })
                    }
                </tbody>
            </table>
        );
    }
}
export default Livres;