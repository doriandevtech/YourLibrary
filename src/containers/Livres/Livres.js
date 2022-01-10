// Import des différentes dépendances requises
import React, { Component } from 'react';
import Livre from "./Livre/Livre.js";
import FormulaireAjout from './FormulaireAjout/FormulaireAjout';
import FormulaireModification from './FormulaireModification/FormulaireModification';
import Alert from '../../components/Alert/Alert.js';

// Component statefull (utilisation de state au lieu de props)
class Livres extends Component {
    // Déclaration des données des différents livres selon un un objet state contenant un tableau livres
    state = {
        livres : [
            {id:1, titre: "L'algorithmique pour les nuls", auteur:"Les Nuls", nbPages:"234"},
            {id:2, titre: "Apprendre le JavaScript", auteur:"Un développeur", nbPages:"122"},
            {id:3, titre: "Harry Potter à l'école des sorciers", auteur:"JK Rowling", nbPages:"3089"},
            {id:4, titre: "Harry Potter et la chambre des secrets", auteur:"JK Rowling", nbPages:"3089"},
            {id:5, titre: "Harry Potter et la chambre des secrets", auteur:"JK Rowling", nbPages:"3089"},
        ],
        lastIdLivre : 5,
        idLivreAModifier : 0,
        alerteMessage : null,
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

        this.setState({
            livres:newLivre,
            alerteMessage: {
                message: "Suppression effectuée",
                type: "alert-danger"
            }
        }); // Mise à jour du tableau de livres
    }

    handleAjoutLivre = (titre, auteur, nbPages, lastIdLivre) => {
        const newLivre = {
            id: lastIdLivre + 1,
            titre: titre,
            auteur: auteur,
            nbPages: nbPages,
        };

        const newListeLivres = [...this.state.livres];
        newListeLivres.push(newLivre);

        this.setState(oldState => {
            return {
                livres: newListeLivres,
                lastIdLivre: oldState.lastIdLivre + 1,
                alerteMessage: {
                    message: "Ajout effectué",
                    type: "alert-success"
                }
            }
        })

        this.props.fermerAjoutLivre();
    }

    handleModificationLivre = (id, titre, auteur, nbPages) => {
        const caseLivre = this.state.livres.findIndex(l => {
            return l.id === id
        });

        const newLivre = {id, titre, auteur, nbPages};

        const newListe = [...this.state.livres];
        newListe[caseLivre] = newLivre;

        this.setState({
            livres: newListe,
            idLivreAModifier: 0,
            alerteMessage: {
                message: "Modification effectuée",
                type: "alert-warning"
            }
        })
    }


    render() {
        return (
            <>
            {this.state.alerteMessage && <Alert typeAlert={this.state.alerteMessage.type}>{this.state.alerteMessage.message}</Alert>}
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
                        this.state.livres.map(livre => { // Utilisation de la fonction map() afin parcourir chaque livre du tableau "livres" contenu dans l'objet state
                        if(livre.id !== this.state.idLivreAModifier) {
                            return (
                                <tr key={livre.id}>
                                <Livre
                                    titre={livre.titre}
                                    auteur={livre.auteur}
                                    nbPages={livre.nbPages}
                                    suppression={() => this.handleSuppressionLivre(livre.id)} // Le bouton suppression est jumelé à la fonction de suppression de livre
                                    modification={() => this.setState({idLivreAModifier:livre.id})}
                                />
                                </tr>
                            )
                        } else {
                            return (
                                <tr key={livre.id}>
                                    <FormulaireModification
                                        id={livre.id}
                                        titre={livre.titre}
                                        auteur={livre.auteur}
                                        nbPages={livre.nbPages}
                                        validationModification={this.handleModificationLivre}
                                    />
                                </tr>
                            )
                        }
                            
                        })
                    }
                </tbody>
            </table>
            {/* Bouton d'ajout de livre permet d'afficher le component lié au formulaire d'ajout */}
            {this.props.ajoutLivre && <FormulaireAjout validation = {this.handleAjoutLivre}/>}
            {/* équivalent à "this.props.ajoutLivre ? <FormulaireAjout /> : null" */}
            </>
        );
    }
}
export default Livres;