const Opiskelija = require('../models/opiskelijaModel');

exports.haeKaikkiOpiskelijat = (req, res) => {
  Opiskelija.haeKaikki((err, tulos) => {
    if (err) {
      console.error(err);
      res.status(500).json({ virhe: 'Tietojen haku epäonnistui' });
    } else {
      res.json(tulos);
    }
  });
};

exports.lisaaOpiskelija = (req, res) => {
    const uusi = req.body;
    Opiskelija.lisaa(uusi, (err, tulos) => {
        if(err){
            console.error(err);
            res.status(500).json({virhe: 'Lisäys epäonnistui'});
        }   else {
            res.status(201).json({ viesti: 'Opiskelija lisätty', id: tulos.insertId});
        }
    });
};

exports.poistaOpiskelija = (req, res) => {
  const id = req.params.id;
  Opiskelija.poista(id, (err, tulos) => {
    if (err) {
      console.error(err);
      res.status(500).json({ virhe: 'Poisto epäonnistui' });
    } else {
      res.status(200).json({ viesti: 'Opiskelija poistettu' });
    }
  });
};

exports.haeYksiOpiskelija = (req, res) => {
  const id = req.params.id;
  Opiskelija.haeYksi(id, (err, tulos) => {
    if (err) {
      console.error(err);
      res.status(500).json({ virhe: 'Opiskelijan haku epäonnistui' });
    } else if (tulos.length === 0) {
      res.status(404).json({ virhe: 'Opiskelijaa ei löytynyt annetulla id:llä' });
    } else {
      res.json(tulos[0]);
    }
  });
};

