# 🎓 Opintorekisteri REST API

Tämä sovellus on harjoitustyö, jossa on toteutettu yksinkertainen **opintorekisteri** Node.js-ympäristössä. Sovellus koostuu:

- Opiskelijoista
- Kursseista
- Arvioinneista (arvosanat)

Tiedot tallennetaan **MySQL-tietokantaan** ja sovellusta käytetään **HTTP-rajapinnan (REST API)** kautta, esim. Postman-ohjelmalla.

---

## 📽️ Esittelyvideo

👉 [YouTube: Opintorekisteri API -esittelyvideo](https://youtu.be/Ho16H-3re7k)

---

## 🧠 Mitä tässä projektissa on tehty?

### ✅ 1. Suunnittelu

- **Tietokannan rakenne suunniteltiin** kolmella taululla: `Opiskelija`, `Kurssi`, `Arviointi`.
- Luotiin **ER-kaavio** (Entiteetti-suhdekaavio), joka kertoo, miten taulut liittyvät toisiinsa:
  - Yhdellä opiskelijalla voi olla monta arviointia.
  - Yhdellä kurssilla voi olla monta arviointia.
- Suunniteltiin **tallennettu proseduuri** (stored procedures), jolla voidaan lisätä tietoja hallitusti ja tarkistaa esimerkiksi, että arvosana on sallitulla välillä (0–5).

---

## 🛠 Tekninen toteutus

### 🔧 Käytetyt teknologiat:
- **Node.js**: JavaScript-pohjainen palvelinympäristö.
- **Express**: Node.js:lle tehty kevyt verkkosovelluskehys, jolla reitit (esim. GET ja POST) voidaan helposti rakentaa.
- **MySQL**: Relaatiotietokanta tietojen tallentamiseen.
- **Postman**: Työkalu, jolla testataan API:n toimintaa ilman omaa käyttöliittymää.

---

## 📁 Sovelluksen rakenne

```
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
```

---

## 🔁 Miten eri osat toimivat?

### MALLI (models/arviointiModel.js)

- **lisaa()** – Kutsuu tietokannan `lisaaArviointi`-proseduuria.
- **haeKaikki()** – Hakee kaikki arvioinnit.
- **haeYksi()** – Hakee yhden arvioinnin ID:n perusteella.

### CONTROLLER (controllers/arviointiController.js)

- **lisaaArviointi()** – Ottaa vastaan arviointidatan ja tallentaa sen.
- **haeKaikkiArvioinnit()** – Palauttaa kaikki arvioinnit JSON-muodossa.
- **haeYksiArviointi()** – Palauttaa yhden arvioinnin tai virheen.

### REITIT (routes/arviointiRoutes.js)

- `POST /api/arvioinnit/` – lisää arviointi
- `GET /api/arvioinnit/` – hae kaikki arvioinnit
- `GET /api/arvioinnit/:id` – hae yksi arviointi

---

## 💾 Tietokanta

### Taulut:

```sql
CREATE TABLE Opiskelija (
  idOpiskelija INT AUTO_INCREMENT PRIMARY KEY,
  Nimi VARCHAR(100),
  Ryhma VARCHAR(20)
);

CREATE TABLE Kurssi (
  idKurssi INT AUTO_INCREMENT PRIMARY KEY,
  Nimi VARCHAR(100),
  Laajuus INT
);

CREATE TABLE Arviointi (
  idArviointi INT AUTO_INCREMENT PRIMARY KEY,
  idOpiskelija INT,
  idKurssi INT,
  Arvosana INT,
  FOREIGN KEY (idOpiskelija) REFERENCES Opiskelija(idOpiskelija),
  FOREIGN KEY (idKurssi) REFERENCES Kurssi(idKurssi)
);
```

### Tallennettu proseduurit:

```sql
DELIMITER //

CREATE PROCEDURE lisaaArviointi(
  IN p_idOpiskelija INT,
  IN p_idKurssi INT,
  IN p_Arvosana INT
)
BEGIN
  IF p_Arvosana >= 0 AND p_Arvosana <= 5 THEN
    INSERT INTO Arviointi (idOpiskelija, idKurssi, Arvosana)
    VALUES (p_idOpiskelija, p_idKurssi, p_Arvosana);
  END IF;
END //

DELIMITER ;
```

---

## 🔍 Esimerkkikäyttö Postmanilla

1. **Lisää opiskelija**
```json
POST /api/opiskelijat
{
  "Nimi": "Matti Meikäläinen",
  "Ryhma": "R1"
}
```

2. **Hae opiskelijat**
```http
GET /api/opiskelijat
```

3. **Lisää kurssi**
```json
POST /api/kurssit
{
  "Nimi": "Joikkelin venytyksen ABC",
  "Laajuus": 3
}
```

4. **Hae kurssit**
```http
GET /api/kurssit
```

5. **Lisää arviointi**
```json
POST /api/arvioinnit
{
  "idOpiskelija": 4,
  "idKurssi": 1,
  "Arvosana": 4
}
```

6. **Hae arvioinnit**
```http
GET /api/arvioinnit
```

---

## 🧪 CRUD-operaatiot

- **Create** – POST
- **Read** – GET
- **Delete** – DELETE käytössä **opiskelijoissa ja kursseissa**

---

## 🎬 Esittelyvideo

Videossa esitellään:

- Tietokantarakenne ja ER-kaavio
- SQL-lauseet ja proseduurit
- Sovelluksen toiminta Node/Expressillä
- Postman-testaus

---

## 👨‍🎓 Tavoite

Projektissa harjoitellaan backend-kehitystä, SQL-taitoja ja REST API:n rakentamista käytännössä.

