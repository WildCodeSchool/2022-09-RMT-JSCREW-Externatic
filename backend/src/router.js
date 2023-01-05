const express = require("express");

const router = express.Router();
const offreControllers = require("./controllers/offreControllers");
const entrepriseControllers = require("./controllers/entrepriseControllers");
const candidatControllers = require("./controllers/candidatControllers");
const connexionControllers = require("./controllers/connexionControllers");
const hashPassword = require("./middleware/auth");

router.get("/entreprises", entrepriseControllers.browse);
router.post("/entreprises", entrepriseControllers.add);

router.post("/register", hashPassword, connexionControllers.add);
router.post("/profil", candidatControllers.add);
router.get("/offres", offreControllers.browse);
router.get("/offres/rand", offreControllers.random);
router.post("/offres", offreControllers.add);

router.post("/login", connexionControllers.login);

module.exports = router;
