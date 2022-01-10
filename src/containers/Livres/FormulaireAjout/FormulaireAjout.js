// Import des différentes dépendances requises
import React, { Component } from 'react';
import Button from '../../../components/Buttons/Button';
import {validateYupSchema, withFormik} from 'formik'
import * as Yup from "yup"

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
                            onBlur={this.props.handleBlur}
                        />
                        {
                            this.props.touched.titre && this.props.errors.titre 
                            && <span style={{color:"red"}}>{this.props.errors.titre}</span>
                        }
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
                            onBlur={this.props.handleBlur}
                        />
                        {
                            this.props.touched.auteur && this.props.errors.auteur 
                            && <span style={{color:"red"}}>{this.props.errors.auteur}</span>
                        }
                    </div>
                    <div className="mb-3">
                        <label htmlFor="nbPages" className="form-label">Nombre de pages</label>
                        <input 
                            type="text"
                            className="form-control"
                            id="nbPages"
                            name="nbPages"
                            value={this.props.values.nbPages}
                            onChange={(event) => this.props.setFieldValue('nbPages', +event.target.value)}
                            onBlur={this.props.handleBlur}
                        />
                        {
                            this.props.touched.nbPages && this.props.errors.nbPages 
                            && <span style={{color:"red"}}>{this.props.errors.nbPages}</span>
                        }
                    </div>
                    <div className="mb-3">
                        <label htmlFor="nbChapitres" className="form-label">Nombre de chapitres</label>
                        <input 
                            type="text"
                            className="form-control"
                            id="nbChapitres"
                            name="nbChapitres"
                            value={this.props.values.nbChapitres}
                            onChange={(event) => this.props.setFieldValue('nbChapitres', +event.target.value)}
                            onBlur={this.props.handleBlur}
                        />
                        {
                            this.props.touched.nbChapitres && this.props.errors.nbChapitres 
                            && <span style={{color:"red"}}>{this.props.errors.nbChapitres}</span>
                        }
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
                            onBlur={this.props.handleBlur}
                        />
                        {
                            this.props.touched.maisonEdition && this.props.errors.maisonEdition 
                            && <span style={{color:"red"}}>{this.props.errors.maisonEdition}</span>
                        }
                    </div>
                    <Button typeBtn='btn-primary' clic={this.props.handleReset}>Reset</Button>
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
    // Condition sur les champs du formulaire
    validationSchema : Yup.object().shape({
        titre : Yup.string()
                        .min(3, "Le titre doit avoir plus de 3 caractères") // Minimum 3 caractères pour le titre du livre
                        .max(15, "Le titre doit avoir moins de 15 caractères") // Maximum 15 caractères pour le titre du livre
                        .required("Le titre est obligatoire"),
        auteur : Yup.string()
                        .min(3, "L'auteur doit avoir plus de 3 caractères") // Minimum 3 caractères pour l'auteur du livre
                        .max(15, "L'auteur doit avoir moins de 15 caractères") // Maximum 15 caractères pour l'auteur du livre
                        .required("L'auteur est obligatoire"),
        nbPages : Yup.number()
                        .lessThan(1000, "Le nombre de pages doit être infèrieur à 1000")
                        .moreThan(50, "Le nombre de pages doit être supèrieur à 50")
                        .required("L'auteur est obligatoire"),
        nbChapitres : Yup.number()
                        .lessThan(1000, "Le nombre de chapitres doit être infèrieur à 1000")
                        .moreThan(50, "Le nombre de chapitres doit être supèrieur à 50")
                        .required("L'auteur est obligatoire"),


    }),
    // validate : values => {
        // const errors = {};
        // if (values.titre.length < 3) {
        //     errors.titre = "Le titre doit avoir plus de 3 caractères";
        // }
        // if (values.titre.length > 15) {
        //     errors.titre = "Le titre doit avoir moins de 15 caractères"
        // }
        // if (!values.auteur) {
        //     errors.auteur = "Le champ \"Auteur\" est requis"
        // }
        // if (!values.nbPages) {
        //     errors.nbPages = "Le champ \"Nombre de pages\" est requis"
        // }
        // if (!values.nbChapitres) {
        //     errors.auteur = "Le champ \"Nombre de chapitres\" est requis"
        // }
        // return errors;
    // },
    handleSubmit : (values,{props}) => {
        props.validation(values.titre, values.auteur, values.nbPages, values.nbChapitres, values.maisonEdition)
    }

})(FormulaireAjout);