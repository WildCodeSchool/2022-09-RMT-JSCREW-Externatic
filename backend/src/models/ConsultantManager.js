const AbstractManager = require("./AbstractManager");

class ConsultantManager extends AbstractManager {
  constructor() {
    super({ table: "consultant" });
  }

  findAll() {
    return this.connection.query(`SELECT * FROM ${this.table}`);
  }

  insert(consult, connexionId) {
    return this.connection.query(
      `insert into ${this.table} (image_url, nom_consultant, role, telephone, email, LinkedIn, connexion_id) values (?, ?, ?, ?, ?, ?, ? )`,
      [
        consult.image_url,
        consult.nom_consultant,
        consult.role,
        consult.telephone,
        consult.email,
        consult.LinkedIn,
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

  update(consultant, connexionId) {
    const newConsultant = { ...consultant };
    return this.connection.query(
      `update ${this.table} set ? where connexionId = ?`,
      [newConsultant, connexionId]
    );
  }
}

module.exports = ConsultantManager;
