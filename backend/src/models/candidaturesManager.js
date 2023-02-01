const AbstractManager = require("./AbstractManager");

class CandidaturesManager extends AbstractManager {
  constructor() {
    super({ table: "candidature" });
  }

  update(id, userId) {
    return this.connection.query(
      `update ${this.table} AS c
      INNER JOIN candidat AS ca ON ca.id = c.candidat_id
      set suiviParCandidat = ? where c.id = ? AND ca.connexion_id = ?`,
      [false, id, userId]
    );
  }

  findCandidatures(id) {
    return this.connection.query(
      `SELECT c.id, c.dateCandidature, c.suiviParCandidat, o.localisation,  o.poste, o.id as offre_id, co.email 
      FROM ${this.table} AS c 
      INNER JOIN offre AS o ON o.id = c.offre_id 
      INNER JOIN entreprise AS e ON e.id = o.entreprise_id 
      INNER JOIN consultant AS co ON co.id = e.consultant_id 
      INNER JOIN candidat AS ca ON ca.id = c.candidat_id
      WHERE ca.connexion_id = ? AND c.suiviParCandidat = ? 
      ORDER BY c.dateCandidature DESC`,
      [id, 1]
    );
  }

  findCandidaturesForConsultant(id) {
    return this.connection.query(
      `SELECT e.nom_entreprise, o.poste, o.id, c.dateCandidature, ca.nom, ca.prenom, ca.telephone, ca.email, ca.cv, c.id AS candidature_id, ca.email, co.nom_consultant
      FROM ${this.table} AS c
      INNER JOIN candidat AS ca ON ca.id = c.candidat_id
      INNER JOIN offre AS o ON o.id = c.offre_id
      INNER JOIN entreprise AS e ON e.id = o.entreprise_id
      INNER JOIN consultant AS co ON co.id = e.consultant_id
      INNER JOIN connexion AS cx ON cx.id = co.connexion_id
      WHERE cx.id = ? AND c.traiteParConsultant = ?
      ORDER BY e.nom_entreprise ASC, c.dateCandidature ASC`,
      [id, 0]
    );
  }

  updateForConsultant(id, userId) {
    return this.connection.query(
      `update ${this.table} AS c
      INNER JOIN offre AS o ON o.id = c.offre_id
      INNER JOIN entreprise AS e ON e.id = o.entreprise_id
      INNER JOIN consultant AS co ON co.id = e.consultant_id
       set traiteParConsultant = ?
        where c.id = ? AND co.connexion_id = ?`,
      [true, id, userId]
    );
  }

  insert(candidature) {
    return this.connection.query(
      `INSERT INTO ${this.table} 
      (candidat_id, offre_id, dateCandidature) VALUES (?, ?, ?)`,
      [
        candidature.candidat_id,
        candidature.offreId,
        candidature.dateInscription,
      ]
    );
  }
}

module.exports = CandidaturesManager;
