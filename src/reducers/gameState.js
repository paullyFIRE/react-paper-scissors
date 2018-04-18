const GameState = (state = {}, action) => {
    switch(action.type) {
        //GAME SCOREBOARD/STATE
        case 'MULTIPLIER_WON':
            return Object.assign({}, state, { 
                multipliers: state.multipliers + 1,
                score: state.score * 2
            });

        case 'ROUND_WON':
            return Object.assign({}, state, {
                roundsWon: state.roundsWon + 1
            });
            
        case 'ROUND_LOST':
            return Object.assign({}, state, {
                roundsLost: state.roundsLost + 1
            });

        case 'GAME_OVER':
            return Object.assign({}, state, {
                roundsLost: state.roundsLost + 1
            });

        //GAME ROUND CALLS
        case 'POINT_WON':
            let rounds = state.rounds;
            rounds[0].pointsPlayer++;

            return Object.assign({}, state, {
                score: state.score + 1000,
                rounds: rounds
            });

        case 'POINT_DRAW':
            rounds = state.rounds;
            rounds[0].pointsDraw++;

            return Object.assign({}, state, {
                score: state.score + 250,
                rounds: rounds
            });

        case 'POINT_LOST':
            rounds = state.rounds;
            rounds[0].pointsCPU++;

            return Object.assign({}, state, {
                rounds: rounds
            });

        case 'NEW_ROUND':
            return Object.assign({}, state, {
                rounds: [{
                    id: state.rounds[0].id + 1,
                    pointsPlayer: 0,
                    pointsCPU: 0,
                    pointsDraw: 0
                }, ...state.rounds]
            });

        // Game Control
        case 'RESET_GAME':
            return Object.assign({}, {
                started: false,
                score: 0,
                roundsWon: 0,
                roundsLost: 0,
                multipliers: 0,
                rounds: [{
                    id: 1,
                    pointsPlayer: 0,
                    pointsCPU: 0,
                    pointsDraw: 0
                }]
            });

        case 'STARTED':
            return Object.assign({}, state, { started: true });
            
        default:
            return state;
    }
};

export default GameState;