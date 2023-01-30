const AbstractManager = require("./AbstractManager");

class ConsultantsManager extends AbstractManager {
  constructor() {
    super({ table: "consultant" });
  }

  findAll() {
    return this.connection.query(`SELECT * FROM ${this.table}`);
  }
}

module.exports = ConsultantsManager;
