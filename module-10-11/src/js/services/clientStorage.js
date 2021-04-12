const clientStorage = {
  getItem(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      return undefined;
    }
  },
  setItem(key, payload) {
    try {
      localStorage.setItem(key, JSON.stringify(payload));
    } catch (error) {
      console.error(error);
    }
  },
};

export default clientStorage;
