const Joi = require("joi");
// ajouter au service
const validate = (data) => {
  return Joi.object({
    id: Joi.number().presence("optional"),
    photo: Joi.string().min(3).max(255).presence("optional"),
    nom: Joi.string().min(3).max(30).presence("required"),
    prenom: Joi.string().min(3).max(30).presence("required"),
    age: Joi.number().presence("required"),
    adresse: Joi.string().min(3).max(255).presence("required"),
    code_postal: Joi.string().min(3).max(30).presence("required"),
    ville: Joi.string().min(3).max(50).presence("required"),
    pays: Joi.string().min(3).max(30).presence("required"),
    email: Joi.string().email().max(255).required(),
    cv: Joi.string().min(3).max(255).presence("optional"),
    description: Joi.string().min(10).presence("required"),
    metier: Joi.string().min(10).presence("required"),
    telephone: Joi.string().min(3).max(30).presence("required"),
    dateInscription: Joi.string().min(10).presence("optional"),
    dateDisponibilite: Joi.string().min(10).presence("required"),
    connexion_id: Joi.number().presence("required"),
  }).validate(data, { aborEarly: false }).error;
};
module.exports = validate;
