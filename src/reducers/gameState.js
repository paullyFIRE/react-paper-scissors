const GameState = (state = {}, action) => {
    switch(action.type) {
        case 'ADD_SCORE':
            return Object.assign({}, state, { score: state.score + action.score })
        case 'DOUBLE_SCORE':
            return Object.assign({}, state, { score: state.score * 2})
        case 'STARTED':
            return Object.assign({}, state, { started: true });
        case 'DATA_RECEIVED':
            let data = {};
            data[action.data.name] = action.data.data;
            return Object.assign({}, state, {}, { data: data});
        default:
            return state;
    }
};

export default GameState;