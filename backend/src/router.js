const express = require("express");
const multer = require("multer");

const router = express.Router();
const domaineControllers = require("./controllers/domaineControllers");
const offreControllers = require("./controllers/offreControllers");
const entrepriseControllers = require("./controllers/entrepriseControllers");
const candidatControllers = require("./controllers/candidatControllers");
const connexionControllers = require("./controllers/connexionControllers");
const candidaturesControllers = require("./controllers/candidaturesControllers");
const contactControllers = require("./controllers/contactControllers");
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

const upload = multer({ storage });
// fin de la configuration de l'upload

// routes publiques
router.get("/offres", offreControllers.browse);
router.get("/offres/rand", offreControllers.random);
router.get("/offres/:id", offreControllers.read);
router.get("/entreprises", entrepriseControllers.browse);
router.get("/entreprises/rand", entrepriseControllers.random);
router.post("/login", connexionControllers.validateUser);
router.post("/register", hashPassword, connexionControllers.add);
router.post("/contact", contactControllers.add);

router.get("/entreprises/:id", entrepriseControllers.read);
router.get("/domaines/", domaineControllers.browse);

router.get("/nbCandidats", candidatControllers.getCount);
router.get("/nbEntreprises", entrepriseControllers.getCountEntp);
router.get("/nbOffres", offreControllers.getCountOffre);

// mur d'authentification

router.get("/profil/:id", checkAuth, candidatControllers.read);

router.put(
  "/profil/:id",
  checkAuth,
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "cv", maxCount: 1 },
  ]),
  candidatControllers.edit
);

// routes privées
router.post(
  "/profil",
  checkAuth,
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "cv", maxCount: 1 },
  ]),
  candidatControllers.add
);

router.get(
  "/candidatures/:user_id",
  checkAuth,
  candidaturesControllers.browseById
);
router.put("/candidatures/:id", checkAuth, candidaturesControllers.edit);

router.post("/entreprises", checkAuth, entrepriseControllers.add);
router.put("/entreprises/:id", entrepriseControllers.edit);

router.post("/offres", offreControllers.add);
router.put("/offres/:id", offreControllers.edit);

module.exports = router;
