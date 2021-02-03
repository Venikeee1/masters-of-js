'use strict';
import Game from './Game.js';
import Player from './Player.js';

const player1 = new Player('John');
const player2 = new Player('Tom');
player1.selectHero('hulk');
player2.selectHero('thor');

const game = new Game(player1, player2);
// game.run();

const baaaz = Object.create(null);
baaaz.name = 555;

/** В случае если надо применить методы к чистому объекту */
// console.log(Object.prototype.toString.call(baaaz));

const newGame = Object.create(game);
newGame.name = 'super Game';
// console.log(newGame);
// newGame.run();

// for (let key in newGame) {
//   if (newGame.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }

// SOLID
class Hero {
  #xp = '';

  constructor(name, xp) {
    this.name = name;
    this.#xp = xp;
    this.damage = 100;
  }

  get xp() {
    return this.#xp;
  }

  set xp(additionalXp) {
    this.#xp += additionalXp;
    this.render();
  }

  render() {
    const div = document.createElement('div');
    div.textContent = this.xp;
    document.body.appendChild(div);
  }

  getDamage() {
    return this.damage;
  }
}

class Warrior extends Hero {
  constructor(name, xp, weapon, strength) {
    super(name, xp);
    this.weapon = weapon;
    this.strength = strength;
  }

  getDamage() {
    return this.damage * this.strength;
  }
}

class Wizard extends Hero {
  constructor(name, xp, staff, intellect) {
    super(name, xp);
    this.staff = staff;
    this.intellect = intellect;
  }

  getDamage() {
    return this.damage * this.intellect;
  }
}

const warrior = new Warrior('Konan', 1000, 'axe', 5);
const wizard = new Wizard('Merlin', 2000, 'nimbus2000', 8);

// console.log(warrior.getDamage());
wizard.xp = 500;
console.log(wizard.xp);
window.wizard = wizard;
