const AbstractManager = require("./AbstractManager");

class EntrepriseManager extends AbstractManager {
  constructor() {
    super({ table: "entreprise" });
  }

  insert(entreprise) {
    return this.connection.query(
      `insert into ${this.table} (logo, nom_entreprise, adresse, code_postal, ville, pays, email, telephone, description, numero_siret, nombre_employes, dateInscription, domaine_id) values (?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [
        entreprise.logo,
        entreprise.nom_entreprise,
        entreprise.adresse,
        entreprise.code_postal,
        entreprise.ville,
        entreprise.pays,
        entreprise.email,
        entreprise.telephone,
        entreprise.description,
        entreprise.numero_siret,
        entreprise.nombre_employes,
        entreprise.dateInscription,
        entreprise.domaine_id,
      ]
    );
  }

  update(entreprise, id) {
    return this.connection.query(`update ${this.table} set ? where id = ?`, [
      entreprise,
      id,
    ]);
  }

  findCount() {
    return this.connection.query(
      `select count(id) as count from  ${this.table}`
    );
  }

  rand(number) {
    return this.connection.query(
      `select logo from  ${this.table} WHERE logo IS NOT NULL ORDER BY rand() LIMIT ?`,
      [number]
    );
  }
}

module.exports = EntrepriseManager;
