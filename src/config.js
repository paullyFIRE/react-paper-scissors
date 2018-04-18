const config = {
    title: "Rock Paper Scissors",
    roundLimit: 3,
    lossLimit: 3,
    modals: {
        games: {
            heading: "Recent Games",
            modalName: "games-modal",
        },
        leaderboard: {
            heading: "Leaderboard",
            modalName: "leader-modal",
        },
        rules: {
            heading: 'How To Play',
            modalName: 'rules-modal'
        },
        scoreSubmit: {
            heading: 'Submit Your Score!',
            modalName: 'submit-modal'
        },
        multiplier: {
            heading: 'DOUBLE UP!',
            modalName: 'multiplier-modal'
        },
        roundResult: {
            heading: 'Round Result',
            modalName: 'result-modal'
        }
    }
}

export default config;