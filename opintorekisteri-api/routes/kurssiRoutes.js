const express = require('express'); // Express-tuonti
const router = express.Router();    // Luodaan reititin

const kurssiController = require('../controllers/kurssiController'); // Kurssi-controller tuotu

// Reitit

// Hakee kaikki kurssit
// GET /api/kurssit
router.get('/', kurssiController.haeKaikkiKurssit);

// Hakee yhden kurssin id:n perusteella
// GET /api/kurssit/:id
router.get('/:id', kurssiController.haeYksiKurssi);

// Lisää uuden kurssin
// POST /api/kurssit
router.post('/', kurssiController.lisaaKurssi);

// Poistaa kurssin id:n perusteella
// DELETE /api/kurssit/:id
router.delete('/:id', kurssiController.poistaKurssi);


module.exports = router;





