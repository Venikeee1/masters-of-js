'use strict';

let users = ['John', 'Trump', 'Poroshenko', 'Меркель'];
// const cars = new Array('John', 'Trump', 'Poroshenko');

let result = '';
// for (let i = 0; i < users.length; i += 1) {
//   result += ` ${users[i]}`;
// }

for (let name of users) {
  if (name === 'Trump') {
    break;
  }

  result += ` ${name}`;
}

// console.log(result);

/** Только объектов */

// for (let key in users) {
//   result += ` ${users[key]}`;
// }

/** Split */

const baz = 'Welcome to Bahato tomas!';
// console.log(baz.split(''));

/** Join */
const names = users.join(' ');
// console.log(names);

/** Index of */
const position = users.indexOf('Trump');
// console.log(position);

/** Includes */
const isPoroshenkoIncluded = users.includes('Poroshenko');
// console.log(isPoroshenkoIncluded);

/** Pop, push, shift, unshift */

users.push('Янукович');
const lastItem = users.pop();
// console.log(users);
// console.log(lastItem, '---lastItem');

const firstItem = users.shift();
// console.log(firstItem, '---firstItem');
users.unshift('Янукович легитимный');
// console.log(users);

/** splice slice */

// slice
const cars = ['bmw', 'audi', 'suzuki'];
const newCars = cars.slice(3);
// console.log(cars === newCars);
// console.log(newCars);

// splice

const usersList = users.splice(1, 2, 'McKayne', 'Poplavsky');
// console.log(usersList, '--usersList');
// console.log(users);

/** Concat */
const a = [1, 2, 3, 4];
const b = ['sad', 'asd', 'asdasd'];
const ff = a.concat(b, b, b, b);
console.log(ff);
