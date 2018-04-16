import React from 'react';
import GamesModal from '/components/Modals/GamesModal';
import LeaderboardModal from '/components/Modals/LeaderboardModal';
import RulesModal from '/components/Modals/RulesModal';
import GameArea from '/pages/Game';
import About from '/pages/About';
import { Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends React.Component {

    componentDidMount() {
        // Fetch Leader and Games Data here
        this.fetchData('games/leaderboard', 'leaderboard');
        this.fetchData('games/all', 'games');
    }

    fetchData(path, propertyName) {
        let domain = process.env.NODE_ENV !== 'production' ? "http://159.65.21.186/" : "";

        fetch(domain + path)
        .then(response => response.json())
        .then(data => {
            this.props.dataReceived(propertyName, data);
        })
        .catch(err => console.log(err));
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path='/' component={() => <GameArea />} />
                    <Route exact path='/about' component={() => <About />} />
        
                    <LeaderboardModal />
                    <GamesModal />
                    <RulesModal />
                </div>
            </BrowserRouter>
        );
    };
};

const mapState = (state) => {
    return {
        data: state.api
    };
};

const mapDispatch = (dispatch) => {
    return {
        dataReceived(name, data) { 
            dispatch({ type: 'DATA_RECEIVED', name, data }) }
    };
};

export default connect(mapState, mapDispatch)(App);