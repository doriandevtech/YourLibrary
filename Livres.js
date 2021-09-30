// Import des différentes dépendances requises
import React, { Component } from 'react';
import Livre from "./Livre/Livre";
import FormulaireAjout from './FormulaireAjout/FormulaireAjout';

// Component statefull (utilisation de state au lieu de props)
class Livres extends Component {
    // Déclaration des données des différents livres selon un un objet state contenant un tableau livres
    state = {
        livres : [
            {id:1, titre: "L'algorithmique pour les nuls", auteur:"Les Nuls", nbPages:"234"},
            {id:2, titre: "Apprendre le JavaScript", auteur:"Un développeur", nbPages:"122"},
            {id:3, titre: "Harry Potter le retour", auteur:"Les petits enfants de JK Rowling", nbPages:"3098789"},
            {id:4, titre: "Comprendre le hors-jeux pour les nuls", auteur:"Les Nuls", nbPages:"287"},
        ]
    }

    // Méthode de suppression de livre
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
                        this.state.livres.map(livre => { // Utilisation de la fonction map() afin d'afficher l'ensemble des livres du tableau livres contenu dans l'objet state
                            return (
                                <tr key={livre.id}>
                                <Livre
                                    titre={livre.titre}
                                    auteur={livre.auteur}
                                    nbPages={livre.nbPages}
                                    suppression={() => this.handleSuppressionLivre(livre.id)} // Le bouton suppression est jumelé à la fonction de suppression de livre
                                />
                                </tr>
                            )
                            
                        })
                    }
                </tbody>
            </table>
            {/* Bouton d'ajout de livre permet d'afficher le component lié au formulaire d'ajout */}
            {this.props.ajoutLivre && <FormulaireAjout />}
            </>
        );
    }
}
export default Livres;