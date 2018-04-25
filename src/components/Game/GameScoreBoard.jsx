import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ScoreboardRoundLabel from '../Labels/ScoreboardRoundLabel';
import config from '../../config';
import styles from './GameScoreBoard.scss';

class GameScoreBoard extends React.Component {
  render(props) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.roundWrapper}>
          <ScoreboardRoundLabel label="Wins" firstValue={this.props.gameState.pointsPlayer} secondValue={this.props.gameState.roundLimit} />
          <ScoreboardRoundLabel label="Draws" firstValue={this.props.gameState.pointsDraw} />
          <ScoreboardRoundLabel label="Losses" firstValue={this.props.gameState.pointsCPU} secondValue={this.props.gameState.roundLimit} />
        </div>

        <div className={styles.scoreWrapper}>
          <label>
            Score: <span>{this.props.gameState.score}</span>
          </label>
        </div>

        <div className={styles.subScoreWrapper}>
          <ScoreboardRoundLabel label="Rounds Won" firstValue={this.props.gameState.roundsWon} />
          <ScoreboardRoundLabel label="Multipliers Won" firstValue={this.props.gameState.multipliers} />
          <ScoreboardRoundLabel
            label="Rounds Lost"
            firstValue={this.props.gameState.roundsLost}
            secondValue={this.props.gameState.lossLimit}
          />
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
      lossLimit: config.lossLimit,
      pointsCPU: state.game.rounds[0].pointsCPU,
      pointsDraw: state.game.rounds[0].pointsDraw,
      pointsPlayer: state.game.rounds[0].pointsPlayer,
      roundLimit: config.roundLimit
    }
  };
};

export default connect(mapState)(GameScoreBoard);
