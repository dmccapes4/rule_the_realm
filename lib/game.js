import Unit from './unit';
import Tile from './tile';
import Player from './player';
import WorldBoard from './world_board';
import BattleBoard from './battle_board';

class Game {
  constructor(worldBoard) {
    this.board = worldBoard;
    this.setPlayers();
  }

  setPlayers() {
    this.player1 = new Player('player1', this.board);
    this.player2 = new Player('player2', this.board);
    this.currentPlayer = this.player1;
  }

  isEncounter(tile) {
    if (tile.owner === 'none') {
      return tile.attributes['encounterChance'] > Math.random();
    }
    return false;
  }

  isBattle(tile, player) {
    if (player.name === 'player1') {
      return tile.owner === 'player2';
    } else {
      return tile.owner === 'player1';
    }
  }

  battle(player1, player2, tile) {
    let battleBoard = new BattleBoard(player1, player2, tile);
    battleBoard.play();
  }

  switchPlayers() {
    console.log(this.currentPlayer);
    if (this.currentPlayer.name === 'player1') {
      this.currentPlayer = this.player2;
    } else {
      this.currentPlayer = this.player1;
    }
  }

  // play(prompt) {
  //   while (!this.isWon()) {
  //     this.currentPlayer.coin += 1;
  //     prompt.innerHTML = `${this.currentPlayer.name} choose buy or move`;
  //   }
  // }

  isWon() {
    console.log(this.board);
    return this.board.grid[3][0][-3].owner === 'player2' ||
           this.board.grid[-3][0][3].owner === 'player1';
  }
}

export default Game;
