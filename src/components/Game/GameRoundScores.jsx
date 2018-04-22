import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import config from '../../config';
import styles from './GameRoundScores.scss';

class GameRoundScores extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <label>
          Player Score: {this.props.currentRound.pointsPlayer} / {this.props.roundLimit}
        </label>
        <label>Draws: {this.props.currentRound.pointsDraw}</label>
        <label>
          Computer Score: {this.props.currentRound.pointsCPU} / {this.props.roundLimit}
        </label>
      </div>
    );
  }
}

GameRoundScores.propTypes = {
  currentRound: PropTypes.object,
  roundLimit: PropTypes.number
};

const mapState = state => {
  return {
    currentRound: state.game.rounds[0],
    roundLimit: config.roundLimit
  };
};

export default connect(mapState)(GameRoundScores);
