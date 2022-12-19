const express = require("express");

const router = express.Router();

const entrepriseControllers = require("./controllers/entrepriseControllers");
const offresControllers = require("./controllers/offresControllers");

// /*-------------exemple route------------------------*/
// router.get("/items", itemControllers.browse);
// router.get("/items/:id", itemControllers.read);
// router.put("/items/:id", itemControllers.edit);
// router.post("/items", itemControllers.add);
// router.delete("/items/:id", itemControllers.destroy);

router.get("/entreprises", entrepriseControllers.browse);
router.get("/offres", offresControllers.browse);

module.exports = router;
