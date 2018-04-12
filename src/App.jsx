import React from 'react';
import Header from './components/Header/Header';
import API from './controllers/api';
import GamesModal from '/components/Modals/GamesModal';
import LeaderboardModal from '/components/Modals/LeaderboardModal';

class App extends React.Component {
    constructor() {
        super()

        this.state = {
            title: "Rock Paper Scissors",
            modals: {
                games: {
                    heading: "Recent Games",
                    modalName: "gamesModal",
                    data: {
                        headers: [],
                        dataRows: []
                    }
                },
                leaderboard: {
                    heading: "Leaderboard",
                    modalName: "leaderModal",
                    data: {
                        headers: [],
                        dataRows: []
                    }
                }
            }
        }
    };

    componentDidMount() {
        // Fetch Leader and Games Data here
        // this.setState({ modals: { games: { data: API.getLeaderboard()}}});
    }

    render() {
        return (
            <div>
                <Header modalLinks={[this.state.modals.games.modalName, this.state.modals.leaderboard.modalName]} 
                    title={this.state.title} 
                />

                <LeaderboardModal {...this.state.modals.games} />
                <GamesModal {...this.state.modals.leaderboard} />
            </div>
        );
    };
};

export default App;