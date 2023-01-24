const Joi = require('joi');
// ajouter au service
const validateEntreprise = (data) => {
  return Joi.object({
    id: Joi.number().presence("optional"),
    nom_entreprise: Joi.string().min(3).max(50).presence("required"),
    adresse: Joi.string().min(3).max(255).presence("required"),
    code_postal: Joi.string().min(3).max(30).presence("required"),
    ville: Joi.string().min(3).max(50).presence("required"),
    pays: Joi.string().min(3).max(30).presence("required"),
    email: Joi.string().email().max(255).presence("required"),
    telephone: Joi.string().min(3).max(30).presence("required"),
    description: Joi.string().min(10).presence("required"),
    numero_siret: Joi.string().min(9).max(14).presence("required"),
    nombre_employes : Joi.number().integer().min(1).presence("required"),
    domaine_id: Joi.number().presence("required"),
    dateInscription: Joi.string().min(10).presence("optional"),
  }).validate(data, { aborEarly: false }).error;
};
module.exports = validateEntreprise;
