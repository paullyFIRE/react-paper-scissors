import { play } from './game';

const mwlogic = (store) => next => action => {
    //GAME CONTROL BUTTONS
    if(action.type == "GAME_CONTROL" && action.data) {
        const state = store.getState();
        const roundResponse = play(action.data);

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
    } else {
        return next(action);
    }
};

export default mwlogic;