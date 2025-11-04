const { fetchFilm } = require('../utils/fetchFilm');

// [GET] /api/film/:title
async function getFilm(req, res) {
  const title = req.params.title;

  try {
    const film = await fetchFilm(title);
    res.status(200).json(film);
  } catch (error) {
    if (error.status === 404) {
      res.status(404).json({ message: 'Film not found' });
    } else {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}

// [POST] /api/film
function createFilm(req, res) {
  try {
    const filmTitle = req.body.Title || req.body.title;
    res.status(200).json({ message: `Se ha guardado ${filmTitle}` });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
}

// [PUT] /api/film
function updateFilm(req, res) {
  try {
    const { id, Title, title } = req.body;
    const filmTitle = Title || title;
    res.status(200).json({ id, message: `Se ha actualizado ${filmTitle}` });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
}

// [DELETE] /api/film
function deleteFilm(req, res) {
  try {
    const { id } = req.body;
    res.status(200).json({ id, message: `Se ha borrado la película con ID: ${id}` });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = {
  getFilm,
  createFilm,
  updateFilm,
  deleteFilm,
};
