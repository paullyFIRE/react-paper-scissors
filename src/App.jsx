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
                },
                leaderboard: {
                    heading: "Leaderboard",
                    modalName: "leaderModal",
                },
            },
            data: {}
        }
    };

    componentDidMount() {
        // Fetch Leader and Games Data here
        this.API('games/leaderboard', 'leaderboard');
        this.API('games/all', 'games');
    }

    API(path, propertyName) {
        let domain = process.env.NODE_ENV !== 'production' ? "http://159.65.21.186/" : "";

        console.log(`req: ${domain + path}`);

        fetch(domain + path)
        .then(response => response.json())
        .then(data => {
            let newState = jQuery.extend({}, this.state);
            newState.data[propertyName] = data;
            this.setState(newState);
        })
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
                <div style={{ flex: '1 0 auto' }}>
                    <Header modals={[this.state.modals.games, this.state.modals.leaderboard]} 
                        title={this.state.title} 
                    />

                    <LeaderboardModal data={this.state.data.leaderboard}    {...this.state.modals.leaderboard} />
                    <GamesModal data={this.state.data.games} {...this.state.modals.games} />

                    <GameArea />
                </div>
                <Footer />
            </div>
        );
    };
};

export default App;