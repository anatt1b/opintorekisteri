const express = require('express');                // express-kirjaston käyttöönotto
const app = express();                             // luodaan uusi express-sovellus
const port = 3000;                                 // määritetään palvelimen portti

// Tuodaan reitit käyttöön
const opiskelijaRoutes = require('./routes/opiskelijaRoutes');  // opiskelija-reitit
const kurssiRoutes = require('./routes/kurssiRoutes');          // kurssi-reitit
const arviointiRoutes = require('./routes/arviointiRoutes');    // arviointi-reitit

// Ota käyttöön JSON-datankäsittely
app.use(express.json());

// Määritetään reittipolut
app.use('/api/opiskelijat', opiskelijaRoutes);
app.use('/api/kurssit', kurssiRoutes);
app.use('/api/arvioinnit', arviointiRoutes);  // ← LISÄTÄÄN TÄMÄ

// Käynnistetään palvelin määritellyssä portissa
app.listen(port, () => {
  console.log(`Palvelin käynnissä osoitteessa http://localhost:${port}`);
});

