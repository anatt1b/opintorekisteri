// Tuodaan tietokantayhteys
const db = require('../db');

// Kurssi-olio, joka sisältää tietokantatoiminnot
const Kurssi = {
  // Hakee kaikki kurssit tietokannasta
  haeKaikki: (callback) => {
    db.query('SELECT * FROM Kurssi', callback);
  },

  // Lisää uuden kurssin tietokantaan
  lisaa: (data, callback) => {
    const sql = 'INSERT INTO Kurssi (Koodi, Nimi, Laajuus) VALUES (?,?,?)';
    const arvot = [data.Koodi, data.Nimi, data.Laajuus];
    db.query(sql, arvot, callback);
  },

  // Poistaa kurssin tietokannasta id:n perusteella
  poista: (id, callback) => {
    const sql = 'DELETE FROM Kurssi WHERE idKurssi = ?';
    db.query(sql, [id], callback);
  },
    // Hakee yhden kurssin id:n perusteella
  haeYksi: (id, callback) => {
    const sql = 'SELECT * FROM Kurssi WHERE idKurssi = ?';
    db.query(sql, [id], callback);
  }

};

// Viedään Kurssi-olio käytettäväksi muualla
module.exports = Kurssi;

