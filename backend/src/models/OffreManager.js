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
      (contrat, condition_travail, avantages, poste, localisation, dateOffre, date_fin_offre, salaire, 
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

  findCount() {
    return this.connection.query(
      `select count(id) as count from  ${this.table}`
    );
  }

  findAll() {
    return this.connection.query(`SELECT * FROM ${this.table}`);
  }

  find(id) {
    return this.connection.query(`SELECT * FROM  ${this.table} WHERE id = ?`, [
      id,
    ]);
  }

  // mise à jour des offres avec UPDATE
  update(offre, id) {
    return this.connection.query(`update ${this.table} set ? where id = ?`, [
      offre,
      id,
    ]);
  }

  findAllPage(search) {
    const page = (search.page - 1) * 10;
    let query = `SELECT * from ${this.table}`;
    const value = [];
    if (search.poste) {
      query += ` WHERE poste LIKE ?`;
      value.push(`%${search.poste}%`);
    }
    if (search.localisation) {
      query += ` ${search.poste ? "AND" : "WHERE"} localisation LIKE ?`;
      value.push(`%${search.localisation}%`);
    }
    query += " LIMIT ?, 10"; // LIMIT ?, 10
    value.push(page);
    return this.connection.query(query, value);
  }

  findAllJob() {
    return this.connection.query(`SELECT DISTINCT poste FROM ${this.table}`);
  }

  findAllLocalisation() {
    return this.connection.query(
      `SELECT DISTINCT localisation FROM ${this.table}`
    );
  }

  findCountPages(search) {
    let query = `SELECT count(*) as pages FROM ${this.table}`;
    const value = [];
    if (search.poste) {
      query += ` WHERE poste LIKE ?`;
      value.push(`%${search.poste}%`);
    }
    if (search.localisation) {
      query += ` ${search.poste ? "AND" : "WHERE"} localisation LIKE ?`;
      value.push(`%${search.localisation}%`);
    }
    return this.connection.query(query, value);
  }
}

module.exports = OffreManager;
