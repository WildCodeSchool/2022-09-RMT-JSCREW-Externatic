const express = require("express");

const router = express.Router();
const offreControllers = require("./controllers/offreControllers");
const entrepriseControllers = require("./controllers/entrepriseControllers");
const candidatControllers = require("./controllers/candidatControllers");
const connexionControllers = require("./controllers/connexionControllers");
const {
  hashPassword,
  verifyPassword,
  verifyToken,
} = require("./middleware/auth");

router.get("/offres", offreControllers.browse);
router.get("/offres/rand", offreControllers.random);
router.get("/entreprises", entrepriseControllers.browse);
router.post(
  "/login",
  connexionControllers.getUserByUtilisateurWithPasswordAndPassToNext,
  verifyPassword
);
router.post("/register", hashPassword, connexionControllers.add);

router.use(verifyToken);

router.post("/entreprises", entrepriseControllers.add);
router.post("/profil", candidatControllers.add);
router.post("/offres", offreControllers.add);

module.exports = router;
