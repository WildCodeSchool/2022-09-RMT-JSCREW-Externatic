const models = require("../models");

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

const edit = (req, res) => {
  const id = parseInt(req.params.id, 10);
  models.candidature
    .update(id, req.auth.id)
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

const browseById = (req, res) => {
  if (parseInt(req.params.user_id, 10) === req.auth.id) {
    models.candidature
      .findCandidatures(req.params.user_id)
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(401);
  }
};

const browseCandidaturesForConsultant = (req, res) => {
  if (parseInt(req.params.id, 10) === req.auth.id) {
    models.candidature
      .findCandidaturesForConsultant(req.params.id)
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(401);
  }
};

const editCandidaturesForConsultant = (req, res) => {
  const id = parseInt(req.params.id, 10);

  models.candidature
    .updateForConsultant(id, req.auth.id)
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
  const offre = req.body;
  offre.dateInscription = dateInscript();
  models.candidature
    .insert(offre)
    .then(([result]) => {
      res
        .location(`/candidatures/${result.insertId}`)
        .status(201)
        .json({ ...offre, id: result.insertId });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  edit,
  browseById,
  browseCandidaturesForConsultant,
  editCandidaturesForConsultant,
  add,
};
