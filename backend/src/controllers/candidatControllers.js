const models = require("../models");
const validate = require("../service/candidat");

const add = (req, res) => {
  let candidat = req.body.data;
  const profilPhoto = `public/assets${
    req.files.avatar ? req.files.avatar[0].filename : "/avatar/Avatar.png"
  }`;
  const profilCv = `public/assets${
    req.files.cv ? req.files.cv[0].filename : "/cv/cv.png"
  }`;

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

const read = (req, res) => {
  models.candidat
    .findOne(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  add,
  read,
};
