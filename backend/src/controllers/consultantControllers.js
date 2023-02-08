const models = require("../models");
const validate = require("../service/consultants");

const browse = (req, res) => {
  models.consultant
    .findAll()
    .then(([consultants]) => {
      res.send(consultants);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.consultant
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

const add = async (req, res) => {
  const consultant = req.body;

  const error = validate(consultant);
  if (error) {
    console.error(error);
    res.status(422).send(error);
  } else {
    try {
      const result = await models.connexion.insertConsultant({
        consultant,
      });
      const result1 = await models.consultant.insert(
        consultant,
        result[0].insertId
      );
      res
        .location(`/consultants/${result[0].insertId}`)
        .status(201)
        .json({ connexion_id: result[0].insertId, id: result1[0].insertId });
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  }
};

const edit = (req, res) => {
  const consultant = req.body;
  const error = validate(consultant);

  if (error) {
    res.status(422).send(error);
  } else {
    models.consultant
      .update(consultant, parseInt(req.params.id, 10))
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

const destroy = (req, res) => {
  models.consultant
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

module.exports = { browse, read, add, edit, destroy };
