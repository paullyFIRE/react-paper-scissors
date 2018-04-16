import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Game from './reducers/gameState';
import API from './reducers/gameState';

let store = createStore(Game, {
    started: false,
    score: 1000,
    roundsWon: 0,
    roundsLost: 0,
    multipliers: 0,
    data: {
        leaderboard: {},
        games: {}
    }
});

render(<Provider store={store}>
            <App />
        </Provider>
        ,document.getElementById('app'));