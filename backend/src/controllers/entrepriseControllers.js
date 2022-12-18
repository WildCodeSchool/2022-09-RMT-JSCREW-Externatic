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

const edit = (req, res) => {
  const entreprise = req.body;

  // TODO validations (length, format...)

  entreprise.id = parseInt(req.params.id, 10);

  models.entreprise
    .update(entreprise)
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

const add = (req, res) => {
  const entreprise = req.body;

  // TODO validations (length, format...)

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

const destroy = (req, res) => {
  models.entreprise
    .delete(req.params.id)
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

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};


