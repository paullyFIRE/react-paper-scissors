import { createStore, combineReducers, applyMiddleware } from 'redux';
import gameMW from './middleware/game';
import apiMW from './middleware/api';
import duelResultQueue from './reducers/duelResultQueue';
import game from './reducers/gameState';
import api from './reducers/API';

const defaultState = {
  game: {
    state: 'STANDARD_ROUND',
    score: 0,
    roundsWon: 0,
    roundsLost: 0,
    multipliers: 0,
    rounds: [
      {
        id: 1,
        pointsPlayer: 0,
        pointsCPU: 0,
        pointsDraw: 0
      }
    ]
  },
  api: {
    leaderboard: {},
    games: {},
    postRequests: []
  },
  duelResultQueue: {
    queue: []
  }
};

const logger = store => next => action => {
  if (action.type !== 'DATA_RECEIVED' && action.type !== 'GAME_CONTROL_MAIN') {
    let result = next(action);
    console.log(`${action.type}\nnext state: `, store.getState());
    return result;
  } else {
    next(action);
  }
};

const reducers = combineReducers({ game, api, duelResultQueue });
const store = createStore(reducers, defaultState, applyMiddleware(logger, gameMW, apiMW));

module.exports = { store };
