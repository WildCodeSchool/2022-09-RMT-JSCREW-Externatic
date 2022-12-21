const models = require("../models");

const random = (req, res) => {
  models.offre
    .rand(3)
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// create offre formulaire

const add = (req, res) => {
  const offreForm = req.body;

  models.offre
    .insert(offreForm)
    .then(([result]) => {
      res.location(`/offres/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = { random, add };
