import initialApartments from './apartments.json';
import apartmentsTemplate from '../templates/apartments-list.hbs';
import apartmentsObserver from './apartmentsObserver';
import apartmentTemplate from '../templates/apartment.hbs';
import clientStorage from './services/clientStorage';
import '../css/apartments.css';

const apartmentsRef = document.querySelector('.apartments-list');
const addButtonRef = document.querySelector('.add-btn');
const savedApartments = clientStorage.getItem('apartments');
const apartments = savedApartments ? savedApartments : initialApartments;

apartmentsRef.innerHTML = apartmentsTemplate(apartments);

const apartmentsListRef = Array.from(
  apartmentsRef.querySelectorAll('.apartment'),
);

const addApartment = apartment => {
  apartments.unshift(apartment);
  clientStorage.setItem('apartments', apartments);
  apartmentsRef.insertAdjacentHTML('afterbegin', apartmentTemplate(apartment));
};

apartmentsObserver(apartmentsListRef);

addButtonRef.addEventListener('click', () => {
  addApartment({
    title: 'Super title',
    imgUrl:
      'https://res.cloudinary.com/kyoo/image/upload/v1609344654/booking/apartment-18_ugrsvg.jpg',
    descr: 'Super description',
    rating: 1,
  });
});
