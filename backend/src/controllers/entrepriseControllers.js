const models = require("../models");
const validateEntreprise = require("../service/entreprise");

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
  let entreprise = req.body;
  entreprise.dateInscription = dateInscript();
  const error = validateEntreprise(entreprise);
  if (error) {
    console.error(error);
    res.status(422).send(error);
  } else {
    models.entreprise
      .insert(entreprise)
      .then(([result]) => {
        res
          .location(`/entreprise/${result.insertId}`)
          .status(201)
          .json({ ...entreprise, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  }
};
// edit entreprise
const edit = (req, res) => {
  let entreprise = req.body;
  delete entreprise.dateInscription;
  // TODO validations (length, format...)

  const error = validateEntreprise(entreprise);
  if (error) {
    res.status(422).send(error);
  } else {
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
  }
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
