const AbstractManager = require("./AbstractManager");

class ConnexionManager extends AbstractManager {
  constructor() {
    super({ table: "connexion" });
  }

  insert(connexion) {
    return this.connection.query(
      `INSERT INTO ${this.table} (utilisateur, hashedPassword, role, profil) VALUES (?, ?, ?, ?)`,
      [connexion.utilisateur, connexion.hashedPassword, "candidat", 0]
    );
  }

  insertConsultant(connexion) {
    return this.connection.query(
      `INSERT INTO ${this.table} (utilisateur, hashedPassword, role, profil) VALUES (?, ?, ?, ?)`,
      [
        connexion.consultant.email,
        "$argon2id$v=19$m=65536,t=5,p=1$OaCwshalU7Ds2AbGbmdjCQ$sCoco2uqGH5xmrnaUdhB/gzB4C5xPUPpT3Mbk8Wi888",
        "consultant",
        1,
      ]
    );
  }

  login(utilisateur) {
    return this.connection.query(
      "select * from connexion where utilisateur = ?",
      [utilisateur]
    );
  }

  updateProfil(candidat) {
    return this.connection.query(
      `update ${this.table} set profil = true where id = ?`,
      [candidat]
    );
  }

  updatePassword(email, password) {
    return this.connection.query(
      `update ${this.table} set profil = true, hashedPassword = ? where utilisateur = ?`,
      [password, email]
    );
  }
}

module.exports = ConnexionManager;
