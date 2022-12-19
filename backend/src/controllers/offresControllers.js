const models = require("../models");

const browse = (req, res) => {
  models.offre
    .findAll()
    .then(([offres]) => {
      res.send(offres);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
};
