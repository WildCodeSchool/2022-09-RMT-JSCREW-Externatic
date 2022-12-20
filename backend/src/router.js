const express = require("express");

const router = express.Router();

const entrepriseControllers = require("./controllers/entrepriseControllers");
const candidatControllers = require("./controllers/candidatControllers");

// /*-------------exemple route------------------------*/
// router.get("/items", itemControllers.browse);
// router.get("/items/:id", itemControllers.read);
// router.put("/items/:id", itemControllers.edit);
// router.post("/items", itemControllers.add);
// router.delete("/items/:id", itemControllers.destroy);

router.get("/entreprises", entrepriseControllers.browse);


router.post("/profil", candidatControllers.add);

router.get("/offres/rand", offresControllers.random);


module.exports = router;
