const duelResultQueue = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_DUEL':
      return Object.assign({}, state, {
        queue: [
          {
            id: state.queue[0] ? state.queue[0].id + 1 : 1,
            duelType: action.data.duelType,
            player: action.data.player,
            computer: action.data.computer,
            status: 'PENDING',
            result: action.data.result
          },
          ...state.queue
        ]
      });

    case 'DUEL_ANIMATION_COMPLETED':
      const duels = state.queue;
      duels[0].status = 'COMPLETED';
      return Object.assign({}, state, { queue: duels });

    case 'RESET_PREVIEW_QUEUE':
      return Object.assign(
        {},
        {
          queue: []
        }
      );

    default:
      return state;
  }
};

export default duelResultQueue;
