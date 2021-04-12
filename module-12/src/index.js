import './styles.css';
import './css/preloader.css';
import './css/apartments.css';
import apartmentService from './js/services/apartments.service';
import preloaderFactory from './js/preloader';
import apartmentsListTemplate from './templates/apartments-list.hbs';

const preloader = preloaderFactory('.preloader');
const apartmentsListRef = document.querySelector('.apartments-list');
const refreshBtnRef = document.querySelector('.refresh');

const renderApartmentsList = () => {
  apartmentService
    .fetchApartments()
    .then(apartments => {
      apartmentsListRef.innerHTML = apartmentsListTemplate(apartments);
    })
    .catch(error => {
      apartmentsListRef.innerHTML = 'There was an error';
    })
    .finally(() => {
      preloader.hide();
    });
};

refreshBtnRef.addEventListener('click', () => {
  preloader.show();
  renderApartmentsList();
});

renderApartmentsList();
