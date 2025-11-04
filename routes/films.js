const router = require('express').Router(); //Objeto router de express, me va creando un objeto para colocar mis rutas
const filmsController = require('../controllers/films.controllers');


router.get('/film/:title', filmsController.getFilm);
router.post('/api/film', filmsController.createFilm);
router.put('/api/film', filmsController.updateFilm);
router.delete('/api/film', filmsController.deleteFilm);

module.exports = router;

