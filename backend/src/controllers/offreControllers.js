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

// create offre formulaire

const add = (req, res) => {
  const offreForm = req.body;

  models.offre
    .insert(offreForm)
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

const read = (req, res) => {
  models.offre
    .find(req.params.id)
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

const candidatures = (req, res) => {
  models.offre
    .findCandidatures(req.params.id)
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = { random, browse, read, add, candidatures };
