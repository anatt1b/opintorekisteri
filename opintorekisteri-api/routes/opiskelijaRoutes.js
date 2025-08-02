// Tuodaan Express-moduuli käyttöön
const express = require('express');

// Luodaan uusi reititin (router)
const router = express.Router();

// Tuodaan opiskelijaController käyttöön
const opiskelijaController = require('../controllers/opiskelijaController');

// Määritetään reitti opiskelijoiden hakemiselle (GET /)
router.get('/', opiskelijaController.haeKaikkiOpiskelijat);

// Määritetään reitti yhden opiskelijan haulle
router.get('/:id', opiskelijaController.haeYksiOpiskelija);


// Määritetään reitti uuden opiskelijan lisäämiselle (POST /)
router.post('/', opiskelijaController.lisaaOpiskelija);

// Määritetään reitti opiskelijan poistamiselle (DELETE /:id)
router.delete('/:id', opiskelijaController.poistaOpiskelija);


// Viedään reititin ulos muiden tiedostojen käytettäväksi
module.exports = router;

