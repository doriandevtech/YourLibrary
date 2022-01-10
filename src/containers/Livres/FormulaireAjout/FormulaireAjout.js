// Import des différentes dépendances requises
import React, { Component } from 'react';
import Button from '../../../components/Buttons/Button';
import {withFormik} from 'formik'

// Component statefull
class FormulaireAjout extends Component {

    // state = {
    //     titreSaisi : "",
    //     auteurSaisi : "",
    //     nbPagesSaisi : "",
    // }

    // // Empêcher la page de se mettre à jour une fois le formulaire validé
    // handleValidationForm = (event) => {
    //     event.preventDefault()
    //     this.props.validation(this.state.titreSaisi, this.state.auteurSaisi, this.state.nbPagesSaisi)

    //     // Réinitialisation du contenu du formulaire une fois ce dernier ajouté
    //     this.setState(
    //         {
    //             titreSaisi : "",
    //             auteurSaisi : "",
    //             nbPagesSaisi : "",
    //         }
    //     )
    // }

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
                            name='titre'
                            value={this.props.values.titre}
                            onChange={this.props.handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="auteur" className="form-label">Auteur</label>
                        <input 
                            type="text"
                            className="form-control"
                            id="auteur"
                            name='auteur'
                            value={this.props.values.auteur}
                            onChange={this.props.handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="nbPages" className="form-label">Nombre de pages</label>
                        <input 
                            type="text"
                            className="form-control"
                            id="nbPages"
                            name="nbPages"
                            value={this.props.values.nbPages}
                            onChange={this.props.handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="nbChapitres" className="form-label">Nombre de chapitres</label>
                        <input 
                            type="text"
                            className="form-control"
                            id="nbChapitres"
                            name="nbChapitres"
                            value={this.props.values.nbChapitres}
                            onChange={this.props.handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="maisonEdition" className="form-label">Maison d'édition</label>
                        <input 
                            type="text"
                            className="form-control"
                            id="maisonEdition"
                            name="maisonEdition"
                            value={this.props.values.maisonEdition}
                            onChange={this.props.handleChange}
                        />
                    </div>
                    <Button typeBtn='btn-primary' clic={this.props.handleSubmit}>Valider</Button>
                </form>
            </>
        );
    }
}
export default withFormik({
    mapPropsToValues : () => ({
        titre: '',
        auteur: '',
        nbPages: '',
        nbChapitres: '',
        maisonEdition: ''
    }),
    validate : values => {
        
    },
    handleSubmit : (values,{props}) => {
        props.validation(values.titre, values.auteur, values.nbPages, values.nbChapitres, values.maisonEdition)
    }

})(FormulaireAjout);