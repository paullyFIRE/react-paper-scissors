import { createStore, combineReducers, applyMiddleware } from 'redux';
import game from './reducers/gameState';
import api from './reducers/API';
import roundPreviewQueue from './reducers/roundPreviewQueue';
import mwlogic from './model/middleware-logic';

const defaultState = {
    game: {
        started: false,
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
        games: {}
    },
    roundPreviewQueue: [{
        id: 1,
        status: 'PENDING',
        player: 'rock',
        computer: 'paper',
        result: 'WIN'
    }]
};

const logger = store => next => action => {
    if(action.type !== 'DATA_RECEIVED' && action.type !== 'GAME_CONTROL_MAIN') {
        console.log('dispatching', action);
        console.log('prev state', store.getState());
        let result = next(action);
        console.log('next state', store.getState());
        return result;
    } else {
        next(action);
    }
};

const reducers = combineReducers({ game, api, roundPreviewQueue });
const store = createStore(reducers, defaultState, applyMiddleware(logger, mwlogic));

module.exports = { store };