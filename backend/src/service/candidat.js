const Joi = require("joi");
// ajouter au service
const validate = (data) => {
  return Joi.object({
    profil_photo: Joi.string().min(3).max(255).presence("optional"),
    profil_nom: Joi.string().min(3).max(30).presence("required"),
    profil_prenom: Joi.string().min(3).max(30).presence("required"),
    profil_age: Joi.number().presence("required"),
    profil_adresse: Joi.string().min(3).max(255).presence("required"),
    profil_code_postal: Joi.string().min(3).max(30).presence("required"),
    profil_ville: Joi.string().min(3).max(50).presence("required"),
    profil_pays: Joi.string().min(3).max(30).presence("required"),
    profil_email: Joi.string().email().max(255).required(),
    profil_cv: Joi.string().min(3).max(255).presence("optional"),
    profil_description: Joi.string().min(10).presence("required"),
    profil_metier: Joi.string().min(10).presence("required"),
    profil_telephone: Joi.string().min(3).max(30).presence("required"),
    profil_dateInscription: Joi.string().min(10).presence("required"),
    profil_dateDisponibilite: Joi.string().min(10).presence("required"),
    profil_connexion_id: Joi.number().presence("required"),
  }).validate(data, { aborEarly: false }).error;
};
module.exports = validate;
