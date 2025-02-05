const API_KEY = "82a4b8a952e82748e2bb3eb4c3c1da59";
const BASE_URL = "https://api.themoviedb.org/3";

export const getTrendingMovies = async (filter = "day") => {
  const res = await fetch(`${BASE_URL}/trending/movie/${filter}?api_key=${API_KEY}&language=fr-FR`);
  const data = await res.json();
  return data.results;
};

export const getMovieById = async (id) => {
  const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=fr-FR`);
  const data = await res.json();
  return data;
};

export const getMovieCredits = async (id) => {
  const res = await fetch(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`);
  const data = await res.json();
  return data.cast.slice(0, 4);
};

export const searchMovies = async (query) => {
  const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=fr-FR&query=${query}`);
  const data = await res.json();
  return data.results;
};