import preloaderFactory from '../preloader';
import moviesService from '../services/movies.service';
import moviesListTemplate from '../../templates/moviesList.hbs';
import debounce from 'lodash.debounce';
import '../../css/movies.css';

const preloader = preloaderFactory('.preloader');
const searchForm = document.querySelector('.search-form');

class Movies {
  constructor(selector) {
    this.element = document.querySelector(selector);
    this.movies = [];
    this.searchQuery = '';
    this.page = 0;
  }

  addObserver() {
    const observerOptions = {
      rootMargin: '100px',
    };

    const observerHandler = debounce(entries => {
      if (entries[0].isIntersecting) {
        this.page += 1;
        this.fetchMovies(this.page);
      }
    }, 200);

    const observer = new IntersectionObserver(observerHandler, observerOptions);
    const observerElement = document.createElement('div');

    this.element.insertAdjacentElement('afterend', observerElement);
    observer.observe(observerElement);
  }

  renderMovies() {
    const moviesWithPosterPath = this.movies.map(movie => {
      return {
        title: movie.original_title,
        rating: movie.vote_average,
        posterPath: `https://www.themoviedb.org/t/p/w500${movie.poster_path}`,
        description: movie.overview,
      };
    });
    const moviesList = moviesListTemplate(moviesWithPosterPath);

    this.element.innerHTML = moviesList;
  }

  searchMovies(query) {
    this.page = 1;
    this.searchQuery = query;
    this.movies = [];
    this.fetchMovies(this.page, this.searchQuery);
  }

  async fetchMovies(page, query = '') {
    this.searchQuery = query;

    try {
      const { results } = query
        ? await moviesService.searchMovies(query, page)
        : await moviesService.fetchPopularMovies(page);

      this.movies = [...this.movies, ...results];
      this.renderMovies();
    } catch (error) {
      // TODO add users notifications for errors
      console.log(error);
    } finally {
      preloader.hide();
    }
  }

  init() {
    this.addObserver();
  }
}

const movies = new Movies('.movies-list');
movies.init();

const searchHandler = debounce(({ target }) => {
  if (target.name === 'searchQuery') {
    movies.searchMovies(target.value);
  }
}, 300);

searchForm.addEventListener('input', searchHandler);
