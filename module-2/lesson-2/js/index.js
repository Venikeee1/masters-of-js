'use strict';
/** function expression */
const sum = function (val1, val2) {
  return val1 + val2;
};
const logger = function (text) {
  console.log(text);
};
// console.log(sum());
// console.log(logger('heloooo'));

const a = 5;
const b = 10;

const total = sum(a, b);
const newTotal = sum(total, 15);

/** function declaration */
// можем вызывать выше чем ее объявили
// sayHello('potato');

function sayHello(name) {
  console.log(`Hello world. I am ${name}`);
}

/** стрелочные функции */

const getFullName = (name, secondName) => {
  // нет аргументсов
  // console.log(arguments, '----arrow-arguments');

  return `${name} ${secondName}`;
};

console.log(getFullName('Alex', 'Baaz'));

/**Arguments in functions */
const multiply = function (a, b) {
  // console.log([...arguments], '---arguments');
  return a * b;
};

const result = multiply(2, 5, 10, 17, 312);
// console.log(result);

/** Get arguments in arrow function */
const createCarsList = (...args) => {
  return args;
};

// console.log(createCarsList('bmw', 'audi', 'nimbus2000'));

/** Get max val */
const arr = [10, 6, 3, 14];
const foo = 55;

const getMaxVal = (arr = [1, 10, 3]) => {
  // let result = arr[0];

  // for (let value of arr) {
  //   if (value > result) {
  //     result = value;
  //   }
  // }

  return Math.max(...arr);
};

// const max = Math.max(15, 10, 30, 60, 5, 15);
// console.log(max, '---max');

const maxVal = getMaxVal(arr);
console.log(getMaxVal());

console.log(maxVal);

/** Exercise  */

const hearts = ['💗', '💛', '💚'];

const getHeartByColor = (color) => {
  switch (color) {
    case 'red':
      return '💗';
    case 'yellow':
      return '💛';
    default:
      return '💚';
  }

  // if (color === 'red') {
  //   return '💗';
  // }

  // if (color === 'yellow') {
  //   return '💛';
  // }

  // return '💚';

  // let heart = '';
  // if(color === 'red') {
  //   heart = '💗'
  // } else if(color === 'green') {
  //   heart = '💚'
  // } else {
  //   heart = '💛'
  // }

  // return heart
};

console.log(getHeartByColor());

const arr3 = [1, 2, 3, 4];
const arr4 = [2, 6, 12, 4, 8];

const getRepeatedValues = (arr1, arr2) => {
  let result = [];
  // for (let value1 of arr1) {
  //   for (let value2 of arr2) {
  //     if (value2 === value1) {
  //       result.push(value1);
  //       break;
  //     }
  //   }
  // }

  for (let value1 of arr1) {
    const hasValue = arr2.includes(value1);

    if (hasValue) {
      result.push(value1);
    }
  }

  return result;
};

const repeated = getRepeatedValues(arr3, arr4);
console.log(repeated);

const code = 'hgello world'.charCodeAt(2);

const splitTextByWords = (text) => {
  return text.split(' ');
};

const capitalize = (word) => {
  return word[0].toUpperCase() + word.slice(1);
};

const capitalizeAllWordsInText = (text) => {
  const words = splitTextByWords(text);
  let result = [];

  for (let word of words) {
    result.push(capitalize(word));
  }

  return result.join(' ');
};
const text =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor natus quaerat porro itaque quis minus amet quos voluptate at, voluptatum fuga esse excepturi velit repellat soluta accusantium asperiores labore expedita?';

const capitalized = capitalizeAllWordsInText(text);
console.log(capitalized);
