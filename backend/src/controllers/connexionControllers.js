const jwt = require("jsonwebtoken");
const models = require("../models");
const { verifyHash, hashNewPassword } = require("../service/auth");
const validateConnexion = require("../service/connexion");

const add = (req, res) => {
  const connexion = req.body;
  const error = validateConnexion(connexion);
  if (error) {
    res.status(422).send(error);
  } else {
    models.connexion
      .insert(connexion)
      .then(([result]) => {
        res.location(`/register/${result.insertId}`).status(201).send(result);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  }
};

const validateUser = (req, res) => {
  const { utilisateur } = req.body;

  models.connexion
    .login(utilisateur)
    .then(async ([user]) => {
      if (user[0]) {
        if (await verifyHash(user[0].hashedPassword, req.body.mot_de_passe)) {
          const myUser = { ...user[0] };
          delete myUser.hashedPassword;
          const token = jwt.sign(myUser, process.env.JWT_SECRET, {
            expiresIn: "24h",
          });

          res
            .status(201)
            .cookie("access_token", token, {
              httpOnly: true,
            })
            .json(myUser);
        } else {
          res.sendStatus(401);
        }
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const edit = (req, res) => {
  if (req.body.password === req.body.confirmpassword) {
    models.connexion
      .login(req.auth.utilisateur)
      .then(async ([user]) => {
        if (user[0]) {
          if (await verifyHash(user[0].hashedPassword, req.body.oldpassword)) {
            try {
              const newHash = await hashNewPassword(req.body.password);
              await models.connexion.updatePassword(
                req.auth.utilisateur,
                newHash
              );
              const myUser = { ...user[0] };
              myUser.profil = 0;
              delete myUser.hashedPassword;
              const token = jwt.sign(myUser, process.env.JWT_SECRET, {
                expiresIn: "24h",
              });

              res
                .status(201)
                .cookie("access_token", token, {
                  httpOnly: true,
                })
                .json(myUser);
            } catch (error) {
              console.error(error);
              res.sendStatus(401);
            }
          } else {
            res.sendStatus(401);
          }
        } else {
          res.sendStatus(404);
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Error retrieving data from database");
      });
  } else {
    res.sendStatus(401);
  }
};

module.exports = {
  add,
  validateUser,
  edit,
};
