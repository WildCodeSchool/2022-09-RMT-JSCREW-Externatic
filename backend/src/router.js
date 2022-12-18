const express = require("express");

const router = express.Router();

const entrepriseControllers = require("./controllers/entrepriseControllers");


// /*-------------exemple route------------------------*/
// router.get("/items", itemControllers.browse);
// router.get("/items/:id", itemControllers.read);
// router.put("/items/:id", itemControllers.edit);
// router.post("/items", itemControllers.add);
// router.delete("/items/:id", itemControllers.destroy);

router.get("/entreprises", entrepriseControllers.browse);
router.get("/entreprises/:id", entrepriseControllers.read);
router.put("/entreprises/:id", entrepriseControllers.edit);
router.post("/entreprises",entrepriseControllers.add);
router.delete("/entreprises/:id", entrepriseControllers.destroy);

module.exports = router;
