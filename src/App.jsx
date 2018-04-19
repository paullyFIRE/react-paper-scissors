import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import LeaderboardModal from '/components/Modals/LeaderboardModal';
import GamesModal from '/components/Modals/GamesModal';
import RulesModal from '/components/Modals/RulesModal';
import ScoreSubmitModal from '/components/Modals/ScoreSubmitModal';
import DuelResultModal from '/components/Modals/DuelResultModal';
import MultiplierModal from '/components/Modals/MultiplierModal';
import GameArea from '/pages/Game';
import About from '/pages/About';

class App extends React.Component {

    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path='/' component={GameArea} />
                    <Route exact path='/about' component={About} />
        
                    <LeaderboardModal />
                    <GamesModal />
                    <RulesModal />
                    <ScoreSubmitModal />
                    <DuelResultModal />
                    <MultiplierModal />
                </div>
            </BrowserRouter>
        );
    };
};

const mapDispatch = (dispatch) => {
    return {
        fetchData() { dispatch({ type: 'FETCH_DATA' }) },
    };
};

export default connect(null, mapDispatch)(App);