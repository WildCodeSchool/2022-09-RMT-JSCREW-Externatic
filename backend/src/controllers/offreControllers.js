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

module.exports = { random };