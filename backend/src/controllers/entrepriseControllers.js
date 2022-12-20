const models = require("../models");

const browse = (req, res) => {
  models.entreprise
    .findAll()
    .then(([entreprises]) => {
      res.send(entreprises);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// create entreprise

const add = (req, res) => {
  const entreprise = req.body;

  models.entreprise
    .insert(entreprise)
    .then(([result]) => {
      res.location(`/entreprise/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  add
};
