import fetchData from '../model/api-logic';
import config from '../config';

const api = store => next => action => {
  if (action.type == 'FETCH_DATA') {
    fetchData(config.modals.games.apiPath, { method: 'GET' }, payload => {
      if (payload.success == 1) {
        store.dispatch({
          type: 'DATA_RECEIVED',
          name: config.modals.games.storeName,
          data: payload.data
        });
      }
    });

    fetchData(config.modals.leaderboard.apiPath, { method: 'GET' }, payload => {
      if (payload.success == 1) {
        store.dispatch({
          type: 'DATA_RECEIVED',
          name: config.modals.leaderboard.storeName,
          type: 'DATA_RECEIVED',
          name: config.modals.games.storeName,
          data: payload.data
        });
      }
    });

    fetchData(config.modals.leaderboard.apiPath, { method: 'GET' }, payload => {
      if (payload.success == 1) {
        store.dispatch({
          type: 'DATA_RECEIVED',
          name: config.modals.leaderboard.storeName,
          data: payload.data
        });
      }
    });
  } else if (action.type == 'POST_GAME') {
    next(action);

    fetchData('games/post', { method: 'POST', data: action.data }, data => {
      if (data.success == 1) {
        store.dispatch({ type: 'POST_SUCCESS' });
      } else {
        store.dispatch({ type: 'POST_FAILURE' });
      }
    });
  } else if (action.type == 'SUBMIT_SCORE') {
    const state = store.getState();

    store.dispatch({
      type: 'POST_GAME',
      data: {
        username: action.username,
        score: state.game.score,
        roundsWin: state.game.roundsWon,
        roundsLose: state.game.roundsLost
      }
    });
  } else if (action.type == 'POST_SUCCESS') {
    next(action);
    store.dispatch({ type: 'FETCH_DATA' });
  } else {
    next(action);
  }
};

export default api;
