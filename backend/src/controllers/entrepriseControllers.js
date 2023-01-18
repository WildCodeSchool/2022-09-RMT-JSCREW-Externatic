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

const read = (req, res) => {
  models.entreprise
    .find(req.params.id)
    .then(([entreprises]) => {
      if (entreprises[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(entreprises[0]);
      }
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
// edit entreprise
const edit = (req, res) => {
  const entreprise = req.body;
  delete entreprise.dateInscription;
  // TODO validations (length, format...)
  models.entreprise
    .update(entreprise, parseInt(req.params.id, 10))
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

const random = (req, res) => {
  models.entreprise
    .rand(15)
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  add,
  edit,
  read,
  random,
};
