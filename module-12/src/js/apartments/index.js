import apartmentService from '../services/apartments.service';
import clientStorage from '../services/clientStorage';
import preloaderFactory from '../preloader';
import apartmentsListTemplate from '../../templates/apartments-list.hbs';
import Modal from '../modal';
import Form from '../addApartmentForm';
import debounce from 'lodash.debounce';

const preloader = preloaderFactory('.preloader');
const addApartmentBtnRef = document.querySelector('.add-apartment-btn');

const Homepage = {
  element: document.querySelector('.apartments-list'),
  _apartments: [],
  error: '',

  get apartments() {
    return this._apartments;
  },

  set apartments(apartments) {
    this._apartments = apartments;
    clientStorage.setItem('apartments', this._apartments);
    this.render();
  },

  removeApartmentById(id) {
    this.apartments = this.apartments.filter(
      apartment => apartment.id.toString() !== id.toString(),
    );
  },

  addApartment(apartment) {
    this.apartments = [apartment, ...this.apartments];
  },

  render() {
    this.element.innerHTML = apartmentsListTemplate(this.apartments);
  },

  fetchApartments() {
    const savedApartments = clientStorage.getItem('apartments');
    if (savedApartments) {
      this.apartments = savedApartments;
      preloader.hide();
      return;
    }

    apartmentService
      .fetchApartments()
      .then(apartments => {
        this.apartments = apartments;
      })
      .catch(() => {
        this.error = 'There was an error';
      })
      .finally(() => {
        preloader.hide();
      });
  },
};

new Form('.add-apartment-form', {
  onSubmit(formData) {
    const { title, descr } = formData;
    console.log(descr, '----descr');
    Homepage.addApartment({
      title,
      descr,
      id: performance.now(),
      imgUrl: 'https://tcc.ua/storage/files/images/hotels/497441/1.jpg',
    });

    Modal.close();
  },
});

const deleteHandler = event => {
  const { target } = event;
  if (target.classList.contains('apartment__delete-btn')) {
    const { id } = target.dataset;
    Homepage.removeApartmentById(id);
  }
};

Homepage.fetchApartments();
Homepage.element.addEventListener('click', deleteHandler);

addApartmentBtnRef.addEventListener('click', () => Modal.open());

// document.body.addEventListener('click', () => {
//   window.scrollTo({
//     top: window.scrollY + window.innerHeight,
//     behavior: 'smooth',
//   });
// });

const inputDebounce = debounce(event => {
  console.log(event.target.value, '----value');
}, 250);

document.querySelector('input').addEventListener('input', inputDebounce);
