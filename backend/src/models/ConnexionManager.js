const AbstractManager = require("./AbstractManager");

class ConnexionManager extends AbstractManager {
  constructor() {
    super({ table: "connexion" });
  }

  insert(connexion) {
    return this.connection.query(
      `INSERT INTO ${this.table} (utilisateur, hashedPassword, role) VALUES (?, ?, ?)`,
      [connexion.utilisateur, connexion.hashedPassword, "candidat"]
    );
  }

  login(utilisateur) {
    return this.connection.query(
      "select * from connexion where utilisateur = ?",
      [utilisateur]
    );
  }
}

module.exports = ConnexionManager;
