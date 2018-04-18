const duelResultQueue = (state = {}, action) => {
    switch(action.type) {
        case 'ADD_ROUND_PREVIEW':
        case 'REMOVE_ROUND_PREVIEW':
        default:
            return state;
    }
};

export default duelResultQueue;