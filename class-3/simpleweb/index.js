const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Welcome to this API" });
});

app.listen(8080, () => {
  console.log("🚀 ~ file: index.js ~ line 10 ~ app.listen ~ 8080", 8080);
});
