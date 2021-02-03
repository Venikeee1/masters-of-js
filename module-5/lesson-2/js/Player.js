import Hero from './Hero.js';

const Player = function (name) {
  this.name = name;
  this.hero = null;
};

Player.prototype.selectHero = function (heroName) {
  this.hero = new Hero(heroName);
};

export default Player;
