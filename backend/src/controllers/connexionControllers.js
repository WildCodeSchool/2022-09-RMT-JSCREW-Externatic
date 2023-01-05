const models = require("../models");
const validateConnexion = require("../service/connexion");

const add = (req, res) => {
  const connexion = req.body;
  const error = validateConnexion(connexion);
  if (error) {
    res.status(422).send(error);
  } else {
    models.connexion
      .insert(connexion)
      .then(([result]) => {
        res.location(`/register/${result.insertId}`).sendStatus(201);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  }
};

const login = () => {
  // retrouver
};
module.exports = {
  add,
  login,
};
