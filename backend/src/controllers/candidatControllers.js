const models = require("../models");
const validate = require("../service/candidat");

const dateinscript = () => {
  const year = new Date().getFullYear();
  let month = new Date().getMonth() + 1;
  let date = new Date().getDate();
  if (month < 10) {
    month = `0${month}`;
  }
  if (date < 10) {
    date = `0${date}`;
  }
  return `${year}-${month}-${date}`;
};

const add = (req, res) => {
  let candidat = req.body.data;
  const profilPhoto = `assets${
    req.files.avatar ? req.files.avatar[0].filename : "/avatar/Avatar.png"
  }`;
  const profilCv = `assets${
    req.files.cv ? req.files.cv[0].filename : "/cv/cv.png"
  }`;

  candidat = JSON.parse(candidat);
  const error = validate(candidat);
  if (error) {
    res.status(422).send(error);
  } else {
    models.candidat
      .insert(candidat, profilPhoto, profilCv, dateinscript())
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
console.log(req.params.id)
console.log(req.auth)
if (parseInt(req.params.id) === req.auth.id) {
  models.candidat
    .findOne(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.status(200).json({});
      } else {
        res.status(200).json(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
} else {
  res.sendStatus(404);
}

};

module.exports = {
  add,
  read,
};
