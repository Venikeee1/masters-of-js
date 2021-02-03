const Game = function (player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
};

Game.prototype.fight = function () {
  const { hero: player1hero } = this.player1;
  const { hero: player2hero } = this.player2;
  const hero1damage = player1hero.getDamage();
  const hero2damage = player2hero.getDamage();

  while (player1hero.health > 0 && player2hero.health > 0) {
    player1hero.receiveDamage(hero2damage);
    player2hero.receiveDamage(hero1damage);
    this.logHits(player1hero.name, hero1damage, player2hero.health);
    this.logHits(player2hero.name, hero2damage, player1hero.health);
  }

  const winner = player1hero.health > 0 ? this.player1 : this.player2;
  this.greetWinner(winner);
};

Game.prototype.greetWinner = function (winner) {
  console.log(`The winner is 🛌🛌🛌${winner.name}🛌🛌🛌`);
};

Game.prototype.logHits = function (heroName, damage, enemyHealth) {
  console.log(`Hero ${heroName} 🤜 💨 💥 ${damage}. Enemy ${enemyHealth} left`);
};

Game.prototype.run = function () {
  this.fight();
};

export default Game;
