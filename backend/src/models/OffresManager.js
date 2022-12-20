const AbstractManager = require("./AbstractManager");

class OffresManager extends AbstractManager {
  constructor() {
    super({ table: "offre" });
  }

  findAll() {
    return this.connection.query(
      `SELECT poste, localisation FROM ${this.table} AS o INNER JOIN entreprise AS e ON e.id = o.entreprise_id`
    );
  }
}

module.exports = OffresManager;
