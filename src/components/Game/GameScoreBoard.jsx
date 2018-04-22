import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import config from '../../config';
import styles from './GameScoreBoard.scss';

class GameScoreBoard extends React.Component {
  render(props) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.scoreWrapper}>
          <label>
            Score: <span>{this.props.gameState.score}</span>
          </label>
        </div>
        <div className={styles.subScoreWrapper}>
          <label>
            Rounds Won: <span>{this.props.gameState.roundsWon}</span>
          </label>
          <label>
            Rounds Lost: <span>{this.props.gameState.roundsLost}</span> / {this.props.gameState.lossLimit}
          </label>
          <label>
            Multipliers Won: <span>{this.props.gameState.multipliers}</span>
          </label>
        </div>
      </div>
    );
  }
}

GameScoreBoard.propTypes = {
  gameState: PropTypes.object,
  style: PropTypes.object
};

const mapState = state => {
  return {
    gameState: {
      score: state.game.score,
      roundsWon: state.game.roundsWon,
      roundsLost: state.game.roundsLost,
      multipliers: state.game.multipliers,
      lossLimit: config.lossLimit
    }
  };
};

export default connect(mapState)(GameScoreBoard);
