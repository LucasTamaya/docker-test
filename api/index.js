const express = require("express");
const cors = require("cors");

const PORT = 3000;

const app = express();

app.use(cors());

app.get("/", (_, res) => {
  return res.json({ message: "Docker it's amazing!" });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
