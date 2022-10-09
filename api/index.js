const express = require("express");
const cors = require("cors");

const PORT = 8080;

const app = express();

app.use(cors());

app.get("/", (_, res) => {
  return res.json({ message: "Hello World!" });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
