const express = require("express");

const router = express.Router();

const offresControllers = require("./controllers/offreControllers")
const itemControllers = require("./controllers/itemControllers");

router.get("/offres/rand", offresControllers.random);

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

module.exports = router;
