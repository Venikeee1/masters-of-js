import preloaderFactory from '../preloader';
import moviesService from '../services/movies.service';
import moviesListTemplate from '../../templates/moviesList.hbs';
import debounce from 'lodash.debounce';
import '../../css/movies.css';

const preloader = preloaderFactory('.preloader');
const moviesListRef = document.querySelector('.movies-list');
const listObserverRef = document.querySelector('.list-observer');
let currentPage = 0;
let movies = [];

const observerOptions = {
  rootMargin: '100px',
};

const observerHandler = debounce(entries => {
  if (entries[0].isIntersecting) {
    currentPage += 1;
    fetchMovies(currentPage);
  }
}, 200);

const observer = new IntersectionObserver(observerHandler, observerOptions);
observer.observe(listObserverRef);

const renderList = movies => {
  const moviesWithPosterPath = movies.map(movie => {
    return {
      ...movie,
      poster_path: `https://www.themoviedb.org/t/p/w500${movie.poster_path}`,
    };
  });
  const moviesList = moviesListTemplate(moviesWithPosterPath);
  moviesListRef.insertAdjacentHTML('beforeend', moviesList);
};

const fetchMovies = async page => {
  try {
    const { results } = await moviesService.fetchPopularMovies(page);
    movies = [...movies, ...results];
    renderList(results);
  } catch (error) {
    // TODO add users notifications for errors
    console.log(error);
  } finally {
    preloader.hide();
  }
};

// fetchMovies(currentPage);
