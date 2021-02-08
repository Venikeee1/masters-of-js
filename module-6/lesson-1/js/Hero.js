import HERO_LIST from './heroList.js';

export default class Hero {
  constructor() {
    this.list = HERO_LIST.slice();
  }

  getHerosNames() {
    return this.list.map((item) => item.name);
  }

  getHerosWithoutNames() {
    return this.list.map(({ name, ...restProps }) => restProps);
  }

  updateHeroName(oldName, newName) {
    this.list = this.list.map((item) => {
      if (item.name !== oldName) {
        return item;
      }

      return {
        ...item,
        name: newName,
      };
    });
  }

  filterByHealth(health) {
    return this.list.filter((item) => {
      return item.health >= health;
    });
  }

  deleteHeroByName(name) {
    this.list = this.list.filter((item) => item.name !== name);
  }

  findHeroByName(name) {
    return this.list.find((item) => item.name === name);
  }

  hasAllHeroesName() {
    return this.list.every((item) => Boolean(item.name));
  }

  hasSomeAge() {
    return this.list.some((item) => Boolean(item.age));
  }

  getTotalHealth() {
    return this.list.reduce((acc, item, index, self) => {
      return acc + item.health;
    }, 0);
  }

  getAllNames() {
    return this.list.reduce((acc, item, index, self) => {
      return `${acc} ${item.name}`;
    }, '');
  }

  sortByDamage() {
    return [...this.list].sort((first, second) => {
      return second.damage - first.damage;
    });
  }
}

const hero = new Hero();
hero.updateHeroName('thor', 'Loki');
// console.log(hero.getHerosNames());
// console.log(hero.getHerosWithoutNames());
// console.log(hero.filterByHealth(2555));
// console.log(hero.list);
// hero.deleteHeroByName('thanos');
// console.log(hero.list);
// console.log(HERO_LIST);
// console.log(hero.hasAllHeroesName());
// console.log(hero.hasSomeAge());
console.log(hero.getTotalHealth());
console.log(hero.getAllNames());
console.log(hero.sortByDamage());
console.log(hero.list);
