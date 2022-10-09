const express = require("express");
const cors = require("cors");

const PORT = 3000;

const app = express();

app.use(cors());

app.get("/", (_, res) => {
  return res.json([
    { id: 1, user: "John" },
    { id: 2, user: "Lolo" },
    { id: 3, user: "Koko" },
    { id: 4, user: "Toto" },
    { id: 5, user: "Popo" },
  ]);
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
