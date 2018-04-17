import { play } from './game';
import config from '../config';

const mwlogic = (store) => next => action => {
    //GAME CONTROL BUTTONS
    if(action.type == "GAME_CONTROL_MAIN" && action.data) {
        // const roundResponse = play(action.data);
        const roundResponse = 'WIN';

        switch(roundResponse) {
            case 'WIN':
                store.dispatch({ type: 'POINT_WON' });
                break;
            case 'LOSE':
                store.dispatch({ type: 'POINT_LOST' });
                break;
            case 'DRAW':
                store.dispatch({ type: 'POINT_DRAW' })
                break;
        };

        next(action);
    } else if (action.type == "GAME_CONTROL_MULTIPLIER" && action.data) {
        //ACTION HANDLER HERE FOR THE MULTIPLER GAMEPLAY


    } else if (action.type == 'POINT_WON') {
        const state = store.getState();

        next(action);

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
            console.log("YOU LOST");
            store.dispatch({ type: 'GAME_OVER' });
        } else {
            store.dispatch({ type: 'NEW_ROUND'});
        }

    } else if (action.type == 'SUBMIT_SCORE') {
        $(`#${config.modals.scoreSubmit.modalName}`).modal("show");


    } else {
        return next(action);
    }
};

export default mwlogic;