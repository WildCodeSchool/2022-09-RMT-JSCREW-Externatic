const express = require("express");
const multer = require("multer");

const router = express.Router();
const offreControllers = require("./controllers/offreControllers");
const entrepriseControllers = require("./controllers/entrepriseControllers");
const candidatControllers = require("./controllers/candidatControllers");

//configuration de l'upload profil
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/assets')
  },
  filename: function (req, file, cb) {
    const fileArray = file.originalname.split(".");
    const ext = fileArray.pop();
    const filename = fileArray.join("_").split(" ").join("_");
    cb(null, `${file.fieldname === "cv" ? "/cv/" : "/avatar/"}${filename + "_" + Date.now() + "." + ext}`)
  }
})

const upload = multer({ storage: storage });
//fin de la configuration de l'upload

router.get("/entreprises", entrepriseControllers.browse);
router.post("/entreprises", entrepriseControllers.add);

router.post("/profil",upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'cv', maxCount: 1 }]) ,candidatControllers.add);
router.get("/offres", offreControllers.browse);
router.get("/offres/rand", offreControllers.random);
router.post("/offres", offreControllers.add);

module.exports = router;
