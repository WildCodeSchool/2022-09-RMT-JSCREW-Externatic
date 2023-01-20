const AbstractManager = require("./AbstractManager");

class OffreManager extends AbstractManager {
  constructor() {
    super({ table: "offre" });
  }

  rand(number) {
    return this.connection.query(
      `select id, poste, localisation from  ${this.table} ORDER BY rand() LIMIT ?`,
      [number]
    );
  }

  insert(Offre) {
    return this.connection.query(
      `insert into ${this.table} 
      (contrat, condition_travail, poste, avantages, localisation, dateOffre, date_fin_offre, salaire, 
        mission, profil_recherche, specialitees, entreprise_id, domaine_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        Offre.contrat,
        Offre.condition_travail,
        Offre.avantages,
        Offre.poste,
        Offre.localisation,
        Offre.dateOffre,
        Offre.date_fin_offre,
        Offre.salaire,
        Offre.mission,
        Offre.profil_recherche,
        Offre.specialitees,
        Offre.entreprise_id,
        Offre.domaine_id,
      ]
    );
  }

  findAll() {
    return this.connection.query(
      `SELECT * FROM ${this.table} AS o INNER JOIN entreprise AS e ON e.id = o.entreprise_id`
    );
  }

  find(id) {
    return this.connection.query(`SELECT * FROM  ${this.table} WHERE id = ?`, [
      id,
    ]);
  }

  findCandidatures(id) {
    return this.connection.query(
      `SELECT o.id, o.poste, o.localisation FROM ${this.table} AS o INNER JOIN candidature AS c ON o.id = c.offre_id WHERE c.candidat_id = ?`,
      [id]
    );
  }
}

module.exports = OffreManager;
