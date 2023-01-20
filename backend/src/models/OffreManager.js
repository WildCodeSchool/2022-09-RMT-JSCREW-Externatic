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
    return this.connection.query(`SELECT * FROM offre ${this.table} `);
  }

  // mise à jour des offres avec UPDATE
  update(offre) {
    const newOffre = { ...offre };
    const dateFinOffre = newOffre.date_fin_offre;
    delete newOffre.date_fin_offre;
    delete newOffre.dateOffre;

    return this.connection.query(
      `update ${this.table} set ?, date_fin_offre = ? where id = ?`,
      [newOffre, dateFinOffre, newOffre.id]
    );
  }
}

module.exports = OffreManager;
