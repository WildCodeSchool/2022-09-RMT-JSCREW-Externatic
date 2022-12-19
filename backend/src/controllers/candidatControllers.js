const models = require("../models");

const add = (req, res) => {
  const candidat = req.body;

  // TODO validations (length, format...)

  models.candidat
    .insert(candidat)
    .then(([result]) => {
      res.location(`/profil/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  add,
};
