const AbstractManager = require("./AbstractManager");

class ConnexionManager extends AbstractManager {
  constructor() {
    super({ table: "connexion" });
  }

  insert(connexion) {
    return this.connection.query(
      `INSERT INTO ${this.table} (utilisateur, mot_de_passe, role) VALUES (?, ?, ?)`,
      [connexion.utilisateur, connexion.mot_de_passe, connexion.role]
    );
  }
}

module.exports = ConnexionManager;
