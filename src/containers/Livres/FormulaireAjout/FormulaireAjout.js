// Import des différentes dépendances requises
import React, { Component } from 'react';
import Button from '../../../components/Buttons/Button'

// Component statefull
class FormulaireAjout extends Component {

    state = {
        titreSaisi : "",
        auteurSaisi : "",
        nbPagesSaisi : "",
    }

    // Empêcher la page de se mettre à jour une fois le formulaire validé
    handleValidationForm = (event) => {
        event.preventDefault()
        this.props.validation(this.state.titreSaisi, this.state.auteurSaisi, this.state.nbPagesSaisi)

        // Réinitialisation du contenu du formulaire une fois ce dernier ajouté
        this.setState(
            {
                titreSaisi : "",
                auteurSaisi : "",
                nbPagesSaisi : "",
            }
        )
    }

    render() {
        return (
            <>
            {/* Contenu affiché lors du clic sur le bouton "Ajouter livre" */}
                <form>
                    <div className="mb-3">
                        <label htmlFor="titre" className="form-label">Titre du livre</label>
                        <input 
                            type="text"
                            className="form-control"
                            id="titre"
                            value={this.state.titreSaisi}
                            onChange={(event) => this.setState({titreSaisi:event.target.value})}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="auteur" className="form-label">Auteur</label>
                        <input 
                            type="text"
                            className="form-control"
                            id="titre"
                            value={this.state.auteurSaisi}
                            onChange={(event) => this.setState({auteurSaisi:event.target.value})}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="nbPages" className="form-label">Nombre de pages</label>
                        <input 
                            type="text"
                            className="form-control"
                            id="titre"
                            value={this.state.nbPagesSaisi}
                            onChange={(event) => this.setState({nbPagesSaisi:event.target.value})}
                        />
                    </div>
                    <Button typeBtn='btn-primary' clic={this.handleValidationForm}>Valider</Button>
                </form>
            </>
        );
    }
}
export default FormulaireAjout;