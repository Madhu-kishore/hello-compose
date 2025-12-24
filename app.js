const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("learning the connection of Hello from Jenkins + Docker Compose 🚀");
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});

