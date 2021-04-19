const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '76ed63f80dba3e42bfe198c0806fa9ba';

export default {
  async fetchPopularMovies(page = 1) {
    const rawResult = await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`,
    );

    if (!rawResult.ok) {
      throw rawResult;
    }

    const result = await rawResult.json();

    return result;

    // return fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`).then(res =>
    //   res.json(),
    // );
  },

  async fetchTopRatedMovies() {
    const rawResult = await fetch(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`,
    );

    if (!rawResult.ok) {
      throw rawResult;
    }

    const result = await rawResult.json();

    return result;

    // return fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`).then(res =>
    //   res.json(),
    // );
  },

  async searchMovies(query, page) {
    const rawResult = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`,
    );

    if (!rawResult.ok) {
      throw rawResult;
    }

    const result = await rawResult.json();

    return result;

    // return fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`).then(res =>
    //   res.json(),
    // );
  },
};
