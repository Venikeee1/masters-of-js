'use strict';
/* Посчитать количество лапок */
const dogPaw = 4;
const catPaw = 4;
const monkeyPaw = 2;
let total = 0;

const totalPaws = dogPaw + catPaw + monkeyPaw;

// console.log(totalPaws, '---totalPaws');

/* Тип стринг */
const firstName = 'John';
const secondName = 'Wick';

// const fullName = firstName + ' ' + secondName
/** шаблонная строка */
const fullName = `My full name: ${firstName} ${secondName}`;

// console.log(fullName);

/** Boolean */

const isAvailable = true;
const hasSalary = true;

const canWork = Boolean(0) && isAvailable;
const maybeCanWork = isAvailable || hasSalary;

// falsy: 0, '', null, undefined, NaN

const result = true && 5 > 3 && 55555;

// console.log(result);
// console.log(undefined == null);
// console.log('1' === 1);

// так описываются константы в js
const DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000;

/** Typeof operator */
// console.log(typeof DAY_IN_MILLISECONDS);

/** prompt example */
// const userAge = Number(prompt('Please enter your age'));
// const userAge1 = Number(prompt('Please enter your age'));
// console.log(typeof userAge, typeof userAge1);
// console.log(userAge, userAge1);
// console.log(userAge == userAge1);

// const bar = 'ba' + Number('dasd') + 'a';
// const baaz = 5 * 'a5111';
// const foobazz = 0.1 + 0.2;
// console.log(bar.toLowerCase());
// console.log(foobazz);

/** Остаток от деления % */

const userInput = prompt('Введите число');
const float = parseInt(userInput);
if (userInput % 3 === 0) {
  alert('Красавчик');
} else if (userInput % 5 === 0) {
  alert('А ты умеешь рисковать');
} else {
  alert('Повезет в любви');
}

console.log(userInput);
console.log(float, '--parseInt');
