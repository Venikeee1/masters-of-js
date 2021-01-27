'use strict';

/** Callback functions */

const orders = [
  { email: 'solomon@topmail.ua', dish: 'Burger' },
  { email: 'artemis@coldmail.net', dish: 'Pizza' },
  { email: 'jacob@mail.com', dish: 'Taco' },
];

const mapArray = (arr, callBackFn) => {
  const result = [];

  for (let i = 0; i < arr.length; i += 1) {
    const item = callBackFn(arr[i], i);
    result.push(item);
  }

  return result;
};

const getEmailsList = (order) => {
  return order.email;
};
const getDishes = (order) => {
  return order.dish;
};
const addIdToOrder = (order, index) => {
  return {
    ...order,
    id: index,
  };
};

const emailsList = mapArray(orders, (order) => order.email);
const dishes = mapArray(orders, getDishes);
const ordersWithId = mapArray(orders, addIdToOrder);

const newEmailsList = orders.map(getEmailsList);

// console.log(emailsList, '---emailsList');
// console.log(newEmailsList, '---newEmailsList');
// console.log(dishes, '---dishes');
// console.log(ordersWithId, '---ordersWithId');

/** Closures */

// const greet = () => {
//   let counter = 0;

//   return () => {
//     // [[env]]
//     counter += 1;
//     console.log(counter);
//   };
// };

// const incrementCounter = greet();
// incrementCounter();
// incrementCounter();
// incrementCounter();
// incrementCounter();

const count = () => {
  let total = 0;

  return {
    add(value) {
      total += value;
      return this;
    },
    result() {
      return total;
    },
  };
};

const result = count().add(22).add(1).result();
// console.log(result, '----result');

/** Context -> this */

const user = {
  firstName: 'John',
  surname: 'Mackdonald',
  greet() {
    console.log(`My name is ${this.firstName}`);
  },
  showFullName() {
    console.log(`${this.firstName} ${this.surname}`);

    const arrowFn = () => {
      console.log(this.surname, 'arrowFn');
    };

    arrowFn();
  },
};

// user.greet();
user.showFullName();
const foo = user.showFullName;
// console.log(foo, '------foo');
// foo();

const car1 = {
  id: 22,
  price: 1000,
  showId() {
    console.log(this.id, '----id');
  },
  addCost(a, b) {
    this.price += a + b;
    return this.price;
  },
};

car1.showId = car1.showId.bind(car1);
car1.addCost = car1.addCost.bind(car1);

const car2 = {
  id: 44,
  price: 2000,
};

car2.show = car1.showId;
car2.show();

// const totalPrice = car1.addCost.call(car2, 55, 100);
// const newTotalPrice = car1.addCost.apply(car2, [55, 100]);
// console.log(totalPrice, '---price');
// console.log(newTotalPrice, '---newTotalPrice');
let val = 1;

const fibon = (num) => {
  val += 1;
  console.log(val);
  if (num <= 1) {
    return num;
  }
  return fibon(num - 1) + fibon(num - 2);
};

fibon(7);

const fibonOf = fibon(20);
// console.log(fibonOf);
