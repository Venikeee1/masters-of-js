import movieServices from '../services/movies.service';
import Pagination from './Pagination';
import preloaderFactory from '../preloader';
import MovieList from './MovieList';

const nextBtnRef = document.querySelector('.next');
const prevBtnRef = document.querySelector('.prev');
const currentPageRef = document.querySelector('.current-page');
const movieList = new MovieList('.movies-list');
const preloader = preloaderFactory('.preloader');

new Pagination({
  nextBtnRef,
  prevBtnRef,
  async onPageChange(page) {
    const { results } = await movieServices.fetchTopRatedMovies(page);
    movieList.updateList(results);
    currentPageRef.textContent = page;
  },
});

movieServices.fetchTopRatedMovies().then(({ results }) => {
  movieList.updateList(results);
  preloader.hide();
});

const deepClone = obj => {
  const result = {};

  for (let key in obj) {
    const value = obj[key];
    result[key] =
      typeof value === 'object' && !Array.isArray(value)
        ? deepClone(value)
        : Array.isArray(value)
        ? [...value]
        : value;
  }

  return result;
};

const user = {
  id: 'sds',
  name: 'sds',
  foo: ['asdasd', 'adsdsa', 'asd'],
  address: {
    city: 'dasd',
    county: 'dsa',
  },
};

const clonedUser = deepClone(user);

clonedUser.address.city = 'new city';
console.log(user);
console.log(clonedUser);
