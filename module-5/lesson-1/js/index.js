'use strict';
import Game from './Game.js';
import Player from './Player.js';

const player1 = new Player('John');
const player2 = new Player('Tom');
player1.selectHero('hulk');
player2.selectHero('thor');

const game = new Game(player1, player2);
// console.log(game);

game.run();
