var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");

router.get("/movies", (req, res) => {
  fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=054bda1cc4dfbc6f6956867ad22ca76e`
  )
    .then((res) => res.json()) //transforme la réponse dans le bon format
    .then((data) => {
      res.json({ movies: data.results });
    });
});

module.exports = router;
