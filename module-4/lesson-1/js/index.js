'use strict';

/** Callback functions */

const greet = function (name) {
  console.log(`My name is ${name}`);
};

const showYourName = (name) => {
  console.log(name);
};

const createUser = function (userData, callBackFn) {
  const user = {
    name: userData.name,
    age: userData.age,
  };

  callBackFn(user.name);
};

const userData = {
  name: 'John',
  age: 50,
};

// createUser(userData, greet);
// createUser(userData, showYourName);

// const carFactory = (carName, beforeCreateFn = () => {}, afterCreateFn) => {
//   const initialSettings = beforeCreateFn();

//   const newCar = {
//     name: carName,
//     ...initialSettings,
//   };

//   if (afterCreateFn) {
//     afterCreateFn(newCar);
//   }
// };

const carFactory = (carName, beforeCreateFn) => {
  let additionalSettings;

  if (beforeCreateFn) {
    additionalSettings = beforeCreateFn();
  }

  const newCar = {
    name: carName,
    ...additionalSettings,
  };

  return newCar;
};

const logBeforeCreate = () => {
  console.log('invoked before car created');
};

const addSettingsToCar = () => {
  return {
    color: prompt('Введите цвет'),
    speed: 160,
    weight: 2000,
  };
};

// const newCar = carFactory('audi', logBeforeCreate);
// const newCar = carFactory('audi');
// console.log(newCar);

const users = [
  {
    name: 'Tanker',
    age: 20,
    isAdult: false,
  },
  {
    name: 'Shrek',
    age: 15,
    isAdult: false,
  },
  {
    name: 'Arnold',
    age: 20,
    isAdult: false,
  },
];

// const isAdult = (userAge, callBackFn) => {
//   if (userAge >= 18) {
//     callBackFn();
//     return;
//   }

//   console.log('Иди в школу');
// };

// for (let user of users) {
//   const addIsAdultFlag = () => {
//     user.isAdult = true;
//   };

//   isAdult(user.age, addIsAdultFlag);
// }

// console.log(users);

// users.map((item, index) => {
//   console.log(item, `index is: ${index}`);
// });

// const mapArray = (arr, callBackFn) => {
//   let resultArr = [];

//   for (let i = 0; i < arr.length; i += 1) {
//     if (callBackFn) {
//       callBackFn(arr[i].name, i);
//     }
//     resultArr.push(arr[i]);
//   }

//   return resultArr;
// };

// const logItem = (item, index) => {
//   console.log(`index is: ${index}`);
//   console.log(item);
// };

// mapArray(users, logItem);

const c = 50;

const hi = () => {
  // const env = {
  //   [[enviroment]],
  //   a: 100,
  // }
  const a = 100;
  const c = 100;
  console.log(a);
  console.log(c);

  const log = () => {
    // const env = {
    //   [[enviroment]],
    //   a: 100,
    // }
    console.log(c);
  };

  log();
};

hi();

const arrayForEach = (arr, callBackFn) => {};
