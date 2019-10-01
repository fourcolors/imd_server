const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

const imbUrl = url => {
  return `https://api.themoviedb.org/3${url}&api_key=5e07e142aa609bafae3ae70d367f412b`;
};

router.get("/movie/popular", async (req, res, next) => {
  try {
    const response = await fetch(imbUrl("/movie/popular?language=en-US"));
    const json = await response.json();
    res.json(json);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

router.get("/search/movie", async (req, res, next) => {
  const searchQuery = req.query.query;

  if (searchQuery && searchQuery.length) {
    try {
      const response = await fetch(
        imbUrl(
          `/search/movie?include_adult=false&page=1&query=${searchQuery}&language=en-US`
        )
      );

      const json = await response.json();
      res.json(json);
    } catch (e) {
      console.log(e);
      next(e);
    }
  }
});

router.get("/movie/:id", async (req, res, next) => {
  const movieId = req.params.id;

  try {
    const response = await fetch(imbUrl(`/movie/${movieId}?language=en-US`));

    const json = await response.json();
    res.json(json);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;
