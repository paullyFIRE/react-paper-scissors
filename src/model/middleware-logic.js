import { play } from './game-logic';
import { fetchData } from './api-logic';
import config from '../config';

const mwlogic = (store) => next => action => {
    if(action.type == "GAME_CONTROL_ENTRY" && action.data) {
        const roundResponse = play(action.data);

        store.dispatch({ type: 'ADD_DUEL', data: {
            player: action.data,
            computer: roundResponse.computer,
            result: roundResponse.result,
        }});

        next(action);
    } else if(action.type == "ADD_DUEL") {
        $(`#${config.modals.duelResult.modalName}`).modal({ backdrop: "static" });

        next(action);
    } else if (action.type == 'DUEL_ANIMATION_COMPLETED') {
        const state = store.getState();

        switch(state.duelResultQueue.queue[0].result) {
            case 'WON':
                store.dispatch({ type: 'POINT_WON' });
                break;
            case 'LOST':
                store.dispatch({ type: 'POINT_LOST' });
                break;
            case 'DREW':
                store.dispatch({ type: 'POINT_DRAW' })
                break;
        };

        next(action);
    } else if (action.type == "GAME_CONTROL_MULTIPLIER" && action.data) {
        //ACTION HANDLER HERE FOR THE MULTIPLER GAMEPLAY
        

    } else if (action.type == 'POINT_WON') {
        next(action);

        const state = store.getState();

        if(state.game.rounds[0].pointsPlayer == config.roundLimit) {
            store.dispatch({ type: 'ROUND_WON' });
        }

    } else if(action.type == 'POINT_LOST') {
        next(action);

        const state = store.getState();

        if(state.game.rounds[0].pointsCPU == config.roundLimit) {
            store.dispatch({ type: 'ROUND_LOST' });
        }

    } else if(action.type == 'ROUND_WON') {
        // $(`#${config.modals.multiplier.modalName}`).modal({ backdrop: 'static' });
        store.dispatch({ type: 'NEW_ROUND' });
        next(action);

    } else if (action.type == 'ROUND_LOST') {
        next(action);

        const state = store.getState();

        if(state.game.roundsLost == config.lossLimit) {
            store.dispatch({ type: 'GAME_OVER' });
        } else {
            store.dispatch({ type: 'NEW_ROUND'});
        }

    } else if (action.type == 'GAME_OVER') {
        next(action);

    } else if (action.type == 'RESET_GAME') {
        store.dispatch({ type: 'RESET_PREVIEW_QUEUE' });
        next(action);
    } else {
        next(action);
        
    }
};

export default mwlogic;