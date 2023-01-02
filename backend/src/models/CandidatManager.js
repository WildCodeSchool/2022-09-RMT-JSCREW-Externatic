const AbstractManager = require("./AbstractManager");

class CandidatManager extends AbstractManager {
  constructor() {
    super({ table: "candidat" });
  }

  insert(candidat) {
    return this.connection.query(
      `insert into ${this.table} (photo, nom, prenom, age, adresse, code_postal, ville, pays, email, cv, description, metier, telephone, dateInscription, dateDisponibilite, connexion_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        candidat.profil_photo,
        candidat.profil_nom,
        candidat.profil_prenom,
        candidat.profil_age,
        candidat.profil_adresse,
        candidat.profil_code_postal,
        candidat.profil_ville,
        candidat.profil_pays,
        candidat.profil_email,
        candidat.profil_cv,
        candidat.profil_description,
        candidat.profil_metier,
        candidat.profil_telephone,
        candidat.profil_dateInscription,
        candidat.profil_dateDisponibilite,
        candidat.profil_connexion_id,
      ]
    );
  }
}

module.exports = CandidatManager;
