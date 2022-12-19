const AbstractManager = require("./AbstractManager");

class CandidatManager extends AbstractManager {
  constructor() {
    super({ table: "candidat" });
  }

  insert(Candidat) {
    return this.connection.query(
      `insert into ${this.table} (photo, nom, prenom, age, adresse, code_postal, ville, pays, email, cv, description, metier, telephone, dateInscription, dateDisponibilite, connexion_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        Candidat.profil_photo,
        Candidat.profil_nom,
        Candidat.profil_prenom,
        Candidat.profil_age,
        Candidat.profil_adresse,
        Candidat.profil_code_postal,
        Candidat.profil_ville,
        Candidat.profil_pays,
        Candidat.profil_email,
        Candidat.profil_cv,
        Candidat.profil_description,
        Candidat.profil_metier,
        Candidat.profil_telephone,
        Candidat.profil_dateInscription,
        Candidat.profil_dateDisponibilite,
        Candidat.profil_connexion_id,
      ]
    );
  }
}

module.exports = CandidatManager;
