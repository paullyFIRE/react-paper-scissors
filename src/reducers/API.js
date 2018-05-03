const api = (state = {}, action) => {
  if (action.type == 'DATA_RECEIVED') {
    let data = Object.create(null);
    data[action.name] = action.data;

    return Object.assign({}, state, data);
  } else if (action.type == 'POST_GAME') {
    return Object.assign({}, state, {
      postRequests: [
        {
          id: state.postRequests[0] ? state.postRequests[0].id + 1 : 1,
          username: action.data.username,
          score: action.data.score,
          roundsWin: action.data.roundsWin,
          roundsLose: action.data.roundsLose,
          status: 'PENDING'
        },
        ...state.postRequests
      ]
    });
  } else if (action.type == 'POST_SUCCESS') {
    const requests = state.postRequests;
    requests[0].status = 'COMPLETED';

    return Object.assign({}, state, { postRequests: requests });
  } else if (action.type == 'POST_FAILURE') {
    let requests = state.postRequests;
    requests[0].status = 'FAILED';

    return Object.assign({}, state, { postRequests: requests });
  } else {
    return state;
  }
};

export default api;
