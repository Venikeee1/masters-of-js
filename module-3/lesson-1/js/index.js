'use strict';

const userName = 'john';
const userAge = 10;
const userSalary = 10000;

const user = {
  age: 10,
  name: 'john',
  salary: 10000,
  'super super key': 'super key',
};

const showFullUserInfo = function (name, age, salary) {
  console.log(`User name: ${name}, age: ${age}, salary ${salary}`);
};

showFullUserInfo(user.name, user.age, user.salary);

const key = 'super super key';
// console.log(user.foo);
// console.log(user[key]);

delete user[key];
// console.log(user);

/** Короткие свойства */

const heroName = 'Motaro';
const health = 2000;
const secretKey = 12312312;
const token = 'asdasdsa13123saasdsadsa';

// const hero = {
//   heroName: heroName,
//   health: health
// }

const hero = {
  heroName,
  health,
  [secretKey]: token,
  'your super key': token,
  showHealth: function () {
    console.log(this.health);
  },
};

// hero[secretKey] = token;

// console.log(hero);

hero.showHealth();

/** Ccccccombo */

const heroFactory = (name, health, icon) => {
  return {
    name,
    health,
    icon,
    greet() {
      console.log(`My name is ${this.name}. My health ${this.health}`);
    },
  };
};

const heroesName = {
  MOTARO: 'Motaro',
  RAIDEN: 'Reiden',
  KUN_LAO: 'Kun lao',
  John_Wick: 'John Wick',
};

const raiden = heroFactory(heroesName.RAIDEN, 1500, '👨‍🦳');
const kunLao = heroFactory(heroesName.KUN_LAO, 1300, '👨‍🎓');
const motaro = heroFactory(heroesName.MOTARO, 1600, '👹');

const heroes = {
  items: [raiden, kunLao, motaro],
  getHeroByName(heroName) {
    for (let hero of this.items) {
      if (hero.name === heroName) {
        return hero;
      }
    }
  },
};

const newHero = heroes.getHeroByName(heroesName.RAIDEN);
// console.log(newHero);
// console.log(heroes);

// for (let key in heroesName) {
//   console.log(`key: ${key}, value ${heroesName[key]}`);
// }

/** Object.keys, Object.values, Object.entries */

// for (let key of Object.keys(heroesName)) {
//   console.log(key);
// }

// for (let value of Object.values(heroesName)) {
//   console.log(value);
// }

for (let item of Object.entries(heroesName)) {
  console.log(`key: ${item[0]}, value ${item[1]}`);
}
