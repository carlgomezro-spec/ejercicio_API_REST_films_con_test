async function fetchFilm(title) {
  const apiKey = process.env.API_KEY;
  const url = `http://www.omdbapi.com/?apikey=${fc2ee097}&t=${title}`;
  let response = await fetch(url);
  let data = await response.json();

  if (data.Response === "False") {
    const error = new Error('Film not found');
    error.status = 404;
    throw error;
  }
  return data; // IMPORTANT: devolver la estructura original de OMDB (Title, Year, Director, etc.)
}

module.exports = fetchFilm(title)