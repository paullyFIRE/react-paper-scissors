import { createStore, combineReducers } from 'redux';
import game from './reducers/gameState';
import api from './reducers/api';

const reducers = combineReducers({ game, api });

const store = createStore(reducers, {
    game: {
        started: false,
        score: 1000,
        roundsWon: 0,
        roundsLost: 0,
        multipliers: 0,
    },
    api: {
        leaderboard: {},
        games: {}
    },
});

export default store;