const express = require("express");
const multer = require("multer");

const router = express.Router();
const consultantControllers = require("./controllers/consultantControllers");
const domaineControllers = require("./controllers/domaineControllers");
const offreControllers = require("./controllers/offreControllers");
const entrepriseControllers = require("./controllers/entrepriseControllers");
const candidatControllers = require("./controllers/candidatControllers");
const connexionControllers = require("./controllers/connexionControllers");
const candidaturesControllers = require("./controllers/candidaturesControllers");
const contactControllers = require("./controllers/contactControllers");
const consultantsControllers = require("./controllers/consultantsControllers");


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

const upload = multer({
  storage,
  limits: { fileSize: "5MB", fieldSize: "5MB" },
});
// fin de la configuration de l'upload

// routes publiques

router.get("/offreForm", offreControllers.browse);
router.get("/offres", offreControllers.browsePage);
router.get("/offres/rand", offreControllers.random);
router.get("/offres/:id", offreControllers.read);
router.get("/job", offreControllers.browseJob);
router.get("/localisation", offreControllers.browseLocalisation);
router.get("/entreprises", entrepriseControllers.browse);
router.get("/entreprises/rand", entrepriseControllers.random);
router.get("/candidat/:id", checkAuth, candidatControllers.readId);
router.post("/candidatures", checkAuth, candidaturesControllers.add);
router.post("/login", connexionControllers.validateUser);
router.post("/register", hashPassword, connexionControllers.add);
router.post("/contact", contactControllers.add);



router.get("/consultants", consultantsControllers.browse);
router.get("/entreprises/:id", entrepriseControllers.read);
router.get("/domaines/", domaineControllers.browse);
router.get("/consultants/:id", consultantControllers.read);
router.get("/nbCandidats", candidatControllers.getCount);
router.get("/nbEntreprises", entrepriseControllers.getCountEntp);
router.get("/nbOffres", offreControllers.getCountOffre);

// mur d'authentification
router.put("/firstConnexion", checkAuth, connexionControllers.edit);
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
router.get(
  "/candidaturesForConsultants/:id",
  checkAuth,
  candidaturesControllers.browseCandidaturesForConsultant
);
router.put(
  "/candidaturesForConsultants/:id",
  checkAuth,
  candidaturesControllers.editCandidaturesForConsultant
);

router.post("/consultants", consultantControllers.add);
router.put("/consultants/:id", consultantControllers.edit);
router.delete("/consultants/:id", consultantControllers.destroy);
router.post("/entreprises", checkAuth, entrepriseControllers.add);
router.put("/entreprises/:id", entrepriseControllers.edit);

router.post("/offres", offreControllers.add);
router.put("/offres/:id", offreControllers.edit);

module.exports = router;
