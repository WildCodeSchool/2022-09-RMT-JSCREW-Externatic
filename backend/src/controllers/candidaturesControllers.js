const models = require("../models");

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

module.exports = {
  edit,
  browseById,
};
