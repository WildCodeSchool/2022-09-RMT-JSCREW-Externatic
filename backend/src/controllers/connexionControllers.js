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

const getUserByUtilisateurWithPasswordAndPassToNext = (req, res, next) => {
  const { utilisateur } = req.body;

  models.connexion
    .login(utilisateur)
    // .query("select * from connexion where utilisateur = ?", [utilisateur])
    .then(([users]) => {
      if (users[0] != null) {
        req.utilisateur = { ...users[0] };

        next();
      } else {
        res.sendStatus(401);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

module.exports = {
  add,
  getUserByUtilisateurWithPasswordAndPassToNext,
};
