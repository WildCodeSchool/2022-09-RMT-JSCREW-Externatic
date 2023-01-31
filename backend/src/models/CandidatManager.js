const AbstractManager = require("./AbstractManager");

class CandidatManager extends AbstractManager {
  constructor() {
    super({ table: "candidat" });
  }

  insert(candidat, profilPhoto, profilCv, dateInscript, connexionId) {
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
        connexionId,
      ]
    );
  }

  findId(connexionId) {
    return this.connection.query(
      `select id from  ${this.table} where connexion_id = ?`,
      [connexionId]
    );
  }

  findOne(connexionId) {
    return this.connection.query(
      `select * from  ${this.table} where connexion_id = ?`,
      [connexionId]
    );
  }

  findCount() {
    return this.connection.query(
      `select count(id) as count from  ${this.table}`
    );
  }

  update(candidat, profilPhoto, profilCv, connexionId) {
    const newCandidat = { ...candidat };
    const dateDispo = newCandidat.dateDisponibilite;
    delete newCandidat.dateDisponibilite;
    delete newCandidat.dateInscription;

    if (profilPhoto === "assetsnull") {
      delete newCandidat.photo;
    } else {
      newCandidat.photo = profilPhoto;
    }
    if (profilCv === "assetsnull") {
      delete newCandidat.cv;
    } else {
      newCandidat.cv = profilCv;
    }

    return this.connection.query(
      `update ${this.table} set ?, dateDisponibilite = ? where connexion_id = ?`,
      [newCandidat, dateDispo.split("T").shift(), connexionId]
    );
  }
}

module.exports = CandidatManager;
