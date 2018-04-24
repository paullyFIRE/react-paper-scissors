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
      closeDelay: 2000
    },
    duelResult: {
      heading: 'Duel Result',
      modalName: 'result-modal',
      initialDelay: 750,
      closeDelay: 400
    },
    standardDuel: {
      heading: 'Duel Result',
      modalName: 'standard-duel-modal',
      initialDelay: 750,
      closeDelay: 1000,
      scoreTickerTotalTime: 1250
    },
    multiplierModal: {
      heading: 'Duel Result',
      modalName: 'multiplier-duel-modal',
      initialDelay: 750,
      closeDelay: 1500,
      scoreTickerTotalTime: 2000
    },
    confirmModal: {
      heading: 'Confirmation',
      modalName: 'confirm-modal'
    }
  }
};

export default config;
