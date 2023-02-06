const sendMail = require("./emailControllers");

const add = async (req, res) => {
  const contact = req.body;
  const email = {
    name: contact.nom,
    email: contact.email,
    message: contact.message,
  };

  const mailOptions = {
    from: email.email,
    to: "karimaoudiaa@gmail.com", // this is the address to which the email will be sent
    subject: `Message de ${contact.nom}`,

    text: `${email.message} \n\n Name: ${email.name} \n\n Email: ${email.email}`,
    html: `<p>Bonjour,</p> <p>Mr ${email.name},vous à laissé le message:</p><p>${email.message}</p><p>Email: ${email.email}</p><p>Cordialement</p>`,
  };
  sendMail(mailOptions);
  res.sendStatus(200);
};

module.exports = {
  add,
};
