const BASE_URL = 'https://apt-booking-api.herokuapp.com';

export default {
  fetchApartments() {
    return fetch(`${BASE_URL}/apartments`).then(res => {
      if (!res.ok) {
        throw res;
      }

      return res.json();
    });
  },
};
