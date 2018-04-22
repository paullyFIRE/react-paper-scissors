import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import Layout from './Layout';
import GameScoreBoard from '../components/Game/GameScoreBoard';
import GameHeaderControls from '../components/Game/GameHeaderControls';
import GameControls from '../components/Game/GameControls';
import GameRoundScores from '../components/Game/GameRoundScores';
import config from '../config';
import styles from './GameRegion.scss';

class GameRegion extends React.Component {
  render() {
    return (
      <Layout>
        <div className={styles.wrapper}>
          <GameHeaderControls />

          <div className={styles.statusHeading}>
            <h2>{this.props.gameState.statusText}</h2>
          </div>

          <GameScoreBoard />

          <GameRoundScores />

          <GameControls eventHandler={this.gameEventHandler} />

          <div id="round-history" />
        </div>
      </Layout>
    );
  }
}

GameRegion.propTypes = {
  gameState: PropTypes.object
};

const mapState = state => {
  return {
    gameState: {
      statusText: state.game.statusText,
      currentRound: state.game.rounds[0],
      roundLimit: config.roundLimit
    }
  };
};

export default connect(mapState)(GameRegion);
