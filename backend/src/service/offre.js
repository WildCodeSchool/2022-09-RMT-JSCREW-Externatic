const Joi = require("joi");
// // ajouter au service
const validate = (data) => {
  return Joi.object({
    id: Joi.number().presence("optional"),
    contrat: Joi.string().min(3).max(255).presence("required"),
    condition_travail: Joi.string().min(3).max(255).presence("required"),
    avantages: Joi.string().min(3).max(255).presence("optional"),
    poste: Joi.string().presence("required"),
    localisation: Joi.string().min(2).max(255).presence("required"),
    dateOffre: Joi.string().min(3).max(30).presence("optional"),
    date_fin_offre: Joi.string().min(3).max(50).presence("required"),
    salaire: Joi.string().min(3).max(30).presence("required"),
    mission: Joi.string().presence("required"),
    profil_recherche: Joi.string().min(3).presence("required"),
    specialitees: Joi.string().min(2).presence("required"),
    entreprise_id: Joi.number().presence("required"),
    domaine_id: Joi.number().presence("required"),
  }).validate(data, { aborEarly: false }).error;
};
module.exports = validate;
