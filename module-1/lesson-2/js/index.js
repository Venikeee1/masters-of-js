// const userAge = prompt('Введите свой возраст');

// if (userAge >= 45) {
//   console.log('Привет людям эпохи ренесанс');
// } else if (userAge >= 25) {
//   console.log('Да вы молоды');
// } else if (userAge >= 18) {
//   console.log('Добро пожаловать на наш сайт');
// } else {
//   console.log('подрасти и приходи');
// }

/** Switch case */
// const carType = prompt('Введите тип машины');

// if (carType === 'audi') {
//   console.log('Классный выбор');
// } else if (carType === 'bmw') {
//   console.log('Лучше бы взяли ауди');
// } else if (carType === 'ford') {
//   console.log('А у тебя специфический вкус');
// }

// switch (carType) {
//   case 'audi':
//   case 'bmw':
//     console.log('Nice car');
//     break;

//   case 'ford':
//     console.log('А у тебя специфический вкус');
//     break;

//   default:
//     console.log('Повезет в любви');
// }

/** Тернарный оператор */

// const carType = prompt('Введите тип машины');
// const isCarExpensive = carType === 'bugatti';

// let myMoney;
// if (isCarExpensive) {
//   myMoney = 0;
// } else {
//   myMoney = 5000;
// }

// упрощенный вариант
// const myMoney = isCarExpensive ? 0 : 5000;

// console.log(`My money ${myMoney}`);

/** Циклы */

//while
// let i = 0;
// while (i < 10) {
//   console.log(`id is ${i}`);
//   if (i === 3) {
//     i += 3;
//     continue;
//   }

//   if (i === 5) {
//     break;
//   }
//   i += 1;
// }

// do while
let salary = 4000;

// do {
//   salary -= 1200;
//   console.log(`Salary is ${salary}`);
// } while (salary > 0);

// for

for (let i = 0; i < 10; i += 3) {
  console.log(`Index is ${i}`);
}

/** Калькулятор */
// const userInput = prompt('Мы вам все посчитаем');
// const result = eval(userInput);

// while (confirm('Хотите посчитать')) {
//   const userInput = prompt('Мы вам все посчитаем');
//   const result = eval(userInput);
//   console.log(result);
// }

// for (let i = 0; i < 10; i += 1) {
//   console.log(i);
// }
// console.log('qweqwe');

let name = 'Генератор защитного поля';
let price = 1000;

price = 2000;
let discribeProduct = `Выбран «${name}», цена за штуку ${price} кредитов`;

console.log(price);
console.log(discribeProduct);
