# Opintorekisteri API

Tämä Node.js + Express -sovellus on REST API, jonka avulla voidaan hallita opiskelijoita, kursseja ja niiden arviointeja. Tiedot tallennetaan MySQL-tietokantaan, ja osa tietojen lisäämisestä tehdään tallennettujen proseduurien avulla.

---

## 🔧 Teknologiat

- Node.js
- Express.js
- MySQL
- SQL Stored Procedures
- Postman (testaukseen)

---

## 📁 Rakenne

```bash
.
├── controllers/
│   └── arviointiController.js
├── models/
│   └── arviointiModel.js
├── routes/
│   └── arviointiRoutes.js
├── db.js
├── app.js
└── package.json

