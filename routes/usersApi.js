var express = require('express');
var router = express.Router();
var db = require('./queries');
var fetch = require('node-fetch');

async function getMovies() {
  console.log('here');
  let movies = fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.apikey}&language=en-US`)
    .then(res => res.json())
    .catch(error => { throw error; });
  return await movies;
}

router.get('/users', db.getAllUsers);
router.post('/users', db.signIn); // must have a body with email and password
router.post('/users/new', db.createUser);
router.post('/users/favorites/new', db.addFavorite);
router.get('/users/:id/favorites', db.getAllFavorites);
router.delete('/users/:id/favorites/:movie_id', db.deleteFavorite);
router.get('/movies', (req, res, next) => {
  const movies = fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.apikey}&language=en-US`)
    .then(data => data.json())
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      return next(err)
    });
  });

module.exports = router;
