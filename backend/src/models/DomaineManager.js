const AbstractManager = require("./AbstractManager");

class DomaineManager extends AbstractManager {
  constructor() {
    super({ table: "domaine" });
  }
};


module.exports = DomaineManager;
