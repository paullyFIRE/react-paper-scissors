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
        //Noticable opacity delay on modal-background if not applied prior to modal toggle
        setTimeout(() => {
            $('.modal-backdrop.in').css('opacity', '1');
        }, 1);

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
            console.log("YOU LOST");
            store.dispatch({ type: 'GAME_OVER' });
        } else {
            store.dispatch({ type: 'NEW_ROUND'});
        }

    } else if (action.type == 'GAME_OVER') {
        next(action);

    } else if (action.type == 'SUBMIT_SCORE') {
        const state = store.getState();

        store.dispatch({ type: 'POST_GAME', data: {
            username: action.username,
            score: state.game.score,
            roundsWin: state.game.roundsWon,
            roundsLose: state.game.roundsLost
        }});
    
    } else if (action.type == 'POST_GAME') {
        next(action);
        $(`#${config.modals.scoreSubmit.modalName} .modal-footer button`).attr("disabled","disabled");
        
        fetchData('games/post', { method: 'POST', data: action.data }, (data) => {
            if(data.success == 1) {
                store.dispatch({ type: 'POST_SUCCESS' });
            } else {
                store.dispatch({ type: 'POST_FAILURE' });
            }
        })

    } else if (action.type == 'POST_SUCCESS' || action.type == 'POST_FAILURE') {
        next(action);
        //Update UI of Modal with Response
        const $modal = $(`#${config.modals.scoreSubmit.modalName}`);
        const $modalButton = $(`#${config.modals.scoreSubmit.modalName} .modal-footer button`);

        switch(action.type) {
            case 'POST_SUCCESS':
                $modalButton.addClass('btn-success');
                $modalButton.text('Success!');

                setTimeout(() => {
                        $modal.modal("hide");
                        $modalButton.removeAttr("disabled");
                }, config.modals.scoreSubmit.closeDelay + 1500);

                break;

            case 'POST_FAILURE':
                $modalButton.addClass('btn-danger');
                $modalButton.text('Something Went Wrong! Please try again');

                setTimeout(() => {
                    $modal.modal("hide");
                    $modalButton.removeAttr("disabled");
                }, config.modals.scoreSubmit.closeDelay);

                break;
        }
    } else if (action.type == 'RESET_GAME') {
        store.dispatch({ type: 'RESET_PREVIEW_QUEUE' });
        next(action);
    } else {
        next(action);
        
    }
};

export default mwlogic;