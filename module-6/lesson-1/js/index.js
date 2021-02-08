import { mapArray } from './helpers.js';
import Hero from './Hero.js';
let total = 10;

const pureFn = (a, b) => {
  return a + b;
};

const notPureFn = (a, b) => {
  return total + a + b;
};

/** Чистая функция легче тестируется */
const exec = {
  compare(firstValue, secondValue) {
    if (firstValue === secondValue) {
      console.log('is equal');
      return;
    }

    throw new Error('values are not equal');
  },
};

total = 20;

// exec.compare(notPureFn(2, 2), 14);
// exec.compare(notPureFn(2, 2), 15);
const arr = [1, 2, 3, 4, 5, 6];
const newArr = arr.map((item, index, self) => {
  // console.log(`Value: ${item}; index: ${index}; array: ${self}`);

  return item * 2;
});

/** Аналог реализации метода Array.prototype.map */
// Array.prototype.newMap = function (callbackFn) {
//   const result = [];
//   for (let i = 0; i < this.length; i++) {
//     result.push(callbackFn(this[i], i, this));
//   }

//   return result;
// };

// const mappedArray = mapArray(arr, (item, index) => item * index);
// console.log(
//   arr.newMap((item, index) => item * index),
//   '---newMap'
// );
// console.log(mappedArray, '----mappedArray');
// console.log(newArr);
// console.log(arr);

/** Пример мутации объекта */
let a = {
  name: 'asdsa',
};

/** Мутируем объект */
a.name = 'New name';
/** Создаем новый объект и изиеняем его имя */
const b = {
  ...a,
  name: 'New name',
};

if (a !== b) {
  a = b;
}
