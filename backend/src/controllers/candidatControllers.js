const models = require("../models");
const validate = require("../service/candidat");

const add = (req, res) => {
  let candidat = req.body.data;
  let profilPhoto = "";
  let profilCv = "";
  if (req.files.avatar !== undefined) {
    profilPhoto = `public/assets${req.files.avatar[0].filename}`;
  } else {
    profilPhoto = `public/assets/avatar/Avatar.png`;
  }
  if (req.files.cv !== undefined) {
    profilCv = `public/assets${req.files.cv[0].filename}`;
  } else {
    profilCv = `public/assets/cv/cv.png`;
  }
  candidat = JSON.parse(candidat);
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
