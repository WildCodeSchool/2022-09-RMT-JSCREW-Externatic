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
  insert(Offre) {
    return this.connection.query(
      `insert into ${this.table} 
      (contrat, condition_travail,  avantages, poste, localisation, salaire, 
        mission, profil_recherche, specialitees, entreprise_id, domaine_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        Offre.contrat,
        Offre.condition_travail,
        Offre.avantages,
        Offre.poste,
        Offre.localisation,
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
      `SELECT poste, localisation FROM ${this.table} AS o INNER JOIN entreprise AS e ON e.id = o.entreprise_id`
    );
  }

  // mise à jour des offres avec UPDATE
  update(Offre) {
    return this.connection.query(
      `update ${this.table} set offre.contrat = ?, offre.condition_travail = ?,  offre.avantages = ?, offre.poste = ?, offre.localisation = ?, offre.salaire = ?, 
    offre.mission = ?, offre.profil_recherche = ?, offre.specialitees = ?, offre.entreprise_id = ?, offre.domaine_id = ? where id = ?`,
      [
        Offre.contrat,
        Offre.condition_travail,
        Offre.avantages,
        Offre.poste,
        Offre.localisation,
        Offre.salaire,
        Offre.mission,
        Offre.profil_recherche,
        Offre.specialitees,
        Offre.entreprise_id,
        Offre.domaine_id,
      ]
    );
  }
}

module.exports = OffreManager;
