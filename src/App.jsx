import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import GamesModal from '/components/Modals/GamesModal';
import LeaderboardModal from '/components/Modals/LeaderboardModal';
import GameArea from '/components/Game/GameArea';

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
    }

    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
                <div style={{ flex: '1 0 auto' }}>
                    <Header modals={[this.state.modals.games, this.state.modals.leaderboard]} 
                        title={this.state.title} 
                    />
                    <LeaderboardModal {...this.state.modals.games} />
                    <GamesModal {...this.state.modals.leaderboard} />

                    <GameArea />
                </div>
                <Footer />
            </div>
        );
    };
};

export default App;