const models = require("../models");
const validate = require("../service/candidat");

const add = (req, res) => {
  const candidat = req.body;
  console.log(req.files);
  console.log(candidat);
  res.sendStatus(201)
  // const error = validate(candidat);
  // if (error) {
  //   res.status(422).send(error);
  // } else {
  //   models.candidat
  //     .insert(candidat)
  //     .then(([result]) => {
  //       res.location(`/profil/${result.insertId}`).sendStatus(201);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       res.sendStatus(500);
  //     });
  // }
};

module.exports = {
  add,
};
