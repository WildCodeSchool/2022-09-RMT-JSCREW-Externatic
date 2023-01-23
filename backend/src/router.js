const express = require("express");
const multer = require("multer");

const router = express.Router();
const offreControllers = require("./controllers/offreControllers");
const entrepriseControllers = require("./controllers/entrepriseControllers");
const candidatControllers = require("./controllers/candidatControllers");
const connexionControllers = require("./controllers/connexionControllers");
const { hashPassword } = require("./service/auth");
const checkAuth = require("./middleware/auth");

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

const upload = multer({ storage, limits: {fileSize: 5MB, 
fieldSize: 5MB}} });
// fin de la configuration de l'upload

// routes publiques
router.get("/offres", offreControllers.browse);
router.get("/offres/rand", offreControllers.random);
router.get("/offres/:id", offreControllers.read);
router.get("/entreprises", entrepriseControllers.browse);
router.get("/entreprises/rand", entrepriseControllers.random);
router.post("/login", connexionControllers.validateUser);
router.post("/register", hashPassword, connexionControllers.add);
router.get("/candidatures/:id", offreControllers.candidatures);

// mur d'authentification
router.use(checkAuth);

router.get("/profil/:id", candidatControllers.read);

router.put(
  "/profil/:id",
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "cv", maxCount: 1 },
  ]),
  candidatControllers.edit
);

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

router.post("/register", connexionControllers.add);

router.post("/offres", offreControllers.add);

module.exports = router;
