const models = require("../models");
const validate = require("../service/candidat");

const add = (req, res) => {
  const candidat = req.body;
  const profilPhoto = `public/assets${req.files.avatar[0].filename}`;
  const profilCv = `public/assets${req.files.cv[0].filename}`;
  const error = validate(candidat);
  if (error) {
    res.status(422).send(error);
  } else {
    models.candidat
      .insert(candidat, profilPhoto, profilCv)
      .then(([result]) => {
        res.location(`/profil/${result.insertId}`).sendStatus(201);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  }
};

module.exports = {
  add,
};
