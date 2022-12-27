const Joi = require("joi");

const validateConnexion = (data) => {
  return Joi.object({
    utilisateur: Joi.string().email().max(255).presence("required"),
    mot_de_passe: Joi.string().min(8).max(255).presence("required"),
    role: Joi.string().max(20).presence("required"),
  }).validate(data, { aborEarly: false }).error;
};
module.exports = validateConnexion;
