const api = (state = {}, action) => {
    switch(action.type) {
        case 'DATA_RECEIVED':
            let data = {};
            data[action.name] = action.data;
            return Object.assign({}, state, data);
            
        default:
            return state;
    }
};

export default api;