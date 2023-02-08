const Joi = require("joi");
// // ajouter au service
const validate = (data) => {
  return Joi.object({
    id: Joi.number().presence("optional"),
    image_url: Joi.string().min(3).max(255).presence("required"),
    role: Joi.string().min(3).max(255).presence("required"),
    nom_consultant: Joi.string().min(3).max(255).presence("required"),
    telephone: Joi.string().min(3).max(255).presence("required"),
    email: Joi.string().presence("required"),
    LinkedIn: Joi.string().min(2).max(255).presence("optional"),
    connexion_id: Joi.number().min(3).max(30).presence("optional"),
  }).validate(data, { aborEarly: false }).error;
};
module.exports = validate;
