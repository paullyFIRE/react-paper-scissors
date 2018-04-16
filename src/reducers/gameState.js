const GameState = (state = {}, action) => {
    switch(action.type) {
        case 'ADD_SCORE':
            return Object.assign({}, state, { score: state.score + action.score })
        case 'DOUBLE_SCORE':
            return Object.assign({}, state, { score: state.score * 2})
        case 'STARTED':
            return Object.assign({}, state, { started: true });
        default:
            return state;
    }
};

export default GameState;