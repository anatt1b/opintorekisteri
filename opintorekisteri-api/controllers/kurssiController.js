const Kurssi = require('../models/kurssiModel');

// Hakee kaikki kurssit
exports.haeKaikkiKurssit = (req, res) => {
  Kurssi.haeKaikki((err, tulos) =>{
    if(err) {
      console.error(err);
      res.status(500).json({ virhe: 'Tietokantojen haku epäonnistui' });
    } else {
      res.json(tulos);
    }
  });
};

// Hakee yhden kurssin id:n perusteella
exports.haeYksiKurssi = (req, res) => {
  const id = req.params.id;
  Kurssi.haeYksi(id, (err, tulos) => {
    if (err) {
      console.error(err);
      res.status(500).json({ virhe: 'Kurssin hakeminen epäonnistui' });
    } else {
      if (tulos.length === 0) {
        res.status(404).json({ virhe: 'Kurssia ei löytynyt annetulla id:llä' });
      } else {
        res.json(tulos[0]);
      }
    }
  });
};

// Lisää kurssi
exports.lisaaKurssi = (req, res) => {
  const uusi = req.body;
  Kurssi.lisaa(uusi, (err, tulos) => {
    if(err){
      console.error(err);
      res.status(500).json({ virhe: 'Lisäys epäonnistui' });
    } else{
      res.status(201).json({ viesti: 'Kurssi lisätty', id: tulos.insertId });
    }
  });
};

// Poistaa kurssin
exports.poistaKurssi = (req, res) => {
  const id = req.params.id;
  Kurssi.poista(id, (err, tulos) => {
    if(err){
      console.error(err);
      res.status(500).json({ virhe: 'Kurssin poisto epäonnistui' });
    } else{
      res.json({ viesti: 'Kurssi poistettu' });
    }
  });
};




