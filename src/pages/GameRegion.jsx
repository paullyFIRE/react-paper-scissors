import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import Layout from './Layout';
import GameScoreBoard from '../components/Game/GameScoreBoard';
import GameHeaderControls from '../components/Game/GameHeaderControls';
import GameControls from '../components/Game/GameControls';
import config from '../config';
import styles from './GameRegion.scss';

class GameRegion extends React.Component {
  render() {
    return (
      <Layout>
        <div className={styles.wrapper}>
          <div>
            <GameHeaderControls />
          </div>

          <div className={styles.mainScoreWrapper}>
            <GameScoreBoard />
          </div>

          <div>
            <GameControls eventHandler={this.gameEventHandler} />
          </div>
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
