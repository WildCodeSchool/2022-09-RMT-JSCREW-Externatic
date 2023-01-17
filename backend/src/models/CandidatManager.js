const AbstractManager = require("./AbstractManager");

class CandidatManager extends AbstractManager {
  constructor() {
    super({ table: "candidat" });
  }

  insert(candidat, profilPhoto, profilCv, dateInscript) {
    return this.connection.query(
      `insert into ${this.table} (photo, nom, prenom, age, adresse, code_postal, ville, pays, email, cv, description, metier, telephone, dateInscription, dateDisponibilite, connexion_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        profilPhoto,
        candidat.nom,
        candidat.prenom,
        candidat.age,
        candidat.adresse,
        candidat.code_postal,
        candidat.ville,
        candidat.pays,
        candidat.email,
        profilCv,
        candidat.description,
        candidat.metier,
        candidat.telephone,
        dateInscript,
        candidat.dateDisponibilite,
        candidat.connexion_id,
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
