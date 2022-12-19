const { rand } = require("../controllers/offreControllers");
const AbstractManager = require("./AbstractManager");

class OffreManager extends AbstractManager {
  constructor() {
    super({ table: "offre" });
  }

  insert(offre) {
    return this.connection.query(
      `insert into ${this.table} (title) values (?)`,
      [offre.title]
    );
  }

  update(offre) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [offre.title, offre.id]
    );
  }

  rand(number) {
    return this.connection.query(`select poste, localisation from  ${this.table} ORDER BY rand() LIMIT ?`, [number]);
  }
}

module.exports = OffreManager;