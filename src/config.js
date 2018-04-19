const config = {
    title: "Rock Paper Scissors",
    roundLimit: 3,
    lossLimit: 3,
    modals: {
        games: {
            heading: "Recent Games",
            modalName: "games-modal",
            apiPath: 'games/all',
            storeName: 'games'
        },
        leaderboard: {
            heading: "Leaderboard",
            modalName: "leader-modal",
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
            closeDelay: 1500
        },
        multiplier: {
            heading: 'DOUBLE UP!',
            modalName: 'multiplier-modal'
        },
        duelResult: {
            heading: 'Duel Result',
            modalName: 'result-modal',
            initialDelay: 750,
            closeDelay: 1250
        }
    }
}

export default config;