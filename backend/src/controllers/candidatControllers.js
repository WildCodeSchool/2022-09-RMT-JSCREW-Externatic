const models = require("../models");
const validate = require("../service/candidat");
const sendMail = require("./emailControllers");

const getCount = (req, res) => {
  models.candidat
    .findCount()
    .then((data) => {
      res.status(200).send(data[0]);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

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

const add = async (req, res) => {
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
    try {
      const user = await models.candidat.insert(
        candidat,
        profilPhoto,
        profilCv,
        dateinscript(),
        candidat.connexion_id
      );
      await models.connexion.updateProfil(req.auth.id);
      sendMail(candidat);
      res
        .location(`/profil/${user.insertId}`)
        .status(201)
        .json({ id: user.insertId });
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  }
};

const read = (req, res) => {
  if (parseInt(req.params.id, 10) === req.auth.id) {
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

const edit = (req, res) => {
  let candidat = req.body;

  const profilPhoto = `assets${
    req.files.avatar ? req.files.avatar[0].filename : null
  }`;
  const profilCv = `assets${req.files.cv ? req.files.cv[0].filename : null}`;

  candidat = JSON.parse(candidat.data);

  const error = validate(candidat);
  candidat.id = parseInt(req.params.id, 10);

  if (error) {
    res.status(422).send(error);
  } else {
    models.candidat
      .update(candidat, profilPhoto, profilCv, candidat.id)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  }
};

module.exports = {
  add,
  read,
  edit,
  getCount,
};
