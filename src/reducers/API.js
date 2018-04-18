const api = (state = {}, action) => {
    switch(action.type) {
        case 'DATA_RECEIVED':
            let data = {};
            data[action.name] = action.data;
            return Object.assign({}, state, data);
        
        case 'POST_GAME':
        console.log("POST RECEIVED RECIEVED");
        console.log(action);
            return state;
        default:
            return state;
    }
};

export default api;