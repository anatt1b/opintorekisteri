// Tuodaan Arviointi-malli
const Arviointi = require('../models/arviointiModel');

// POST /api/arvioinnit – Lisää arviointi tietokantaan
const lisaaArviointi = (req, res) => {
  const uusi = req.body;

  // Kutsutaan mallin metodia, joka käyttää tallennettua proseduuria
  Arviointi.lisaa(uusi, (err, tulos) => {
    if (err) {
      console.error('Virhe arvioinnin lisäyksessä:', err);
      return res.status(500).json({ virhe: 'Arvioinnin lisääminen epäonnistui', sqlVirhe: err.sqlMessage });
    }

    // Jos onnistui:
    res.status(201).json({ viesti: 'Arviointi lisätty onnistuneesti' });
  });
};

// GET /api/arvioinnit – Hakee kaikki arvioinnit
const haeKaikkiArvioinnit = (req, res) => {
  Arviointi.haeKaikki((err, tulos) => {
    if (err) {
      console.error('Virhe arviointien haussa:', err);
      return res.status(500).json({ virhe: 'Arviointien haku epäonnistui', sqlVirhe: err.sqlMessage });
    }

    res.status(200).json(tulos); // Palautetaan tulokset JSON-muodossa
  });
};
// Hakee yhden arvioinnin
const haeYksiArviointi = (req, res) => {
  const id = req.params.id;
  Arviointi.haeYksi(id, (err, tulos) => {
    if (err) {
      console.error(err);
      res.status(500).json({ virhe: 'Arvioinnin haku epäonnistui' });
    } else if (tulos.length === 0) {
      res.status(404).json({ virhe: 'Arviointia ei löytynyt annetulla id:llä' });
    } else {
      res.json(tulos[0]);
    }
  });
};



// 🔧 Tässä oli ongelma: FUNKTIOITA EI VIEDÄ ULOS
module.exports = {
  lisaaArviointi,
  haeKaikkiArvioinnit,
  haeYksiArviointi
};



