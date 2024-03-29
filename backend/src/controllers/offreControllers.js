const models = require("../models");
const validate = require("../service/offre");

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

/**
 * fonction count offre
 */
const getCountOffre = (req, res) => {
  models.offre
    .findCount()
    .then((data) => {
      res.status(200).send(data[0]);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
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
  const offre = req.body;
  offre.dateOffre = dateInscript();
  const error = validate(offre);
  if (error) {
    console.error(error);
    res.status(422).send(error);
  } else {
    models.offre
      .insert(offre)
      .then(([result]) => {
        res
          .location(`/offres/${result.insertId}`)
          .status(201)
          .json({ ...offre, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  }
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
  const offre = req.body;
  delete offre.dateOffre;

  const error = validate(offre);

  if (error) {
    res.status(422).send(error);
  } else {
    models.offre
      .update(offre, parseInt(req.params.id, 10))
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

const browsePage = (req, res) => {
  models.offre
    .findAllPage(req.query)
    .then(([offre]) => {
      models.offre
        .findCountPages(req.query)
        .then(([count]) => {
          res
            .status(200)
            .json({ offre, pages: Math.ceil(count[0].pages / 10) });
        })
        .catch((err) => {
          console.error(err);
          res.sendStatus(500);
        });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const browseJob = (req, res) => {
  models.offre
    .findAllJob()
    .then(([offres]) => {
      res.send(offres);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const browseLocalisation = (req, res) => {
  models.offre
    .findAllLocalisation()
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

module.exports = {
  random,
  browse,
  read,
  add,
  getCountOffre,
  edit,
  browsePage,
  browseJob,
  browseLocalisation,
};
