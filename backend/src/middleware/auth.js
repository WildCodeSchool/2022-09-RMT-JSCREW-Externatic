const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const hashPassword = (req, res, next) => {
  argon2
    .hash(req.body.mot_de_passe, hashingOptions)
    .then((hashedPassword) => {
      req.body.hashedPassword = hashedPassword;
      delete req.body.mot_de_passe;

      next();
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const verifyPassword = (req, res) => {
  argon2
    .verify(req.utilisateur.hashedPassword, req.body.mot_de_passe)
    .then((isVerified) => {
      if (isVerified) {
        const payload = { sub: req.utilisateur.id };

        const token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });

        delete req.utilisateur.hashedPassword;
        res
          .status(201)
          .cookie("access_token", token, {
            httpOnly: true,
          })
          .json(req.utilisateur);
      } else {
        res.sendStatus(401);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const verifyToken = (req, res, next) => {
  try {
    const authorizationHeader = req.get("Authorization");

    if (authorizationHeader == null) {
      throw new Error("Authorization header is missing");
    }

    const [type, token] = authorizationHeader.split(" ");

    if (type !== "Bearer") {
      throw new Error("Authorization header has not the 'Bearer' type");
    }

    req.payload = jwt.verify(token, process.env.JWT_SECRET);

    next();
  } catch (err) {
    console.error(err);
    res.sendStatus(401);
  }
};

module.exports = { hashPassword, verifyPassword, verifyToken };
