const express = require("express");

const router = express.Router();
const offreControllers = require("./controllers/offreControllers");
const entrepriseControllers = require("./controllers/entrepriseControllers");
const candidatControllers = require("./controllers/candidatControllers");

router.get("/entreprises", entrepriseControllers.browse);
router.post("/entreprises", entrepriseControllers.add);

router.post("/profil", candidatControllers.add);
router.get("/offres", offreControllers.browse);
router.get("/offres/rand", offreControllers.random);


module.exports = router;
