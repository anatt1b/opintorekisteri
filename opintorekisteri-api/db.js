const mysql = require('mysql2');

const yhteys = mysql.createConnection({
    host: 'localhost',          // palvelin
    user: 'ABmint',            // MySQL-käyttäjänimi
    password: 'nuudelssi14',    // lisää salasana jos käytössä
    database: 'opintorekisteri' // tietokannan nimi
});

yhteys.connect((err) => {
    if(err){
        console.error('Tietokantayhteys epäonnistui:', err);
        return;
    }
    console.log('Yhdistetty tietokantaan!');
});

module.exports = yhteys;
