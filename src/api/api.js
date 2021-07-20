const axios = require("axios").default;

import {
  TMDB_BASE_URL,
  TMDB_API_KEY,
  TMDB_IMAGE_BASE_URL,
  ENDPOINTS,
  YOUTUBE_BASE_URL
} from "../../assets/urls";

import LANGUAGES from "../../assets/Language";

const TMDM_HTTP_REQUEST = axios.create({
  baseURL: TMDB_BASE_URL,
  params: {
    api_key: TMDB_API_KEY,
  },
});

const getNowPlayingMovies = () => TMDM_HTTP_REQUEST.get(ENDPOINTS.NOW_PLAYING);
const getUpcomingMovies = () => TMDM_HTTP_REQUEST.get(ENDPOINTS.UPCOMING);
const getAllGenres = () => TMDM_HTTP_REQUEST.get(ENDPOINTS.GENRES);
const getMovieByID = (movieId, append_to_response = "") =>
  TMDM_HTTP_REQUEST.get(
    `${ENDPOINTS.MOVIE}/${movieId}`,
    append_to_response ? { params: { append_to_response } } : null
  );

const getPoster = (path) => `${TMDB_IMAGE_BASE_URL}/original${path}`;
const getVideo = (key) => `${YOUTUBE_BASE_URL}?v=${key}`;

const getLanguage = (language_iso) =>
  LANGUAGES.find((lang) => lang.iso_639_1 === language_iso);

export {
  getNowPlayingMovies,
  getPoster,
  getLanguage,
  getUpcomingMovies,
  getAllGenres,
  getMovieByID,
  getVideo,
};
