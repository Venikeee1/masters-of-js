import api, { cars } from './api.js';

// const foo = 'age';

// const baz = (str) => `${str}-${str}`;

// const user = {
//   name: 'John',
//   [foo.toLocaleUpperCase()]: 15,
//   [baz('hello')]: 'hello',
// };

// const users = [
//   {
//     name: 'John1',
//     age: 10,
//   },
//   {
//     name: 'John2',
//     age: '10',
//   },
// ];

// const [user1, user2] = users;
/** Аналог верхней записи */
// const user1 = users[0];
// const user2 = users[1];
// console.log(Number(user1.age) === +user2.age);
// console.log(user);

const getUserInfo = ({ name, age, bar = 'BAR' }) => {
  //[[environment]]: {parent:, this - его нет  }
  console.log(this);
  return `User name is ${name}. User ${age} year old ${bar}`;
};

// console.log(getUserInfo(user1));

// const app = {
//   user: {
//     settings: {
//       filters: {
//         theme: 'light',
//       },
//     },
//   },
// };

// const theme = app.user.settings.filters.theme
// const theme =
//   app &&
//   app.user &&
//   app.user.settings &&
//   app.user.settings.filters &&
//   app.user.settings.filters.theme;

// const theme = lodash.get('user.settings.filters.theme', app);
// const theme = app?.user?.settings?.filters?.theme;

// const arr = [5, 3, 2, 8, 1, 4];

// const sortByOddValues = (arr) => {
//   let step = 0;
//   const arrOfOddValues = arr
//     .filter((item) => item % 2 !== 0)
//     .sort((a, b) => a - b);

//   return arr.map((item) => {
//     if (item % 2 !== 0) {
//       return arrOfOddValues[step++];
//     }

//     return item;
//   });
// };

// console.log(sortByOddValues(arr));

// const fibon = (num, result = [0, 1]) => {
//   if (result.length >= num) {
//     return result;
//   }

//   const length = result.length;
//   result.push(result[length - 1] + result[length - 2]);

//   return fibon(num, result);
// };

// console.log(fibon(1), 'fibon');

// api.getUsers().then((res) => console.log(res));

// const maxLength = (maxValue) => {
//   return (value) => {
//     if (value > maxValue) {
//       console.error('превышен лимит');
//       return;
//     }

//     console.log('все валидно');
//   };
// };

// const textValidator = maxLength(20);
// const emailValidator = maxLength(10);

// const inputText = document.querySelector('.text');
// const inputEmail = document.querySelector('.email');

// inputText.addEventListener('input', (event) => {
//   // console.log(event.target.value);
//   textValidator(event.target.value.length);
// });

// inputEmail.addEventListener('input', (event) => {
//   // console.log(event.target.value);
//   emailValidator(event.target.value.length);
// });

// const calculateTotalBalance = (users) => {
//   return users.reduce((total, user) => {
//     return total + user.balance;
//   }, 0);
// };

// const foo1 = [{ balance: 15 }, { balance: 25 }];

// console.log(calculateTotalBalance(foo1));
// console.log(cars);

// const User = function (name) {
//   this.name = name;
// };

// User.MAX_PRICE = 10000;

// const user = new User();
// console.log(user.MAX_PRICE);

const getUniqueValues = (firstArr, secondArr) => {
  const unique = new Set([...firstArr]);

  for (let i = 0; i < secondArr.length; i++) {
    if (unique.has(secondArr[i])) {
      unique.delete(secondArr[i]);
      continue;
    }

    unique.add(secondArr[i]);
  }

  return [...unique];
};

console.log(getUniqueValues([1, 2, 3], [1, 2, 3, 5, 7]));
