const AbstractManager = require("./AbstractManager");

class ConsultantManager extends AbstractManager {
  constructor() {
    super({ table: "consultant" });
  }

  findAll() {
    return this.connection.query(`SELECT * FROM ${this.table}`);
  }

  insert(consultant, connexionId) {
    return this.connection.query(
      `insert into ${this.table} (image_url, nom_consultant, role, telephone, email, LinkedIn, connexion_id) values (?, ?, ?, ?, ?, ?, ? )`,
      [
        consultant.image_url,
        consultant.nom_consultant,
        consultant.role,
        consultant.telephone,
        consultant.email,
        consultant.LinkedIn,
        connexionId,
      ]
    );
  }

  findOne(connexionId) {
    return this.connection.query(
      `select * from  ${this.table} where connexion_id = ?`,
      [connexionId]
    );
  }

  update(consultant, id) {
    return this.connection.query(
      `update ${this.table} set ? where connexionId = ?`,
      [consultant, id]
    );
  }
}

module.exports = ConsultantManager;
