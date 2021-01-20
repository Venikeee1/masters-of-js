'use strict';

const arr = [3, 2, 5, 10, 18, 30];
const obj = {
  firstName: 'Dunkan',
  age: 100,
  salary: 5,
  secondName: 'Second name',
};

// const firstElement = arr[0];
// const secondElement = arr[1];

/** Деструктуризация массива */
const [firstElement, secondElement, thirdElement = 111, ...restArr] = arr;
// console.log(firstElement, secondElement, thirdElement);
console.log(restArr);

/**Деструктуризация объекта */
// const userName = obj.firstName;
// const userAge = obj.age;

const { firstName, age = 10, ...restObject } = obj;
// console.log(firstName, age);
// console.log(restObject);

/** ...Rest */
const greet = (...arg) => {
  const [first, second, third = ' not exist'] = arg;

  console.log(`Hello ${first} ${second}; ${third}`);
};

// greet('world', 'I am robot');

/** ...Spread */

const fruits = ['mango', 'kiwi', 'banana'];
const vegetables = ['tomato', 'cucumber', 'potato'];
const total = [...vegetables, ...fruits];

const newMeals = [...total];
// console.log(total);
// console.log(newMeals === total);

const address = {
  city: 'Kyiv',
  street: 'Nice street',
};

const user = {
  id: '123213',
  name: 'Alex',
  salary: 1000,
  greet() {},
  salary1: 1000,
};

// console.log(user, '---before');
user.address = { ...address };
// console.log(user, '---after');
user.address.city = 'New city';

const newUser = { ...user };
newUser.name = 'New name';
newUser.address.city = 'Gothem';
// console.log(newUser, '---newUser');
// console.log(newUser.address === user.address, '------');

/** JSON hack for copy object */
// const fullCopiedUser = JSON.parse(JSON.stringify(user));
// fullCopiedUser.address.city = 'ddddddddddddddddddddddddddd';
// console.log(fullCopiedUser, '----fullCopiedUser');

// console.log(user, '----user');

/** Рекурсия просчет факториала */
// 6! = 1 * 2 * 3 * 4 * 5 * 6
const fact = (num) => {
  if (num <= 2) {
    return num;
  }

  return num * fact(num - 1);
};

// 5 * fact(4)
//     4 * fact(3)
//         3 * fact(2)
//             2

const factorialOfFive = fact(5);
// console.log(factorialOfFive);

// const user = {
//   id: '123213',
//   name: 'Alex',
//   salary: 1000,
//   greet() {},
//   address: {
//     city: 'Kyiv',
//     street: 'Nice street',
//   },
//   salary: 1000,
// };

const deepClone = (obj) => {
  const clonedObj = {};
  // key: address;
  // value: {
  //   city: 'Kyiv',
  //   street: 'Nice street',
  // }
  for (let key in obj) {
    const value = obj[key];

    if (typeof value === 'object' && value !== null) {
      clonedObj[key] = deepClone(value);
    } else {
      clonedObj[key] = value;
    }
  }

  return clonedObj;
};

const superUser = deepClone(user);
console.log(superUser, '--cloned');
