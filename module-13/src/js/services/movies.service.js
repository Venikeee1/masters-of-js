import { request } from './helpers';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '76ed63f80dba3e42bfe198c0806fa9ba';

export default {
  fetchPopularMovies(page = 1) {
    return request(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`);
  },

  fetchTopRatedMovies(page = 1) {
    return request(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&page=${page}`,
    );
  },

  async searchMovies(query, page) {
    return request(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`,
    );
  },
};
