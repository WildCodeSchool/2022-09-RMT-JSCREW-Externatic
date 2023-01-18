const AbstractManager = require("./AbstractManager");

class OffreManager extends AbstractManager {
  constructor() {
    super({ table: "offre" });
  }

  rand(number) {
    return this.connection.query(
      `select poste, localisation from  ${this.table} ORDER BY rand() LIMIT ?`,
      [number]
    );
  }

  // insérer des offres dans le formulaire
  insert(Offre, dateInscript) {
    return this.connection.query(
      `insert into ${this.table} 
      (contrat, condition_travail,  avantages, poste, localisation ,dateOffre, date_fin_offre, salaire, 
        mission, profil_recherche, specialitees, entreprise_id, domaine_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        Offre.contrat,
        Offre.condition_travail,
        Offre.avantages,
        Offre.poste,
        Offre.localisation,
        dateInscript,
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

  // mise à jour des offres avec UPDATE
  update(Offre) {
    return this.connection.query(
      `update ${this.table} set contrat = ?, condition_travail = ?, avantages = ?, poste = ?, localisation = ?, date_fin_offre = ?, salaire = ?, 
      mission = ?, profil_recherche = ?, specialitees = ?, entreprise_id = ?, domaine_id = ? where id = ?`,
      [
        Offre.contrat,
        Offre.condition_travail,
        Offre.avantages,
        Offre.poste,
        Offre.localisation,
        Offre.date_fin_offre,
        Offre.salaire,
        Offre.mission,
        Offre.profil_recherche,
        Offre.specialitees,
        Offre.entreprise_id,
        Offre.domaine_id,
        Offre.id,
      ]
    );
  }

  find(id) {
    return this.connection.query(`SELECT * FROM  ${this.table} WHERE id = ?`, [
      id,
    ]);
  }
}

module.exports = OffreManager;
