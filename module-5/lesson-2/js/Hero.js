const HERO_LIST = [
  {
    name: 'thor',
    health: 2000,
    damage: 300,
  },
  {
    name: 'thanos',
    health: 2200,
    damage: 350,
  },
  {
    name: 'hulk',
    health: 2800,
    damage: 400,
  },
];

const Hero = function (name) {
  const userHero = HERO_LIST.find((hero) => hero.name === name);
  this.name = userHero.name;
  this.damage = userHero.damage;
  this.health = userHero.health;
};

Hero.prototype.getDamage = function () {
  return this.damage;
};

Hero.prototype.receiveDamage = function (damage) {
  this.health = this.health - damage;
};

export default Hero;
