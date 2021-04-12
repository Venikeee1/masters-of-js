import './styles.css';
import './css/preloader.css';
import './js/menu';
import './js/apartments';
import './js/asyncJs';
import { asyncImageLoader, wait, lazyLoading } from './js/utils';

// const callBackTimeout = (delay, callBackFn) => {
//   setTimeout(() => {
//     const a = 10;
//     const b = 15;
//     const result = a + b;
//     callBackFn(result);
//   }, delay);
// };

// callBackTimeout(2000, res => {
//   console.log(res, '----res');
//   callBackTimeout(1000, res => {
//     console.log(res ** 2, '----res ** 2');

//     callBackTimeout(1000, res => {
//       console.log(res ** 3, '----res ** 3');
//     });
//   });
// });

// const wait = delay => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const a = 10;
//       const b = 15;
//       const result = a + b;
//       resolve(result);
//     }, delay);
//   });
// };

// wait(2000)
//   .then(res => {
//     const newResult = res ** 2;
//     return newResult;
//   })
//   .then(res => {
//     console.log(res, '----res');
//   });

// Promise.allSettled([
//   fetch('https://jsonplaceholder.typicode.com/todos/1'),
//   fetch('https://jsonplaceholder.typicode.com/todos/2'),
//   fetch('https://jsonplaceholder.typicode.com/todos/3'),
//   fetch('https://jsonplaceholder.typicode.com/todos/4'),
// ])
//   .then(todos => {
//     return Promise.all(
//       todos
//         .filter(todo => todo.status === 'fulfilled')
//         .map(todo => todo.value)
//         .map(todo => todo.json()),
//     );
//   })
//   .then(res => console.log(res));

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => Promise.reject('there was an error'))
//   .then(
//     json => console.log(json),
//     error => console.log(error, '---Promise.reject'),
//   )
//   .catch(error => {
//     console.error(error);
//   });

// const photoRef = document.querySelector('.photo');
// const preloader = document.querySelector('.preloader');
// const hidePreloader = () => preloader.remove();

// lazyLoading(photoRef)
//   .catch(error => console.log(error, '----error'))
//   .then(result => {
//     console.log(result, '---result');
//     return wait(2000);
//   })
//   .finally(() => {
//     hidePreloader();
//   });

// new Promise
{
  const isEven = value => {
    return new Promise((resolve, reject) => {
      if (value % 2 === 0) {
        return resolve(value / 2);
      }

      reject(value * 10);
    });
  };

  isEven(11)
    .then(result => console.log(result, '-- even value variant 1'))
    .catch(error => console.log(error, '---error'));
}

{
  const isEven = value => {
    if (value % 2 === 0) {
      return Promise.resolve(value / 2);
    }

    return Promise.reject(value * 10);
  };

  isEven(10)
    .then(result => console.log(result, '-- even value variant 2'))
    .catch(error => console.log(error, '---error'));
}
