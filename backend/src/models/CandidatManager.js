const AbstractManager = require("./AbstractManager");

class CandidatManager extends AbstractManager {
  constructor() {
    super({ table: "candidat" });
  }

  insert(candidat, profilPhoto, profilCv) {
    return this.connection.query(
      `insert into ${this.table} (photo, nom, prenom, age, adresse, code_postal, ville, pays, email, cv, description, metier, telephone, dateInscription, dateDisponibilite, connexion_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        profilPhoto,
        candidat.profil_nom,
        candidat.profil_prenom,
        candidat.profil_age,
        candidat.profil_adresse,
        candidat.profil_code_postal,
        candidat.profil_ville,
        candidat.profil_pays,
        candidat.profil_email,
        profilCv,
        candidat.profil_description,
        candidat.profil_metier,
        candidat.profil_telephone,
        candidat.profil_dateInscription,
        candidat.profil_dateDisponibilite,
        candidat.profil_connexion_id,
      ]
    );
  }

  findOne(connexionId) {
    return this.connection.query(
      `select * from  ${this.table} where connexion_id = ?`,
      [connexionId]
    );
  }
}

module.exports = CandidatManager;
