import React from 'react';
import PropTypes from 'prop-types';
import { Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import LeaderboardModal from '/components/Modals/LeaderboardModal';
import GamesModal from '/components/Modals/GamesModal';
import RulesModal from '/components/Modals/RulesModal';
import ScoreSubmitModal from '/components/Modals/ScoreSubmitModal';
import DuelResultModal from '/components/Modals/DuelResultModal';
import ConfirmModal from '/components/Modals/ConfirmModal';

import GameRegion from '/pages/GameRegion';
import About from '/pages/About';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={GameRegion} />
          <Route exact path="/about" component={About} />

          <LeaderboardModal />
          <GamesModal />
          <RulesModal />
          <ScoreSubmitModal />
          <DuelResultModal />
          <ConfirmModal />
        </div>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  fetchData: PropTypes.func
};

const mapDispatch = dispatch => {
  return {
    fetchData() {
      dispatch({ type: 'FETCH_DATA' });
    }
  };
};

export default connect(null, mapDispatch)(App);
