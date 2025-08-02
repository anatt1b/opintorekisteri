const db = require('../db');

const Arviointi = {
  // Lisää arviointi kutsumalla tallennettua proseduuria
  lisaa: (data, callback) => {
    const sql = 'CALL lisaaArviointi(?, ?, ?)';
    const arvot = [data.idOpiskelija, data.idKurssi, data.Arvosana];
    db.query(sql, arvot, (err, result) => {
      if (err) {
        console.error('SQL-virhe arvioinnin lisäyksessä:\n', err);
        return callback(err);
      }
      callback(null, result);
    });
  },

  // Hakee kaikki arvioinnit
  haeKaikki: (callback) => {
    const sql = 'SELECT * FROM Arviointi';
    db.query(sql, callback);
  },

    // hakee yhden arvioinnin
    haeYksi: (id, callback) => {
        const sql = 'SELECT * FROM Arviointi WHERE idArviointi = ?';
        db.query(sql, [id], callback);
    }
};


module.exports = Arviointi;




