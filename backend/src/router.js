const express = require("express");

const router = express.Router();
const offreControllers = require("./controllers/offreControllers");
const entrepriseControllers = require("./controllers/entrepriseControllers");

router.get("/entreprises", entrepriseControllers.browse);
router.get("/offres", offreControllers.browse);
router.get("/offres/rand", offreControllers.random);

module.exports = router;
