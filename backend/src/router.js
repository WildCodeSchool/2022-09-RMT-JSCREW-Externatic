const express = require("express");
const multer = require("multer");

const router = express.Router();
const offreControllers = require("./controllers/offreControllers");
const entrepriseControllers = require("./controllers/entrepriseControllers");
const candidatControllers = require("./controllers/candidatControllers");
const connexionControllers = require("./controllers/connexionControllers");
const { hashPassword } = require("./service/auth");
// const checkAuth = require("./middleware/auth");

// configuration de l'upload profil
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "public/assets");
  },
  filename(req, file, cb) {
    const fileArray = file.originalname.split(".");
    const ext = fileArray.pop();
    const filename = fileArray.join("_").split(" ").join("_");
    cb(
      null,
      `${
        file.fieldname === "cv" ? "/cv/" : "/avatar/"
      }${`${filename}_${Date.now()}.${ext}`}`
    );
  },
});

const upload = multer({ storage });
// fin de la configuration de l'upload

// routes publiques
router.get("/offres/:id", offreControllers.read);
router.get("/offres", offreControllers.browse);
router.get("/offres/rand", offreControllers.random);
router.get("/entreprises", entrepriseControllers.browse);

router.post("/login", connexionControllers.validateUser);
router.post("/register", hashPassword, connexionControllers.add);
// mur d'authentification
// router.use(checkAuth);

// routes privées
router.post("/entreprises", entrepriseControllers.add);
router.post(
  "/profil",
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "cv", maxCount: 1 },
  ]),
  candidatControllers.add
);
router.post("/offres", offreControllers.add);
router.put("/offres/:id", offreControllers.edit);
module.exports = router;
