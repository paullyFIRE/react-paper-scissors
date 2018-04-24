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
          Player Score: {this.props.pointsPlayer} / {this.props.roundLimit}
        </label>
        <label>Draws: {this.props.pointsDraw}</label>
        <label>
          Computer Score: {this.props.pointsCPU} / {this.props.roundLimit}
        </label>
      </div>
    );
  }
}

GameRoundScores.propTypes = {
  pointsCPU: PropTypes.number,
  pointsDraw: PropTypes.number,
  pointsPlayer: PropTypes.number,
  roundLimit: PropTypes.number
};

const mapState = state => {
  return {
    pointsCPU: state.game.rounds[0].pointsCPU,
    pointsDraw: state.game.rounds[0].pointsDraw,
    pointsPlayer: state.game.rounds[0].pointsPlayer,
    roundLimit: config.roundLimit
  };
};

export default connect(mapState)(GameRoundScores);
