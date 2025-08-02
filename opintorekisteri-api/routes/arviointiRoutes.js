// Tuodaan Express ja luodaan reititin
const express = require('express');         // Express-tuonti
const router = express.Router();            // Luodaan reititin

// Tuodaan Arviointi-controller
const arviointiController = require('../controllers/arviointiController'); // Controller-tuonti

// POST /api/arvioinnit – Lisää arviointi
router.post('/', arviointiController.lisaaArviointi); // Reitti POST-pyynnölle
router.get('/', arviointiController.haeKaikkiArvioinnit);
router.get('/:id', arviointiController.haeYksiArviointi);


// Viedään reititin ulos käytettäväksi app.js:ssä
module.exports = router;

