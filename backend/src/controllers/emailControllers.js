const nodemailer = require("nodemailer");
require("dotenv").config();

const sendMail = async (req) => {
  const email = {
    name: req.nom,
    surname: req.prenom,
    phone: req.telephone,
    email: req.email,
    message:
      "Votre inscription à bien été prise en compte. Un consultant prendra bientôt contacte avec vous.",
  };

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_SENDIN,
    port: process.env.SMTP_PORT_SENDIN,
    secure: false,
    auth: {
      user: process.env.SMTP_SENDIN_USER,
      pass: process.env.SMTP_SENDIN_PASSWORD,
    },
  });

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

  return transporter
    .sendMail(mailOptions)
    .then((info) => {
      console.warn(info);
    })
    .catch((err) => {
      console.warn(err);
    });
};

module.exports = sendMail;
