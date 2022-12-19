const AbstractManager = require("./AbstractManager");

class EntrepriseManager extends AbstractManager {
  constructor() {
    super({ table: "entreprise" });
  }
}

module.exports = EntrepriseManager;
