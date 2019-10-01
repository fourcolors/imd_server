const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

router.get("/movie/popular", async (req, res, next) => {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=5e07e142aa609bafae3ae70d367f412b"
    );
    const json = await response.json();
    res.json(json);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;
