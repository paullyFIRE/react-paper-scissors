const config = {
  title: 'Rock Paper Scissors',
  roundLimit: 3,
  lossLimit: 3,
  modals: {
    games: {
      heading: 'Recent Games',
      modalName: 'games-modal',
      apiPath: 'games/all',
      storeName: 'games'
    },
    leaderboard: {
      heading: 'Leaderboard',
      modalName: 'leader-modal',
      apiPath: 'games/leaderboard',
      storeName: 'leaderboard'
    },
    rules: {
      heading: 'How To Play',
      modalName: 'rules-modal'
    },
    scoreSubmit: {
      heading: 'Submit Your Score!',
      modalName: 'submit-modal',
      closeDelay: 1000
    },
    duelResult: {
      heading: 'Duel Result',
      modalName: 'result-modal',
      initialDelay: 750,
      closeDelay: 1250
    },
    confirmModal: {
      heading: 'Confirmation',
      modalName: 'confirm-modal'
    }
  }
};

export default config;
