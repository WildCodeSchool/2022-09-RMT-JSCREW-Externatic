const AbstractManager = require("./AbstractManager");

class ItemManager extends AbstractManager {
  constructor() {
    super({ table: "consultant" });
  }

  findAll() {
    return this.connection.query(`SELECT * FROM ${this.table}`);
  }

  insert(consult) {
    return this.connection.query(
      `insert into ${this.table} (image_url, nom_consultant, role, telephone, email, LinkedIn, connexion_id) values (?, ?, ?, ?, ?, ?, ? )`,
      [
        consult.image_url,
        consult.nom_consultant,
        consult.role,
        consult.telephone,
        consult.email,
        consult.LinkedIn,
        consult.connexion_id,
      ]
    );
  }

  update(consultant) {
    return this.connection.query(`update ${this.table} set ? where id = ?`, [
      consultant,
      consultant.id,
    ]);
  }
}

module.exports = ItemManager;
