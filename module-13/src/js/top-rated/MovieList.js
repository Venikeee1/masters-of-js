import { movieAdapter } from '../movieAdapter';
import moviesListTemplate from '../../templates/moviesList.hbs';

class MovieList {
  constructor(selector) {
    this.element = document.querySelector(selector);
    this.movies = [];
  }

  updateList(movies) {
    this.movies = movies;
    this.render();
  }

  render() {
    this.element.innerHTML = moviesListTemplate(
      this.movies.map(movie => movieAdapter(movie)),
    );
  }
}

export default MovieList;
