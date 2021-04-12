export const asyncImageLoader = imageRef => {
  return new Promise((resolve, reject) => {
    imageRef.onload = function () {
      resolve(imageRef);
    };

    imageRef.onerror = function (error) {
      reject(error);
    };
  });
};

export const lazyLoading = imageRef => {
  const src = imageRef.dataset.src;
  imageRef.src = src;
  return asyncImageLoader(imageRef);
};

export const wait = delay => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const a = 10;
      const b = 15;
      const result = a + b;
      resolve(result);
    }, delay);
  });
};

export default {
  wait,
  asyncImageLoader,
};
