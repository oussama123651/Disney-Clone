import axios from "axios";

const movieBaseUrl = import.meta.env.VITE_MOVIE_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;

const movieByGenreBaseURL = import.meta.env.VITE_MOVIE_BY_GENRE_BASE_URL;

const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + apiKey
);

const getMovieByGenreId = (id: number) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);

const getSearchMovie = (movieName: string) =>
  axios.get(
    movieBaseUrl +
      `/search/movie?query=${movieName}&api_key=` +
      apiKey +
      `&include_adult=false&language=en-US&page=1`
  );

const getMovieByID = (id: number) =>
  axios.get(
    movieBaseUrl +
      `/movie/${id}?api_key=` +
      apiKey +
      "&language=en-US&append_to_response=casts,videos,images,releases"
  );

const getRecommendationsMovie = (id: number) =>
  axios.get(
    movieBaseUrl +
      `/movie/${id}/recommendations?language=en-US&page=1&api_key=` +
      apiKey
  );

export default {
  getTrendingVideos,
  getMovieByGenreId,
  getSearchMovie,
  getMovieByID,
  getRecommendationsMovie,
};
