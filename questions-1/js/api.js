export default {
  getUsers() {
    return fetch('https://facebook.com/users').then((res) => res.json());
  },

  getPosts() {
    return fetch('https://facebook.com/posts').then((res) => res.json());
  },

  getComments() {
    return fetch('https://facebook.com/comments').then((res) => res.json());
  },
};

export const cars = ['audi', 'bmw'];
