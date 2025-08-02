const db = require('../db');

const Opiskelija = {
    haeKaikki: (callback) => {
        db.query('SELECT * FROM Opiskelija', callback);
    },
    lisaa: (data, callback) => {
        const sql = 'INSERT INTO Opiskelija (Etunimi, Sukunimi, Osoite, Luokkatunnus) VALUES (?,?,?,?)';
        const arvot = [data.Etunimi, data.Sukunimi, data.Osoite, data.Luokkatunnus];
        db.query(sql, arvot, callback);
    },
    poista: (id, callback) => {
        const sql = 'DELETE FROM Opiskelija WHERE idOpiskelija = ?';
        db.query(sql, [id], callback);
    },
    haeYksi: (id, callback) => {
        const sql = 'SELECT * FROM Opiskelija WHERE idOpiskelija = ?';
        db.query(sql, [id], callback);
}



};

module.exports = Opiskelija;
