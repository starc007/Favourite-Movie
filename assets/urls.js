const TMDB_BASE_URL = "https://api.themoviedb.org/3/";
const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";
const TMDB_API_KEY = "cd93d3c53a9537529e388507ba13cac2";
const YOUTUBE_BASE_URL = "https://www.youtube.com/watch";

const ENDPOINTS = {
  NOW_PLAYING: "movie/now_playing",
  UPCOMING: "movie/upcoming",
  TOP_RATED: "movie/top_rated",
  GENRES: "/genre/movie/list",
  MOVIE: "/movie",
};

const APPEND_TO_RESPONSE = {
  VIDEOS: "videos",
  CREDITS: "credits",
};

export {
  TMDB_BASE_URL,
  TMDB_API_KEY,
  TMDB_IMAGE_BASE_URL,
  ENDPOINTS,
  APPEND_TO_RESPONSE,
  YOUTUBE_BASE_URL,
};
