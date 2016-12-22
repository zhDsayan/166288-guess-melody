import view from './view';
import {TYPES, welcome, result} from './data/game-data';
import GamePresenter from './game-presenter';

let gameData;

export default class Application {

  static showWelcome() {
    view(TYPES.WELCOME, welcome);
  }

  static showGame() {
    GamePresenter.setQuestions(gameData);
    GamePresenter.gameStart();
  }

  static showStats() {
    view(TYPES.RESULT, result);
  }

  static set data(data) {
    gameData = data;
  }

}
