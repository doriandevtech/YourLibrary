import React, { Component } from 'react';
import Livre from "./Livre/Livre";
import FormulaireAjout from './FormulaireAjout/FormulaireAjout';

class Livres extends Component {
    state = {
        livres : [
            {id:1, titre: "L'algorithmique pour les nuls", auteur:"Les Nuls", nbPages:"234"},
            {id:2, titre: "Apprendre le JavaScript", auteur:"Un développeur", nbPages:"122"},
            {id:3, titre: "Harry Potter le retour", auteur:"Les petits enfants de JK Rowling", nbPages:"3098789"},
            {id:4, titre: "Comprendre le hors-jeux pour les nuls", auteur:"Les Nuls", nbPages:"287"},
        ]
    }

    handleSuppressionLivre = (id) => {
        // Comparaison de l'idée choisi avec l'id du livre
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
            <>
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
            {this.props.ajoutLivre && <FormulaireAjout />}
            </>
        );
    }
}
export default Livres;