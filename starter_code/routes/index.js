const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie");


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next) => {
  Movie
    .find({})
    .then((movies) => {
      // console.log(movies)
      res.render('movies', { movies });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/movie/:_id', (req, res, next) => {
  var movieId = req.params._id
  Movie
    .findById({ "_id": movieId })
    .then((movies) => {
      // console.log(movie)
      res.render("movie", { movies })
    })
    .catch((err) => {
      console.log(err);
    });
});


module.exports = router;
