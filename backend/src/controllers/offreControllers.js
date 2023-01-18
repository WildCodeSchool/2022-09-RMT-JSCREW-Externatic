const models = require("../models");

// fonction pour mettre à jour les dates en auto
const dateInscript = () => {
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
    .insert(offreForm, dateInscript())
    .then(([result]) => {
      res.location(`/offres/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

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

const edit = (req, res) => {
  const Offre = req.body;

  // TODO validations (length, format...)

  Offre.id = parseInt(req.params.id, 10);

  models.offre
    .update(Offre)
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
};

const read = (req, res) => {
  models.offre
    .find(req.params.id)
    .then(([offres]) => {
      if (offres[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(offres[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = { random, add, browse, edit, read };
