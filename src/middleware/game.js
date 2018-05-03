import { play } from '../model/game-logic';
import { fetchData } from '../model/api-logic';
import config from '../config';

const gameMW = store => next => action => {
  if (action.type == 'GAME_CONTROL_ENTRY' && action.data) {
    const roundResponse = play(action.data);
    const state = store.getState();

    const roundData = {
      player: action.data,
      computer: roundResponse.computer,
      result: roundResponse.result,
      duelType: null
    };

    switch (state.game.state) {
      case 'STANDARD_ROUND':
        roundData.duelType = 'STANDARD';
        break;
      case 'MULTIPLIER_ROUND':
        roundData.duelType = 'MULTIPLIER';
        break;
    }

    store.dispatch({ type: 'ADD_DUEL', data: roundData });
  } else if (action.type == 'ADD_DUEL') {
    next(action);

    //Toggle Modals per Duel Type
    if (action.data.duelType == 'MULTIPLIER') {
      $(`#${config.modals.multiplierModal.modalName}`).modal({
        backdrop: 'static'
      });
    } else if (action.data.duelType == 'STANDARD') {
      $(`#${config.modals.standardDuel.modalName}`).modal({
        backdrop: 'static'
      });
    }
  } else if (action.type == 'DUEL_ANIMATION_COMPLETED') {
    const state = store.getState();

    if (state.duelResultQueue.queue[0].duelType == 'STANDARD') {
      switch (state.duelResultQueue.queue[0].result) {
        case 'WON':
          store.dispatch({ type: 'POINT_WON' });
          break;
        case 'LOST':
          store.dispatch({ type: 'POINT_LOST' });
          break;
        case 'DREW':
          store.dispatch({ type: 'POINT_DRAW' });
          break;
      }
    } else if (state.duelResultQueue.queue[0].duelType == 'MULTIPLIER') {
      if (state.duelResultQueue.queue[0].result == 'WON') {
        store.dispatch({ type: 'MULTIPLIER_WON' });
      }
      store.dispatch({ type: 'MULTIPLIER_ROUND_OVER' });
    }
  } else if (action.type == 'POINT_WON') {
    next(action);

    const state = store.getState();

    if (state.game.rounds[0].pointsPlayer == config.roundLimit) {
      store.dispatch({ type: 'ROUND_WON' });
    }
  } else if (action.type == 'POINT_LOST') {
    next(action);

    const state = store.getState();

    if (state.game.rounds[0].pointsCPU == config.roundLimit) {
      store.dispatch({ type: 'ROUND_LOST' });
    }
  } else if (action.type == 'ROUND_WON') {
    next(action);

    store.dispatch({ type: 'NEW_ROUND' });
  } else if (action.type == 'ROUND_LOST') {
    next(action);

    const state = store.getState();

    if (state.game.roundsLost == config.lossLimit) {
      store.dispatch({ type: 'GAME_OVER' });
    } else {
      store.dispatch({ type: 'NEW_ROUND' });
    }
  } else if (action.type == 'GAME_OVER') {
    next(action);
  } else if (action.type == 'RESET_GAME') {
    next(action);
    dispatch({ type: 'RESET_PREVIEW_QUEUE' });
  } else {
    next(action);
  }
};

export default gameMW;
