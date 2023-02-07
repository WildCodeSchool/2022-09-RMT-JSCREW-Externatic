const models = require("../models");
const validate = require("../service/candidat");
const sendMail = require("./emailControllers");

const getCount = (req, res) => {
  models.candidat
    .findCount()
    .then((data) => {
      res.status(200).send(data[0]);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const dateinscript = () => {
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

const add = async (req, res) => {
  let candidat = req.body.data;

  const profilPhoto = `assets${
    req.files.avatar ? req.files.avatar[0].filename : "/avatar/Avatar.png"
  }`;
  const profilCv = `assets${
    req.files.cv ? req.files.cv[0].filename : "/cv/cv.png"
  }`;

  candidat = JSON.parse(candidat);

  const email = {
    name: candidat.nom,
    surname: candidat.prenom,
    phone: candidat.telephone,
    email: candidat.email,
    message:
      "Votre inscription a bien été prise en compte. Un consultant prendra bientôt contact avec vous.",
  };

  const mailOptions = {
    from: "glemoine@hotmail.fr",
    to: email.email, // this is the address to which the email will be sent
    subject: "Nouveau message d'Externatic",
    attachments: [
      {
        filename: "Logo-Externatic.png",
        path: "public/assets/images/Logo-Externatic.png",
        cid: "logo",
      },
    ],
    text: `${email.message} \n\n Phone: ${email.phone} \n\n Name: ${email.name} \n\n Surname: ${email.surname} \n\n Email: ${email.email}`,
    html: `<p>Bonjour,</p> <p>${email.message}</p> <p>Rappel de vos coordonnées :</p><p>Téléphone: ${email.phone}</p><p>Nom: ${email.name}</p> <p>Prenom: ${email.surname}</p><p>Email: ${email.email}</p> <img src="cid:logo" height="100" />`,
  };

  const error = validate(candidat);
  if (error) {
    res.status(422).send(error);
  } else {
    try {
      const user = await models.candidat.insert(
        candidat,
        profilPhoto,
        profilCv,
        dateinscript(),
        req.auth.id
      );
      await models.connexion.updateProfil(req.auth.id);
      sendMail(mailOptions);
      res
        .location(`/profil/${user.insertId}`)
        .status(201)
        .json({ id: user.insertId });
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  }
};

const readId = (req, res) => {
  if (parseInt(req.params.id, 10) === req.auth.id) {
    models.candidat
      .findId(req.params.id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.status(200).json({});
        } else {
          res.status(200).json(rows[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(404);
  }
};

const read = (req, res) => {
  if (parseInt(req.params.id, 10) === req.auth.id) {
    models.candidat
      .findOne(req.params.id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.status(200).json({});
        } else {
          res.status(200).json(rows[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(404);
  }
};

const edit = (req, res) => {
  let candidat = req.body;

  const profilPhoto = `assets${
    req.files.avatar ? req.files.avatar[0].filename : null
  }`;
  const profilCv = `assets${req.files.cv ? req.files.cv[0].filename : null}`;

  candidat = JSON.parse(candidat.data);

  const error = validate(candidat);
  candidat.id = parseInt(req.params.id, 10);

  if (error) {
    res.status(422).send(error);
  } else {
    models.candidat
      .update(candidat, profilPhoto, profilCv, req.auth.id)
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

const getId = (req, res) => {
  models.candidat
    .findId(req.auth.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.status(200).json({});
      } else {
        res.status(200).json(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  add,
  read,
  edit,
  getCount,
  readId,
  getId,
};
