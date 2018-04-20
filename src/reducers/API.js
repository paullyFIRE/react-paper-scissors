const api = (state = {}, action) => {
  switch (action.type) {
    case 'DATA_RECEIVED':
      let data = {};
      data[action.name] = action.data;
      return Object.assign({}, state, data);

    case 'POST_GAME':
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

    case 'POST_SUCCESS':
      const requests = state.postRequests;
      requests[0].status = 'COMPLETED';
      return Object.assign({}, state, { postRequests: requests });

    default:
      return state;
  }
};

export default api;
