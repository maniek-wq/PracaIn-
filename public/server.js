const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

// Połącz się z bazą danych MongoDB
mongoose.connect("mongodb://localhost:27017/Meetover", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Sprawdź, czy udało się połączyć z bazą danych
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Błąd połączenia z MongoDB:"));
db.once("open", () => {
  console.log("Połączono z bazą danych MongoDB");
});

// Określ folder publiczny
app.use(express.static("public"));

// Endpoint do obsługi zapytań GET na stronę główną
app.get("/", (req, res) => {
  res.send("Witaj na stronie głównej!");
});

// Uruchom serwer na danym porcie
app.listen(port, () => {
  console.log(`Serwer działa na http://localhost:${port}`);
});

const tileSchema = new mongoose.Schema({
  name: String,
  address: String,
  contact: {
    phone: String,
    email: String,
  },
  // inne pola, jeśli potrzebujesz
});

const Tile = mongoose.model("Tile", tileSchema);

const tilesData = [
  {
    name: "Hala Odra",
    address: "ul. Bulwar Maurycego Beniowskiego 5, Szczecin, Poland",
    contact: {
      phone: "535 253 602",
      email: "dobragrupadsspzoo@gmail.com",
    },
    // inne dane
  },
  {
    name: "Neon",
    address: "Deptak Bogusława",
    contact: {
      phone: "123 456 789",
      email: "inny@example.com",
    },
    // inne dane
  },
  {
    name: "Dzień dobry",
    address: "Śląska",
    contact: {
      phone: "123 456 789",
      email: "inny@example.com",
    },
    // inne dane
  },
  {
    name: "Karkut",
    address: "Bogurodzicy 1",
    contact: {
      phone: "123 456 789",
      email: "inny@example.com",
    },
    // inne dane
  },
];

// Użyj metody insertMany, aby dodać wiele dokumentów do bazy danych
Tile.insertMany(tilesData)
  .then(() => {
    console.log("Dodano wiele kafelków do bazy danych");
  })
  .catch((error) => {
    console.error("Błąd przy dodawaniu do bazy danych:", error);
  });

async function getAllTiles() {
  try {
    const tiles = await Tile.find({});
    return tiles;
  } catch (error) {
    throw error;
  }
}

module.exports = { getAllTiles };

app.get("/api/tiles", async (req, res) => {
  try {
    const tiles = await Tile.find({}); // Tile to model MongoDB
    res.json(tiles);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Błąd przy pobieraniu danych z bazy danych" });
  }
});
